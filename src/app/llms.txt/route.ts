// /llms.txt — guides AI crawlers / answer engines to the key pages. Generated
// from the content map so it tracks what's actually live (GEO / AI-visibility).
import { getAllBlogPosts } from '@/lib/blog';
import { getAllCaseStudies } from '@/lib/caseStudies';
import { getLivePages, getPageBySlug } from '@/lib/contentMap';
import { SITE } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const core = [
    ['The CLEAR method (how I work)', '/clear'],
    ['Pipeline Reality Check (one-week done-for-you diagnosis)', '/pipeline-reality-check'],
    ['Workshops (positioning, offer architecture, go-to-market)', '/workshops'],
    ['About Anoop Kurup', '/about'],
    ['Case studies', '/case-studies'],
    ['Blog', '/blog'],
    ['Contact', '/contact'],
  ];

  const live = getLivePages()
    .map((p) => `- [${p.title}](${SITE.baseUrl}${p.url}): ${p.metaDescription}`)
    .join('\n');

  const caseStudies = getAllCaseStudies()
    .map((c) => `- [${c.title}](${SITE.baseUrl}/case-studies/${c.slug}): ${c.industry}. ${c.salesProblem}`)
    .join('\n');

  // Content-map pages are listed under "Guides" (live ones only); exclude them
  // here so a live spoke isn't listed twice and a gated one never leaks.
  const posts = getAllBlogPosts()
    .filter((p) => !getPageBySlug(p.slug))
    .map((p) => `- [${p.frontmatter.title}](${SITE.baseUrl}/blog/${p.slug}): ${p.frontmatter.description}`)
    .join('\n');

  const body = `# ${SITE.name}

> ${SITE.authorRole}. Core message: "Your sales problem is usually a marketing problem."

Engagement path: get in touch (/contact) → Pipeline Reality Check (one-week diagnosis) → consulting engagement, scoped after a conversation. No prices are published.

## Key pages
${core.map(([t, u]) => `- [${t}](${SITE.baseUrl}${u})`).join('\n')}
${live ? `\n## Guides\n${live}\n` : ''}
## Case studies
Anonymised at the client's request; drawn from past consulting engagements.
${caseStudies}

## Articles
${posts}

## Contact
- mail@anoopkurup.com
- WhatsApp: +91 90360 14008
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
