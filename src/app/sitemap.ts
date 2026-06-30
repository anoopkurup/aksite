import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import { getLivePages, getPageBySlug } from '@/lib/contentMap';

const BASE_URL = 'https://www.anoopkurup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { route: '', priority: 1.0 },
    { route: '/scorecard', priority: 0.9 },
    { route: '/pipeline-reality-check', priority: 0.9 },
    { route: '/clear', priority: 0.9 },
    { route: '/about', priority: 0.7 },
    { route: '/blog', priority: 0.7 },
    { route: '/contact', priority: 0.5 },
    { route: '/podcast', priority: 0.5 },
    { route: '/legal/privacy-policy', priority: 0.1 },
    { route: '/legal/terms-conditions', priority: 0.1 },
  ].map(({ route, priority }) => ({
    url: `${BASE_URL}${route}`,
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
      lastModified: new Date(post.frontmatter.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    }));

  return [...staticPages, ...seoPages, ...blogPosts];
}
