---
name: publish-article
description: >-
  Write and publish the next anoopkurup.com blog article end to end — pick the
  next page from the SEO content map, draft against its brief, generate brand
  images, flip it live, render social assets, verify links, commit and push.
  Use whenever asked to write/publish a new article, work the publish drip, or
  draft the next queued spoke/subpillar.
---

# Publish an article

The canonical article writing + publishing workflow for anoopkurup.com. Run every
step, in order, every time. The owning docs hold the detail — this skill sequences
them; do not restate their content, follow the links.

The SEO build rules live in [SEO/claude-SEO-instructions.md](../../../SEO/claude-SEO-instructions.md)
and the per-page checklist in [SEO/seo-build-checklist.md](../../../SEO/seo-build-checklist.md).
Voice rules live in CLAUDE.md and the Tone of Voice Guide.

## Steps

1. **Pick the slot.** Take the next unpublished page in the active wave in
   `src/lib/contentMap.ts` (work `SEO/seo-build-checklist.md` top to bottom).
   Respect the drip: ≤2–4 pages go live per week. Note the page's `primaryKeyword`,
   `secondaryKeywords`, `type`, `parent`, `siblings`, and `brief`.

2. **DataforSEO research — REQUIRED, do this before writing a word.**
   Run: `npm run research -- "<primary keyword>"`
   It returns secondary keywords + volume, People Also Ask, related searches, and
   competitor titles (India 2356 / en; 2 bounded API calls; output gitignored at
   `scripts/research/<keyword>.json`). If credentials are missing the script exits
   non-zero — fix `.env.local` (`DATAFORSEO_LOGIN`/`DATAFORSEO_PASSWORD`), do not
   draft without the brief. Combine it with the content map entry, which carries
   the angle, H2 outline, FAQ questions, and seed keywords:
   - Follow the `brief.outline` as the H2 structure; answer the `brief.faqs`
     AND the strongest People Also Ask questions near the end.
   - Weave the top secondary keywords into headings and body naturally; cover the
     sub-topics the competitor titles and related searches reveal.
   - End with the `brief.handoffLine` — the CTA is ALWAYS the Sales Scorecard.
   - Up-link to the `parent` page and cross-link the `siblings` in the body.

3. **Draft** the markdown in `content/blog/posts/<slug>.md` (frontmatter: title, date,
   description, tags, category, read_time, author — match an existing spoke post).
   Voice is non-negotiable, read the Tone of Voice Guide first
   (`/Users/anoopkurup/Documents/CMWebsite/PRD/Tone of Voice Guide.md`):
   first person singular, Indian English (-ise, ₹, lakh), plain and concrete,
   **no em-dashes anywhere**, no "motion", no AI-tells, ~Grade 8 readability.
   Then run `npm run lint:tone` — it hard-fails on American spellings, hype,
   jargon, AI-tells, American idioms, non-Indian currency, em-dashes, and founder
   dislikes (it is part of the gates, so a miss blocks the push anyway). The
   linter only catches the grep-able rules; also re-read the draft against the
   guide's Quick checklist for the qualities a linter cannot see.

4. **Images — REQUIRED.** Add the post's `hero` + `inlines` prompts to the `posts`
   array in `scripts/image-manifest.mjs` (subject only; `BRAND_PREAMBLE` owns the
   style), then run `npm run images -- --only <slug>`. Image count scales with word
   count, so author inline prompts in priority order. Wiring (hero_image frontmatter
   + inline insertion) and the navy rebrand pass are automatic. QA the `.webp` files
   for brand drift; re-run with `--only <slug> --force` after tweaking a prompt.

5. **Flip the map.** In `src/lib/contentMap.ts`, set the page's `status: 'live'`
   (status gates indexability + sitemap). Only within its active wave.

6. **Social assets.** Draft the LinkedIn post into the git-ignored `Linkedin Posts/`
   folder in the established format, then render:
   `npm run social:cover -- <slug> "<visual metaphor>"` (AI cover, optional but preferred),
   `npm run social:card -- <slug>` (LinkedIn post image),
   `npm run social:carousel -- <slug>` (LinkedIn document-post PDF),
   `npm run social:instagram -- <slug>` (Instagram slides + caption).
   The scripts own the colours; never hand-pick different ones.

7. **Gates + ship.** Run `npm run lint:tone && npm run build && npm run seo:audit`.
   All must pass (0 errors, no broken internal links). Then commit and push to
   `master` — Vercel deploys.

## Notes

- Exactly ONE primary CTA sitewide: the Sales Scorecard. No competing CTAs.
- Never state client revenue/earnings figures; never fabricate metrics. Cases are
  labelled "From past consulting engagements".
- An Obsidian draft can replace step 3's hand-drafting:
  `npm run publish -- "/path/to/note.md"` normalises it into `content/blog/posts/`.
