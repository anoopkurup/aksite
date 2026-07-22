import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import { formatDate, estimateReadingTime } from "@/lib/markdown";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo";

/** "Lead Generation" -> "lead-generation" */
export function categorySlug(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * The blog index, shared by /blog (all posts) and /blog/category/[category].
 *
 * Categories are real routes rather than ?query params so both pages stay static
 * and each category is independently indexable. (The filter used to be a row of
 * stateless buttons inside a server component: they looked selected, styled "All"
 * as active, and silently ignored every click.)
 */
export default function BlogIndex({ activeCategory }: { activeCategory?: string }) {
  const allPosts = getAllBlogPosts();
  const categories = getBlogCategories();
  const active = activeCategory ?? "All";
  const posts =
    active === "All" ? allPosts : allPosts.filter((p) => p.frontmatter.category === active);

  const path = active === "All" ? "/blog" : `/blog/category/${categorySlug(active)}`;

  return (
    <>
      <JsonLd
        schema={[
          collectionPageSchema({
            name: active === "All" ? "Blog" : `${active} | Blog`,
            description:
              active === "All"
                ? "Practical writing on sales for B2B services businesses."
                : `Writing on ${active.toLowerCase()} for B2B services businesses.`,
            url: path,
            items: posts.map((p) => ({ title: p.frontmatter.title, url: `/blog/${p.slug}` })),
          }),
          breadcrumbSchema(
            active === "All"
              ? [
                  { name: "Home", url: "/" },
                  { name: "Blog", url: "/blog" },
                ]
              : [
                  { name: "Home", url: "/" },
                  { name: "Blog", url: "/blog" },
                  { name: active, url: path },
                ]
          ),
        ]}
      />
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <p className="font-mono text-xs text-navy-600 tracking-[0.18em] uppercase mb-8">Blog</p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            Sales, offers, and pipeline.
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-3xl leading-relaxed">
            Practical writing for B2B services businesses: packaging an offer the market responds
            to, proving it against real prospects, and building a weekly rhythm that keeps producing
            conversations.
          </p>
        </div>
      </section>

      {/* Filter + grid — one section: two adjacent slate-50 sections read as one
          undifferentiated slab. */}
      <section className="py-section bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <nav aria-label="Filter posts by category" className="flex flex-wrap gap-3 mb-12">
            {["All", ...categories].map((name) => {
              const isActive = name === active;
              return (
                <Link
                  key={name}
                  href={name === "All" ? "/blog" : `/blog/category/${categorySlug(name)}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-sans text-sm px-4 py-2 transition-colors ${
                    isActive
                      ? "bg-navy-900 text-white"
                      : "bg-white text-slate-600 hover:text-navy-900 border border-slate-200"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* A real h2: the index used to jump h1 -> 25x h3, with its only h2 after
              the whole grid. */}
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-navy-600 mb-8">
            {active === "All" ? "All writing" : active} · {posts.length}{" "}
            {posts.length === 1 ? "post" : "posts"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-slate-100 overflow-hidden hover:border-navy-300 transition-all"
              >
                <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                  {post.frontmatter.hero_image || post.frontmatter.featured_image ? (
                    <Image
                      src={(post.frontmatter.hero_image || post.frontmatter.featured_image) as string}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                      <div className="w-12 h-12 border-2 border-slate-300 rounded-full" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {post.frontmatter.category && (
                      <span className="font-mono text-xs text-navy-600 uppercase tracking-[0.18em]">
                        {post.frontmatter.category}
                      </span>
                    )}
                    <span className="font-mono text-xs text-slate-500">
                      {post.frontmatter.read_time ||
                        post.frontmatter.readTime ||
                        estimateReadingTime(post.content)}
                    </span>
                  </div>

                  <h3 className="font-serif text-title text-navy-900 mb-3 leading-tight">
                    {post.frontmatter.title}
                  </h3>

                  <p className="font-sans text-body text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.frontmatter.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="font-mono text-xs text-slate-500">
                      {formatDate(post.frontmatter.date)}
                    </span>
                    <span className="font-sans text-sm text-navy-900 flex items-center gap-1">
                      Read
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The navy closer every other page ends with. */}
      <section className="py-section bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-display text-white mb-6">Want help applying these ideas?</h2>
          <p className="font-sans text-body-lg text-navy-200 mb-8">
            Find out how predictable your pipeline really is. Ten questions, three minutes, an honest
            score and the one thing to fix first.
          </p>
          <CTAButton href="/scorecard">Take the Sales Scorecard</CTAButton>
        </div>
      </section>
    </>
  );
}
