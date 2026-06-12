# Anoop Kurup Website

## Project Overview
Professional website for Anoop Kurup. Built with Next.js 15, Tailwind CSS, YAML-driven content.

**Core message**: "I fix sales for founder-led services businesses."
**Audience**: Founder-led B2B service firms (consulting, agency, training, professional services).

**The one funnel** — every page drives to the Sales Scorecard:
```
Sales Scorecard (free, 3 min — the ONE primary CTA sitewide)
  → Pipeline Reality Check (₹25K, 1 week, done-for-you diagnosis)
  → CLEAR engagement (₹75K–₹1.75L, quoted after diagnosis)
```

## Current Site Structure (Repositioned June 2026)

### Pages
| Route | Purpose | Content source |
|-------|---------|---------------|
| `/` | Homepage — hero, "Sound familiar?", Package/Prove/Systemise, proof, Scorecard CTA | `content/pages/home.yaml` |
| `/scorecard` | **Sales Scorecard** — interactive 10-question self-assessment (the centrepiece) | `src/app/scorecard/ScorecardTool.tsx` |
| `/pipeline-reality-check` | ₹25,000 done-for-you diagnosis offer page | `content/pages/pipeline-reality-check.yaml` |
| `/clear` | The CLEAR engagement (₹75K–₹1.75L) | `content/pages/clear.yaml` |
| `/about` | Bio + funnel + podcast | `content/pages/about.yaml` |
| `/blog` | Markdown blog system | `content/blog/posts/*.md` |
| `/contact` | Contact page with qualification | `content/pages/contact.yaml` |
| `/podcast` | Podcast page | `content/podcast.md` |
| `/thank-you` | Thank you page | `content/thank-you.md` |
| `/legal/*` | Privacy policy, terms | `content/legal/*.md` |

### Navigation
**Desktop**: Anoop Kurup | How I Fix Sales (`/clear`) | Pipeline Reality Check | Blog | About | **[Take the Sales Scorecard]**

(No Services dropdown. Contact lives in the footer, not the top nav.)

### Removed Pages (June 2026 repositioning)
- `/diagnose` — replaced by the free Scorecard (301 → `/scorecard`)
- `/build` — replaced by `/clear` (301 → `/clear`)
- `/postie` — Postie retired (301 → `/scorecard`)
- `/framework`, `/partner` — 301 → `/clear`, `/contact`
- `/videos` never existed — old `/resources/*` redirects now point to `/blog`
- Earlier legacy removals: `/consulting`, `/ai-solutions/*`, `/case-studies/*`, `/resources/*`, `/design-system`, `/_archived/*`, `/(sample)/*`

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS (custom design tokens)
- **Content**: YAML files for page content; markdown (remark/rehype) for blog posts and simple pages
- **Typography**: Cormorant Garamond (serif) + Inter (sans-serif)
- **Icons**: Lucide React
- **Deployment**: Vercel (auto-deploy from GitHub master)

## Project Structure

**All content lives in top-level `content/`; all code lives in `src/`.**

```
aksite-nextjs/
├── content/                      # ← ALL editable content (no code)
│   ├── pages/
│   │   ├── home.yaml
│   │   ├── about.yaml
│   │   ├── clear.yaml
│   │   ├── contact.yaml
│   │   └── pipeline-reality-check.yaml
│   ├── blog/posts/*.md           # Blog posts (markdown + frontmatter)
│   ├── podcast.md                # Podcast page
│   ├── thank-you.md              # Thank you page
│   └── legal/                    # Privacy, terms markdown
├── scripts/
│   └── publish-post.mjs          # Obsidian → blog post publisher (npm run publish)
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx        # About
│   │   ├── scorecard/            # Sales Scorecard (page.tsx + ScorecardTool.tsx)
│   │   ├── pipeline-reality-check/page.tsx  # ₹25K diagnosis offer
│   │   ├── clear/page.tsx        # CLEAR engagement
│   │   ├── blog/                 # Blog (list + [slug] pages)
│   │   ├── contact/page.tsx      # Contact
│   │   ├── podcast/page.tsx      # Podcast
│   │   ├── thank-you/page.tsx    # Thank you
│   │   └── legal/                # Privacy, terms
│   ├── components/
│   │   ├── Header.tsx            # Simplified nav
│   │   ├── Footer.tsx            # Clean footer
│   │   ├── ContentPage.tsx       # MD-driven page wrapper
│   │   ├── PageTemplate.tsx      # Hero + layout template
│   │   ├── ContentSections.tsx   # Dynamic content renderer
│   │   ├── HeroMedia.tsx         # Image/video hero media
│   │   ├── LineIcon.tsx          # Custom line icons
│   │   └── ui/                   # shadcn/ui components (accordion, button, card)
│   └── lib/
│       ├── content.ts            # YAML + markdown content loaders, TS interfaces
│       ├── analytics.ts          # trackEvent() — dataLayer/gtag-safe events
│       ├── blog.ts               # Blog post loaders (content/blog/posts)
│       ├── markdown.ts           # remark/rehype markdown → HTML
│       ├── icons.ts              # Icon registry
│       └── utils.ts              # Utility functions
├── public/images/                # Static images (blog images: public/images/blog/<slug>/)
└── tailwind.config.ts
```

## Publishing Blog Posts from Obsidian

```bash
npm run publish -- "/path/to/Obsidian note.md"   # convert a specific note
npm run publish                                   # pick from OBSIDIAN_DIR drafts (newest first)
npm run publish -- "/path/to/note.md" --push      # also git commit + push (auto-deploys)
```

- Configure the drafts folder via `OBSIDIAN_DIR=...` in `.env.local`.
- The script (`scripts/publish-post.mjs`) normalises frontmatter (title, date, description, tags, category, read_time, author), strips the duplicate H1, removes `%%comments%%`, converts callouts to blockquotes, flattens `[[wikilinks]]`, and copies `![[image]]` embeds from the vault into `public/images/blog/<slug>/` with rewritten links.
- Output goes to `content/blog/posts/<slug>.md`; it refuses to overwrite an existing post unless `--force` is passed.

## Design System

### Colors
- `navy-900`: Headlines, dark backgrounds
- `slate-500/600`: Body text
- `cta-500` (orange): Accent, CTAs
- Pure white backgrounds, no gradients

### Typography
- **Serif** (Cormorant Garamond): Headlines
- **Sans** (Inter): Body text
- Hero: 4.5rem, Display: 3rem, Title: 1.875rem, Body: 1.125rem

### Patterns
- CTAs: Underline-style (border-bottom), not filled buttons
- Emphasis: Border-left accents (4px orange)
- Section spacing: 8rem between sections
- Minimal shadows, generous whitespace

## Content Architecture
- **All content lives under top-level `content/`** — never inside `src/`
- Page copy: YAML files in `content/pages/` (home, about, clear, pipeline-reality-check, contact)
- Blog posts: markdown in `content/blog/posts/` (published via `npm run publish`)
- Simple markdown pages: `content/podcast.md`, `content/thank-you.md`, `content/legal/*.md` (loaded by `getContentPage()`)
- TypeScript interfaces for all YAML structures in `src/lib/content.ts`, each with a typed loader
- Each YAML page has a bespoke `page.tsx` renderer (not a generic section renderer)
- The Scorecard is the one code-driven page (client component `ScorecardTool.tsx`)
- When updating copy, edit the YAML/markdown file; only edit TSX for hardcoded pages

## Key Principles
- Exactly ONE primary CTA type sitewide: the Sales Scorecard. Every page ends with it. No competing CTAs (no newsletter pop-ups, no "book a call" as primary).
- The Scorecard score is shown immediately, un-gated; email is asked only after the score, for the written breakdown.
- Cases are labelled "From past consulting engagements" — original numbers only, never attributed to CLEAR.
- Funnel: Scorecard (free) → Pipeline Reality Check (₹25K, fee credited to CLEAR) → CLEAR (₹75K–₹1.75L).

## Brand Voice
- First person singular: "I fix," "I build," "I'm in the room." Never "we" (solo practice).
- No "help/guide/coach/empower" in headlines. No "cutting-edge/bespoke/holistic".
- Direct, honest, problem-first. Short declarative sentences. Prices in ₹, stated plainly.
- Colours: navy / grey / orange / white only. Orange reserved for CTAs and accents.

## Scorecard lead capture & analytics
- Email capture posts to Formspree (`FORMSPREE_ENDPOINT` in `ScorecardTool.tsx`, form id `xdavwodo`).
- GA4 (`G-0X2P577TSX`) is loaded via `next/script` in `src/app/layout.tsx`.
- `trackEvent()` (`src/lib/analytics.ts`) fires `scorecard_started`, `scorecard_completed`, `scorecard_email`, `prc_cta_click` to `dataLayer`/`gtag`.

## TODO
- [ ] Set up SEO meta tags with target keywords on each page

## Development
```bash
npm run dev          # → http://localhost:3000
npm run build        # Production build
```

**Live**: https://anoopkurup.com
**GitHub**: https://github.com/anoopkurup/aksite.git
**Deploy**: Auto-deploy from master via Vercel
