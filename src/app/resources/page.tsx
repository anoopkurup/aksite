import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Marketing Webinars | Educational Resources",
  description: "Learn from live and recorded webinars on marketing systems, lead generation, and AI-powered workflows. Practical strategies you can implement immediately.",
};

export default function ResourcesPage() {
  const resources = [
    {
      title: "Webinars",
      description: "Live and recorded sessions on marketing systems, lead generation, and AI-powered workflows. Learn proven strategies you can implement immediately.",
      icon: "🎥",
      features: [
        "Live Q&A sessions",
        "On-demand recordings",
        "Actionable frameworks",
        "Implementation guides"
      ],
      link: "/resources/webinars",
      linkText: "Watch Webinars",
      badge: "Available Now"
    },
    // Hidden for now - will be added later
    // {
    //   title: "Case Studies",
    //   description: "Real results from businesses that transformed their marketing with systematic approaches.",
    //   icon: "📊",
    //   features: ["Real client success stories", "Industry-specific results", "Implementation strategies", "Measurable outcomes"],
    //   link: "/case-studies",
    //   linkText: "View Case Studies",
    //   badge: "Coming Soon"
    // },
    // {
    //   title: "E-books",
    //   description: "Practical, no-fluff guides on positioning, AI-enabled lead generation, and content systems.",
    //   icon: "📚",
    //   features: ["Step-by-step frameworks", "Editable templates included", "Real examples & worksheets", "Lifetime updates"],
    //   link: "/resources/ebooks",
    //   linkText: "Browse E-books",
    //   badge: "Coming Soon"
    // }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              Resources
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Marketing Resources
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
            Learn from live and recorded webinars on marketing systems, lead generation, and AI-powered workflows. Practical strategies you can implement immediately.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Detailed Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Learning Resources</h2>
            <p className="text-lg text-gray-700">Practical webinars to help you build systematic marketing and predictable growth.</p>
          </div>

          <div className="space-y-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{resource.icon}</div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-navy-900">{resource.title}</h3>
                          <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold">
                            {resource.badge}
                          </span>
                        </div>
                        <p className="text-lg text-gray-700">{resource.description}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h4 className="text-lg font-bold text-navy-900 mb-4">What's Included:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {resource.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 md:w-48">
                    <Button asChild size="lg" className="w-full bg-cta-500 hover:bg-cta-600 text-white font-bold">
                      <Link href={resource.link}>{resource.linkText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
