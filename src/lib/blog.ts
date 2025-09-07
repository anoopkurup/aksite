import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_POSTS_PATH = path.join(process.cwd(), 'src/content/blog/posts');

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
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
  } catch (error) {
    return null;
  }
}

export function getAllBlogSlugs(): string[] {
  const files = fs.readdirSync(BLOG_POSTS_PATH);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));
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