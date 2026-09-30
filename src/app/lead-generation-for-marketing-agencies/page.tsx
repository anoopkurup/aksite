import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SeoPageLayout from '@/components/SeoPageLayout';
import { getPageBySlug } from '@/lib/contentMap';
import { markdownToHtml } from '@/lib/markdown';
import { buildPageMetadata } from '@/lib/seo';

// The sub-pillar's body lives outside content/blog/posts deliberately — the blog
// route would otherwise also serve it at /blog/lead-generation-for-marketing-agencies.
const BODY_PATH = path.join(
  process.cwd(),
  'content/seo/lead-generation-for-marketing-agencies.md',
);

const page = getPageBySlug('lead-generation-for-marketing-agencies')!;

export const metadata = buildPageMetadata(page);

export default async function LeadGenerationForMarketingAgenciesPage() {
  const { data, content } = matter(fs.readFileSync(BODY_PATH, 'utf8'));
  const bodyHtml = await markdownToHtml(content);

  return (
    <SeoPageLayout
      page={page}
      bodyHtml={bodyHtml}
      datePublished={data.date}
      heroImage="/images/pages/lead-generation-for-marketing-agencies.webp"
    />
  );
}
