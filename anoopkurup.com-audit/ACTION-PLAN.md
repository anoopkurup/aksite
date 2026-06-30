# Action Plan — anoopkurup.com

Prioritized by impact-to-effort. Health score today: **68/100**. Phase 1 alone should reach ~80.

## 🔴 Critical — do this week
1. **Deploy the `design-system-sync` branch.** Production lags the branch; deploying ships JSON-LD schema (Person/Org/WebSite/BlogPosting) **and** `rel=canonical` sitewide in one push. *Effort: deploy. Impact: +~10 pts.*
2. **Fix the `/ai-solutions/` 404 CTAs.** In `content/blog/posts/aida-to-ai-messaging-frameworks-workflows.md` and `linkedin-content-system-scales-without-burnout.md`, replace `/ai-solutions/` with `/scorecard`. *Effort: 2× 1-line edits.*
3. **Give legal pages titles.** Add `title:` and `description:` frontmatter to `content/legal/privacy-policy.md` and `terms-conditions.md` (or a fallback in the legal route). *Effort: 4 lines.*

## 🟠 High — weeks 2–3
4. **Connect the blog to the funnel.** Add a Scorecard CTA to the close of every published post (4 currently point only to `/contact`, 1 has none). Replace the `/workshops/` 308 in `complete-guide-…` with a direct `/clear` link.
5. **Wire the remaining schema** (after deploy): `breadcrumbSchema()` on blog `[slug]` (Home › Blog › Post); `faqPageSchema()` on `/clear` and `/pipeline-reality-check`. Switch BlogPosting `publisher` to `organizationSchema` + a logo `ImageObject`.
6. **Add `/llms.txt`** — static file listing the funnel pages and top posts with one-line descriptions.

## 🟡 Medium — month 2
7. **Reconcile blog E-E-A-T.** Align case studies/credentials to the real client base (agencies, law firms, consultants, trainers) or add a short author box per post linking `/about`. Source or replace unsourced stats ("73%", "67%") with owned figures.
8. **Expand `social-media-followers-to-clients`** (971 words, no CTA) with its follow-on engagement data; use its hedged, specific voice as the model. Add TL;DR/definition blocks atop pillar posts for GEO citability.
9. **Add security headers** via `next.config` `headers()` or `vercel.json`: `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, CSP `frame-ancestors`.
10. **Sharpen short titles** — make `/about` and `/blog` titles keyword-bearing.

## 🟢 Low / ongoing
11. Add `lastmod` to the sitemap from post dates.
12. Verify `next/image priority` on hero/LCP images; confirm explicit dimensions on blog body images.
13. Post-deploy: validate schema in Google Rich Results Test; confirm field CWV (LCP/INP/CLS) in GSC/CrUX once traffic supports a record.
14. Keep the noindex drip gate synced as the 15 draft posts go live.

---
**One-line summary:** The hard part is already built and just needs deploying; after that, the work is content plumbing — connect the blog to the Scorecard funnel and fix two broken links.
