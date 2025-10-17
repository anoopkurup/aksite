import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate Consistent Leads - Marketing Solutions",
  description: "Build a predictable lead pipeline with systematic outreach. Choose Done-With-You sprint or Done-For-You lead generation system.",
};

export default function LeadsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link href="/solutions" className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              All Solutions
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Generate Consistent Leads
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
            Referrals are great — until they dry up. Build a predictable lead pipeline with systematic outreach that creates qualified conversations every month.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">The Lead Generation Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Most professional service firms rely on referrals — which means unpredictable revenue, long dry spells, and constant feast-or-famine cycles.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Referrals are fragile",
                description: "One bad quarter, and your pipeline is empty. You can't control when referrals happen or who they send your way."
              },
              {
                title: "No systematic outreach",
                description: "You know you should reach out to prospects, but it feels pushy. So you wait — and nothing happens."
              },
              {
                title: "Can't scale relationships",
                description: "Your network is finite. Without proactive outreach, you're limited by the people you already know."
              }
            ].map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{problem.title}</h3>
                <p className="text-gray-700">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Solution Options */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Two Ways to Generate Leads</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose the level of support that fits your time, learning curve, and commitment to building a predictable pipeline.
            </p>
          </div>

          {/* Comparison Table - Desktop */}
          <div className="hidden lg:block bg-gray-50 rounded-lg p-8 mb-12">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 pr-6 text-navy-900 font-bold w-1/4"></th>
                  <th className="text-center py-4 px-4 w-3/8">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold">
                        Done With You
                      </span>
                    </div>
                    <div className="text-navy-900 font-bold text-xl mb-1">100-Day Lead Generation Sprint</div>
                    <div className="text-sm text-gray-600">Build it with weekly guidance</div>
                  </th>
                  <th className="text-center py-4 px-4 w-3/8">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold">
                        Done For You
                      </span>
                    </div>
                    <div className="text-navy-900 font-bold text-xl mb-1">Lead Generation System</div>
                    <div className="text-sm text-gray-600">We handle everything</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-gray-700 font-medium">Format</td>
                  <td className="text-center py-4 px-4 text-gray-700">100-day guided program</td>
                  <td className="text-center py-4 px-4 text-gray-700">Monthly retainer</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-gray-700 font-medium">Your Involvement</td>
                  <td className="text-center py-4 px-4 text-gray-700">Daily execution + weekly calls</td>
                  <td className="text-center py-4 px-4 text-gray-700">Provide ICP criteria only</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-gray-700 font-medium">What You Get</td>
                  <td className="text-center py-4 px-4 text-gray-700">Systems + coaching to build your own engine</td>
                  <td className="text-center py-4 px-4 text-gray-700">100-200 prospects researched, outreach done</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-gray-700 font-medium">Timeline</td>
                  <td className="text-center py-4 px-4 text-gray-700">100 days to first results</td>
                  <td className="text-center py-4 px-4 text-gray-700">Leads from month 1, ongoing</td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                  <td className="py-4 pr-6 text-gray-700 font-medium">Investment</td>
                  <td className="text-center py-4 px-4 text-gray-700 font-semibold">100-day program fee</td>
                  <td className="text-center py-4 px-4 text-gray-700 font-semibold">₹40,000 – ₹55,000/month</td>
                </tr>
                <tr>
                  <td className="py-6 pr-6"></td>
                  <td className="text-center py-6 px-4">
                    <Button asChild className="bg-cta-500 hover:bg-cta-600 text-white font-semibold w-full">
                      <Link href="#100-day-sprint">Learn More</Link>
                    </Button>
                  </td>
                  <td className="text-center py-6 px-4">
                    <Button asChild className="bg-cta-500 hover:bg-cta-600 text-white font-semibold w-full">
                      <Link href="#lead-gen-system">Learn More</Link>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-8 mb-12">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold mb-2">
                  Done With You
                </span>
                <h3 className="text-2xl font-bold text-navy-900">100-Day Lead Generation Sprint</h3>
                <p className="text-gray-600">Build it with weekly guidance</p>
              </div>
              <div className="space-y-3 mb-6">
                <div><strong className="text-navy-900">Format:</strong> 100-day guided program</div>
                <div><strong className="text-navy-900">Your Involvement:</strong> Daily execution + weekly calls</div>
                <div><strong className="text-navy-900">What You Get:</strong> Systems + coaching to build your own engine</div>
                <div><strong className="text-navy-900">Timeline:</strong> 100 days to first results</div>
                <div><strong className="text-navy-900">Investment:</strong> 100-day program fee</div>
              </div>
              <Button asChild className="w-full bg-cta-500 hover:bg-cta-600 text-white font-semibold">
                <Link href="#100-day-sprint">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold mb-2">
                  Done For You
                </span>
                <h3 className="text-2xl font-bold text-navy-900">Lead Generation System</h3>
                <p className="text-gray-600">We handle everything</p>
              </div>
              <div className="space-y-3 mb-6">
                <div><strong className="text-navy-900">Format:</strong> Monthly retainer</div>
                <div><strong className="text-navy-900">Your Involvement:</strong> Provide ICP criteria only</div>
                <div><strong className="text-navy-900">What You Get:</strong> 100-200 prospects researched, outreach done</div>
                <div><strong className="text-navy-900">Timeline:</strong> Leads from month 1, ongoing</div>
                <div><strong className="text-navy-900">Investment:</strong> ₹40,000 – ₹55,000/month</div>
              </div>
              <Button asChild className="w-full bg-cta-500 hover:bg-cta-600 text-white font-semibold">
                <Link href="#lead-gen-system">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Which Should You Choose? */}
          <div className="bg-navy-50 border-l-4 border-[#FFBF00] p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Which Should You Choose?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-navy-900 mb-3">Choose Done With You (100-Day Sprint) if:</h4>
                <ul className="space-y-2 text-navy-900/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    You want to learn the system (not just get leads)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    You have time to execute daily tasks
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    You want coaching and accountability
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Budget for one-time investment works better
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-3">Choose Done For You (Lead Gen System) if:</h4>
                <ul className="space-y-2 text-navy-900/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    You want leads handled completely
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Outreach feels uncomfortable or time-consuming
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    You need results fast (not in 100 days)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Your time is better spent closing deals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* 100-Day Sprint Detail */}
      <section id="100-day-sprint" className="py-20 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold mb-4">
              Done With You
            </span>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">100-Day Lead Generation Sprint</h2>
            <p className="text-xl text-gray-700">
              Guided program with weekly coaching to build your outreach system and generate your first qualified leads.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">What You'll Build in 100 Days</h3>
            <div className="space-y-4">
              {[
                "Your Ideal Client Profile (ICP) and prospect research system",
                "Outreach sequences that start conversations, not pitches",
                "Daily execution habits to maintain momentum",
                "CRM workflows to track and nurture leads",
                "10+ qualified conversations with potential clients",
                "A repeatable system you can run independently"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-cta-500 hover:bg-cta-600 text-white font-bold">
              <Link href="/workshops/100-day-lead-generation-sprint">View Full Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Lead Generation System Detail */}
      <section id="lead-gen-system" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold mb-4">
              Done For You
            </span>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Lead Generation System</h2>
            <p className="text-xl text-gray-700">
              We research 100-200 prospects monthly, run personalized outreach, and track everything in your CRM — so you can focus on closing deals.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">What's Included Every Month</h3>
            <div className="space-y-4 mb-8">
              {[
                "100–200 qualified prospect list based on your ICP",
                "Personalized outreach campaigns (email + LinkedIn)",
                "CRM tracking dashboard showing all activity",
                "Monthly optimization to improve response rates",
                "Detailed reporting on conversations, responses, meetings"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 mb-2"><strong>Investment:</strong> ₹40,000 – ₹55,000/month</p>
              <p className="text-gray-700"><strong>Commitment:</strong> Month-to-month, cancel anytime</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-cta-500 hover:bg-cta-600 text-white font-bold">
              <Link href="/services/lead-generation">View Full Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-navy-800 to-navy-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Build a Predictable Pipeline?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's talk about which approach fits your timeline, involvement level, and goals. You'll walk away with a clear plan — even if we don't work together.
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
