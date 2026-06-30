# Images — anoopkurup.com

**Score: 85/100**

## What works
- **Alt text present**: 0 images missing `alt` on the homepage and sampled blog post.
- **Modern format**: blog hero images served as **WebP** (`/images/blog/<slug>/hero.webp`).
- **Few, purposeful images**: minimalist design = light image weight, fast LCP.
- **Dynamic OG image**: `opengraph-image.tsx` generates a 1200×630 PNG per route with alt text.

## Findings
| Severity | Issue | Fix |
|---|---|---|
| **Low** | Verify `next/image` + `priority` on hero/LCP image | Ensures responsive `srcset` + preload. |
| **Low** | OG image is PNG | Fine; consider WebP/JPEG only if OG payload matters (it rarely does). |
| **Low** | Confirm explicit width/height (or aspect-ratio) on all `<img>` | Prevents CLS. Tailwind classes appear to size them, but verify on blog content images. |

No missing-alt or oversized-image problems found at the sampled scope.
