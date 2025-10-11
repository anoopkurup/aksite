import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Growth System - Consistent Content That Builds Credibility",
  description: "Done-for-you content system with blogs, LinkedIn posts, and newsletters. Stay visible and credible without chasing freelancers. ₹25,000–₹30,000/month.",
};

export default function ContentGrowthPage() {
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
                Content Growth System
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
                Stay visible. Build credibility. Create content that actually drives conversations.
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
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <p className="absolute bottom-6 text-white/60 text-sm">Content That Builds Your Brand</p>
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
            <h2 className="text-4xl font-bold text-navy-900 mb-6">The Content Consistency Problem</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Most consultants and small firms know content marketing matters — but struggle to make it happen consistently.
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
                  <h3 className="text-xl font-bold text-navy-900 mb-3">You Start With Good Intentions</h3>
                  <p className="text-gray-700">
                    "We'll post twice a week on LinkedIn." "Let's publish a blog every Friday." "We need to send newsletters monthly." But after a few weeks, reality hits.
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
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Client Work Takes Over</h3>
                  <p className="text-gray-700">
                    Delivery deadlines, urgent calls, proposal writing. Marketing takes a back seat. Weeks turn into months without a single post or article.
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
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Freelancers Are Unreliable</h3>
                  <p className="text-gray-700">
                    You hire a writer. They miss deadlines. Quality is inconsistent. You spend more time editing and managing than if you'd done it yourself.
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
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Writing Takes Too Long</h3>
                  <p className="text-gray-700">
                    You know your subject inside out. But turning that knowledge into engaging content? That's 3-4 hours per piece. Time you don't have.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-navy-50 rounded-lg text-center">
            <p className="text-xl text-navy-900 font-medium">
              The result? <strong>You're invisible to your ideal clients.</strong> Your competitors who show up consistently win the attention, trust, and opportunities that should be yours.
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
            <h2 className="text-4xl font-bold text-navy-900 mb-6">What Happens When You Stay Invisible</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Inconsistent content isn't just a missed opportunity — it's actively hurting your business growth.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Prospects Forget You Exist</h3>
              <p className="text-gray-800 leading-relaxed">
                When you disappear for weeks or months, prospects move on. That consultant who met you at a networking event? They've already hired someone else who stayed top-of-mind with weekly content.
              </p>
            </div>

            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Competitors Build Authority While You're Silent</h3>
              <p className="text-gray-800 leading-relaxed">
                Your competitors are publishing insights, sharing case studies, and positioning themselves as thought leaders. Every week you stay quiet, they're earning trust with your ideal clients.
              </p>
            </div>

            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Referrals Dry Up Because You're Not Memorable</h3>
              <p className="text-gray-800 leading-relaxed">
                Past clients want to refer you. But when they haven't heard from you in months, your name doesn't come to mind. Regular content keeps you memorable and referable.
              </p>
            </div>

            <div className="p-8 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-900 mb-3">Your Expertise Becomes a Hidden Asset</h3>
              <p className="text-gray-800 leading-relaxed">
                You have valuable knowledge and insights that could attract ideal clients. But if it stays locked in your head or buried in client presentations, it's worthless for growth.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl text-navy-900 font-bold">
              Here's the truth: <span className="text-red-600">Inconsistency is invisibility.</span> And invisibility means lost revenue.
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
            <h2 className="text-4xl font-bold text-navy-900 mb-6">The Content Growth System: Your Done-For-You Content Engine</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Imagine this: Every week, high-quality content goes out on schedule — blog articles, LinkedIn posts, newsletters — without you writing a word or chasing freelancers. That's the Content Growth System.
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
                    <h4 className="text-xl font-bold text-navy-900 mb-3">4 Blog Articles Per Month</h4>
                    <p className="text-gray-700 mb-3">
                      Professionally written, SEO-optimized articles (800-1200 words) that showcase your expertise and attract organic search traffic.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Planned, written, edited, and published on your website — all handled for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">8 LinkedIn Posts Per Month</h4>
                    <p className="text-gray-700 mb-3">
                      Strategic posts for your founder or firm page that build credibility, start conversations, and keep you visible to your network.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Ready to post — you just review and approve (or we can post directly with your permission).
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 mb-3">2 Email Newsletters Per Month</h4>
                    <p className="text-gray-700 mb-3">
                      Valuable insights sent to your email list to nurture relationships, stay top-of-mind, and drive engagement with your audience.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      We write, design, and schedule — you just approve before it goes out.
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
                    <h4 className="text-xl font-bold text-navy-900 mb-3">Monthly Content Plan & Analytics</h4>
                    <p className="text-gray-700 mb-3">
                      See exactly what's coming next month plus performance insights — what's working, what's not, and how to improve.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Full transparency with monthly reporting on content performance and engagement.
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Consistent, Expert-Level Visibility</h4>
                <p className="text-gray-700">
                  Your audience sees you as active, credible, and top-of-mind — every single week.
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Higher Brand Recall & Engagement</h4>
                <p className="text-gray-700">
                  When prospects need your services, you'll be the first name they think of and recommend.
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Content That Runs Smoothly</h4>
                <p className="text-gray-700">
                  No more chasing writers, editing disasters, or missed deadlines. It just works, week after week.
                </p>
              </div>
            </div>
          </div>

          {/* Best For */}
          <div className="p-8 bg-navy-800 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Best For</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              Consultants, boutique firms, or small agencies looking to stay visible and credible online without the hassle of managing content creation themselves.
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
              Simple, structured, and stress-free. Here's how we make consistent content happen.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Discovery Call</h3>
              <p className="text-gray-700">
                We learn about your business, audience, and messaging to create content that sounds like you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Monthly Planning</h3>
              <p className="text-gray-700">
                We create a content calendar with topics aligned to your goals and audience needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Creation & Review</h3>
              <p className="text-gray-700">
                We write everything. You review and approve. Quick turnarounds, no endless edits.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Publish & Report</h3>
              <p className="text-gray-700">
                Content goes live on schedule. You get monthly performance reports to track what's working.
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
                <p className="text-lg font-semibold text-navy-900 mb-2">₹25,000 – ₹30,000/month</p>
                <p className="text-gray-600">Billed monthly. Cancel anytime with 30 days notice.</p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-1">✓ All content creation included</p>
                <p className="mb-1">✓ Monthly planning & analytics</p>
                <p>✓ Unlimited revisions</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build Consistent Visibility?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Stop struggling with content. Start showing up consistently and building credibility with the Content Growth System.
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
            Let's talk about your content goals and see if the Content Growth System is the right fit for your business.
          </p>
        </div>
      </section>
    </div>
  );
}
