# Technical SEO — anoopkurup.com

**Score: 82/100**

## What works
- **HTTPS + HSTS**: `strict-transport-security: max-age=63072000` (2 years). TLS enforced.
- **Apex → www canonicalization**: `anoopkurup.com` 307s to `https://www.anoopkurup.com/`. Single host, consistent with sitemap/OG.
- **robots.txt**: clean, `Allow: /`, declares sitemap. No accidental blocks.
- **XML sitemap**: valid, 18 URLs, generated from `src/app/sitemap.ts`. changefreq/priority set sensibly.
- **404 handling**: `/does-not-exist` returns a real `404` status (not soft-200).
- **Prerendered + CDN**: `x-nextjs-prerender: 1`, `x-vercel-cache: HIT`. Static HTML at the edge.
- **TTFB**: ~0.10s homepage, ~0.19s `/clear` — excellent.
- **Mobile**: `viewport` meta present, responsive Tailwind.
- **Drip gate**: non-`live` pages emit `noindex` via `buildPageMetadata()`; 15 of 23 blog drafts correctly kept out of the sitemap.

## Findings
| Severity | Issue | Evidence | Fix |
|---|---|---|---|
| **High** | **No `<link rel="canonical">` on any live page** | `grep canonical` = 0 on `/`, `/clear`, blog posts | Set `alternates.canonical` in every route's metadata. The local branch already does this via `buildPageMetadata()` — **it just isn't deployed**. |
| **Medium** | **Thin security-header set** | Only HSTS present. Missing `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`/CSP `frame-ancestors`, `Permissions-Policy` | Add via `next.config` `headers()` or `vercel.json`. Low effort, defensive. |
| **Low** | Sitemap omits `lastmod` | Only changefreq/priority | Add `lastmod` from post `date`/`dateModified` to help recrawl. |

## Deployment note (cross-cutting)
The live site (`master`) is **behind the local `design-system-sync` branch**. The branch adds JSON-LD schema, canonical tags, and per-page blog schema that are **not on production**. Several findings below resolve on deploy — verify after pushing.
