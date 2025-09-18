import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function NewHomePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-24 px-6 min-h-[700px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
            {/* Hero Image/Illustration Area - Shows first on mobile */}
            <div className="relative order-first md:order-2">
              <div className="text-center space-y-6">
                <div className="w-full aspect-video md:aspect-video bg-gradient-to-br from-[#8fb4ff]/30 to-[#1e3a8a]/30 rounded-lg flex items-center justify-center relative overflow-hidden min-h-[280px] md:min-h-[240px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-10 h-10 md:w-8 md:h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="text-white/80 text-base md:text-sm font-medium">Video / Image Placeholder</div>
                    </div>
                  </div>
                </div>
                <p className="text-blue-100 text-sm italic">(Replace with your hero video or illustration)</p>
              </div>
            </div>

            <div className="order-last md:order-1">
              <Badge className="mb-6 bg-[#8fb4ff] text-[#1e3a8a] border-[#8fb4ff] hover:bg-[#8fb4ff]/90">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 18L5.82 21L7 14L2 9L10.91 8.26L12 2Z"/>
                </svg>
                For Professional Service Firms
              </Badge>
              <h1 className="text-hero font-bold leading-tight mb-6 text-white">
                Build a Marketing System That Delivers Consistent, Qualified Leads
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl">
                I help professional service firms, consultants, and tech-enabled businesses turn unpredictable word-of-mouth into a repeatable system for growth — using strategy, systems thinking, and AI workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-br from-[#f59e0b] to-[#FFBF00] text-white hover:from-[#FFBF00] hover:to-[#f59e0b] font-semibold shadow-lg">
                  <Link href="/contact" className="flex items-center">
                    Build Your Lead Generation Plan
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="m12 5 7 7-7 7"/>
                      <path d="M5 12h14"/>
                    </svg>
                  </Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-white">
                    <AvatarFallback className="bg-[#8fb4ff] text-[#1e3a8a]">SC</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white">
                    <AvatarFallback className="bg-[#8fb4ff] text-[#1e3a8a]">MR</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white">
                    <AvatarFallback className="bg-[#8fb4ff] text-[#1e3a8a]">DT</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm">Trusted by 500+ business owners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dream Outcomes */}
          <div className="mt-16 bg-black/20 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#28a745"/>
                  <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span className="text-blue-100">More qualified leads in 90 days</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#28a745"/>
                  <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span className="text-blue-100">Shorter sales cycles, higher conversions</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#28a745"/>
                  <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span className="text-blue-100">Attract better clients at higher value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-title font-bold text-[#1e3a8a] mb-8">
            Tired of Unpredictable Leads and Roller-Coaster Growth?
          </h2>
          <p className="text-xl text-[#374151] mb-12">
            Most professional service and tech-enabled businesses struggle with marketing because:
          </p>

          <div className="space-y-6 text-left max-w-3xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-[#f59e0b] rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-[#374151]"><strong>Relying on referrals isn't scalable</strong> — one month you're busy, the next you're scrambling.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-[#f59e0b] rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-[#374151]"><strong>Marketing feels scattered and inconsistent</strong> — you're posting, emailing, or trying ads, but nothing feels connected or reliable.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-[#f59e0b] rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-[#374151]"><strong>Too much time is wasted on tactics that don't convert</strong> — while better clients keep going to your competitors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-[#fef7ed]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-first md:order-2">
              <div className="text-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden min-h-[320px] md:min-h-[280px] relative">
                  <Image
                    src="/images/about/anoop-bw.webp"
                    alt="Anoop Kurup - Marketing Systems Expert"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#374151] text-sm text-center mt-4 italic">Anoop Kurup</p>
              </div>
            </div>

            <div className="order-last md:order-1">
              <h2 className="text-section-title font-bold text-[#1e3a8a] mb-6">
                What if your marketing worked like a system instead of guesswork?
              </h2>
              <p className="text-lg text-[#374151] mb-6">
                I get it. Running a professional service or tech-enabled business means you're an expert at delivering value — but marketing often feels like chaos.
              </p>

              <div className="space-y-4 text-[#374151]">
                <p>
                  I help you build a clear, repeatable marketing system rooted in fundamentals, powered by AI workflows, and designed for consistency. Instead of chasing the next tactic, you get a system that attracts, nurtures, and converts your ideal clients — on autopilot.
                </p>

                <p>
                  With 15+ years of experience across strategy, systems thinking, and AI, I've helped consultants, SaaS firms, agencies, and professional service companies double their inbound leads, shorten sales cycles, and attract better clients.
                </p>

                <p>
                  <strong>And I can do the same for you — starting with clarity, then building strategy, and finally installing the systems to keep your pipeline full.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1e3a8a] mb-6">
              Here's what happens when your marketing works like a system:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                  <circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Consistent Leads Without the Chaos</h3>
              <p className="text-[#374151] leading-relaxed">A repeatable system that delivers qualified leads week after week — powered by clear strategy and AI workflows.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  <circle cx="18" cy="5" r="3" fill="white"/>
                  <path d="M18 8V5M18 5h-1M18 5h1" stroke="#FFBF00" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Faster Sales, Better Clients</h3>
              <p className="text-[#374151] leading-relaxed">By clarifying your positioning and messaging, you'll attract higher-quality clients, shorten sales cycles, and close deals at better value.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Marketing That Runs Itself</h3>
              <p className="text-[#374151] leading-relaxed">With systems in place, you'll spend less time guessing and more time focusing on growth — while your marketing engine keeps running in the background.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-[#fef7ed]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1e3a8a] mb-6">
              3 Simple Steps to a Marketing System That Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e3a8a] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-4">Step 1: Start With Clarity</h3>
              <p className="text-[#374151] leading-relaxed">We begin by defining your positioning, audience, and messaging — so you know exactly who you're speaking to and why they should choose you.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e3a8a] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-4">Step 2: Build the System</h3>
              <p className="text-[#374151] leading-relaxed">We design and implement a repeatable lead generation system — using proven strategy, automation, and AI workflows — tailored to your business.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e3a8a] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-4">Step 3: Scale With Confidence</h3>
              <p className="text-[#374151] leading-relaxed">With your system running, you'll have consistent leads, shorter sales cycles, and better clients — so you can focus on delivering, not chasing business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1e3a8a] mb-6">
              10 Reasons Why Clients Choose Me
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>Clear Positioning First</strong> – I start with strategy before tactics, ensuring you know exactly who you serve and why they should choose you over competitors.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>Systems Over Shortcuts</strong> – I build long-term, repeatable marketing systems that continue working even when you're not actively managing them.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>AI Without the Hype</strong> – I implement practical AI workflows that actually save you time and money, not trendy tools that complicate your processes.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>Proven Results Across Industries</strong> – My methods work for SaaS companies, consultants, agencies, and professional service firms because I focus on fundamentals, not gimmicks.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>Shorter Sales Cycles</strong> – Better messaging and positioning means prospects understand your value faster, leading to quicker decisions and higher close rates.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>Better Quality Clients</strong> – Clear positioning and strategic messaging naturally attract premium clients who value expertise and are willing to pay for results.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>Hands-On, Not Just Advice</strong> – I don't just give you a strategy document and disappear. I help you implement, test, and refine until you see real results.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>Flexible Engagements</strong> – Whether you need ongoing consulting, intensive workshops, or ready-to-use tools and templates, I have options that fit your budget and timeline.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>Trusted by 500+ Clients</strong> – My track record includes measurable results: 40-60% increases in qualified leads and 25-35% improvements in close rates across diverse industries.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center mt-1">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#374151]"><strong>Focus on Long-Term Growth</strong> – Every system I build is designed to scale with your business, not break down when you reach the next level of growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Compare Section */}
      <section className="py-16 px-6 bg-[#fef7ed]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1e3a8a] mb-6">
              How I Compare
            </h2>
          </div>

          {/* Mobile View - Card Layout */}
          <div className="block md:hidden space-y-6">
            {/* Strategy Approach Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold">
                Strategy Approach
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Me</h4>
                    <p className="text-[#374151]">Clarity First – Positioning & messaging upfront.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Them</h4>
                    <p className="text-[#374151]">Campaigns without strategy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Systems Approach Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold">
                Systems Approach
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Me</h4>
                    <p className="text-[#374151]">Systems Thinking – Repeatable, scalable process.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Them</h4>
                    <p className="text-[#374151]">One-off tactics that stop working.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Integration Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold">
                Technology Integration
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Me</h4>
                    <p className="text-[#374151]">AI Workflows – Automation that saves cost & time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Them</h4>
                    <p className="text-[#374151]">Manual, outdated methods.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Level Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold">
                Support Level
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Me</h4>
                    <p className="text-[#374151]">Hands-On Guidance – Implementation support.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Them</h4>
                    <p className="text-[#374151]">Just high-level advice.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Focus Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold">
                Industry Focus
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Me</h4>
                    <p className="text-[#374151]">Service Business Focus – Consultants, SaaS, agencies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Them</h4>
                    <p className="text-[#374151]">Generic "everyone fits" approach.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Quality Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold">
                Lead Quality
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Me</h4>
                    <p className="text-[#374151]">Quality Clients – Attract high-value leads.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Them</h4>
                    <p className="text-[#374151]">Volume leads, low conversions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Track Record Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold">
                Track Record
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Me</h4>
                    <p className="text-[#374151]">Proven Track Record – 500+ clients, measurable results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e3a8a] font-semibold text-lg mb-1">With Them</h4>
                    <p className="text-[#374151]">Vague promises, no proof.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <div className="grid grid-cols-3 gap-0 min-w-full">
              {/* Header Row */}
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold text-center rounded-tl-lg">
                {/* Empty header for decision criteria column */}
              </div>
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold text-center">
                With Me
              </div>
              <div className="bg-[#1e3a8a] text-white p-4 font-semibold text-center rounded-tr-lg">
                With Them
              </div>

              {/* Row 1: Strategy Approach */}
              <div className="bg-gray-50 p-4 border-b border-gray-200 font-medium text-[#1e3a8a] flex items-center">
                Strategy Approach
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Clear positioning and messaging framework before launching campaigns or tactics</span>
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Jump straight into campaigns and ads without clear strategic foundation or messaging</span>
              </div>

              {/* Row 2: Systems Approach */}
              <div className="bg-gray-50 p-4 border-b border-gray-200 font-medium text-[#1e3a8a] flex items-center">
                Systems Approach
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Build repeatable, scalable processes that work long-term and grow with your business</span>
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </div>
                <span className="text-[#374151]">One-off tactics and short-term solutions that require constant attention and management</span>
              </div>

              {/* Row 3: Technology Integration */}
              <div className="bg-gray-50 p-4 border-b border-gray-200 font-medium text-[#1e3a8a] flex items-center">
                Technology Integration
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Practical AI workflows and tools that save time, reduce costs, and improve consistency</span>
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Outdated manual processes that require constant hands-on work and don't scale efficiently</span>
              </div>

              {/* Row 4: Support Level */}
              <div className="bg-gray-50 p-4 border-b border-gray-200 font-medium text-[#1e3a8a] flex items-center">
                Support Level
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Direct support and guidance to help you execute strategies and see real results</span>
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </div>
                <span className="text-[#374151]">High-level advice and strategy documents but leave you to figure out implementation</span>
              </div>

              {/* Row 5: Industry Focus */}
              <div className="bg-gray-50 p-4 border-b border-gray-200 font-medium text-[#1e3a8a] flex items-center">
                Industry Focus
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Deep expertise in consultants, SaaS companies, agencies, and professional services</span>
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Generic one-size-fits-all solutions that don't understand your specific business model</span>
              </div>

              {/* Row 6: Lead Quality */}
              <div className="bg-gray-50 p-4 border-b border-gray-200 font-medium text-[#1e3a8a] flex items-center">
                Lead Quality
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Attract high-value leads who understand quality and invest in long-term results</span>
              </div>
              <div className="bg-white p-4 border-b border-gray-200 flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Generate lots of low-quality leads that waste your time and rarely convert to clients</span>
              </div>

              {/* Row 7: Track Record */}
              <div className="bg-gray-50 p-4 font-medium text-[#1e3a8a] rounded-bl-lg flex items-center">
                Track Record
              </div>
              <div className="bg-white p-4 flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="text-[#374151]">500+ clients with measurable outcomes: 40-60% lead increases, 25-35% higher close rates</span>
              </div>
              <div className="bg-white p-4 flex items-center space-x-3 rounded-br-lg">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </div>
                <span className="text-[#374151]">Vague claims about success without specific metrics, case studies, or verifiable proof</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1e3a8a] mb-6">
              Features That Power Your Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Strategic Positioning Framework</h3>
              <p className="text-[#374151] leading-relaxed">Clear audience & differentiation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">AI-Powered Workflows</h3>
              <p className="text-[#374151] leading-relaxed">Automated, cost-saving consistency.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14,2 14,8 20,8"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Done-With-You Playbooks</h3>
              <p className="text-[#374151] leading-relaxed">Ready-to-use templates & systems.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                  <path d="m9 14 2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Multi-Channel Lead Generation</h3>
              <p className="text-[#374151] leading-relaxed">LinkedIn, email, funnels, more.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"/>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Data-Driven Optimization</h3>
              <p className="text-[#374151] leading-relaxed">Measure, track, and improve.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Scalable, Long-Term Systems</h3>
              <p className="text-[#374151] leading-relaxed">Designed to grow with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#fef7ed]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-bold text-[#1e3a8a] mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
                  How is this different from hiring a marketing agency?
                </h3>
                <p className="text-[#374151]">
                  Agencies deliver campaigns. I help you build a marketing system that keeps working long after the campaign ends.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
                  I already get referrals. Do I really need this?
                </h3>
                <p className="text-[#374151]">
                  Referrals are unpredictable. A system ensures you always have qualified leads.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
                  Do I need to be tech-savvy to use AI workflows?
                </h3>
                <p className="text-[#374151]">
                  Not at all. I set up simple, practical AI workflows that fit into your processes.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
                  How quickly can I expect results?
                </h3>
                <p className="text-[#374151]">
                  Most clients see improvements in leads and conversions within 60–90 days.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
                  What types of businesses do you work with?
                </h3>
                <p className="text-[#374151]">
                  Professional service firms, consultants, SaaS companies, and tech-enabled businesses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
                  What if I just need advice, not implementation?
                </h3>
                <p className="text-[#374151]">
                  That's fine. I offer consulting, workshops, and toolkits based on your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-title font-bold mb-6">
            Ready to Build Your Marketing System?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            If you're ready to stop relying on referrals and start generating consistent, high-quality leads, let's talk.
          </p>
          <Button size="lg" className="bg-gradient-to-br from-[#f59e0b] to-[#FFBF00] text-white hover:from-[#FFBF00] hover:to-[#f59e0b] font-semibold shadow-lg">
            <Link href="/contact" className="flex items-center">
              Book Your Free Strategy Call
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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