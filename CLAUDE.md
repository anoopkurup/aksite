# Anoop Kurup Website

## Project Overview
Professional website for Anoop Kurup. Built with Next.js 15, Tailwind CSS, YAML-driven content.

**Core message**: "I fix sales for B2B services businesses."
**Audience**: B2B service firms (consulting, agency, training, professional services). (Avoid the term "founder-led" as an audience descriptor in page copy — it read as confusing; say "B2B". The *concept* "founder-led sales" — the founder being the only salesperson — is a distinct term and stays where it names that problem, e.g. the `founder-led-sales-trap` post. Never state client revenue/earnings figures — it's a social taboo in India.)

**The one funnel** — every page drives to the Sales Scorecard:
```
Sales Scorecard (free, 3 min — the ONE primary CTA sitewide)
  → Pipeline Reality Check (₹25K, 1 week, done-for-you diagnosis)
  → CLEAR engagement (₹2.5L over 3 months: ₹50K + ₹1L×2; ₹75K Lite tier; quoted after diagnosis)
```

## Current Site Structure (Repositioned June 2026)

### Pages
| Route | Purpose | Content source |
|-------|---------|---------------|
| `/` | Homepage — hero, "Sound familiar?", Package/Prove/Systemise, proof, Scorecard CTA | `content/pages/home.yaml` |
| `/scorecard` | **Sales Scorecard** — interactive 10-question self-assessment (the centrepiece) | `src/app/scorecard/ScorecardTool.tsx` |
| `/pipeline-reality-check` | ₹25,000 done-for-you diagnosis offer page | `content/pages/pipeline-reality-check.yaml` |
| `/clear` | The CLEAR engagement (₹2.5L; ₹75K Lite) | `content/pages/clear.yaml` |
| `/about` | Bio + funnel + podcast | `content/pages/about.yaml` |
| `/blog` | Markdown blog system | `content/blog/posts/*.md` |
| `/blog/category/[category]` | Filtered index (static, one per category) | `src/components/BlogIndex.tsx` |
| `/case-studies` | Case study index + detail pages | `content/case-studies/*.md` |
| `/contact` | Contact page with qualification | `content/pages/contact.yaml` |
| `/thank-you` | Thank you page | `content/thank-you.md` |
| `/legal/*` | Privacy policy, terms | `content/legal/*.md` |

### Navigation
**Desktop**: Anoop Kurup | How I Fix Sales (`/clear`) | Pipeline Reality Check | Case Studies | Blog | About | **[Take the Sales Scorecard]**

(No Services dropdown. Contact lives in the footer, not the top nav. Case Studies is in the top nav and the footer, and is linked from the homepage proof section.)

### Removed Pages (June 2026 repositioning)
- `/diagnose` — replaced by the free Scorecard (301 → `/scorecard`)
- `/build` — replaced by `/clear` (301 → `/clear`)
- `/postie` — Postie retired (301 → `/scorecard`)
- `/framework`, `/partner` — 301 → `/clear`, `/contact`
- `/podcast` — retired July 2026 (301 → `/about`). It was a stub: 9 episodes and 4 platform links all pointing at `#`, copy selling the retired "Lead Machine Method™", and no internal links to it. `/about` carries the podcast mention. Bring it back only with real episode URLs.
- `/videos` never existed — old `/resources/*` redirects now point to `/blog`
- Earlier legacy removals: `/consulting`, `/ai-solutions/*`, `/resources/*`, `/design-system`, `/_archived/*`, `/(sample)/*` (note: `/case-studies` was relaunched July 2026 — see Pages table)

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS (custom design tokens)
- **Content**: YAML files for page content; markdown (remark/rehype) for blog posts and simple pages
- **Typography**: Newsreader (serif headings) + Inter (sans body) + IBM Plex Mono (data/labels)
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
│   ├── publish-post.mjs          # Obsidian → blog post publisher (npm run publish)
│   ├── generate-images.mjs       # OpenAI gpt-image-1 image generator + wiring (npm run images)
│   ├── image-manifest.mjs        # Brand style preamble + per-page/per-post image prompts
│   └── rebrand-navy.mjs          # Maps generated art back to navy #1F3D73 (gpt-image-1 ignores hex)
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
│   │   ├── CTAButton.tsx         # THE Scorecard button (navy-950 label on cta-500)
│   │   ├── UnderlineLink.tsx     # Every non-Scorecard link: navy label + orange underline
│   │   ├── BlogIndex.tsx         # Shared by /blog and /blog/category/[category]
│   │   ├── ContentPage.tsx       # MD-driven page wrapper (always ends with the Scorecard)
│   │   ├── PageTemplate.tsx      # Hero + layout template (no <main> — layout.tsx owns it)
│   │   └── templates/            # SEO page templates (SeoPageLayout + pillar/subpillar/spoke/vertical)
│   └── lib/
│       ├── content.ts            # YAML + markdown content loaders, TS interfaces
│       ├── prose.ts              # THE prose treatment for every markdown body (was copy-pasted 4x)
│       ├── analytics.ts          # trackEvent() — dataLayer/gtag-safe events
│       ├── blog.ts               # Blog post loaders (content/blog/posts)
│       ├── markdown.ts           # remark/rehype markdown → HTML
│       ├── contentMap.ts         # SEO content map (27-page build; status gates indexability)
│       └── seo.ts                # Metadata + JSON-LD schema builders
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

## Generating Images (brand diagrams + blog images)

Brand-styled images (page explainer diagrams, blog hero + inline images) are generated with OpenAI `gpt-image-1` and wired into the site automatically.

```bash
npm run images                  # generate every MISSING image, then wire all posts
npm run images -- --only blog   # only jobs/posts whose id or slug contains "blog"
npm run images -- --only mql-sql # one post (matches the slug)
npm run images -- --force       # regenerate even if the file already exists
npm run images -- --dry         # list what would run (and per-post image counts), call nothing
npm run images -- --selftest    # test the count + wiring logic, no API calls
```

- Requires `OPENAI_API_KEY=sk-...` in `.env.local`.
- **Prompts live in `scripts/image-manifest.mjs`** — author them there. `BRAND_PREAMBLE` locks the style once (pure-white bg, navy `#1F3D73` / grey `#475569` line-art, one orange `#F97316` accent, flat 2D Swiss/Apple minimalism); each job only describes its subject. Two arrays: `pages` (explicit diagrams) and `posts` (per-post `hero` + ordered `inlines`).
- **Image count per blog post scales with word count** (`imageCountForWords` in `scripts/generate-images.mjs`): <800w → 1 (hero only), 800–1299 → 2, 1300–1899 → 3, 1900–2599 → 4, ≥2600 → 5. The generator uses the hero + the first N inline prompts the count calls for, so author inline prompts in priority order.
- **Wiring is automatic and idempotent**: hero → `hero_image` frontmatter; inline images → `inline-1.webp`, `inline-2.webp`, … saved to `public/images/blog/<slug>/` and inserted spread across the post's H2 sections. Page diagrams go to `public/images/pages/<id>.webp` and are referenced directly in each page's `.tsx`.
- Re-running is safe — it skips images that already exist and never double-inserts markdown. Add a new post (or new prompts) then just `npm run images` to fill the gaps.
- **QA loop**: after generating, open the `.webp` files (or `npm run dev`) to check brand fidelity; tweak the prompt in the manifest and re-run with `--only <slug> --force` for any that drift.
- **gpt-image-1 ignores hex codes — `npm run images` auto-corrects the navy.** The manifest asks for `#1F3D73` on every job; the model reliably returns a near-black midnight blue instead (66 of 72 images had drifted to the `#001630`–`#0E2138` range — the exact ink the design system forbids). `scripts/rebrand-navy.mjs` runs automatically at the end of every generate (called in-process, **not** chained with `&&` — `npm run images -- --only foo` appends flags to the end of the npm script, so a chain hands them to the wrong command). It maps the navy back, preserving anti-aliasing and leaving orange/grey/white untouched. Run it alone with `npm run images:rebrand` (`--dry` to report, `--only <name>` to scope). Don't try to fix this with prompt wording; it doesn't take.
- **rebrand-navy only ever touches `public/images/pages` + `public/images/blog`.** Its method assumes flat vector art over white, so on a **photograph** it reads dark tones as navy and recolours them (it once turned the black laptop keyboard in `hero/homepage-heroimage.webp` blue). Never point it at `hero/` or `about/`.

## Design System — "Instrument panel"

The site reads like a diagnostic instrument: honest, measured, mechanical. The product IS a reading (Scorecard → diagnosis → fix), so data is set in mono like a gauge readout, and a recurring meter is the signature. Four colours only: navy / grey / orange / white.

### Colors
- `navy-900` = `#1F3D73` — true navy. Headlines and dark sections. (Clearly blue and authoritative, not near-black. The whole `navy` ramp in `tailwind.config.ts` is tuned to this hue. Do **not** revert it to the old electric `#000080`, nor to the near-black `#0E1A2B` ink it briefly was.)
- `slate-500/600`: Body text
- `cta-500` (`#F97316`) / `cta-600` (`#EA580C`): the "Signal" orange — the gauge needle. **Reserved strictly for: the one filled CTA, orange-underline links (`border-b-2 border-cta-500`), the meter fill, key figures (a headline metric or price), and ✓ checkmarks. NOT eyebrows, NOT decorative card borders, NOT section labels** — scattering orange on decoration pulls the eye off the CTA. When in doubt, the element is navy, not orange.
- Pure white backgrounds, no gradients

### Typography — three roles
- **Display** (`font-serif` → **Newsreader**): headlines. Clean editorial serif with conventional letterforms. (Replaced Fraunces, whose flared `F` read as a quirk; and Cormorant Garamond before it — don't reintroduce either.)
- **Body** (`font-sans` → Inter): paragraphs.
- **Data/utility** (`font-mono` → **IBM Plex Mono**): every number, price, score, section eyebrow, meter label, and metadata. This is the instrument-readout tell — when in doubt, data and labels go mono.
- Scale: Hero 4.5rem, Display 3rem, Title 1.875rem, Body 1.125rem.

### The signature — "the Reading" (`src/components/Reading.tsx`)
A mono label + value + segmented meter (orange fill = the needle). Used for the Scorecard result (the climax) and anywhere an honest measurement fits. Don't scatter meters where the data isn't a clean reading — prose results stay mono text, not meters. (It was removed from the homepage hero so orange there belongs to the CTA alone; the meter's home is the Scorecard.)

### CTA rule (one action sitewide)
- **Filled-orange button = Take the Sales Scorecard, always.** Use `src/components/CTAButton.tsx` (`<CTAButton href={...}>`). It appears in the header, page heroes, and every page-end. Reads on white and on `navy-900`.
- **The label is `navy-950`, never white.** White on `cta-500` is 2.80:1 and fails WCAG AA. Darkening the fill instead (`cta-700` + white) passes on white but drops to 2.06:1 against the `navy-900` closer, where the button disappears. `navy-950` on `cta-500` is 5.07:1 and keeps the signal orange exactly as specified. Hover *lightens* (`cta-400`) because the label is dark.
- **Every other link = orange underline** (`border-b-2 border-cta-500`) with a **navy label**: use `src/components/UnderlineLink.tsx`. PRC links, "Learn more", contact methods, inline links. Never give a non-Scorecard link the filled treatment, and never use bare orange *text* for a link — the navy label carries contrast, the orange is the underline.
- **Mobile sticky bar leads with the Scorecard** (`FloatingWhatsApp.tsx`): on a phone the header CTA is inside the hamburger and the hero CTA is below the fold, so this bar is the only Scorecard visible on first paint. WhatsApp/Call sit beside it, secondary.

### Contrast floor (measured, don't regress)
- `text-slate-400` is a **hairline value, not a text colour** — 2.56:1 on white. Body/meta text is `slate-500` (4.76:1) minimum; on a `navy-50` or `slate-50` panel use `slate-600`.
- Orange as *text* only passes at `cta-700` (5.18:1) for body sizes. `cta-600` (3.56:1) is fine only for large figures (≥24px) — the proof metrics, not 14px metadata or ✓ glyphs.
- 11 pages currently measure **zero** text-contrast failures. `scripts/` has no linter for this; re-check in the browser after colour changes.

### Patterns
- Section eyebrows: `font-mono text-xs uppercase tracking-[0.18em] text-navy-600` — **always navy, never orange** (they're labels, not CTAs).
- Cards: neutral full border `border border-slate-200`, spaced apart (`gap-8`, never touching). **Don't** repeat the 4px orange/navy left-bar on every card — that sameness makes sections blend.
- **Section distinction:** consecutive sections must not look alike. Give each its own device (icon cards / numbered circles / a vertical stepper / spaced cards) and alternate the background `white → slate-50 → white → … → navy-900` (dark closer). No two neighbours share the same background + device.
- Section spacing: 8rem between sections. Minimal shadows, generous whitespace.

## Content Architecture
- **All content lives under top-level `content/`** — never inside `src/`
- Page copy: YAML files in `content/pages/` (home, about, clear, pipeline-reality-check, contact)
- Blog posts: markdown in `content/blog/posts/` (published via `npm run publish`)
- Case studies: markdown in `content/case-studies/*.md` (loaded by `src/lib/caseStudies.ts`, which lifts the H1/H3/disclaimer out of the body); index at `/case-studies`, detail at `/case-studies/[slug]`. Source drafts live in the git-ignored `Case Studies/` folder.
- Simple markdown pages: `content/podcast.md`, `content/thank-you.md`, `content/legal/*.md` (loaded by `getContentPage()`)
- TypeScript interfaces for all YAML structures in `src/lib/content.ts`, each with a typed loader
- Each YAML page has a bespoke `page.tsx` renderer (not a generic section renderer)
- The Scorecard is the one code-driven page (client component `ScorecardTool.tsx`)
- When updating copy, edit the YAML/markdown file; only edit TSX for hardcoded pages

## Key Principles
- Exactly ONE primary CTA type sitewide: the Sales Scorecard. Every page ends with it. No competing CTAs (no newsletter pop-ups, no "book a call" as primary).
- The Scorecard score is shown immediately, un-gated; email is asked only after the score, for the written breakdown.
- Cases are labelled "From past consulting engagements" — original numbers only, never attributed to CLEAR.
- Funnel: Scorecard (free) → Pipeline Reality Check (₹25K, fee credited to CLEAR) → CLEAR (₹2.5L over 3 months, month-to-month; ₹75K Lite tier).

## Brand Voice
- **The voice authority is Anoop's Tone of Voice Guide**: `/Users/anoopkurup/Documents/CMWebsite/PRD/Tone of Voice Guide.md` (writing samples in `voice-samples/` beside it). Read it before writing or editing any site copy. The non-negotiables:
  - **Never the word "motion"** for a repeatable sales/pipeline activity — Anoop dislikes it. Say rhythm, routine, the thing you do weekly, or a repeatable activity. (Sitewide signature line uses "weekly rhythm".)
  - **Indian English**: -ise not -ize, colour/behaviour/centre, "programme" (except software), ₹ and lakh/crore. No American idioms (home run, ballpark, touch base…) or corporate jargon (leverage-as-filler, move the needle, low-hanging fruit, bandwidth…).
  - **No AI tells**: "in today's fast-paced world", "it's important to note", "let's dive in", "robust", and empty symmetry like "it's not just X, it's Y".
  - Plain over clever, concrete over abstract, calm authority — state things, don't sell them. Open with a hook, teach through analogy, first-person experience as proof.
- First person singular: "I fix," "I build," "I'm in the room." Never "we" (solo practice).
- No "help/guide/coach/empower" in headlines. No "cutting-edge/bespoke/holistic".
- Direct, honest, problem-first. Short declarative sentences. Prices in ₹, stated plainly.
- Colours: navy / grey / orange / white only. Orange reserved for CTAs and accents.

## Payments & WhatsApp (July 2026)
- **PRC booking is paid via Razorpay** (live since July 2026): `BookPRCButton.tsx` on the PRC hero + price box → `/api/prc/order` (server-side order, price hardcoded server-side) → Razorpay Checkout → `/api/prc/verify` (HMAC signature check) → inline "Booked" state (no redirect). Env: `RAZORPAY_KEY_ID` + `RAZORPAY_KEY_SECRET` in `.env.local` and Vercel (Production). The button is **navy-filled** — the one deliberate exception to "every non-Scorecard link is an underline"; it must never be orange.
- **WhatsApp (+91 90360 14008)** is a first-class channel: `FloatingWhatsApp.tsx` (desktop pill after one screen of scroll; mobile sticky WhatsApp+Call bar — body has `pb-12 md:pb-0` to clear it), first method on /contact, and a "prefer to talk first?" underline link in the PRC price box. Events: `whatsapp_click`, `call_click`, `prc_book_click`, `prc_paid`.

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
npm run publish      # Publish a blog post from Obsidian (see above)
npm run images       # Generate brand images for pages/posts (see above; needs OPENAI_API_KEY)
```

**Live**: https://anoopkurup.com
**GitHub**: https://github.com/anoopkurup/aksite.git
**Deploy**: Auto-deploy from master via Vercel
