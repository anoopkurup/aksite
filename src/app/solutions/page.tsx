import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Solutions - Build Visibility, Generate Leads, Grow Your Business",
  description: "Three outcome-focused marketing solutions for professional service firms: Build visibility and authority, generate consistent leads, or get a complete marketing system that runs itself.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Build Visibility & Authority",
      tagline: "Stay top-of-mind. Build credibility.",
      problem: "You're doing good work, but nobody knows about it. Even past clients forget you exist.",
      outcome: "Consistent presence across LinkedIn, blogs, and email — so your expertise stays visible.",
      options: [
        {
          type: "DIY",
          name: "LinkedIn Sales Activation",
          description: "30-day email course with daily videos, templates, and tasks to build your LinkedIn system.",
          investment: "One-time",
          href: "/solutions/visibility#linkedin-activation"
        },
        {
          type: "Done For You",
          name: "Content Growth System",
          description: "We handle all content — blogs, LinkedIn, newsletters — planned, written, and published monthly.",
          investment: "₹25,000 – ₹30,000/month",
          href: "/solutions/visibility#content-growth"
        }
      ],
      icon: "visibility",
      href: "/solutions/visibility"
    },
    {
      title: "Generate Consistent Leads",
      tagline: "Build a predictable pipeline.",
      problem: "Referrals dry up. You need conversations with qualified prospects — not feast-or-famine cycles.",
      outcome: "Systematic outreach that creates 10+ qualified conversations every month.",
      options: [
        {
          type: "Done With You",
          name: "100-Day Lead Generation Sprint",
          description: "Guided program with weekly coaching to build your outreach system and generate your first leads.",
          investment: "100 days",
          href: "/solutions/leads#100-day-sprint"
        },
        {
          type: "Done For You",
          name: "Lead Generation System",
          description: "We research 100-200 prospects monthly, run personalized outreach, and track everything in your CRM.",
          investment: "₹40,000 – ₹55,000/month",
          href: "/solutions/leads#lead-gen-system"
        }
      ],
      icon: "leads",
      href: "/solutions/leads"
    },
    {
      title: "Complete Marketing System",
      tagline: "Marketing handled. Completely.",
      problem: "You want marketing off your plate — consistently executed, professionally managed, measurably improving.",
      outcome: "Full-service marketing operations: content, leads, automation, and quarterly strategy.",
      options: [
        {
          type: "Done For You",
          name: "Marketing Operations Partner",
          description: "Complete system combining content, lead generation, automation, and ongoing optimization.",
          investment: "₹70,000 – ₹1,00,000/month",
          href: "/solutions/complete-system"
        }
      ],
      icon: "system",
      href: "/solutions/complete-system"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Three Ways Your<br />Marketing System Can Work
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
            Whether you need visibility, leads, or complete marketing operations — choose the solution that matches your goal and your level of involvement.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Quick Decision Guide */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Which Solution Do You Need?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Start with your biggest marketing challenge right now:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-navy-400 transition-all">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Nobody Knows You Exist</h3>
              <p className="text-gray-700 mb-4">You're invisible. Even past clients forget about you between projects.</p>
              <Button asChild className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                <Link href="/solutions/visibility">Build Visibility</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-navy-400 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Referrals Are Unpredictable</h3>
              <p className="text-gray-700 mb-4">You need a steady flow of qualified prospects, not feast-or-famine cycles.</p>
              <Button asChild className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                <Link href="/solutions/leads">Generate Leads</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-navy-400 transition-all">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Marketing Feels Overwhelming</h3>
              <p className="text-gray-700 mb-4">You want the whole thing handled — content, leads, automation, everything.</p>
              <Button asChild className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                <Link href="/solutions/complete-system">Complete System</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Detailed Solutions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">All Solutions at a Glance</h2>
            <p className="text-lg text-gray-700">Compare your options and choose what fits your goals and budget.</p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-navy-900 mb-2">{solution.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{solution.tagline}</p>
                  <div className="bg-navy-50 border-l-4 border-[#FFBF00] p-4 rounded">
                    <p className="text-navy-900"><strong>The Problem:</strong> {solution.problem}</p>
                    <p className="text-navy-900 mt-2"><strong>The Outcome:</strong> {solution.outcome}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-navy-900 mb-4">Your Options:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {solution.options.map((option, optIndex) => (
                      <div key={optIndex} className="border border-gray-200 rounded-lg p-6 hover:border-navy-400 transition-all">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold mb-2">
                            {option.type}
                          </span>
                          <h5 className="text-xl font-bold text-navy-900">{option.name}</h5>
                        </div>
                        <p className="text-gray-700 mb-4">{option.description}</p>
                        <p className="text-sm text-gray-600 mb-4"><strong>Investment:</strong> {option.investment}</p>
                        <Button asChild className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                          <Link href={option.href}>Learn More</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-gray-200">
                  <Button asChild variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-50">
                    <Link href={solution.href} className="flex items-center">
                      See Full Details
                      <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m12 5 7 7-7 7"/>
                        <path d="M5 12h14"/>
                      </svg>
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

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-navy-800 to-navy-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Not Sure Which Solution Fits Best?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's have a quick conversation about your goals. You'll walk away with a clear action plan — even if we don't work together.
          </p>
          <Button asChild size="lg" className="bg-cta-500 text-white hover:bg-cta-600 px-8 py-4 rounded-lg font-bold text-lg">
            <Link href="/contact" className="flex items-center">
              Book a Discovery Call
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 5 7 7-7 7"/>
                <path d="M5 12h14"/>
              </svg>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
