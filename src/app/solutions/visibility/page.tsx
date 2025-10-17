import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Visibility & Authority - Marketing Solutions",
  description: "Stay top-of-mind and build credibility with systematic content marketing. Choose DIY LinkedIn activation or Done-For-You content growth system.",
};

export default function VisibilityPage() {
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
            Build Visibility & Authority
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
            You're doing excellent work, but nobody knows about it. Stay top-of-mind with consistent, credible presence across the channels that matter.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">The Visibility Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Most professional service firms face the same challenge: they do great work, but stay invisible between projects.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Inconsistent publishing",
                description: "You post when you have time. Weeks go by without updates. Your audience forgets you exist."
              },
              {
                title: "Generic content",
                description: "When you do post, it's rushed and generic. Nothing that positions you as the obvious expert."
              },
              {
                title: "No strategy",
                description: "Random topics, no editorial calendar, no connection to your business goals."
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Two Ways to Build Visibility</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose the level of involvement that fits your time, budget, and commitment to building consistent presence.
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
                        DIY
                      </span>
                    </div>
                    <div className="text-navy-900 font-bold text-xl mb-1">LinkedIn Sales Activation</div>
                    <div className="text-sm text-gray-600">Build it yourself, systematically</div>
                  </th>
                  <th className="text-center py-4 px-4 w-3/8">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold">
                        Done For You
                      </span>
                    </div>
                    <div className="text-navy-900 font-bold text-xl mb-1">Content Growth System</div>
                    <div className="text-sm text-gray-600">We handle everything</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-gray-700 font-medium">Format</td>
                  <td className="text-center py-4 px-4 text-gray-700">30-day email course</td>
                  <td className="text-center py-4 px-4 text-gray-700">Monthly retainer</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-gray-700 font-medium">Your Involvement</td>
                  <td className="text-center py-4 px-4 text-gray-700">Daily tasks (30 mins/day)</td>
                  <td className="text-center py-4 px-4 text-gray-700">Monthly interviews only</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-gray-700 font-medium">What You Get</td>
                  <td className="text-center py-4 px-4 text-gray-700">Templates, videos, frameworks</td>
                  <td className="text-center py-4 px-4 text-gray-700">4 blogs, 8 LinkedIn posts, 2 newsletters/month</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-gray-700 font-medium">Timeline</td>
                  <td className="text-center py-4 px-4 text-gray-700">30 days to build foundation</td>
                  <td className="text-center py-4 px-4 text-gray-700">Ongoing, month-to-month</td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                  <td className="py-4 pr-6 text-gray-700 font-medium">Investment</td>
                  <td className="text-center py-4 px-4 text-gray-700 font-semibold">One-time fee</td>
                  <td className="text-center py-4 px-4 text-gray-700 font-semibold">₹25,000 – ₹30,000/month</td>
                </tr>
                <tr>
                  <td className="py-6 pr-6"></td>
                  <td className="text-center py-6 px-4">
                    <Button asChild className="bg-cta-500 hover:bg-cta-600 text-white font-semibold w-full">
                      <Link href="#linkedin-activation">Learn More</Link>
                    </Button>
                  </td>
                  <td className="text-center py-6 px-4">
                    <Button asChild className="bg-cta-500 hover:bg-cta-600 text-white font-semibold w-full">
                      <Link href="#content-growth">Learn More</Link>
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
                  DIY
                </span>
                <h3 className="text-2xl font-bold text-navy-900">LinkedIn Sales Activation</h3>
                <p className="text-gray-600">Build it yourself, systematically</p>
              </div>
              <div className="space-y-3 mb-6">
                <div><strong className="text-navy-900">Format:</strong> 30-day email course</div>
                <div><strong className="text-navy-900">Your Involvement:</strong> Daily tasks (30 mins/day)</div>
                <div><strong className="text-navy-900">What You Get:</strong> Templates, videos, frameworks</div>
                <div><strong className="text-navy-900">Timeline:</strong> 30 days to build foundation</div>
                <div><strong className="text-navy-900">Investment:</strong> One-time fee</div>
              </div>
              <Button asChild className="w-full bg-cta-500 hover:bg-cta-600 text-white font-semibold">
                <Link href="#linkedin-activation">Learn More</Link>
              </Button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold mb-2">
                  Done For You
                </span>
                <h3 className="text-2xl font-bold text-navy-900">Content Growth System</h3>
                <p className="text-gray-600">We handle everything</p>
              </div>
              <div className="space-y-3 mb-6">
                <div><strong className="text-navy-900">Format:</strong> Monthly retainer</div>
                <div><strong className="text-navy-900">Your Involvement:</strong> Monthly interviews only</div>
                <div><strong className="text-navy-900">What You Get:</strong> 4 blogs, 8 LinkedIn posts, 2 newsletters/month</div>
                <div><strong className="text-navy-900">Timeline:</strong> Ongoing, month-to-month</div>
                <div><strong className="text-navy-900">Investment:</strong> ₹25,000 – ₹30,000/month</div>
              </div>
              <Button asChild className="w-full bg-cta-500 hover:bg-cta-600 text-white font-semibold">
                <Link href="#content-growth">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Which Should You Choose? */}
          <div className="bg-navy-50 border-l-4 border-[#FFBF00] p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Which Should You Choose?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-navy-900 mb-3">Choose DIY (LinkedIn Sales Activation) if:</h4>
                <ul className="space-y-2 text-navy-900/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    You have 30 minutes per day to invest
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    LinkedIn is your primary channel
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    You want to learn the system yourself
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Budget is a constraint right now
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-3">Choose Done For You (Content Growth) if:</h4>
                <ul className="space-y-2 text-navy-900/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    You want marketing completely off your plate
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Multi-channel presence matters (LinkedIn, blog, email)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Consistency matters more than control
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Your time is better spent on client work
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* LinkedIn Sales Activation Detail */}
      <section id="linkedin-activation" className="py-20 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold mb-4">
              DIY
            </span>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">LinkedIn Sales Activation</h2>
            <p className="text-xl text-gray-700">
              30-day email course that transforms your LinkedIn profile into a systematic lead generation machine.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">What You'll Build in 30 Days</h3>
            <div className="space-y-4">
              {[
                "Optimized LinkedIn profile that positions you as the clear expert",
                "Content templates and frameworks for consistent posting",
                "Outreach sequences that start conversations (not pitches)",
                "Connection strategy to build a qualified network",
                "Daily execution system to maintain momentum"
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
              <Link href="/workshops/linkedin-sales-activation">View Full Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Content Growth System Detail */}
      <section id="content-growth" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-cta-100 text-cta-900 rounded-full text-sm font-semibold mb-4">
              Done For You
            </span>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Content Growth System</h2>
            <p className="text-xl text-gray-700">
              Get your content handled — from blogs and LinkedIn posts to newsletters — all planned, written, and published on schedule.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">What's Included Every Month</h3>
            <div className="space-y-4 mb-8">
              {[
                "4 blog articles optimized for SEO and thought leadership",
                "8 LinkedIn posts across formats (carousels, stories, insights)",
                "2 newsletters with curated insights for your list",
                "Monthly content plan aligned with your business goals",
                "Monthly check-in to review performance and adjust"
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
              <p className="text-gray-700 mb-2"><strong>Investment:</strong> ₹25,000 – ₹30,000/month</p>
              <p className="text-gray-700"><strong>Commitment:</strong> Month-to-month, cancel anytime</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-cta-500 hover:bg-cta-600 text-white font-bold">
              <Link href="/services/content-growth">View Full Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-navy-800 to-navy-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Visibility System?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's talk about which approach fits your goals, time, and budget. You'll walk away with clarity — even if we don't work together.
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
