# On-Page SEO — anoopkurup.com

**Score: 78/100**

## What works
- **Exactly one `<h1>` per page** across all 10 main routes.
- **Titles**: unique, branded (`%s | Anoop Kurup` template), all ≤ 49 chars — comfortably under 60.
- **Meta descriptions**: present and compelling on all main pages; benefit-led, mention the Scorecard CTA.
- **OG + Twitter**: full set sitewide (title, description, url, dynamic `opengraph-image`, 1200×630, `summary_large_image`, `en_IN` locale). Image alt text set.
- **Internal linking**: homepage links all funnel pages; **Scorecard linked ×3** (correctly the one primary CTA). Clean `/clear`, `/pipeline-reality-check`, `/blog`, `/about`, `/contact` links.
- **URL structure**: clean, flat, keyword-bearing slugs (`/positioning-matrix-b2b-services`).

## Per-page snapshot
| Page | Title len | H1 | Canonical | Meta desc |
|---|---|---|---|---|
| `/` | 49 | 1 | ✗ | ✓ |
| `/scorecard` | 33 | 1 | ✗ | ✓ |
| `/pipeline-reality-check` | 36 | 1 | ✗ | ✓ |
| `/clear` | 49 | 1 | ✗ | ✓ |
| `/about` | 19 | 1 | ✗ | ✓ |
| `/blog` | 18 | 1 | ✗ | ✓ |
| `/contact` | 21 | 1 | ✗ | ✓ |
| `/podcast` | 49 | 1 | ✗ | ✓ |
| `/legal/privacy-policy` | **0 (empty)** | 1 | ✗ | **empty** |
| `/legal/terms-conditions` | **0 (empty)** | 1 | ✗ | **empty** |

## Findings
| Severity | Issue | Evidence | Fix |
|---|---|---|---|
| **High** | **Legal pages ship empty `<title>` and meta description** | Live `<title>` length = 0 on both `/legal/*` | The `.md` source files have no frontmatter (empty in this repo); `generateMetadata()` falls through. Add `title`/`description` frontmatter to `content/legal/*.md`, or hardcode a fallback in the legal route. Empty `<title>` is the most visible miss in Google's SERP. |
| **High** | No canonical tags (see technical.md) | — | Deploy `buildPageMetadata` canonical. |
| **Low** | `/about` title is just "About" | `About \| Anoop Kurup` | Make it keyword-bearing: "About Anoop Kurup — Sales-Systems Consultant". |
| **Low** | Short titles on `/blog`, `/about` leave room | 18–19 chars | Add a value modifier to use SERP real estate (e.g. "Sales for Founder-Led Services Firms — Blog"). |
