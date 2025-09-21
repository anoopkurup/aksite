import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import { formatDate, estimateReadingTime } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Strategy Blog - Professional Services Lead Generation",
  description: "Practical strategies and frameworks to scale your service business. Real insights from 200+ client engagements on systematic marketing and lead generation.",
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const blogCategories = getBlogCategories();
  const categories = ["All", ...blogCategories];

  return (
    <PageTemplate 
      title="Blog"
      subtitle="Practical strategies and frameworks to scale your service business. Real insights from 200+ client engagements."
      heroBackground="gradient"
      heroIcon="monitor"
    >
      <section className="py-16 px-6 bg-solarized-base02">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-lg font-medium ${
                  index === 0
                    ? 'bg-solarized-base02 text-white'
                    : 'bg-solarized-base03 text-white/80 hover:bg-solarized-base02 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="bg-solarized-base03 rounded-lg overflow-hidden hover:bg-solarized-base02 transition-colors cursor-pointer block">
                <div className="w-full h-48 bg-gradient-to-br from-[#8fb4ff]/20 to-[#F25F5C]/20 overflow-hidden">
                  {(post.frontmatter.hero_image || post.frontmatter.featured_image) ? (
                    <img
                      src={post.frontmatter.hero_image || post.frontmatter.featured_image}
                      alt={post.frontmatter.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-solarized-magenta rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3v18h18"/>
                          <path d="m19 9-5 5-4-4-3 3"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    {post.frontmatter.category && (
                      <span className="text-xs font-semibold text-solarized-cyan bg-solarized-cyan/10 px-3 py-1 rounded-full">
                        {post.frontmatter.category}
                      </span>
                    )}
                    <span className="text-xs text-white/80">
                      {post.frontmatter.read_time || post.frontmatter.readTime || estimateReadingTime(post.content)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {post.frontmatter.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/80">
                      {formatDate(post.frontmatter.date)}
                    </span>
                    <span className="text-solarized-cyan font-semibold text-sm">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}