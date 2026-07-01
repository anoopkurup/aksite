import { getAllBlogPosts } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.anoopkurup.com';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = getAllBlogPosts();

  const items = await Promise.all(
    posts.map(async (post) => {
      const html = await markdownToHtml(post.content);
      return `    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.frontmatter.description || '')}</description>
      <content:encoded><![CDATA[${html}]]></content:encoded>
    </item>`;
    })
  );

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Anoop Kurup — Blog</title>
    <link>${BASE_URL}/blog</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Sales systems for B2B services businesses: positioning, offers, outreach, and pipelines that don't depend on referrals.</description>
    <language>en</language>
    <lastBuildDate>${new Date(posts[0]?.frontmatter.date ?? Date.now()).toUTCString()}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
