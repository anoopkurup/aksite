# anoopkurup.com

Personal/business website for Anoop Kurup — "I fix sales for founder-led services businesses."
Built with Next.js 15 (App Router) + Tailwind CSS, deployed on Vercel (auto-deploy from `master`).

**Live**: https://anoopkurup.com

## Code vs content

All editable content lives in the top-level `content/` folder. You should never need to touch `src/` to edit copy or publish a post.

```
content/
├── pages/                  # Page copy (YAML) — home, about, clear, pipeline-reality-check
├── blog/posts/*.md         # Blog posts (markdown + frontmatter)
├── legal/*.md              # Privacy policy, terms
├── podcast.md              # Podcast page
└── thank-you.md            # Thank-you page

src/                        # Code — components, layouts, loaders (rarely needs editing)
public/images/              # Images (blog images land in public/images/blog/<slug>/)
```

One page is code, not content: the Scorecard (`src/app/scorecard/ScorecardTool.tsx`).

## Publishing a blog post from Obsidian

```bash
npm run publish -- "/path/to/My Obsidian Note.md"   # convert + stage a post
npm run publish                                      # or pick from your drafts folder
npm run publish -- "/path/to/note.md" --push         # publish AND deploy in one step
```

Set your drafts folder once in `.env.local`:

```
OBSIDIAN_DIR=/Users/anoopkurup/path/to/vault/Blog Drafts
```

The script handles Obsidian-specific syntax automatically:
- `![[image.png]]` embeds — images are found in the vault, copied to `public/images/blog/<slug>/`, links rewritten
- `[[wikilinks]]` → plain text, `%%comments%%` removed, callouts → blockquotes
- Frontmatter is normalised (title, date, description, tags, category, read time, author)

Without `--push`, the post is written locally — preview with `npm run dev`, then commit and push to deploy.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (Vercel runs this on deploy)
```

See `CLAUDE.md` for full architecture notes, design system, and brand voice rules.
