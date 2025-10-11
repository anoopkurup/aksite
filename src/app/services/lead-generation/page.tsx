import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Generation System - Build a Predictable Sales Pipeline",
  description: "Systematic outreach to 100+ ideal prospects monthly. Personalized LinkedIn and email campaigns with CRM tracking. ₹40,000–₹55,000/month.",
};

export default function LeadGenerationPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-16 px-6 min-h-[700px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-4">
            <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Services
            </Link>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="order-last md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Lead Generation System
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
                Build a steady pipeline of qualified conversations.
              </p>
              <Button asChild size="lg" className="bg-[#f59e0b] text-white hover:bg-[#d97706] font-semibold">
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 5 7 7-7 7"/>
                    <path d="M5 12h14"/>
                  </svg>
                </Link>
              </Button>
            </div>
            {/* Hero Media Container */}
            <div className="order-first md:order-2 w-full aspect-video bg-gradient-to-br from-[#8fb4ff]/30 to-[#1e3a8a]/30 rounded-lg flex items-center justify-center relative overflow-hidden min-h-[280px] md:min-h-[240px]">
              <div className="w-20 h-20 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <p className="absolute bottom-6 text-white/60 text-sm">Predictable Pipeline Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* PAIN: The Problem */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">The Referral Trap</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              You've built a solid business on referrals and word-of-mouth. But now you've hit a ceiling — and it's scary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Revenue Is Unpredictable</h3>
                  <p className="text-gray-700">
                    Some months you're slammed with work. Others are terrifyingly quiet. You can't forecast revenue because you don't control when referrals come in.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">You're Dependent on a Few Key Relationships</h3>
                  <p className="text-gray-700">
                    What happens if those relationships change? If someone retires, moves, or simply stops referring? Your pipeline dries up overnight.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">No Systematic Outreach</h3>
                  <p className="text-gray-700">
                    You know you should be reaching out to prospects. But between client work and operations, outreach gets pushed to "next week" — for months.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Wrong Prospects Find You</h3>
                  <p className="text-gray-700">
                    Referrals bring all kinds of leads — good and bad. You waste time qualifying prospects who aren't the right fit while ideal clients go to competitors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-navy-50 rounded-lg text-center">
            <p className="text-xl text-navy-900 font-medium">
              The result? <strong>You're stuck in reactive mode.</strong> Growth feels out of your control. You can't hire, invest, or plan because you never know what next quarter looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* AGITATE: Make It Worse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">What Happens When You Don't Proactively Generate Leads</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Relying on referrals isn't just limiting — it's actively dangerous to your business growth.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Your Growth Stalls at ₹2-3 Crore</h3>
              <p className="text-gray-800 leading-relaxed">
                There's only so much business your network can generate. To scale beyond referrals, you need a systematic way to reach new prospects. Without it, you're permanently stuck at your current size.
              </p>
            </div>

            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Competitors Build Pipelines While You Wait</h3>
              <p className="text-gray-800 leading-relaxed">
                While you're waiting for referrals, your competitors are systematically reaching out to prospects — building relationships, earning trust, and closing deals. They're capturing opportunities that could be yours.
              </p>
            </div>

            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">You Can't Scale Your Team or Operations</h3>
              <p className="text-gray-800 leading-relaxed">
                Without predictable lead flow, you can't confidently hire or invest in growth. Every expansion feels risky because you don't know if next month's revenue will support it.
              </p>
            </div>

            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Economic Downturns Hit You Harder</h3>
              <p className="text-gray-800 leading-relaxed">
                When the market softens, referrals dry up fast. Companies with systematic lead generation keep filling their pipelines. You're left scrambling to survive while they continue growing.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl text-navy-900 font-bold">
              Here's the truth: <span className="text-red-600">If you don't control your pipeline, you don't control your business.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* SOLUTION: The Answer */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">The Lead Generation System: Your Predictable Pipeline Builder</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Imagine this: Every month, you connect with 100+ ideal prospects through personalized outreach. Discovery calls book automatically. Your pipeline stays full — and predictable. That's the Lead Generation System.
            </p>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-navy-900 mb-8 text-center">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Prospect List Creation (100–200 Leads Monthly)</h4>
                    <p className="text-gray-700 mb-3">
                      We research and build a qualified list of ideal prospects based on your target profile — company size, industry, role, and pain points.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Every prospect is manually vetted to ensure they match your ideal customer profile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Personalized LinkedIn & Email Outreach</h4>
                    <p className="text-gray-700 mb-3">
                      Multi-touch campaigns across LinkedIn connection requests, InMail, and email — all personalized with insights about their business and challenges.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      No generic templates. Each message is customized to resonate with that specific prospect.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M9 3v18"/>
                      <path d="m16 15-3-3 3-3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">CRM or Dashboard to Track Performance</h4>
                    <p className="text-gray-700 mb-3">
                      Every interaction is logged in your CRM (or we provide a simple dashboard). See responses, interested prospects, and scheduled calls — all in one place.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Full transparency into what's working and which prospects are moving forward.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18"/>
                      <path d="m19 9-5 5-4-4-3 3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Monthly Performance Insights & Optimization</h4>
                    <p className="text-gray-700 mb-3">
                      Detailed monthly reports on outreach performance, response rates, and conversion metrics. We continuously test and refine messaging to improve results.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Your pipeline gets stronger every month as we learn what resonates with your audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What You Get (Benefits) */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-navy-900 mb-8 text-center">What You Get</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">100+ Prospect Connections Monthly</h4>
                <p className="text-gray-700">
                  Reach ideal prospects consistently every month — no more waiting for referrals or hoping someone remembers you.
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Predictable Lead Flow & Discovery Calls</h4>
                <p className="text-gray-700">
                  Know exactly how many qualified conversations you'll have each month. Plan your growth with confidence.
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Compounding Outreach Process</h4>
                <p className="text-gray-700">
                  Month after month, your network expands. Past prospects who weren't ready? They remember you when timing improves.
                </p>
              </div>
            </div>
          </div>

          {/* Best For */}
          <div className="p-8 bg-navy-800 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Best For</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              Growing professional service firms ready to build a consistent sales pipeline and reduce dependence on referrals.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-700">
              A systematic, repeatable process to fill your pipeline with qualified prospects.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Define Ideal Profile</h3>
              <p className="text-gray-700">
                We work with you to define your ideal customer profile — industry, company size, role, pain points, and buying signals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Research & Build Lists</h3>
              <p className="text-gray-700">
                We research and compile lists of 100-200 qualified prospects each month who match your ideal profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Personalized Outreach</h3>
              <p className="text-gray-700">
                We execute multi-touch campaigns across LinkedIn and email with personalized messaging that resonates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Track & Optimize</h3>
              <p className="text-gray-700">
                Responses flow into your CRM. We track performance, refine messaging, and schedule discovery calls on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Investment Details - Subtle */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">Investment</h3>
          <div className="p-8 bg-gray-50 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-lg font-semibold text-navy-900 mb-2">₹40,000 – ₹55,000/month</p>
                <p className="text-gray-600">Billed monthly. Cancel anytime with 30 days notice.</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-1">✓ 100-200 prospects monthly</p>
                <p className="mb-1">✓ Personalized outreach campaigns</p>
                <p>✓ CRM tracking & optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Build a Predictable Pipeline?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop waiting for referrals. Start systematically connecting with ideal prospects and building a pipeline you control.
          </p>
          <Button asChild size="lg" className="bg-[#f59e0b] text-white hover:bg-[#d97706] font-semibold px-8 py-4 rounded-lg text-lg">
            <Link href="/contact" className="flex items-center">
              Book a Discovery Call
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 5 7 7-7 7"/>
                <path d="M5 12h14"/>
              </svg>
            </Link>
          </Button>
          <p className="text-sm text-white/70 mt-6">
            Let's discuss your ideal customer profile and see if the Lead Generation System can help you build a predictable pipeline.
          </p>
        </div>
      </section>
    </div>
  );
}
