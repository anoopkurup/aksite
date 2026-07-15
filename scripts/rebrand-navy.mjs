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
 * Runs automatically at the end of `npm run images`; also available standalone:
 *   node scripts/rebrand-navy.mjs --dry            # report drift, write nothing
 *   node scripts/rebrand-navy.mjs                  # fix every drifted image
 *   node scripts/rebrand-navy.mjs --only scorecard # fix matching paths
 */

import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join } from "path";

const BRAND = { r: 0x1f, g: 0x3d, b: 0x73 }; // navy-900 #1F3D73
const TOL = 12; // how far off the navy→white line a pixel may sit
const MIN_COVERAGE = 0.3; // below this, leave it (pale fringe + light greys)
const RAMP = 0.15; // smooth the cut-in so there's no seam
const DRIFT_LIMIT = 20; // RGB distance from BRAND we accept as "already on-brand"

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
 * PHOTOGRAPH it reads dark tones as navy and recolours them — it turned the black
 * laptop keyboard in hero/homepage-heroimage.webp blue. Photos are not this
 * script's business; generated art is.
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
    if (!N) { skipped++; continue; }
    const drift = dist(N, BRAND);
    if (drift <= DRIFT_LIMIT) { clean++; continue; }

    if (dry) {
      console.log(`  drift ${String(Math.round(drift)).padStart(3)}  ${hex(N)} -> #1f3d73  ${f}`);
      fixed++;
      continue;
    }
    const touched = recolour(data, info.channels, N);
    // Lossless: next/image re-encodes for delivery, so the file on disk is a source
    // asset — no reason to bake generational loss into it. Still ~4x smaller than
    // what the generator wrote.
    await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
      .webp({ lossless: true })
      .toFile(f + ".tmp");
    renameSync(f + ".tmp", f);
    console.log(`  ${hex(N)} -> #1f3d73  (${touched} px)  ${f}`);
    fixed++;
  }

  console.log(
    `\n${dry ? "would fix" : "fixed"}: ${fixed}   already on-brand: ${clean}   no navy found: ${skipped}   scanned: ${targets.length}`,
  );
  return { fixed, clean, skipped, scanned: targets.length };
}

// CLI entry — only when run directly, so generate-images.mjs can import the fn.
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const onlyIdx = args.indexOf("--only");
  await rebrandNavy({
    only: onlyIdx !== -1 ? args[onlyIdx + 1] : null,
    dry: args.includes("--dry"),
  });
}
