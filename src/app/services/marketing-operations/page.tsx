import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Operations Partner - Your Complete Marketing Engine",
  description: "Full-service marketing operations combining content, lead generation, automation, and strategy. For established firms ready to scale. ₹70,000–₹1,00,000/month.",
};

export default function MarketingOperationsPage() {
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
                Marketing Operations Partner
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
                Your complete marketing engine — designed, managed, and optimized for growth.
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
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <p className="absolute bottom-6 text-white/60 text-sm">Complete Marketing Solutions</p>
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
            <h2 className="text-4xl font-bold text-navy-900 mb-6">The Marketing Chaos Problem</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              You've grown to ₹5-10 Cr. But your marketing feels scattered, reactive, and impossible to scale.
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
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Marketing Is Everyone's Job (and No One's)</h3>
                  <p className="text-gray-700">
                    Content gets published sporadically. Outreach happens when someone has time. There's no single person accountable for making marketing run consistently.
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
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Too Many Disconnected Tools & Freelancers</h3>
                  <p className="text-gray-700">
                    You've hired a content writer here, an SEO consultant there, a social media manager somewhere else. Nothing connects. No one owns the outcome.
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
                  <h3 className="text-xl font-bold text-navy-900 mb-3">No Visibility Into What's Working</h3>
                  <p className="text-gray-700">
                    You're spending money on marketing. But you have no clear dashboards, no consolidated reporting. You can't confidently say what's delivering ROI.
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
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Founders Are Still in the Weeds</h3>
                  <p className="text-gray-700">
                    You're approving every post, chasing writers for drafts, fixing broken campaigns. Marketing should run without you — but it doesn't.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-navy-50 rounded-lg text-center">
            <p className="text-xl text-navy-900 font-medium">
              The result? <strong>Marketing feels like constant firefighting.</strong> You're spending money, but you can't scale it. Growth depends on you being in the details every single day.
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
            <h2 className="text-4xl font-bold text-navy-900 mb-6">What Happens When Marketing Runs on Chaos</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Scattered marketing isn't just inefficient — it's actively preventing you from scaling to ₹15-25 Cr.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">You Can't Hire a Full Marketing Team</h3>
              <p className="text-gray-800 leading-relaxed">
                At your size, hiring a full in-house team (content manager, demand gen lead, ops manager, designers) costs ₹2-3 Cr annually — plus hiring risk. But piecemeal freelancers don't give you the structure you need.
              </p>
            </div>

            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Growth Becomes Unpredictable Again</h3>
              <p className="text-gray-800 leading-relaxed">
                You thought hitting ₹5-10 Cr meant predictable growth. But without systematic marketing, you're back to relying on referrals and reactive opportunities. Revenue plateaus or swings wildly quarter to quarter.
              </p>
            </div>

            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Your Team Gets Overwhelmed</h3>
              <p className="text-gray-800 leading-relaxed">
                Sales is chasing leads. Delivery is buried in client work. Founders are stuck in marketing execution. Everyone's overworked, and nothing scales because marketing isn't running as a system.
              </p>
            </div>

            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Competitors With Better Systems Pull Ahead</h3>
              <p className="text-gray-800 leading-relaxed">
                While you're managing chaos, your competitors have marketing engines that run on autopilot. They're capturing market share, building authority, and scaling faster — because their marketing works without constant intervention.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl text-navy-900 font-bold">
              Here's the truth: <span className="text-red-600">If marketing requires daily heroics, it will never scale.</span>
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
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Marketing Operations Partner: Your Complete Marketing Function</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Imagine this: Your content, lead generation, automation, and reporting all run smoothly — managed by one accountable partner. Monthly dashboards show exactly what's working. You spend your time on strategy, not execution. That's the Marketing Operations Partner.
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
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14,2 14,8 20,8"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Content Growth System</h4>
                    <p className="text-gray-700 mb-3">
                      4 blog articles, 8 LinkedIn posts, and 2 newsletters per month — all planned, written, and published on schedule.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Your content engine runs without you being in the details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Lead Generation System</h4>
                    <p className="text-gray-700 mb-3">
                      100-200 qualified prospects reached monthly through personalized LinkedIn and email outreach, with full CRM tracking.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Predictable pipeline growth without depending on your sales team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Marketing Automation & Reporting</h4>
                    <p className="text-gray-700 mb-3">
                      We build workflows, integrate tools, and create monthly dashboards so you always know what's working and what needs improvement.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Full transparency with consolidated reporting across all marketing activities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Quarterly Strategy Review</h4>
                    <p className="text-gray-700 mb-3">
                      Every 90 days, we sit down to review performance, refine positioning, adjust campaigns, and plan for the next quarter.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Your marketing stays aligned with business goals and market changes.
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
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Always-On Marketing Engine</h4>
                <p className="text-gray-700">
                  Content, leads, reporting — everything runs smoothly without chaos or last-minute scrambles.
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Clear Dashboards & Accountability</h4>
                <p className="text-gray-700">
                  Monthly reports show exactly what's working, what's not, and where to invest more.
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Consistency & Control</h4>
                <p className="text-gray-700">
                  Fewer dependencies on freelancers, agencies, or founders being in the weeds. Marketing becomes an asset.
                </p>
              </div>
            </div>
          </div>

          {/* Best For */}
          <div className="p-8 bg-navy-800 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Best For</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              Professional service firms (₹5–10 Cr range) ready to scale marketing and brand visibility with structure. Companies that want a complete marketing function without hiring a full in-house team.
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
              A complete marketing partnership designed to scale without the complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Strategy Alignment</h3>
              <p className="text-gray-700">
                We start by understanding your business goals, audience, and market position to create a unified marketing strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">System Setup</h3>
              <p className="text-gray-700">
                We implement content workflows, lead generation processes, automation tools, and reporting dashboards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Ongoing Execution</h3>
              <p className="text-gray-700">
                Month after month, we execute the plan — content, outreach, optimization — while you focus on running the business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Quarterly Reviews</h3>
              <p className="text-gray-700">
                Every 90 days, we review performance, refine strategy, and adjust systems to improve results.
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
                <p className="text-lg font-semibold text-navy-900 mb-2">₹70,000 – ₹1,00,000/month</p>
                <p className="text-gray-600">Billed monthly. 90-day minimum commitment.</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-1">✓ Content + Lead Gen + Automation</p>
                <p className="mb-1">✓ Monthly dashboards & reporting</p>
                <p>✓ Quarterly strategy reviews</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Complete Marketing Engine?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop firefighting. Start scaling. Get a complete marketing function that runs like clockwork.
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
            Let's discuss your marketing challenges and see if the Marketing Operations Partner is the right fit for your business.
          </p>
        </div>
      </section>
    </div>
  );
}
