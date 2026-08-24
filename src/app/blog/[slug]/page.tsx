import Image from "next/image";
import { PROSE } from "@/lib/prose";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogSlugs, getRelatedBlogPosts } from '@/lib/blog';
import { markdownToHtml, formatDate, estimateReadingTime } from '@/lib/markdown';
import CTAButton from '@/components/CTAButton';
import AuthorBio from '@/components/AuthorBio';
import JsonLd from '@/components/JsonLd';
import SpokeTemplate from '@/components/templates/SpokeTemplate';
import { getPageBySlug } from '@/lib/contentMap';
import { blogPostingSchema, breadcrumbSchema, buildPageMetadata, pageMetadata } from '@/lib/seo';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await markdownToHtml(post.content);
  const readingTime = estimateReadingTime(post.content);
  const related = getRelatedBlogPosts(slug);

  // SEO content-map pages (spokes/verticals) render through the cluster
  // template: breadcrumbs, up/sibling links, FAQ schema, CLEAR handoff.
  const seoPage = getPageBySlug(slug);
  if (seoPage) {
    return (
      <SpokeTemplate
        page={seoPage}
        bodyHtml={htmlContent}
        datePublished={post.frontmatter.date}
        heroImage={post.frontmatter.hero_image || post.frontmatter.featured_image}
      />
    );
  }

  const postUrl = `/blog/${slug}`;

  return (
    <article className="min-h-screen bg-white">
      <JsonLd
        schema={[
          blogPostingSchema({
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            url: postUrl,
            datePublished: post.frontmatter.date,
            image: post.frontmatter.hero_image || post.frontmatter.featured_image,
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.frontmatter.title, url: postUrl },
          ]),
        ]}
      />
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
              <span className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em]">
                {post.frontmatter.category}
              </span>
            )}
            <span className="font-mono text-xs text-slate-500">
              {formatDate(post.frontmatter.date)}
            </span>
            <span className="font-mono text-xs text-slate-500">
              {post.frontmatter.read_time || post.frontmatter.readTime || readingTime}
            </span>
            <span className="font-mono text-xs text-slate-500">
              By{" "}
              <Link href="/about" className="text-navy-900 hover:text-navy-700 transition-colors">
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
            {/* alt="" — the hero repeats the H1 directly above it, so announcing the
                title twice is noise. It is decorative in context. */}
            <Image
              src={(post.frontmatter.hero_image || post.frontmatter.featured_image) as string}
              alt=""
              width={1200}
              height={800}
              sizes="(max-width: 896px) 100vw, 896px"
              priority
              className="w-full h-auto"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div
            className={PROSE}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-8">
        <div className="h-px bg-slate-200"></div>
      </div>

      <AuthorBio />

      {/* Related — the only sideways links on the site. Without these every post
          hangs off the index alone and no topic clusters. */}
      {related.length > 0 && (
        <section className="py-section bg-slate-50">
          <div className="max-w-6xl mx-auto px-8">
            <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-8">
              Related reading
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block bg-white border border-slate-200 p-6 hover:border-navy-300 transition-colors"
                >
                  {r.frontmatter.category && (
                    <p className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em] mb-3">
                      {r.frontmatter.category}
                    </p>
                  )}
                  <h3 className="font-serif text-title text-navy-900 mb-3 leading-snug">
                    {r.frontmatter.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {r.frontmatter.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">
            Still depending on referrals?
          </h2>
          <p className="font-sans text-body-lg text-navy-200 mb-12">
            Tell me what&apos;s going on with your sales. I&apos;ll tell you honestly if I can help.
          </p>
          <CTAButton href="/contact">Get in touch</CTAButton>
        </div>
      </section>
    </article>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  // Content-map pages carry their own metadata, incl. the noindex-until-live gate.
  const seoPage = getPageBySlug(slug);
  if (seoPage) {
    return buildPageMetadata(seoPage);
  }

  return pageMetadata({
    // seo_title (if set) keeps the SERP line under ~60 chars with the template;
    // og:title below deliberately keeps the full editorial title.
    title: post.frontmatter.seo_title || post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${slug}`,
    type: 'article',
    openGraph: {
      title: post.frontmatter.title,
      publishedTime: post.frontmatter.date,
      authors: ['Anoop Kurup'],
    },
  });
}
