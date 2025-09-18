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
      <section className="py-16 px-6 bg-[#fef7ed]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-lg font-medium ${
                  index === 0
                    ? 'bg-[#1e3a8a] text-white'
                    : 'bg-white text-[#374151] hover:bg-[#1e3a8a] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-[#8fb4ff]/20 to-[#FFBF00]/20 overflow-hidden">
                  {(post.frontmatter.hero_image || post.frontmatter.featured_image) ? (
                    <img
                      src={post.frontmatter.hero_image || post.frontmatter.featured_image}
                      alt={post.frontmatter.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center">
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
                      <span className="text-xs font-semibold text-[#1e40af] bg-[#1e40af]/10 px-3 py-1 rounded-full">
                        {post.frontmatter.category}
                      </span>
                    )}
                    <span className="text-xs text-[#6b7280]">
                      {post.frontmatter.read_time || post.frontmatter.readTime || estimateReadingTime(post.content)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2 leading-snug">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-[#374151] text-sm mb-4 leading-relaxed">
                    {post.frontmatter.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6b7280]">
                      {formatDate(post.frontmatter.date)}
                    </span>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-[#1e40af] font-semibold text-sm hover:text-[#1e3a8a]"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}