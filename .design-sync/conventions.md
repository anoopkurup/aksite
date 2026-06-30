# Anoop Kurup Design System — conventions

Brand for **anoopkurup.com** ("I fix sales for founder-led services businesses"):
minimalist, editorial, high-contrast. Serif headings (Cormorant Garamond) over
sans body (Inter); navy + grey + a single orange accent on white; flat, border-led
surfaces with generous whitespace. Orange is reserved for CTAs and accents.

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
| Text colour | `text-navy-900` (#000080, headings/primary), `text-slate-600` (#475569, body), `text-slate-500` / `text-slate-400` (muted), `text-white` (on dark) |
| Backgrounds | `bg-white`, `bg-slate-50` (cards/forms), `bg-navy-900` (#000080, dark blocks), `bg-cta-500` (#F97316, the one filled CTA) |
| Borders / accents | `border-slate-100` / `border-slate-200`, `border-l-4 border-cta-500` (emphasis), `border-b-2 border-cta-500` (underline CTA) |
| Radius / shadow | `rounded` (buttons), `rounded-lg` (cards); near-flat — prefer borders over shadow |

**One CTA rule:** exactly one primary call-to-action style — orange. A filled
`Button` (`bg-cta-500`) or the underline `CtaLink` (`border-b-2 border-cta-500`).
Never introduce a second accent colour or a competing primary button.

## Components (build from these — don't reinvent)

`Button` (variant primary/ghost, size sm/md/lg) · `CtaLink` (tone navy/white) ·
`EmphasisBlock` (tone cta/muted, left-border callout) · `Card` + `CardTitle` +
`CardBody` (surface plain/muted) · `Accordion` / `AccordionItem` /
`AccordionTrigger` / `AccordionContent` (FAQ) · `NavBar` (header, links as data) ·
`ScoreDisplay` · `ProgressBar` · `ScorecardOption`.

Read each component's `.d.ts` (props) and `.prompt.md` (usage) before composing,
and the bound `styles.css` before styling your own layout glue.

## Idiomatic snippet

```jsx
import { Card, CardTitle, CardBody, CtaLink } from "@anoopkurup/design-system";

<Card surface="muted" className="max-w-md">
  <CardTitle>Pipeline Reality Check</CardTitle>
  <CardBody>
    I take your last 12 months of deals and tell you exactly where your next
    clients will come from — and where they won’t.
  </CardBody>
  <CtaLink href="/pipeline-reality-check" className="mt-6">
    See how it works →
  </CtaLink>
</Card>
```
