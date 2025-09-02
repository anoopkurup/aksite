import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";
import { formatDate, estimateReadingTime } from "@/lib/markdown";

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  const blogCategories = getBlogCategories();
  const categories = ["All", ...blogCategories];

  return (
    <PageTemplate 
      title="Blog"
      subtitle="Practical strategies and frameworks to scale your service business. Real insights from 200+ client engagements."
      heroBackground="white"
    >
      <section className="py-16 px-6">
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
                <div className="w-full h-48 bg-gradient-to-br from-azure/20 to-gamboge/20 flex items-center justify-center">
                  <LineIcon type="chart" className="text-azure" size={64} />
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
                      href={`/blog/posts/${post.slug}`} 
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

      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">
            Get Weekly Marketing Insights
          </h2>
          <p className="text-xl text-charcoal mb-8">
            Join 2,500+ service business owners who get practical, actionable insights every Tuesday.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-full text-oxford-blue focus:outline-none focus:ring-4 focus:ring-azure/30 border border-border-gray"
            />
            <button className="bg-azure text-white px-6 py-3 rounded-full font-semibold hover:bg-oxford-blue transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-charcoal mt-4">
            <LineIcon type="shield" className="inline mr-2" size={16} />
            No spam. Practical insights only. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </PageTemplate>
  );
}