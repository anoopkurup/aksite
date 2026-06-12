import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog';

const BASE_URL = 'https://anoopkurup.com';

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

  const blogPosts: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
