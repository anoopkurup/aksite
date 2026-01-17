import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog';
import { markdownToHtml, formatDate, estimateReadingTime } from '@/lib/markdown';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center font-sans text-sm text-slate-600 hover:text-navy-900 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {post.frontmatter.category && (
              <span className="font-sans text-xs text-cta-600 uppercase tracking-wide font-medium">
                {post.frontmatter.category}
              </span>
            )}
            <span className="font-sans text-xs text-slate-500">
              {formatDate(post.frontmatter.date)}
            </span>
            <span className="font-sans text-xs text-slate-500">
              {post.frontmatter.read_time || post.frontmatter.readTime || readingTime}
            </span>
            <span className="font-sans text-xs text-slate-500">
              By{" "}
              <Link href="/about" className="text-navy-900 hover:text-cta-600 transition-colors">
                {post.frontmatter.author || "Anoop Kurup"}
              </Link>
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6 leading-tight">
            {post.frontmatter.title}
          </h1>

          {/* Description */}
          {post.frontmatter.description && (
            <p className="font-sans text-body-lg text-slate-600 leading-relaxed max-w-3xl">
              {post.frontmatter.description}
            </p>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {(post.frontmatter.hero_image || post.frontmatter.featured_image) && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <img
              src={post.frontmatter.hero_image || post.frontmatter.featured_image}
              alt={post.frontmatter.title}
              className="w-full h-auto grayscale"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-serif prose-headings:text-navy-900 prose-headings:font-normal
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:font-sans prose-p:text-body prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-cta-600 prose-a:no-underline prose-a:border-b prose-a:border-cta-500 hover:prose-a:border-cta-600 prose-a:transition-colors
              prose-strong:text-navy-900 prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:font-sans prose-li:text-body prose-li:text-slate-600 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-cta-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
              prose-code:text-sm prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-navy-900
              prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-6 prose-pre:rounded
              prose-img:rounded prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-8">
        <div className="h-px bg-slate-200"></div>
      </div>

      {/* Author Bio */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="flex items-start gap-6 p-8 bg-slate-50 border-l-4 border-cta-500">
            <div className="flex-1">
              <p className="font-sans text-sm text-slate-500 uppercase tracking-wide mb-2">About the Author</p>
              <h3 className="font-serif text-title text-navy-900 mb-3">
                {post.frontmatter.author || "Anoop Kurup"}
              </h3>
              <p className="font-sans text-body text-slate-600 leading-relaxed mb-4">
                Business Clarity Architect helping expert-founders build systematic growth beyond referrals. Based in Bangalore.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center font-sans text-sm text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors"
              >
                More about me
                <ArrowRight className="w-3 h-3 ml-2 text-cta-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            Ready to build clarity?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            If you're stuck in referral dependence and ready for systematic growth, let's talk.
          </p>
          <Link
            href="/diagnose"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Book a Clarity Diagnosis Session
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
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
