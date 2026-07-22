/**
 * Render a LinkedIn carousel (document-post PDF) from a Social/<slug>.md file's
 * `--- CAROUSEL ---` section. 1080x1080 pages in the site's instrument-panel
 * style: white ground, navy #1F3D73 headings, one orange #F97316 accent.
 *
 * Slide source, inside `Social/<slug>.md`:
 *
 *   Source: /blog/<slug>        (or /client-acquisition-system — used on the CTA slide)
 *   --- CAROUSEL ---
 *   ### Cover heading (slide 1; body lines optional, `|` = manual break)
 *   ### Slide heading
 *   One or two short body lines.
 *
 * A closing CTA slide (Scorecard + article URL) is appended automatically —
 * never author it. Output: `Social/<slug>.carousel.pdf` (gitignored folder).
 *
 * Usage:
 *   node scripts/linkedin-carousel.mjs <slug|file.md>
 *   node scripts/linkedin-carousel.mjs --all
 *   node scripts/linkedin-carousel.mjs <slug> --png   (debug: per-slide PNGs)
 *
 * ponytail: one HTML doc, one CSS @page per slide, Chromium print-to-pdf.
 * No sharp step — LinkedIn re-rasterises documents itself.
 */
import { chromium } from 'playwright';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const DIR = join(process.cwd(), 'Social');
const SIZE = 1080;

// anoopkurup.com brand palette (tailwind.config.ts) — navy / grey / orange / white.
const NAVY = '#1F3D73';
const GREY = '#475569';
const ACCENT = '#F97316';
const GROUND = '#FFFFFF';
const GRID = 'rgba(31,61,115,0.06)';
const SITE_LABEL = 'anoopkurup.com';

function parseCarousel(md, slug) {
  const marker = md.indexOf('--- CAROUSEL ---');
  if (marker === -1) throw new Error('no `--- CAROUSEL ---` section');
  let src = md.slice(marker + '--- CAROUSEL ---'.length);
  const next = src.indexOf('\n--- ');
  if (next !== -1) src = src.slice(0, next);

  const slides = src
    .split(/^### /m)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((block) => {
      const [head, ...rest] = block.split('\n');
      return { heading: (head ?? '').trim(), body: rest.join(' ').replace(/\s+/g, ' ').trim() };
    });
  if (slides.length < 3) throw new Error(`only ${slides.length} slides — write at least 3`);

  // Article URL comes from the file's `Source:` header (spokes live under
  // /blog/, the pillar at the root), falling back to /blog/<slug>.
  const source = md.match(/^Source:\s*(\S+)/m)?.[1] ?? `/blog/${slug}`;
  slides.push({
    heading: 'How predictable is your pipeline?',
    body: `Free Sales Scorecard: ten questions, three minutes, an honest score.\n${SITE_LABEL}/scorecard\nFull article: ${SITE_LABEL}${source}`,
  });
  return slides;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// `|` in a heading = manual line break.
const headingHtml = (h) => h.split('|').map((l) => esc(l.trim())).join('<br>');

// Optional cover illustration: Social/<slug>.cover.png, embedded as a data URI.
function coverArt(slug) {
  const p = join(DIR, `${slug}.cover.png`);
  return existsSync(p) ? `data:image/png;base64,${readFileSync(p).toString('base64')}` : '';
}

function slideHtml(s, i, total, cover) {
  const isCover = i === 0;
  const cta = i === total - 1;
  const size = s.heading.length <= 30 ? 88 : s.heading.length <= 55 ? 68 : 54;
  const body = cta
    ? s.body.split('\n').map((l, j) => `<p class="${j === 0 ? 'body' : 'url'}">${esc(l)}</p>`).join('')
    : s.body
      ? `<p class="body">${esc(s.body)}</p>`
      : '';
  const art = isCover && cover ? `<img class="cover-art" src="${cover}" alt="">` : '';
  return `<section class="slide">
    ${art}
    <div class="kicker">${isCover ? SITE_LABEL : cta ? 'Next step' : `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`}</div>
    <h1 style="font-size:${size}px">${headingHtml(s.heading)}</h1>
    <div class="rule"></div>
    ${body}
    ${isCover ? '<div class="swipe">Swipe &rarr;</div>' : ''}
    <div class="mark"></div>
    <div class="wordmark">${SITE_LABEL}</div>
  </section>`;
}

function docHtml(slides, cover) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    @page { size:${SIZE}px ${SIZE}px; margin:0; }
    body { font-family:'Inter','Helvetica Neue',Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; }
    .slide {
      width:${SIZE}px; height:${SIZE}px; position:relative;
      page-break-after:always; overflow:hidden;
      padding:96px 88px;
      background-color:${GROUND};
      background-image:
        linear-gradient(${GRID} 1px, transparent 1px),
        linear-gradient(90deg, ${GRID} 1px, transparent 1px);
      background-size:54px 54px;
    }
    .kicker { color:${GREY}; font-family:'IBM Plex Mono','Courier New',monospace; font-size:22px; font-weight:600; text-transform:uppercase; letter-spacing:4px; margin-bottom:30px; }
    h1 { color:${NAVY}; font-family:'Newsreader',Georgia,'Times New Roman',serif; font-weight:600; line-height:1.08; letter-spacing:-0.5px; max-width:880px; }
    .rule { width:88px; height:8px; background:${ACCENT}; margin:40px 0; }
    .body { color:${GREY}; font-size:36px; line-height:1.45; max-width:840px; }
    .url { color:${NAVY}; font-family:'IBM Plex Mono','Courier New',monospace; font-size:30px; font-weight:700; margin-top:22px; background:${ACCENT}; display:table; padding:6px 14px; }
    .swipe { position:absolute; right:88px; bottom:170px; color:${NAVY}; font-size:32px; font-weight:700; }
    .mark { position:absolute; right:96px; bottom:96px; width:26px; height:26px; background:${ACCENT}; }
    .wordmark { position:absolute; left:88px; bottom:96px; color:${GREY}; font-family:'IBM Plex Mono','Courier New',monospace; font-size:24px; font-weight:600; }
    .cover-art { display:block; width:100%; max-height:420px; object-fit:contain; margin-bottom:36px; }
  </style></head><body>${slides.map((s, i) => slideHtml(s, i, slides.length, cover)).join('')}</body></html>`;
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
    const page = await browser.newPage();
    for (const slug of slugs) {
      const slides = parseCarousel(readFileSync(join(DIR, `${slug}.md`), 'utf8'), slug);
      await page.setContent(docHtml(slides, coverArt(slug)), { waitUntil: 'load' });
      if (args.includes('--png')) {
        const sections = await page.locator('.slide').all();
        for (let i = 0; i < sections.length; i++)
          await sections[i].screenshot({ path: join(DIR, `${slug}.slide${i + 1}.png`) });
      } else {
        await page.pdf({
          path: join(DIR, `${slug}.carousel.pdf`),
          width: `${SIZE}px`,
          height: `${SIZE}px`,
          printBackground: true,
        });
      }
      console.log(`✓ ${slug} — ${slides.length} slides`);
    }
    await page.close();
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error('✗', e.message);
  process.exit(1);
});
