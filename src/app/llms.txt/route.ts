// /llms.txt — guides AI crawlers / answer engines to the key pages. Generated
// from the content map so it tracks what's actually live (GEO / AI-visibility).
import { getLivePages } from '@/lib/contentMap';
import { SITE } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const core = [
    ['Sales Scorecard (free 3-min self-assessment — the primary CTA)', '/scorecard'],
    ['Pipeline Reality Check (₹25K done-for-you diagnosis)', '/pipeline-reality-check'],
    ['The CLEAR engagement', '/clear'],
    ['About Anoop Kurup', '/about'],
    ['Blog', '/blog'],
  ];

  const live = getLivePages()
    .map((p) => `- [${p.title}](${SITE.baseUrl}${p.url}): ${p.metaDescription}`)
    .join('\n');

  const body = `# ${SITE.name}

> ${SITE.authorRole}. Core message: "I fix sales for B2B services businesses."

Funnel: Sales Scorecard (free) → Pipeline Reality Check (₹25K) → CLEAR (₹75K–₹1.75L).

## Key pages
${core.map(([t, u]) => `- [${t}](${SITE.baseUrl}${u})`).join('\n')}
${live ? `\n## Articles\n${live}\n` : ''}
## Contact
- mail@anoopkurup.com
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
