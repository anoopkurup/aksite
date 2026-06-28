# design-sync notes — Anoop Kurup Design System

## Layout
- The main repo is a **Next.js content website**, not a component library. The
  design system is a **standalone extraction** under `design-system/` — the real
  brand atoms rebuilt as pure presentational React. It is **not** wired back into
  the app; the app still uses its own inline Tailwind patterns.
- Converter runs from the **repo root**:
  ```
  node .ds-sync/package-build.mjs --config .design-sync/config.json \
    --node-modules ./design-system/node_modules \
    --entry ./design-system/dist/index.es.js --out ./ds-bundle
  ```
  ⚠️ Don't chain `cd design-system && npm run build && node .ds-sync/...` — the
  `cd` carries the converter's cwd into `design-system/` and it can't find
  `.ds-sync/`. Build the package, then run the converter in a separate command
  from the repo root.

## Build
- `buildCmd`: `cd design-system && npm run build` → tsup (ESM `dist/index.es.js`
  + `dist/index.d.ts`) then Tailwind CLI (`dist/styles.css`, `cfg.cssEntry`).
- After editing any preview, rebuild the package CSS too (`npm run build`): the
  Tailwind `content` glob includes `../.design-sync/previews/**` so preview-only
  utility classes compile into `styles.css`.

## Gotchas (do not regress)
- `src/lib/cn.ts` uses `extendTailwindMerge` to register the custom font-size
  group (`text-hero/display/title/body-lg/body`). Without it, twMerge treats e.g.
  `text-title` as a text-color and **drops `text-navy-900`/`text-white`** in the
  same className — buttons render black text, titles collapse to default size.
- `design-system/tailwind.config.ts` has a `safelist` shipping the documented
  brand vocabulary (type scale, navy/cta/slate utilities). Tailwind purges unused
  classes, so anything named in `conventions.md` but not used by a component must
  stay safelisted or it won't reach the design agent.
- Fonts (Inter + Cormorant Garamond) load via a Google Fonts `@import` in
  `styles.css` → validate prints `[FONT_REMOTE]` (informational, fonts load at
  runtime). Not a missing-font failure.
- Render check needs playwright **1.55.0** (pins chromium build 1187, which is in
  the local `~/Library/Caches/ms-playwright/` cache). Other versions trigger a
  ~200MB browser download.

## Known render warns
- None.

## Re-sync risks
- The DS is a **manual extraction**, not generated from the app. If the live
  site's button/card/CTA patterns change, these components will NOT auto-update —
  re-extract from the source pages.
- The `safelist` is hand-maintained: new tokens documented in `conventions.md`
  must be added there too, or they purge out of the shipped CSS.
- Fonts are fetched from Google at runtime; offline/blocked environments render
  previews in a fallback font.
