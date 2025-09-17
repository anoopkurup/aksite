import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import LineIcon from "@/components/LineIcon";
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
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-azure text-white' 
                    : 'bg-light-gray text-charcoal hover:bg-azure hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-azure/20 to-gamboge/20 overflow-hidden">
                  {(post.frontmatter.hero_image || post.frontmatter.featured_image) ? (
                    <img 
                      src={post.frontmatter.hero_image || post.frontmatter.featured_image}
                      alt={post.frontmatter.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <LineIcon type="chart" className="text-azure" size={64} />
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    {post.frontmatter.category && (
                      <span className="text-xs font-semibold text-azure bg-azure/10 px-3 py-1 rounded-full">
                        {post.frontmatter.category}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">
                      {post.frontmatter.read_time || post.frontmatter.readTime || estimateReadingTime(post.content)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-oxford-blue mb-2 leading-snug">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-charcoal text-sm mb-4 leading-relaxed">
                    {post.frontmatter.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {formatDate(post.frontmatter.date)}
                    </span>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-azure font-semibold text-sm hover:text-blue-600 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}