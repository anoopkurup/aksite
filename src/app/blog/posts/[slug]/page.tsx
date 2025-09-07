import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog';
import { markdownToHtml, formatDate, estimateReadingTime } from '@/lib/markdown';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LineIcon from '@/components/LineIcon';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await markdownToHtml(post.content);
  const readingTime = estimateReadingTime(post.content);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section with Image Overlay */}
      <section className="relative min-h-[60vh] flex items-end">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-oxford-blue via-azure to-oxford-blue">
          {(post.frontmatter.hero_image || post.frontmatter.featured_image) && (
            <img 
              src={post.frontmatter.hero_image || post.frontmatter.featured_image}
              alt={post.frontmatter.title}
              className="w-full h-full object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/90 via-oxford-blue/50 to-oxford-blue/30"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 w-full py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-white/80 hover:text-white transition-colors"
              >
                <LineIcon type="arrow-left" className="mr-2" size={16} />
                Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              {post.frontmatter.category && (
                <span className="text-sm font-semibold text-oxford-blue bg-gamboge px-3 py-1 rounded-full">
                  {post.frontmatter.category}
                </span>
              )}
              <span className="text-sm text-white/80">
                By{" "}
                <Link href="/about" className="text-white hover:text-gamboge transition-colors font-medium">
                  {post.frontmatter.author || "Anoop Kurup"}
                </Link>
              </span>
              <span className="text-sm text-white/80">
                {formatDate(post.frontmatter.date)}
              </span>
              <span className="text-sm text-white/80">
                {post.frontmatter.read_time || post.frontmatter.readTime || readingTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {post.frontmatter.title}
            </h1>
            
            {post.frontmatter.description && (
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                {post.frontmatter.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div 
            className="blog-content max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.frontmatter.title} | Anoop Kurup`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
    },
  };
}