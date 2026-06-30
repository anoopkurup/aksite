# Full SEO Audit — anoopkurup.com

**Date:** 2026-07-01 · **Canonical host:** https://www.anoopkurup.com · **Pages indexed:** 18 (10 pages + 8 published posts; 15 drafts correctly noindexed)

## SEO Health Score: **68 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 82 | 18.0 |
| Content Quality | 23% | 55 | 12.7 |
| On-Page SEO | 20% | 78 | 15.6 |
| Schema / Structured Data | 10% | 25 | 2.5 |
| Performance (CWV) | 10% | 92 | 9.2 |
| AI Search Readiness | 10% | 60 | 6.0 |
| Images | 5% | 85 | 4.3 |
| **Total** | | | **68.2** |

**Business type:** Solo B2B sales-systems consultant. One funnel: free Sales Scorecard → ₹25K Pipeline Reality Check → CLEAR engagement. Small, well-structured Next.js 15 marketing site on Vercel.

---

## ⚠️ Headline context: production lags the local branch
The biggest issues — **no JSON-LD, no canonical tags** — are already fixed in code on the uncommitted `design-system-sync` branch but are **not deployed to `master`/production**. `src/lib/seo.ts` contains a complete, correct schema layer; `layout.tsx` and the blog `[slug]` page wire it up locally. **Deploying the branch alone lifts the score by roughly 10 points.** Verify each "deployed-fixes-this" item after pushing.

---

## Top 5 Critical Issues
1. **No structured data on production** (Schema 25/100). Zero `ld+json` served. Blocks rich results and AI entity grounding. *Fixed on undeployed branch — deploy it.*
2. **No `rel=canonical` on any live page.** Duplicate/parameter risk; weak canonicalization signal. *Fixed on undeployed branch.*
3. **Broken CTA — 2 published posts link to `/ai-solutions/` which returns a hard 404.** (`aida-to-ai-messaging…`, `linkedin-content-system…`). Bad UX + crawl signal.
4. **Legal pages ship empty `<title>` and meta description.** `content/legal/*.md` have no frontmatter, so `generateMetadata()` falls through. Empty titles are the ugliest possible SERP listing.
5. **Blog is disconnected from the funnel.** 0 of 8 published posts link to Scorecard/PRC/CLEAR; the site's entire conversion path is bypassed from its content.

## Top 5 Quick Wins
1. Deploy `design-system-sync` → schema + canonicals go live in one push.
2. Swap the two `/ai-solutions/` CTAs to `/scorecard` (3-line edits).
3. Add `title`/`description` frontmatter to `content/legal/*.md`.
4. Add a static `/llms.txt`.
5. Add a Scorecard CTA to every blog post close; replace the `/workshops/` 308 with a direct `/clear` link.

---

## Technical SEO — 82/100
**Strong.** HTTPS + HSTS, apex→www 307, clean robots.txt + valid 18-URL sitemap, real 404s, static edge prerender (`x-vercel-cache: HIT`), ~100ms TTFB, working noindex drip gate on drafts.
**Gaps:** no canonical tags (High, fixed on branch); only HSTS among security headers (Medium); no `lastmod` in sitemap (Low). → `findings/technical.md`

## Content Quality — 55/100
**Strong key pages** (home/about/clear/PRC): consistent first-person voice, plain pricing, honest caveats, named outcomes. **Weak blog connective tissue:** a 404 CTA in 2 posts, zero funnel links across all 8, a persona/credential mismatch with the About page, and unsourced statistics. No truly thin content (971–2,998 words). → `findings/content.md`

## On-Page SEO — 78/100
One H1/page, unique branded titles (≤49 chars), compelling descriptions, full OG/Twitter, strong homepage internal linking (Scorecard ×3). **Gaps:** empty legal-page titles (High), generic short `/about` `/blog` titles (Low). → `findings/onpage.md`

## Schema — 25/100 (live) / ~85 (code)
Complete builder library exists (`Person`, `ProfessionalService`, `WebSite`, `BlogPosting`, `Breadcrumb`, `FAQ`, `Service`) with a correct server-side `JsonLd` component — **none of it is served in production.** After deploy: switch BlogPosting `publisher` to Organization+logo; wire Breadcrumb on posts and FAQPage on offer pages. → `findings/schema.md`

## Performance (CWV) — 92/100
Best category. Static edge HTML, ~100ms TTFB, 35–52 KB payloads, `display:swap` fonts, WebP heroes, deferred analytics. Only confirm field CWV (CrUX) and LCP-image `priority`. → `findings/performance.md`

## AI Search Readiness (GEO) — 60/100
robots.txt open to all AI crawlers; long-form first-person expertise with named frameworks (good citation hooks). **Gaps:** no `llms.txt`, no live entity schema, few self-contained answer passages in posts. → `findings/geo.md`

## Images — 85/100
Alt text present (0 missing), WebP heroes, dynamic per-route OG images, light weight. Verify `next/image priority` + explicit dimensions to keep CLS at zero. → `findings/images.md`

---

## Method & limitations
Live HTML inspected via curl across all 18 URLs; source code cross-referenced in-repo; content/E-E-A-T assessed by a specialist pass over the 8 published posts + 4 key YAML pages. No headless-browser screenshots or CrUX/GSC field data were pulled (lab-only performance signals). Crawl scope: full site (well under the 500-page cap).
