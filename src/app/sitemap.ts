import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { getAllBlogPosts } from '@/lib/blog';
import { getAllCaseStudySlugs } from '@/lib/caseStudies';
import { getLivePages, getPageBySlug } from '@/lib/contentMap';

const BASE_URL = 'https://www.anoopkurup.com';

/**
 * Last edit time of a content file, for <lastmod>. Uses mtime rather than a
 * frontmatter date so it reflects actual edits: a post's `date` is its publish
 * date and never moves, which made every lastmod a lie the moment a post was
 * revised. Falls back to build time if the file has gone.
 */
function fileModified(...segments: string[]): Date {
  try {
    return fs.statSync(path.join(process.cwd(), ...segments)).mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { route: '', priority: 1.0 },
    { route: '/scorecard', priority: 0.9 },
    { route: '/pipeline-reality-check', priority: 0.9 },
    { route: '/clear', priority: 0.9 },
    { route: '/about', priority: 0.7 },
    { route: '/case-studies', priority: 0.7 },
    { route: '/blog', priority: 0.7 },
    { route: '/contact', priority: 0.5 },
    { route: '/legal/privacy-policy', priority: 0.1 },
    { route: '/legal/terms-conditions', priority: 0.1 },
  ].map(({ route, priority }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: fileModified('src/app', route || '/', 'page.tsx'),
    changeFrequency: 'monthly' as const,
    priority,
  }));

  // SEO content-map pages that are LIVE. The `status` field is the drip gate —
  // non-live pages are deliberately excluded so they aren't indexed early.
  const livePriority: Record<string, number> = { pillar: 0.9, subpillar: 0.8 };
  const seoPages: MetadataRoute.Sitemap = getLivePages().map((page) => ({
    url: `${BASE_URL}${page.url}`,
    changeFrequency: 'monthly' as const,
    priority: livePriority[page.type] ?? 0.6,
  }));

  // Existing blog posts — but skip any whose slug is a content-map page (those
  // are emitted above only when live), so a live spoke isn't listed twice.
  const blogPosts: MetadataRoute.Sitemap = getAllBlogPosts()
    .filter((post) => !getPageBySlug(post.slug))
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: fileModified('content/blog/posts', `${post.slug}.md`),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    }));

  const caseStudies: MetadataRoute.Sitemap = getAllCaseStudySlugs().map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified: fileModified('content/case-studies', `${slug}.md`),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...seoPages, ...blogPosts, ...caseStudies];
}
