import Link from "next/link";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import { formatDate, estimateReadingTime } from "@/lib/markdown";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Anoop Kurup",
  description: "Practical insights on building clarity in your business. Thoughts on strategy, positioning, and growth for expert-founders.",
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const blogCategories = getBlogCategories();
  const categories = ["All", ...blogCategories];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-8 font-medium">
            Blog
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            Clarity, strategy, and growth.
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-3xl leading-relaxed">
            Practical insights on building clarity in your business. Thoughts on strategy, positioning, and growth for expert-founders.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`font-sans text-sm px-4 py-2 transition-colors ${
                  index === 0
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-slate-600 hover:text-navy-900 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-section bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-slate-100 overflow-hidden hover:border-cta-500 transition-all"
              >
                {/* Image */}
                <div className="w-full aspect-video bg-slate-100 overflow-hidden">
                  {(post.frontmatter.hero_image || post.frontmatter.featured_image) ? (
                    <img
                      src={post.frontmatter.hero_image || post.frontmatter.featured_image}
                      alt={post.frontmatter.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                      <div className="w-12 h-12 border-2 border-slate-300 rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    {post.frontmatter.category && (
                      <span className="font-sans text-xs text-cta-600 uppercase tracking-wide font-medium">
                        {post.frontmatter.category}
                      </span>
                    )}
                    <span className="font-sans text-xs text-slate-400">
                      {post.frontmatter.read_time || post.frontmatter.readTime || estimateReadingTime(post.content)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-title text-navy-900 mb-3 leading-tight group-hover:text-cta-600 transition-colors">
                    {post.frontmatter.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-body text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.frontmatter.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="font-sans text-xs text-slate-500">
                      {formatDate(post.frontmatter.date)}
                    </span>
                    <span className="font-sans text-sm text-cta-600 flex items-center gap-1">
                      Read
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-navy-900 mb-6">
            Want help applying these ideas?
          </h2>
          <p className="font-sans text-body-lg text-slate-500 mb-8">
            If you're stuck and want clarity on what's actually holding you back, let's talk.
          </p>
          <Link
            href="/diagnose"
            className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
          >
            Book a Clarity Diagnosis Session
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>
    </>
  );
}
