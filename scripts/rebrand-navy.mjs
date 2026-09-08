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
const GROUND_MIN = 235; // a pixel this pale on every channel is a candidate ground pixel
const GROUND_TOL = 5;   // how far from the ground colour a pixel may sit and still be ground

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
 * The ground colour the model actually painted: the dominant pale pixel value.
 *
 * Per image, not a fixed threshold. The grounds are not all flat #FEFEFC; some
 * are a mottled warm off-white whose dominant value sits at #FEFDF9 with a
 * scatter of neighbours around it. A fixed floor splits a ground like that,
 * whitening the pale half and leaving the rest, which puts white blotches on a
 * cream field. Finding the ground first and clearing everything around it does
 * not have that failure.
 *
 * Returns null when the image has no meaningful pale ground to speak of.
 */
function findGround(data, channels) {
  const counts = new Map();
  let pale = 0;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r < GROUND_MIN || g < GROUND_MIN || b < GROUND_MIN) continue;
    const key = (r << 16) | (g << 8) | b;
    counts.set(key, (counts.get(key) || 0) + 1);
    pale++;
  }
  if (pale < 1000) return null;
  let best = -1, bestN = 0;
  for (const [key, n] of counts) if (n > bestN) { best = key; bestN = n; }
  return { r: (best >> 16) & 255, g: (best >> 8) & 255, b: best & 255 };
}

/**
 * Flatten the ground to pure white.
 *
 * Second drift the model has: BRAND_PREAMBLE asks for "pure flat white #FFFFFF,
 * edge to edge" and gpt-image-1 returns a warm off-white. Invisible in isolation
 * and obvious on the site, where the art sits on real white and the frame shows
 * up as a faint rectangle.
 *
 * A pixel is ground if it sits within GROUND_TOL of the ground colour, or is at
 * least as bright as the ground on every channel (already closer to white). The
 * orange glow fails both tests by a wide margin on its blue channel, and so does
 * every anti-alias fringe with real coverage.
 */
function whiten(data, channels, G) {
  let touched = 0;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (r === 255 && g === 255 && b === 255) continue;
    const near = Math.hypot(r - G.r, g - G.g, b - G.b) <= GROUND_TOL;
    const lighter = r >= G.r && g >= G.g && b >= G.b;
    if (!near && !lighter) continue;
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
    const G = findGround(data, info.channels);
    const offWhite = Boolean(G) && !(G.r === 255 && G.g === 255 && G.b === 255);
    const whitened = offWhite ? whiten(data, info.channels, G) : 0;
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
  const G = findGround(data, info.channels);
  const offWhite = Boolean(G) && !(G.r === 255 && G.g === 255 && G.b === 255);
  const whitened = offWhite ? whiten(data, info.channels, G) : 0;
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
  const pixels = (...rgb) => Uint8Array.from(rgb);
  const rep = (px, n) => Array.from({ length: n }, () => px).flat();

  // A mottled warm ground: the dominant value sits BELOW any sensible fixed
  // floor, with paler neighbours scattered through it. Both must end up white,
  // or the image gets blotches.
  const mottled = pixels(
    ...rep([254, 253, 249], 900), // the ground the model painted
    ...rep([255, 255, 253], 200), // paler mottling
    ...rep([255, 240, 225], 50),  // orange glow
    ...rep([31, 61, 115], 50),    // navy line work
  );
  const G = findGround(mottled, 3);
  if (!G || G.r !== 254 || G.g !== 253 || G.b !== 249) throw new Error(`ground misread: ${JSON.stringify(G)}`);
  const touched = whiten(mottled, 3, G);
  if (touched !== 1100) throw new Error(`expected 1100 ground px whitened, got ${touched}`);
  const at = (i) => [mottled[i * 3], mottled[i * 3 + 1], mottled[i * 3 + 2]].join(",");
  if (at(0) !== "255,255,255" || at(1000) !== "255,255,255") throw new Error("ground not flattened");
  if (at(1100) !== "255,240,225") throw new Error("orange glow was flattened");
  if (at(1150) !== "31,61,115") throw new Error("navy line work was flattened");

  // Already clean: the pass must be a no-op, or every run rewrites every file.
  const clean = pixels(...rep([255, 255, 255], 1000), ...rep([31, 61, 115], 50));
  const G2 = findGround(clean, 3);
  if (!G2 || G2.r !== 255 || G2.g !== 255 || G2.b !== 255) throw new Error("clean ground misread");

  console.log("selftest: ok — mottled ground flattened, art untouched, white ground left alone");
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
