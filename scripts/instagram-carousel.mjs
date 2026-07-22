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
 * Same instrument-panel brand style as linkedin-carousel.mjs (white ground, navy
 * #1F3D73 headings, one orange #F97316 accent; Newsreader / Inter / IBM Plex Mono).
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
import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const DIR = join(process.cwd(), 'Social');
const OUT = join(DIR, 'instagram');
const W = 1080;
const H = 1350;

// anoopkurup.com brand palette (tailwind.config.ts) — navy / grey / orange / white.
const NAVY = '#1F3D73';
const GREY = '#475569';
const ACCENT = '#F97316';
const GROUND = '#FFFFFF';
const GRID = 'rgba(31,61,115,0.06)';
const SITE_LABEL = 'anoopkurup.com';

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
    body: 'Free Sales Scorecard: ten questions, three minutes, an honest score.\nLink in bio.',
  });
  if (slides.length > 10) throw new Error(`${slides.length} slides — Instagram caps carousels at 10`);
  return slides;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// `|` in a heading = manual line break (same convention as the LinkedIn scripts).
const headingHtml = (h) => h.split('|').map((l) => esc(l.trim())).join('<br>');

// Optional AI cover illustration (social-cover.mjs), embedded as a data URI.
function coverArt(slug) {
  const p = join(DIR, `${slug}.cover.png`);
  return existsSync(p) ? `data:image/png;base64,${readFileSync(p).toString('base64')}` : '';
}

function slideHtml(s, i, total, coverUri) {
  const cover = i === 0;
  const cta = i === total - 1;
  const size = s.heading.length <= 30 ? 96 : s.heading.length <= 55 ? 74 : 58;
  const body = cta
    ? s.body.split('\n').map((l, j) => `<p class="${j === 0 ? 'body' : 'tag'}">${esc(l)}</p>`).join('')
    : s.body
      ? `<p class="body">${esc(s.body)}</p>`
      : '';
  const art = cover && coverUri ? `<img class="cover-art" src="${coverUri}" alt="">` : '';
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    html,body { width:${W}px; height:${H}px; }
    body {
      background-color:${GROUND};
      background-image:
        linear-gradient(${GRID} 1px, transparent 1px),
        linear-gradient(90deg, ${GRID} 1px, transparent 1px);
      background-size:54px 54px;
      font-family:'Inter','Helvetica Neue',Helvetica,Arial,sans-serif;
      -webkit-font-smoothing:antialiased;
      padding:120px 88px;
      position:relative;
    }
    .kicker { color:${GREY}; font-family:'IBM Plex Mono','Courier New',monospace; font-size:24px; font-weight:600; text-transform:uppercase; letter-spacing:4px; margin-bottom:32px; }
    h1 { color:${NAVY}; font-family:'Newsreader',Georgia,'Times New Roman',serif; font-weight:600; line-height:1.08; letter-spacing:-0.5px; max-width:904px; font-size:${size}px; }
    .rule { width:88px; height:8px; background:${ACCENT}; margin:44px 0; }
    .body { color:${GREY}; font-size:40px; line-height:1.45; max-width:880px; }
    .tag { color:${NAVY}; font-family:'IBM Plex Mono','Courier New',monospace; font-size:36px; font-weight:700; margin-top:26px; background:${ACCENT}; display:table; padding:8px 16px; }
    .swipe { position:absolute; right:88px; bottom:190px; color:${NAVY}; font-size:34px; font-weight:700; }
    .mark { position:absolute; right:96px; bottom:112px; width:26px; height:26px; background:${ACCENT}; }
    .wordmark { position:absolute; left:88px; bottom:112px; color:${GREY}; font-family:'IBM Plex Mono','Courier New',monospace; font-size:26px; font-weight:600; }
    .cover-art { display:block; width:100%; max-height:540px; object-fit:contain; margin-bottom:44px; }
  </style></head><body>
    ${art}
    <div class="kicker">${cover ? SITE_LABEL : cta ? 'Next step' : `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`}</div>
    <h1>${headingHtml(s.heading)}</h1>
    <div class="rule"></div>
    ${body}
    ${cover ? '<div class="swipe">Swipe &rarr;</div>' : ''}
    <div class="mark"></div>
    <div class="wordmark">${SITE_LABEL}</div>
  </body></html>`;
}

// Caption = the file's `--- INSTAGRAM ---` section (caption + hashtags), else the
// LinkedIn post body, with a link-in-bio close.
function caption(md) {
  const ig = section(md, '--- INSTAGRAM ---');
  const base = ig || section(md, '--- POST ---');
  // Only add the close if the caption doesn't already point at the bio.
  const close = /link in bio/i.test(base) ? '' : '\n\nFull article and free Sales Scorecard: link in bio.';
  return `${base}${close}\n`;
}

async function render(browser, slug) {
  const md = readFileSync(join(DIR, `${slug}.md`), 'utf8');
  const slides = parseCarousel(md);
  const dir = join(OUT, slug);
  mkdirSync(dir, { recursive: true });

  const cover = coverArt(slug);
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  for (let i = 0; i < slides.length; i++) {
    await page.setContent(slideHtml(slides[i], i, slides.length, cover), { waitUntil: 'load' });
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
