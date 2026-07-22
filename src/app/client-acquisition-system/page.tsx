import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PillarTemplate from '@/components/templates/PillarTemplate';
import { getPageBySlug } from '@/lib/contentMap';
import { markdownToHtml } from '@/lib/markdown';
import { buildPageMetadata } from '@/lib/seo';

// The pillar's body lives outside content/blog/posts deliberately — the blog
// route would otherwise also serve it at /blog/client-acquisition-system.
const BODY_PATH = path.join(
  process.cwd(),
  'content/seo/client-acquisition-system.md',
);

const page = getPageBySlug('client-acquisition-system')!;

export const metadata = buildPageMetadata(page);

export default async function ClientAcquisitionSystemPage() {
  const { data, content } = matter(fs.readFileSync(BODY_PATH, 'utf8'));
  const bodyHtml = await markdownToHtml(content);

  return (
    <PillarTemplate
      page={page}
      bodyHtml={bodyHtml}
      datePublished={data.date}
      heroImage="/images/pages/client-acquisition-system.webp"
    />
  );
}
