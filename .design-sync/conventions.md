# Anoop Kurup Design System — conventions

Brand for **anoopkurup.com** ("I fix sales for B2B services businesses"): an
**instrument panel** — honest, measured, mechanical. Serif headings (Newsreader)
over sans body (Inter); every number, price, score, and label is set in mono
(IBM Plex Mono) like a gauge readout. Navy + grey + a single orange accent on
pure white; flat, border-led surfaces with generous whitespace.

## Setup

Components are plain presentational React (`window.AKDesignSystem.*`) — **no provider
or theme wrapper needed**. The only requirement is that `styles.css` is loaded: it
pulls in the brand fonts and the compiled component/token CSS. Without it, components
render unstyled.

## Styling idiom

This is a **Tailwind-utility** system with custom brand tokens. Style layout and
one-off elements with these utility classes (not new CSS, not invented names):

| Concern | Classes (real tokens) |
|---|---|
| Headings / display | `font-serif` + `text-hero` (4.5rem), `text-display` (3rem), `text-title` (1.875rem) |
| Body copy | `font-sans` + `text-body` (1.125rem), `text-body-lg` (1.25rem) |
| Data / labels | `font-mono` for every number, price, score, and metadata line. Section eyebrow: `font-mono text-xs uppercase tracking-[0.18em] text-navy-600` — always navy, never orange. Key figure: `font-mono text-cta-600` |
| Text colour | `text-navy-900` (#1F3D73, headings/primary), `text-slate-600` (#475569, body), `text-slate-500` / `text-slate-400` (muted), `text-white` (on dark) |
| Backgrounds | `bg-white`, `bg-slate-50` (alternating sections, forms), `bg-navy-50` / `bg-navy-100` (tints), `bg-navy-900` (#1F3D73, dark blocks), `bg-cta-500` (#F97316, the one filled CTA) |
| Borders / accents | `border-slate-200` (cards, spaced apart — never touching), `border-l-4 border-navy-900` (emphasis/quote), `border-b-2 border-cta-500` (underline link) |
| Radius / shadow | `rounded` (buttons), `rounded-lg` (cards); near-flat — prefer borders over shadow |

**Orange discipline (the needle):** orange appears ONLY as the one filled CTA
(`Button` primary / `bg-cta-500`), the underline link (`CtaLink` /
`border-b-2 border-cta-500`), the `Reading` meter fill, a key figure
(`text-cta-600`), and ✓ checkmarks. Never on eyebrows, card borders, or
decoration — when in doubt, the element is navy. Never introduce a second
accent colour or a competing primary button.

## Components (build from these — don't reinvent)

`Button` (variant primary/ghost, size sm/md/lg) · `CtaLink` (tone navy/white) ·
`EmphasisBlock` (tone navy/muted, left-border callout) · `Card` + `CardTitle` +
`CardBody` (surface plain/muted) · `Accordion` / `AccordionItem` /
`AccordionTrigger` / `AccordionContent` (FAQ) · `NavBar` (header, links as data) ·
`Reading` (the signature: mono label + value + segmented meter — use for any
honest measurement; don't scatter meters where the data isn't a clean reading) ·
`ScoreDisplay` · `ProgressBar` · `ScorecardOption`.

Read each component's `.d.ts` (props) and `.prompt.md` (usage) before composing,
and the bound `styles.css` before styling your own layout glue.

## Idiomatic snippet

```jsx
import { Card, CardTitle, CardBody, CtaLink, Reading } from "@anoopkurup/design-system";

<Card className="max-w-md">
  <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-4">
    Step 2 · Diagnosis
  </p>
  <CardTitle>Pipeline Reality Check</CardTitle>
  <CardBody>
    I take your last 12 months of deals and tell you exactly where your next
    clients will come from — and where they won’t.
  </CardBody>
  <Reading label="Fee" value="₹25,000 · 1 week" className="mt-6" />
  <CtaLink href="/pipeline-reality-check" className="mt-6">
    See how it works →
  </CtaLink>
</Card>
```
