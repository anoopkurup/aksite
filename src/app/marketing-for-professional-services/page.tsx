import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SeoPageLayout from '@/components/SeoPageLayout';
import { getPageBySlug } from '@/lib/contentMap';
import { markdownToHtml } from '@/lib/markdown';
import { buildPageMetadata } from '@/lib/seo';

// The sub-pillar's body lives outside content/blog/posts deliberately — the blog
// route would otherwise also serve it at /blog/marketing-for-professional-services.
const BODY_PATH = path.join(
  process.cwd(),
  'content/seo/marketing-for-professional-services.md',
);

const page = getPageBySlug('marketing-for-professional-services')!;

export const metadata = buildPageMetadata(page);

export default async function MarketingForProfessionalServicesPage() {
  const { data, content } = matter(fs.readFileSync(BODY_PATH, 'utf8'));
  const bodyHtml = await markdownToHtml(content);

  return (
    <SeoPageLayout
      page={page}
      bodyHtml={bodyHtml}
      datePublished={data.date}
      heroImage="/images/pages/marketing-for-professional-services.webp"
    />
  );
}
