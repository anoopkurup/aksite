# Schema / Structured Data — anoopkurup.com

**Score: 25/100 (live) — code for ~85 exists but is undeployed**

## Live state
- **Zero JSON-LD on production.** `grep 'ld+json'` = 0 on homepage and blog posts. No Person, Organization, WebSite, BlogPosting, Breadcrumb, or FAQ markup is served.
- This is the single biggest live gap. Rich results, knowledge-panel eligibility, and AI-engine entity understanding all depend on it.

## Code already written (in `src/lib/seo.ts`, undeployed)
The local branch has a complete, well-built schema layer:
- `personSchema()` — Person (Anoop, jobTitle, sameAs LinkedIn)
- `organizationSchema()` — ProfessionalService (founder, areaServed)
- `websiteSchema()` — WebSite
- `blogPostingSchema()` / `articleSchema()` — BlogPosting with author/publisher/dates/image
- `breadcrumbSchema()`, `faqPageSchema()`, `serviceSchema()` — available, partially wired
- `JsonLd.tsx` correctly renders `<script type="application/ld+json">` server-side.
- `layout.tsx` (local) injects Person + Organization + WebSite sitewide.

## Findings
| Severity | Issue | Fix |
|---|---|---|
| **Critical** | No structured data live | Deploy the `design-system-sync` schema work. |
| **Medium** | `publisher` on BlogPosting is a `Person` | Google prefers an `Organization` publisher with a `logo` (ImageObject) for Article rich results. Use `organizationSchema` as publisher, add a logo. |
| **Medium** | No `BreadcrumbList` emitted on blog posts | Wire `breadcrumbSchema()` into the blog `[slug]` page (Home › Blog › Post). |
| **Low** | No `FAQPage` schema on `/clear` or `/pipeline-reality-check` | These pages have Q&A-style content; `faqPageSchema()` exists — wire it for FAQ rich results. |

## Validation
After deploy, validate at search.google.com/test/rich-results and validator.schema.org. The builders produce valid JSON-LD; main caveat is the Person-as-publisher note above.
