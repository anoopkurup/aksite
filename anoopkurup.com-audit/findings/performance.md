# Performance (Core Web Vitals) — anoopkurup.com

**Score: 92/100**

## Measurements (live, edge-cached)
| Page | TTFB | Total | HTML size |
|---|---|---|---|
| `/` | 0.098s | 0.109s | 39.8 KB |
| `/clear` | 0.190s | 0.215s | 34.5 KB |
| `/blog` | 0.113s | 0.127s | 51.8 KB |

## Assessment
- **Static prerender on Vercel edge** (`x-nextjs-prerender: 1`, `x-vercel-cache: HIT`) → excellent TTFB (~100ms) and very low expected LCP.
- **Small payloads** (35–52 KB HTML), self-hosted `next/font` woff2 with `display: swap` → minimal render-blocking, low CLS risk.
- **Few images** (1 above-fold hero/page), blog heroes served as **WebP** → fast LCP.
- **No layout-shift hazards** observed: fonts swap, images sized.
- Third-party: GA4 (`gtag`) loaded `afterInteractive`, plus Vercel Analytics + Speed Insights — all deferred, negligible INP impact.

## Findings
| Severity | Issue | Fix |
|---|---|---|
| **Low** | Lab-only data; no CrUX field confirmation | If GSC/CrUX access is available, confirm field LCP/INP/CLS. Traffic may be too low for a CrUX record yet. |
| **Low** | LCP image preload not verified | Ensure the hero image uses `next/image` with `priority` so LCP image preloads. |
| **Info** | Three analytics scripts | Fine at current scale; revisit only if INP regresses. |

No critical or high performance issues. This is the strongest category.
