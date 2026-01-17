import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-books Library - Practical Marketing Guides & Templates",
  description: "Practical, no-fluff guides on positioning, AI-enabled lead generation, and content systems. Each e-book includes templates you can put to work today.",
};

export default function EbooksPage() {
  const ebooks = [
    {
      title: "The Lead Machine Method™",
      description: "Turn scattered marketing into a predictable pipeline using systems, not hacks. Includes frameworks and worksheets.",
      tags: ["Strategy"],
      price: "Free",
      pages: 45,
      featured: true,
      comingSoon: true
    },
    {
      title: "AI Lead Machine Playbook",
      description: "Prompts and workflows to automate content and capture demand—without losing your brand's voice.",
      tags: ["AI & Automation"],
      price: "$29",
      pages: 52,
      comingSoon: true
    },
    {
      title: "LinkedIn Post Systems",
      description: "Proven formats, swipe files, and planning templates to build authority and inbound leads.",
      tags: ["Content"],
      price: "$19",
      pages: 38,
      comingSoon: true
    },
    {
      title: "Instagram Content Engine",
      description: "A lightweight system for consistent, on-brand posts and stories that convert attention into leads.",
      tags: ["Content"],
      price: "$19",
      pages: 34,
      comingSoon: true
    },
    {
      title: "Blog Article Blueprint",
      description: "Research-to-draft workflows for authority-building, SEO-friendly articles in half the time.",
      tags: ["Writing"],
      price: "$24",
      pages: 41,
      comingSoon: true
    },
    {
      title: "Positioning Playbook",
      description: "Sharpen your value proposition and make competitors irrelevant with clear, confident messaging.",
      tags: ["Positioning"],
      price: "$34",
      pages: 67,
      comingSoon: true
    }
  ];

  const categories = ["All", "Strategy", "AI & Automation", "Content", "Writing", "Positioning"];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link href="/resources" className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              All Resources
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            E-books Library
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
            Practical, no-fluff guides on positioning, AI-enabled lead generation, and content systems. Each e-book includes templates you can put to work today.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Featured E-book */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-navy-50 to-cta-50 rounded-lg p-8 md:p-12 border border-navy-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-64 bg-gradient-to-br from-navy-600 to-navy-800 rounded-lg shadow-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📖</div>
                    <div className="text-sm font-medium">E-BOOK</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-cta-500 text-white rounded-full text-sm font-semibold mb-3">
                    Featured & Free
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">The Lead Machine Method™</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    My flagship guide to building predictable marketing systems. Usually $39, free for newsletter subscribers. Turn scattered marketing into a predictable pipeline using systems, not hacks.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    </svg>
                    45 pages
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                      <path d="M21 3v5h-5"/>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                      <path d="M8 16H3v5"/>
                    </svg>
                    Lifetime updates
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-cta-500 hover:bg-cta-600 text-white font-bold">
                    <Link href="/#newsletter">Get Free Copy</Link>
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-gray-600 px-4">
                    <svg className="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Subscribe to get instant access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* What's Included */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">What's Included in Every E-book</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Step-by-step frameworks",
                description: "Proven systems you can implement immediately"
              },
              {
                title: "Editable templates",
                description: "Customize for your business needs"
              },
              {
                title: "Real examples",
                description: "See how others have implemented successfully"
              },
              {
                title: "Checklists & worksheets",
                description: "Guide your progress step by step"
              },
              {
                title: "Lifetime updates",
                description: "Get improved versions as content evolves"
              },
              {
                title: "Team license included",
                description: "Share with up to 5 people in your organization"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* E-books Catalog */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Complete E-books Catalog</h2>
            <p className="text-lg text-gray-700">Actionable guides for every aspect of your marketing system.</p>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-cta-50 border-l-4 border-cta-500 p-6 rounded-lg mb-12">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-cta-600 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <div>
                <h3 className="text-lg font-bold text-cta-900 mb-1">E-books Library Coming Soon</h3>
                <p className="text-cta-800">
                  We're currently developing our complete e-books library with templates, frameworks, and worksheets. <strong>Subscribe to the newsletter to get notified when they launch</strong> and receive The Lead Machine Method™ e-book free immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((ebook, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-navy-400 hover:shadow-lg transition-all relative">
                {ebook.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block px-3 py-1 bg-navy-900 text-white rounded-full text-xs font-semibold">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="aspect-[3/4] bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center relative">
                  {ebook.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-cta-500 text-white rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📖</div>
                    <div className="text-sm font-medium">E-BOOK</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      {ebook.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{ebook.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{ebook.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{ebook.pages} pages</span>
                    <span className="font-bold text-lg text-navy-900">{ebook.price}</span>
                  </div>
                  <Button asChild className="w-full bg-navy-900 hover:bg-navy-800 text-white" disabled={ebook.comingSoon}>
                    <Link href={ebook.featured ? "/#newsletter" : "#"}>
                      {ebook.featured ? "Get Free Copy" : ebook.comingSoon ? "Notify Me" : "Download"}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Perfect For Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Marketing managers and directors",
              "Business owners and founders",
              "Consultants and agencies",
              "Anyone building systematic marketing processes"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
}
