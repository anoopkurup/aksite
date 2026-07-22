/**
 * Render a 4:5 (1080x1350) LinkedIn post image in the anoopkurup.com brand style:
 * a faint grid on white, a big serif navy heading top-left, an orange accent rule
 * and corner mark, a mono wordmark. For a plain single-image LinkedIn post, as an
 * alternative to the carousel PDF. No AI — an HTML+Chromium screenshot, so fonts,
 * grid, and line-breaks are free.
 *
 * Heading source, in order:
 *   1. the `Headline:` line in `Social/<slug>.md` (use `|` for deliberate breaks)
 *   2. fallback: the first sentence under `--- POST ---`
 *
 *   node scripts/linkedin-image.mjs <slug|file.md> [--kicker "..."]
 *   node scripts/linkedin-image.mjs --all          [--kicker "..."]
 *
 * Output: `Social/<slug>.card.jpg`.
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const DIR = join(process.cwd(), 'Social');
const W = 1080;
const H = 1350;

// anoopkurup.com brand palette (tailwind.config.ts).
const NAVY = '#1F3D73';
const GREY = '#475569';
const ACCENT = '#F97316';
const GROUND = '#FFFFFF';
const GRID = 'rgba(31,61,115,0.06)';
const SITE_LABEL = 'anoopkurup.com';

function heading(md) {
  const field = md.match(/^Headline:\s*(.+)$/m);
  if (field?.[1]) return field[1].trim();
  const marker = md.indexOf('--- POST ---');
  if (marker === -1) throw new Error('no `Headline:` field and no `--- POST ---` marker');
  let body = md.slice(marker + '--- POST ---'.length);
  const next = body.indexOf('\n--- ');
  if (next !== -1) body = body.slice(0, next);
  const firstPara = (body.trim().split(/\n\s*\n/)[0] ?? '').replace(/\s+/g, ' ').trim();
  const sentence = firstPara.match(/^(.+?[.!?])(\s|$)/);
  return (sentence?.[1] ?? firstPara).trim();
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function html(head, kicker) {
  const lines = head.split('|').map((l) => esc(l.trim()));
  const longest = Math.max(...lines.map((l) => l.length));
  const size = longest <= 26 ? 100 : longest <= 40 ? 84 : longest <= 60 ? 68 : longest <= 90 ? 56 : 48;
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
      padding:104px 88px;
      position:relative;
    }
    .kicker { color:${GREY}; font-family:'IBM Plex Mono','Courier New',monospace; font-size:24px; font-weight:600; text-transform:uppercase; letter-spacing:4px; margin-bottom:26px; }
    h1 { color:${NAVY}; font-family:'Newsreader',Georgia,'Times New Roman',serif; font-weight:600; font-size:${size}px; line-height:1.06; letter-spacing:-0.5px; max-width:904px; }
    .rule { width:88px; height:8px; background:${ACCENT}; margin-top:44px; }
    .mark { position:absolute; right:96px; bottom:104px; width:26px; height:26px; background:${ACCENT}; }
    .wordmark { position:absolute; left:88px; bottom:104px; color:${GREY}; font-family:'IBM Plex Mono','Courier New',monospace; font-size:26px; font-weight:600; }
  </style></head><body>
    ${kicker ? `<div class="kicker">${esc(kicker)}</div>` : ''}
    <h1>${lines.join('<br>')}</h1>
    <div class="rule"></div>
    <div class="mark"></div>
    <div class="wordmark">${SITE_LABEL}</div>
  </body></html>`;
}

async function render(browser, slug, kicker) {
  const md = readFileSync(join(DIR, `${slug}.md`), 'utf8');
  const head = heading(md);
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  await page.setContent(html(head, kicker), { waitUntil: 'load' });
  const png = await page.screenshot({ type: 'png' });
  await page.close();
  const out = join(DIR, `${slug}.card.jpg`);
  await sharp(png).resize(W, H).jpeg({ quality: 90 }).toFile(out);
  console.log(`✓ ${slug}.card.jpg — "${head.replace(/\|/g, ' ')}"`);
}

async function main() {
  const args = process.argv.slice(2);
  const kIdx = args.indexOf('--kicker');
  const kicker = kIdx !== -1 ? args[kIdx + 1] ?? '' : '';
  const kValIdx = kIdx === -1 ? -1 : kIdx + 1;
  const positional = args.filter((a, i) => !a.startsWith('--') && i !== kValIdx);

  let slugs;
  if (args.includes('--all')) {
    slugs = readdirSync(DIR)
      .filter((f) => f.endsWith('.md') && f !== 'README.md')
      .filter((f) => /--- POST ---|^Headline:/m.test(readFileSync(join(DIR, f), 'utf8')))
      .map((f) => basename(f, '.md'));
  } else if (positional[0]) {
    slugs = [basename(positional[0], '.md')];
  } else {
    throw new Error('pass a post slug/file, or --all');
  }

  const browser = await chromium.launch();
  try {
    for (const slug of slugs) await render(browser, slug, kicker);
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error('✗', e.message);
  process.exit(1);
});
