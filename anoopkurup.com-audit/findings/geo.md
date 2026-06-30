# AI Search Readiness (GEO) — anoopkurup.com

**Score: 60/100**

## State
- **AI crawler access**: `robots.txt` is fully open (`Allow: /`) — GPTBot, ClaudeBot, PerplexityBot, Google-Extended all permitted. Good for citability; no blocks.
- **`llms.txt`**: **missing** (`/llms.txt` → 404). No curated entry point for LLMs.
- **Entity signals**: **no JSON-LD live** (see schema.md) — AI engines can't resolve Anoop as a clear Person/Organization entity. The undeployed branch fixes this.
- **Content shape**: long-form, opinionated, first-person expertise — strong raw material for citation. Definitions and frameworks ("Positioning Matrix", "MQL–SQL handshake", "offer architecture") are nameable, quotable concepts.

## Findings
| Severity | Issue | Fix |
|---|---|---|
| **Medium** | No `llms.txt` | Add `/llms.txt` (static) listing the funnel pages + top posts with one-line descriptions. Cheap, helps AI discovery. |
| **Medium** | No structured data → weak entity grounding | Deploy schema (Person/Org/WebSite/BlogPosting). |
| **Low** | Few self-contained "answer" passages | Add a 2–3 sentence TL;DR / definition block near the top of pillar posts so an LLM can lift a clean, attributable answer. |
| **Low** | Author bio not on every post | A short author box (with link to `/about`) reinforces E-E-A-T for both Google and AI engines. |

## Strength
The brand is built on named, ownable frameworks — ideal for "according to Anoop Kurup…" style citations once entity markup is live.
