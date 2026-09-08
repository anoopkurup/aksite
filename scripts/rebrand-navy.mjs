/**
 * Pull generated illustrations back onto the brand navy.
 *
 * Why this exists: gpt-image-1 does not honour hex codes. image-manifest.mjs asks
 * for navy #1F3D73 on every job, and the model reliably returns a near-black
 * midnight blue instead (#001630–#0E2138 across the library) — the exact ink the
 * design system forbids. Re-prompting doesn't fix it; this does, deterministically.
 *
 * Method: the art is flat vector over white, so every navy pixel is the source
 * navy composited on white at some coverage `a`. Recover `a` from the red channel,
 * confirm the pixel really is on the navy→white line (green and blue must match
 * the prediction), then recomposite the SAME `a` over white using brand navy.
 * Anti-aliasing is preserved because coverage is preserved.
 *
 * Everything else is left alone: orange and grey fail the line test, and pixels
 * below MIN_COVERAGE (the palest anti-alias fringe and the light greys, which sit
 * near white) are skipped so the greys stay neutral.
 *
 * It also snaps the near-white ground to pure #FFFFFF; see whiten() below.
 *
 * Runs automatically at the end of `npm run images`; also available standalone:
 *   node scripts/rebrand-navy.mjs --dry            # report drift, write nothing
 *   node scripts/rebrand-navy.mjs                  # fix every drifted image
 *   node scripts/rebrand-navy.mjs --only prc-flow # fix matching paths
 */

import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join } from "path";

const BRAND = { r: 0x1f, g: 0x3d, b: 0x73 }; // navy-900 #1F3D73
const TOL = 12; // how far off the navy→white line a pixel may sit
const MIN_COVERAGE = 0.3; // below this, leave it (pale fringe + light greys)
const RAMP = 0.15; // smooth the cut-in so there's no seam
const DRIFT_LIMIT = 20; // RGB distance from BRAND we accept as "already on-brand"
const WHITE_FLOOR = 250; // ground: anything this pale on all three channels is meant to be white

const dist = (a, b) => Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b);

function hsl(r, g, b) {
  const R = r / 255, G = g / 255, B = b / 255;
  const mx = Math.max(R, G, B), mn = Math.min(R, G, B);
  const l = (mx + mn) / 2, d = mx - mn;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let h = 0;
  if (d) {
    if (mx === R) h = 60 * (((G - B) / d) % 6);
    else if (mx === G) h = 60 * ((B - R) / d + 2);
    else h = 60 * ((R - G) / d + 4);
  }
  return [h < 0 ? h + 360 : h, s, l];
}

/**
 * The navy the model actually used, as a per-channel MEDIAN of every navy-ish
 * pixel. Not the mode: the illustrations aren't perfectly flat, so the single most
 * common exact value can be a rare artifact (home-funnel's most common navy pixel
 * was #00000f — 83 stray near-black pixels — while the real line work sat around
 * #103048). A median ignores those outliers.
 */
function findSourceNavy(data, channels) {
  const R = [], G = [], B = [];
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const [h, s, l] = hsl(r, g, b);
    if (s > 0.35 && l < 0.45 && h >= 190 && h <= 245) {
      R.push(r); G.push(g); B.push(b);
    }
  }
  if (R.length < 200) return null; // not a navy illustration
  const mid = (arr) => { arr.sort((a, b) => a - b); return arr[arr.length >> 1]; };
  return { r: mid(R), g: mid(G), b: mid(B) };
}

/**
 * Snap the near-white ground to pure white.
 *
 * Second drift the model has: BRAND_PREAMBLE asks for "pure flat white #FFFFFF,
 * edge to edge" and gpt-image-1 returns a warm off-white (#FEFEFC is the usual
 * one). It is invisible in isolation and obvious on the site, where the art sits
 * on real white and the frame shows up as a faint rectangle.
 *
 * Only pixels already pale on all three channels move, so the orange glow (whose
 * blue channel is far below the floor) and every anti-alias fringe with real
 * coverage are untouched.
 */
/**
 * Is the ground actually off-white? Decided on the DOMINANT pale colour, not a
 * pixel count: q82 leaves ±1 noise scattered through any flat area, so counting
 * near-white pixels never converges and every run would rewrite every file. The
 * mode does converge, because after one pass the ground really is #FFFFFF.
 */
function groundIsOffWhite(data, channels) {
  const counts = new Map();
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r < WHITE_FLOOR || g < WHITE_FLOOR || b < WHITE_FLOOR) continue;
    const key = (r << 16) | (g << 8) | b;
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  let best = 0, bestN = 0;
  for (const [key, n] of counts) if (n > bestN) { best = key; bestN = n; }
  return bestN > 0 && best !== 0xffffff;
}

function whiten(data, channels) {
  let touched = 0;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r < WHITE_FLOOR || g < WHITE_FLOOR || b < WHITE_FLOOR) continue;
    if (r === 255 && g === 255 && b === 255) continue;
    data[i] = data[i + 1] = data[i + 2] = 255;
    touched++;
  }
  return touched;
}

function recolour(data, channels, N) {
  const range = 255 - N.r;
  let touched = 0;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const a = (255 - r) / range;
    if (a < MIN_COVERAGE || a > 1.02) continue;
    // Is this pixel really source-navy over white at coverage a?
    const predG = a * N.g + (1 - a) * 255;
    const predB = a * N.b + (1 - a) * 255;
    if (Math.abs(g - predG) > TOL || Math.abs(b - predB) > TOL) continue;
    // Ease in over RAMP so the cut-off leaves no visible seam.
    const t = Math.min(1, (a - MIN_COVERAGE) / RAMP);
    const w = t * t * (3 - 2 * t);
    const mix = (chan, brand) => {
      const next = a * brand + (1 - a) * 255;
      return Math.round(chan + (next - chan) * w);
    };
    data[i] = mix(r, BRAND.r);
    data[i + 1] = mix(g, BRAND.g);
    data[i + 2] = mix(b, BRAND.b);
    touched++;
  }
  return touched;
}

const hex = (c) => "#" + [c.r, c.g, c.b].map((v) => v.toString(16).padStart(2, "0")).join("");

/**
 * ONLY the two directories generate-images.mjs writes to. This must never walk
 * public/images wholesale: the method assumes flat vector art over white, so on a
 * PHOTOGRAPH it reads dark tones as navy and recolours them — pointed at the whole
 * tree it once turned a black laptop keyboard in a stock photo blue. Photos
 * (about/, and any future hero/) are not this script's business; generated art is.
 * Don't widen this list without checking the target dir holds flat art, not photos.
 */
const GENERATED_DIRS = ["public/images/pages", "public/images/blog"];

/** Recolour every drifted generated illustration. Returns a summary. */
export async function rebrandNavy({ only = null, dry = false } = {}) {
  const files = [];
  const walk = (d) => {
    let entries;
    try { entries = readdirSync(d); } catch { return; }
    for (const f of entries) {
      const p = join(d, f);
      if (statSync(p).isDirectory()) walk(p);
      else if (p.endsWith(".webp")) files.push(p);
    }
  };
  GENERATED_DIRS.forEach(walk);

  const targets = only ? files.filter((f) => f.includes(only)) : files;
  let fixed = 0, clean = 0, skipped = 0;

  for (const f of targets) {
    const { data, info } = await sharp(f).raw().toBuffer({ resolveWithObject: true });
    const N = findSourceNavy(data, info.channels);
    const drift = N ? dist(N, BRAND) : 0;
    const needsNavy = Boolean(N) && drift > DRIFT_LIMIT;
    // Mutates the in-memory copy only; dry mode never writes it back.
    const whitened = groundIsOffWhite(data, info.channels) ? whiten(data, info.channels) : 0;
    if (!needsNavy && !whitened) { N ? clean++ : skipped++; continue; }

    if (dry) {
      const why = needsNavy ? `drift ${String(Math.round(drift)).padStart(3)}  ${hex(N)} -> #1f3d73` : `ground -> #ffffff (${whitened} px)`;
      console.log(`  ${why}  ${f}`);
      fixed++;
      continue;
    }
    const touched = needsNavy ? recolour(data, info.channels, N) : 0;
    // Lossy q82, NOT lossless. The "it's just a source asset, next/image re-encodes
    // it for delivery" reasoning only holds where next/image is actually in the path.
    // It isn't for inline post images: the generator injects those into the markdown
    // body, which renders a plain <img> straight to the file. 39 of them were being
    // served raw at ~1MB each — 36.7MB across 23 posts, and a 15s mobile LCP.
    // On flat brand line-art q82 is visually indistinguishable from lossless
    // (1376KB -> 16KB on a checked sample) and there is no generational-loss problem
    // in practice: a re-run recolours the already-compressed file once more, and the
    // art is flat vector shapes with no gradients to degrade.
    await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(f + ".tmp");
    renameSync(f + ".tmp", f);
    const parts = [];
    if (needsNavy) parts.push(`${hex(N)} -> #1f3d73 (${touched} px)`);
    if (whitened) parts.push(`ground -> #ffffff (${whitened} px)`);
    console.log(`  ${parts.join("  ")}  ${f}`);
    fixed++;
  }

  console.log(
    `\n${dry ? "would fix" : "fixed"}: ${fixed}   already on-brand: ${clean}   no navy found: ${skipped}   scanned: ${targets.length}`,
  );
  return { fixed, clean, skipped, scanned: targets.length };
}

/**
 * Recolour ONE file in place, for generated assets that live outside
 * GENERATED_DIRS (e.g. social carousel covers in Social/). Same method and same
 * caller responsibility: point it only at flat vector art on white, never a photo.
 * Preserves the file's format (.png stays png, else webp q82). Returns a summary.
 */
export async function rebrandFile(file) {
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  const N = findSourceNavy(data, info.channels);
  const needsNavy = Boolean(N) && dist(N, BRAND) > DRIFT_LIMIT;
  const whitened = groundIsOffWhite(data, info.channels) ? whiten(data, info.channels) : 0;
  if (!needsNavy && !whitened) return { fixed: false, reason: N ? "on-brand" : "no navy" };
  const touched = needsNavy ? recolour(data, info.channels, N) : 0;
  const raw = { width: info.width, height: info.height, channels: info.channels };
  const img = sharp(data, { raw });
  const out = file.toLowerCase().endsWith(".png") ? img.png() : img.webp({ quality: 82 });
  await out.toFile(file + ".tmp");
  renameSync(file + ".tmp", file);
  return { fixed: true, from: N ? hex(N) : null, touched, whitened };
}

/** node scripts/rebrand-navy.mjs --selftest — the ground pass, no files, no API. */
function selftest() {
  const px = (...rgb) => Uint8Array.from(rgb);
  const warmGround = px(254, 254, 252, 254, 254, 252, 255, 250, 240, 31, 61, 115);
  if (!groundIsOffWhite(warmGround, 3)) throw new Error("warm #FEFEFC ground not detected");
  const whitened = whiten(warmGround, 3);
  if (whitened !== 2) throw new Error(`expected 2 ground px whitened, got ${whitened}`);
  if (warmGround[6] !== 255 || warmGround[7] !== 250 || warmGround[8] !== 240)
    throw new Error("orange glow pixel was flattened");
  if (warmGround[9] !== 31) throw new Error("navy pixel was flattened");

  const clean = px(255, 255, 255, 255, 255, 255, 254, 254, 252, 31, 61, 115);
  if (groundIsOffWhite(clean, 3)) throw new Error("pure-white ground reported as drifted (would never converge)");
  console.log("selftest: ok — off-white ground detected and flattened, white ground left alone");
}

// CLI entry — only when run directly, so generate-images.mjs can import the fn.
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  if (args.includes("--selftest")) { selftest(); process.exit(0); }
  const onlyIdx = args.indexOf("--only");
  await rebrandNavy({
    only: onlyIdx !== -1 ? args[onlyIdx + 1] : null,
    dry: args.includes("--dry"),
  });
}
