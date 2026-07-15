import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_POSTS_PATH = path.join(process.cwd(), 'content/blog/posts');

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    /**
     * Optional shorter <title> for search results. The editorial `title` is the
     * H1 and is often long enough that it plus the " | Anoop Kurup" template
     * overflows Google's ~60-char display and gets truncated mid-phrase. Keep
     * this to ~46 chars. og:title still uses the full `title` — social previews
     * have room, and the full line reads better there.
     */
    seo_title?: string;
    description: string;
    date: string;
    category?: string;
    tags?: string[];
    read_time?: string;
    readTime?: string;
    featured?: boolean;
    author?: string;
    hero_image?: string;
    featured_image?: string;
  };
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_POSTS_PATH);
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace('.md', '');
      const fullPath = path.join(BLOG_POSTS_PATH, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data as BlogPost['frontmatter'],
        content,
      };
    })
    .sort((a, b) => {
      // Sort by date descending (newest first)
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });

  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOG_POSTS_PATH, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as BlogPost['frontmatter'],
      content,
    };
  } catch {
    return null;
  }
}

export function getAllBlogSlugs(): string[] {
  const files = fs.readdirSync(BLOG_POSTS_PATH);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));
}

/**
 * Posts related to `slug`, best first. Ranked by shared tags, then by a shared
 * category, so a post about pricing surfaces the other pricing posts rather than
 * whatever happens to be newest.
 *
 * Every post used to have exactly one inbound link — its index — so nothing
 * pointed sideways and no topic ever clustered. This is the cheap fix for that.
 */
export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  const all = getAllBlogPosts();
  const post = all.find((p) => p.slug === slug);
  if (!post) return [];

  const tags = new Set(post.frontmatter.tags ?? []);
  return all
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const shared = (p.frontmatter.tags ?? []).filter((t) => tags.has(t)).length;
      const sameCategory = p.frontmatter.category === post.frontmatter.category ? 1 : 0;
      return { post: p, score: shared * 2 + sameCategory };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.post);
}

export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = new Set<string>();
  
  posts.forEach(post => {
    if (post.frontmatter.category) {
      categories.add(post.frontmatter.category);
    }
  });

  return Array.from(categories).sort();
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => 
    post.frontmatter.category?.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedBlogPosts(limit?: number): BlogPost[] {
  const posts = getAllBlogPosts();
  const featured = posts.filter(post => post.frontmatter.featured);
  return limit ? featured.slice(0, limit) : featured;
}