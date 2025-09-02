import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog';
import { markdownToHtml, formatDate, estimateReadingTime } from '@/lib/markdown';
import { Button } from '@/components/ui/button';
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
      {/* Header */}
      <div className="bg-light-gray py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-azure hover:text-oxford-blue transition-colors"
            >
              <LineIcon type="arrow-left" className="mr-2" size={16} />
              Back to Blog
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            {post.frontmatter.category && (
              <span className="text-sm font-semibold text-azure bg-azure/10 px-3 py-1 rounded-full">
                {post.frontmatter.category}
              </span>
            )}
            <span className="text-sm text-charcoal">
              {formatDate(post.frontmatter.date)}
            </span>
            <span className="text-sm text-charcoal">
              {post.frontmatter.read_time || post.frontmatter.readTime || readingTime}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-oxford-blue mb-6 leading-tight">
            {post.frontmatter.title}
          </h1>
          
          {post.frontmatter.description && (
            <p className="text-xl text-charcoal leading-relaxed">
              {post.frontmatter.description}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="prose prose-lg prose-oxford-blue max-w-none
              prose-headings:text-oxford-blue prose-headings:font-bold
              prose-p:text-charcoal prose-p:leading-relaxed
              prose-a:text-azure prose-a:no-underline hover:prose-a:text-oxford-blue
              prose-strong:text-oxford-blue
              prose-ul:text-charcoal prose-li:text-charcoal
              prose-blockquote:text-charcoal prose-blockquote:border-l-azure
              prose-code:text-gamboge prose-code:bg-light-gray prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-oxford-blue prose-pre:text-white"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">
            Get More Marketing Insights Like This
          </h2>
          <p className="text-xl text-charcoal mb-8">
            Join 2,500+ service business owners who get practical, actionable insights every Tuesday.
          </p>
          <div className="max-w-md mx-auto flex gap-4 mb-8">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-full text-oxford-blue focus:outline-none focus:ring-4 focus:ring-azure/30 border border-border-gray"
            />
            <button className="bg-azure text-white px-6 py-3 rounded-full font-semibold hover:bg-oxford-blue transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gamboge text-oxford-blue hover:bg-yellow-400 px-8 py-3 rounded-full font-bold">
              <Link href="/consulting">Work With Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-azure text-azure hover:bg-azure hover:text-white px-8 py-3 rounded-full font-bold">
              <Link href="/workshops">Join a Workshop</Link>
            </Button>
          </div>
        </div>
      </section>
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