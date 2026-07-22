// /llms.txt — guides AI crawlers / answer engines to the key pages. Generated
// from the content map so it tracks what's actually live (GEO / AI-visibility).
import { getAllBlogPosts } from '@/lib/blog';
import { getAllCaseStudies } from '@/lib/caseStudies';
import { getLivePages } from '@/lib/contentMap';
import { SITE } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const core = [
    ['Sales Scorecard (free 3-min self-assessment; the primary CTA)', '/scorecard'],
    ['Pipeline Reality Check (₹25K done-for-you diagnosis)', '/pipeline-reality-check'],
    ['The CLEAR engagement', '/clear'],
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

  const posts = getAllBlogPosts()
    .map((p) => `- [${p.frontmatter.title}](${SITE.baseUrl}/blog/${p.slug}): ${p.frontmatter.description}`)
    .join('\n');

  const body = `# ${SITE.name}

> ${SITE.authorRole}. Core message: "I fix sales for B2B services businesses."

Funnel: Sales Scorecard (free) → Pipeline Reality Check (₹25K) → CLEAR (₹2.5L over 3 months; ₹75K Lite tier).

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
