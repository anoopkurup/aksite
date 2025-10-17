import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Marketing System - Marketing Solutions",
  description: "Get marketing completely off your plate. Full-service marketing operations combining content, lead generation, automation, and strategy.",
};

export default function CompleteSystemPage() {
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
            Complete Marketing System
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
            Get marketing completely off your plate. Full-service operations combining content growth, lead generation, automation, and ongoing strategy — all managed and measured.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">When Piecemeal Marketing Isn't Enough</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You've tried scattered tactics — a bit of content here, some outreach there. It's not working because marketing isn't a collection of random tasks. It's a system.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "No one owns the whole picture",
                description: "Content isn't connected to lead generation. Outreach doesn't leverage your content. Nothing is optimized or measured holistically."
              },
              {
                title: "Inconsistent execution",
                description: "Some months you publish. Other months you're dark. Your pipeline suffers because there's no steady rhythm."
              },
              {
                title: "You're still the bottleneck",
                description: "Even with contractors or tools, you're managing everything. Marketing should free your time, not consume it."
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

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Marketing Operations Partner</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Your complete marketing function — managed, measured, and aligned with your growth goals. Combines content, leads, and automation under one structured program.
            </p>
            <div className="inline-block px-4 py-2 bg-navy-50 border border-navy-200 rounded-lg">
              <span className="text-navy-900 font-semibold">Investment: ₹70,000 – ₹1,00,000/month</span>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">Everything You Need in One System</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Content Growth */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14,2 14,8 20,8"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900">Full Content Growth System</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    4 blog articles per month
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    8 LinkedIn posts per month
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    2 newsletters each month
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Monthly content plan
                  </li>
                </ul>
              </div>

              {/* Lead Generation */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900">Full Lead Generation System</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    100–200 prospect list monthly
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Personalized outreach campaigns
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    CRM tracking dashboard
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Monthly optimization
                  </li>
                </ul>
              </div>

              {/* Marketing Automation */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900">Marketing Automation & Workflows</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Email sequences & nurturing
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    CRM workflow optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Lead scoring & segmentation
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Monthly improvements
                  </li>
                </ul>
              </div>

              {/* Strategy & Reporting */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900">Strategy & Reporting</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Quarterly strategy review
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Monthly performance reports
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    KPI tracking dashboards
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Goal alignment sessions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Is This Right For You?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Marketing Operations Partner works best for established firms ready to treat marketing as a strategic function, not an afterthought.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">This is a great fit if:</h3>
            <div className="space-y-4">
              {[
                "Your firm is doing ₹5-10 Cr+ annually and scaling with structure",
                "Marketing has been inconsistent or piecemeal — you need systems",
                "You want one partner managing the entire marketing function",
                "You're ready to invest in long-term visibility and pipeline growth",
                "You value strategic thinking + execution in one package"
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

          <div className="bg-navy-50 border-l-4 border-[#FFBF00] p-8 rounded-lg">
            <h3 className="text-xl font-bold text-navy-900 mb-4">Not sure if you need the full system?</h3>
            <p className="text-navy-900/80 mb-4">
              Consider starting with just <Link href="/solutions/visibility" className="text-navy-900 font-semibold underline">visibility</Link> or <Link href="/solutions/leads" className="text-navy-900 font-semibold underline">lead generation</Link> — and scale up when you're ready.
            </p>
            <Button asChild variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-50">
              <Link href="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">How It Works</h2>
            <p className="text-lg text-gray-700">A simple, predictable process that runs smoothly month after month.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Onboarding & Strategy",
                description: "Deep-dive into your business, ICP, and goals. We build your marketing plan and set up all systems."
              },
              {
                step: "2",
                title: "Monthly Execution",
                description: "Content published, outreach running, automation optimized. You review and approve, we execute."
              },
              {
                step: "3",
                title: "Quarterly Review",
                description: "Deep strategy sessions to review results, adjust direction, and align with business goals."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Pricing & Commitment */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Investment & Commitment</h2>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Monthly Investment</h3>
                <p className="text-3xl font-bold text-cta-500 mb-2">₹70,000 – ₹1,00,000</p>
                <p className="text-gray-700">Based on scope and business size</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Commitment</h3>
                <p className="text-gray-700 mb-2">Month-to-month after initial 3-month onboarding</p>
                <p className="text-gray-700">Cancel anytime with 30 days notice</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-navy-50 border-l-4 border-[#FFBF00] p-6 rounded-lg">
            <p className="text-navy-900 text-lg">
              <strong>Why this investment makes sense:</strong> A full-time marketing hire costs ₹8-12 lakh annually, plus training and management overhead. This gets you an entire marketing function for a fraction of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-navy-800 to-navy-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Marketing Off Your Plate?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's talk about your goals, your team, and how the Marketing Operations Partner can fit your business. You'll walk away with clarity — even if we don't work together.
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
