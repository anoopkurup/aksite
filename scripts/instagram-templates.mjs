/**
 * The six Instagram post layouts from the Claude Design handoff
 * (design_handoff_instagram_templates, Aug 2026), as a slide renderer + CLI.
 *
 * Layouts: cover (navy, carousel opener) · quote · framework (numbered rows) ·
 * stat (giant orange figure) · promo (offer + fee) · story (hook + follow-up).
 * Pure typography — Newsreader / Inter / IBM Plex Mono, navy #1F3D73, one
 * orange element per post maximum, nothing below 24px.
 *
 * CLI — structured copy in, 1080×1350 PNGs out (1080×1080 with "format": "square"):
 *   node scripts/instagram-templates.mjs <post.json>
 *
 *   {
 *     "slug": "pipeline-three-parts",
 *     "format": "portrait",                  // or "square"; optional
 *     "caption": "…",                        // optional → caption.txt
 *     "slides": [
 *       { "type": "cover",     "headline": "Why your pipeline dries up | and the three-part fix." },
 *       { "type": "quote",     "text": "The gap is rarely the work." },
 *       { "type": "framework", "title": "A pipeline is three things.",
 *         "items": [ { "lead": "A target list.", "text": "200 right-fit accounts beat 5,000." } ] },
 *       { "type": "stat",      "figure": "200 > 5,000", "text": "Right fit beats list size." },
 *       { "type": "story",     "opener": "Two firms, same skill.", "followUp": "One has a quietly good year.", "kicker": "The difference isn't the work." },
 *       { "type": "promo",     "name": "Pipeline Reality Check", "description": "…", "fee": "₹25,000 · 1 week", "cta": "Book · link in bio" }
 *     ]
 *   }
 *
 * `|` in a serif headline field = manual line break (same convention as the
 * other social scripts). Every slide takes optional "footerRight" and the file
 * takes optional "handle" (default @anoopkurup).
 *
 * instagram-carousel.mjs imports slideHtml() so article carousels render in
 * these same layouts (cover → 1d, body → story, CTA → promo).
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { pathToFileURL } from 'node:url';

const W = 1080;

// Design tokens (handoff README §Design Tokens = tailwind.config.ts).
const NAVY = '#1F3D73';
const SLATE_600 = '#475569';
const SLATE_500 = '#64748B';
const SLATE_400 = '#94A3B8';
const HAIRLINE = '#E2E8F0';
const SLATE_50 = '#F8FAFC';
const ORANGE = '#F97316'; // CTA underline only
const FIGURE_ORANGE = '#EA580C'; // stat figure only
const ON_NAVY_MUTED = '#B9C6E2';
const FONTS =
  'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap';

const SERIF = "'Newsreader',Georgia,serif";
const SANS = "'Inter','Helvetica Neue',Arial,sans-serif";
const MONO = "'IBM Plex Mono','Courier New',monospace";

const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// `|` = manual line break in headline fields.
const heads = (s) => String(s ?? '').split('|').map((l) => esc(l.trim())).join('<br>');

const mono = (size, color, extra = '') =>
  `font-family:${MONO}; font-size:${size}px; color:${color}; margin:0; ${extra}`;
const ctaStyle = (color, size = 26) =>
  mono(size, color, `border-bottom:3px solid ${ORANGE}; padding-bottom:6px;`);

// Every layout: content area (flex:1) + the standard footer row.
const LAYOUTS = {
  cover: (s) => ({
    bg: NAVY,
    onNavy: true,
    footerRight: `<span style="${ctaStyle('#FFFFFF', 24)}">${esc(s.footerRight ?? 'Swipe →')}</span>`,
    content: `<div style="flex:1; display:flex; align-items:center;">
      <h1 style="font-family:${SERIF}; font-size:84px; line-height:1.15; font-weight:600; color:#FFFFFF; margin:0; text-wrap:pretty;">${heads(s.headline)}</h1>
    </div>`,
  }),

  quote: (s) => ({
    footerRight: `<span style="${mono(24, SLATE_400)}">${esc(s.footerRight ?? 'anoopkurup.com')}</span>`,
    content: `<div style="flex:1; display:flex; align-items:center;">
      <blockquote style="font-family:${SERIF}; font-size:72px; line-height:1.2; font-weight:500; color:${NAVY}; border-left:6px solid ${NAVY}; padding-left:48px; margin:0; text-wrap:pretty;">${heads(s.text)}</blockquote>
    </div>`,
  }),

  framework: (s) => ({
    footerRight: `<span style="${mono(24, SLATE_400)}">${esc(s.footerRight ?? 'Full article · link in bio')}</span>`,
    content: `<h2 style="font-family:${SERIF}; font-size:64px; line-height:1.15; font-weight:600; color:${NAVY}; margin:32px 0 0 0; text-wrap:pretty;">${heads(s.title)}</h2>
    <div style="flex:1; display:flex; flex-direction:column; justify-content:center; gap:36px;">
      ${(s.items ?? [])
        .map(
          (it, i) => `<div style="display:flex; gap:32px; align-items:baseline; border-top:1px solid ${HAIRLINE}; padding-top:36px;">
        <span style="${mono(32, NAVY)}">${String(i + 1).padStart(2, '0')}</span>
        <p style="font-family:${SANS}; font-size:32px; line-height:1.45; color:${SLATE_600}; margin:0;">${it.lead ? `<strong style="color:${NAVY};">${esc(it.lead)}</strong> ` : ''}${esc(it.text ?? it)}</p>
      </div>`,
        )
        .join('')}
    </div>`,
  }),

  stat: (s) => ({
    bg: SLATE_50,
    footerRight: `<span style="${mono(24, SLATE_400)}">${esc(s.footerRight ?? 'anoopkurup.com')}</span>`,
    content: `<div style="flex:1; display:flex; flex-direction:column; justify-content:center; gap:40px;">
      <p style="${mono(150, FIGURE_ORANGE, 'line-height:1; font-weight:500;')}">${esc(s.figure)}</p>
      <p style="font-family:${SERIF}; font-size:44px; line-height:1.3; font-weight:500; color:${NAVY}; margin:0; max-width:820px; text-wrap:pretty;">${heads(s.text)}</p>
    </div>`,
  }),

  promo: (s) => ({
    footerRight: `<span style="${ctaStyle(NAVY)}">${esc(s.cta ?? s.footerRight ?? 'Link in bio')}</span>`,
    content: `<div style="flex:1; display:flex; flex-direction:column; justify-content:center; gap:44px;">
      <h2 style="font-family:${SERIF}; font-size:80px; line-height:1.1; font-weight:600; color:${NAVY}; margin:0; text-wrap:pretty;">${heads(s.name)}</h2>
      <p style="font-family:${SANS}; font-size:36px; line-height:1.45; color:${SLATE_600}; margin:0; max-width:860px; text-wrap:pretty;">${esc(s.description)}</p>
      ${
        s.fee
          ? `<div style="border-top:1px solid ${HAIRLINE}; padding-top:40px; display:flex; flex-direction:column; gap:16px;">
        <span style="${mono(24, SLATE_500, 'text-transform:uppercase; letter-spacing:0.18em;')}">${esc(s.feeLabel ?? 'Fee')}</span>
        <span style="${mono(44, NAVY)}">${esc(s.fee)}</span>
      </div>`
          : ''
      }
    </div>`,
  }),

  story: (s) => ({
    footerRight: `<span style="${mono(24, SLATE_400)}">${esc(s.footerRight ?? 'Full story · link in bio')}</span>`,
    content: `<div style="flex:1; display:flex; flex-direction:column; justify-content:center; gap:48px;">
      <p style="font-family:${SERIF}; font-size:60px; line-height:1.25; font-weight:500; color:${NAVY}; margin:0; text-wrap:pretty;">${heads(s.opener)}</p>
      ${s.followUp ? `<p style="font-family:${SANS}; font-size:36px; line-height:1.5; color:${SLATE_600}; margin:0; text-wrap:pretty;">${esc(s.followUp)}</p>` : ''}
      ${s.kicker ? `<p style="${mono(28, NAVY)}">${esc(s.kicker)}</p>` : ''}
    </div>`,
  }),
};

export function slideHtml(spec, { format = 'portrait', handle = '@anoopkurup' } = {}) {
  const layout = LAYOUTS[spec.type];
  if (!layout) throw new Error(`unknown slide type "${spec.type}" (${Object.keys(LAYOUTS).join('/')})`);
  const H = format === 'square' ? 1080 : 1350;
  const l = layout(spec);
  return `<!doctype html><html><head><meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="${FONTS}">
  <style>* { margin:0; padding:0; box-sizing:border-box; } html,body { width:${W}px; height:${H}px; } body { -webkit-font-smoothing:antialiased; }</style>
  </head><body>
  <div style="width:${W}px; height:${H}px; background:${l.bg ?? '#FFFFFF'}; padding:96px; display:flex; flex-direction:column; box-sizing:border-box;">
    ${l.content}
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span style="${mono(24, l.onNavy ? ON_NAVY_MUTED : SLATE_500)}">${esc(handle)}</span>
      ${l.footerRight}
    </div>
  </div>
  </body></html>`;
}

async function main() {
  const file = process.argv[2];
  if (!file) throw new Error('pass a post .json file (see header for the shape)');
  const spec = JSON.parse(readFileSync(file, 'utf8'));
  const slides = spec.slides ?? [spec]; // a bare single-slide object works too
  const slug = spec.slug ?? basename(file, '.json');
  const dir = join(process.cwd(), 'Social', 'instagram', slug);
  mkdirSync(dir, { recursive: true });

  const { chromium } = await import('playwright');
  const sharp = (await import('sharp')).default;
  const H = spec.format === 'square' ? 1080 : 1350;
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
    for (let i = 0; i < slides.length; i++) {
      await page.setContent(slideHtml(slides[i], spec), { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const png = await page.screenshot({ type: 'png' });
      await sharp(png).resize(W, H).png().toFile(join(dir, `${String(i + 1).padStart(2, '0')}.png`));
    }
    await page.close();
  } finally {
    await browser.close();
  }
  if (spec.caption) writeFileSync(join(dir, 'caption.txt'), `${spec.caption.trim()}\n`);
  console.log(`✓ ${slug} — ${slides.length} slide${slides.length > 1 ? 's' : ''} → Social/instagram/${slug}/`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  main().catch((e) => {
    console.error('✗', e.message);
    process.exit(1);
  });
}
