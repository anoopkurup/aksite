/**
 * Render an Instagram carousel from a `Social/<slug>.md` file's `--- CAROUSEL ---`
 * section. Instagram takes images, not PDFs: 1080x1350 (4:5) JPG slides, one file
 * per slide (max 10), plus a ready-to-paste caption.txt.
 *
 * Instagram-specific (vs the LinkedIn PDF):
 *   - JPG slides in `Social/instagram/<slug>/01.jpg … NN.jpg` (max 10, IG's cap).
 *   - No raw URLs on slides or in the caption — links aren't clickable on
 *     Instagram. The CTA slide and caption say "link in bio" instead.
 *   - caption.txt comes from the file's `--- INSTAGRAM ---` section (caption +
 *     hashtags), with a link-in-bio close appended.
 *   - Slide 1 embeds `Social/<slug>.cover.png` if present (social-cover.mjs).
 *
 * Slides render through the six-layout template system (instagram-templates.mjs,
 * from the Aug 2026 Claude Design handoff): slide 1 = navy cover, body slides =
 * story layout with a NN / NN counter, closing CTA = promo layout.
 *
 *   node scripts/instagram-carousel.mjs <slug|file.md>
 *   node scripts/instagram-carousel.mjs --all
 *
 * ponytail: shares the source-of-truth Social/<slug>.md files with LinkedIn; the
 * slide parsing is duplicated rather than extracted — extract a shared module if a
 * third rendered channel ever appears.
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { slideHtml } from './instagram-templates.mjs';

const DIR = join(process.cwd(), 'Social');
const OUT = join(DIR, 'instagram');
const W = 1080;
const H = 1350;

function section(md, marker) {
  const at = md.indexOf(marker);
  if (at === -1) return '';
  let body = md.slice(at + marker.length);
  const next = body.indexOf('\n--- ');
  if (next !== -1) body = body.slice(0, next);
  return body.trim();
}

function parseCarousel(md) {
  const src = section(md, '--- CAROUSEL ---');
  if (!src) throw new Error('no `--- CAROUSEL ---` section');

  const slides = src
    .split(/^### /m)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((block) => {
      const [head, ...rest] = block.split('\n');
      return { heading: (head ?? '').trim(), body: rest.join(' ').replace(/\s+/g, ' ').trim() };
    });
  if (slides.length < 3) throw new Error(`only ${slides.length} slides — write at least 3`);

  // Instagram CTA: no clickable links, so point at the bio, not a URL.
  slides.push({
    heading: 'How predictable is your pipeline?',
    body: 'Tell me what is going on with your sales. I reply personally.\nLink in bio.',
  });
  if (slides.length > 10) throw new Error(`${slides.length} slides — Instagram caps carousels at 10`);
  return slides;
}

// Map a parsed heading/body slide onto the template layouts: cover, then
// story-layout body slides with a NN / NN counter, then the CTA as a promo.
function slideSpec(s, i, total) {
  if (i === 0) return { type: 'cover', headline: s.heading };
  if (i === total - 1) {
    const [description, cta] = s.body.split('\n');
    return { type: 'promo', name: s.heading, description, cta };
  }
  return {
    type: 'story',
    opener: s.heading,
    followUp: s.body,
    footerRight: `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
  };
}

// Caption = the file's `--- INSTAGRAM ---` section (caption + hashtags), else the
// LinkedIn post body, with a link-in-bio close.
function caption(md) {
  const ig = section(md, '--- INSTAGRAM ---');
  const base = ig || section(md, '--- POST ---');
  // Only add the close if the caption doesn't already point at the bio.
  const close = /link in bio/i.test(base) ? '' : '\n\nFull article: link in bio.';
  return `${base}${close}\n`;
}

async function render(browser, slug) {
  const md = readFileSync(join(DIR, `${slug}.md`), 'utf8');
  const slides = parseCarousel(md);
  const dir = join(OUT, slug);
  mkdirSync(dir, { recursive: true });

  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  for (let i = 0; i < slides.length; i++) {
    await page.setContent(slideHtml(slideSpec(slides[i], i, slides.length)), { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const png = await page.screenshot({ type: 'png' });
    await sharp(png).resize(W, H).jpeg({ quality: 90 }).toFile(join(dir, `${String(i + 1).padStart(2, '0')}.jpg`));
  }
  await page.close();

  writeFileSync(join(dir, 'caption.txt'), caption(md));
  console.log(`✓ ${slug} — ${slides.length} slides + caption.txt`);
}

async function main() {
  const args = process.argv.slice(2);
  let slugs;
  if (args.includes('--all')) {
    slugs = readdirSync(DIR)
      .filter((f) => f.endsWith('.md') && f !== 'README.md')
      .filter((f) => readFileSync(join(DIR, f), 'utf8').includes('--- CAROUSEL ---'))
      .map((f) => basename(f, '.md'));
  } else if (args[0]) {
    slugs = [basename(args[0], '.md')];
  } else {
    throw new Error('pass a post slug/file, or --all');
  }

  const browser = await chromium.launch();
  try {
    for (const slug of slugs) await render(browser, slug);
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error('✗', e.message);
  process.exit(1);
});
