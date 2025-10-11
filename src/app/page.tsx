import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import HeroMedia from "@/components/HeroMedia";
import { getContentPage, processHeroMedia } from "@/lib/content";

export default function Home() {
  // Get homepage content from MDX
  const homepageContent = getContentPage('_index');
  const heroMedia = homepageContent ? processHeroMedia(homepageContent.frontmatter) : null;
  const heroTitle = homepageContent?.frontmatter?.title || "Clarity. Strategy. Systems.";
  const heroDescription = homepageContent?.frontmatter?.description || "I help professional service and tech-enabled businesses create clear, consistent, and cost-effective marketing systems — powered by fundamentals, AI, and smart execution.";

  // Get all content sections from MDX
  const problemSection = homepageContent?.frontmatter?.problem;
  const solutionSection = homepageContent?.frontmatter?.solution;
  const benefitsSection = homepageContent?.frontmatter?.benefits;
  const testimonials = homepageContent?.frontmatter?.testimonials?.items || [];
  const howItWorksSection = homepageContent?.frontmatter?.how_it_works;
  const whyChooseSection = homepageContent?.frontmatter?.why_choose;
  const comparisonSection = homepageContent?.frontmatter?.comparison;
  const featuresSection = homepageContent?.frontmatter?.features;
  const faqSection = homepageContent?.frontmatter?.faq;
  const ctaSection = homepageContent?.frontmatter?.cta;

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white py-24 px-6 min-h-[700px] flex items-center relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
            {/* Hero Image/Illustration Area - Shows first on mobile */}
            <div className="relative order-first md:order-2">
              <div className="text-center space-y-6">
                <div className="w-full aspect-video md:aspect-video bg-gradient-to-br from-navy-100/50 to-gray-100/50 rounded-lg flex items-center justify-center relative overflow-hidden min-h-[280px] md:min-h-[240px]">
                  {heroMedia ? (
                    <HeroMedia
                      media={heroMedia}
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-20 h-20 md:w-16 md:h-16 bg-navy-100/40 rounded-full flex items-center justify-center mx-auto">
                          <svg className="w-10 h-10 md:w-8 md:h-8 text-navy-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="text-white/70 text-base md:text-sm font-medium">Video / Image Placeholder</div>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-white/60 text-sm italic">(Replace with your hero video or illustration)</p>
              </div>
            </div>

            <div className="order-last md:order-1">
              <div className="mb-6 flex items-center text-sm text-white/80">
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 18L5.82 21L7 14L2 9L10.91 8.26L12 2Z"/>
                </svg>
                For Professional Service Firms
              </div>
              <h1 className="text-hero font-bold leading-tight mb-6 text-white">
                {heroTitle}
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
                {heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cta-500 text-white hover:bg-cta-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
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
              <div className="mt-8">
                <div className="flex text-cta-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-sm">Trusted by 200+ business owners</p>
              </div>
            </div>
          </div>

          {/* Dream Outcomes */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#28a745"/>
                  <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span className="text-white">More qualified leads in 90 days</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#28a745"/>
                  <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span className="text-white">Shorter sales cycles, higher conversions</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#28a745"/>
                  <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span className="text-white">Attract better clients at higher value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Problem Section */}
      {problemSection && (
        <section className="py-20 px-6 bg-gray-50 relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-50 to-transparent"></div>
          </div>
          <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section-title font-bold text-navy-900 mb-8">
              {problemSection.title}
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              {problemSection.subtitle}
            </p>

            <div className="space-y-6 text-left max-w-3xl mx-auto">
              {problemSection.items?.map((item: any, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900/80"><strong>{item.title}</strong> — {item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>
      )}

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Solution Section */}
      {solutionSection && (
        <section className="py-20 px-6 bg-white relative">
          {/* Subtle background accent */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cta-500/20 via-cta-500 to-cta-500/20 rounded-full"></div>
          <div className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-first md:order-2">
                <div className="text-center">
                  <div className="w-full aspect-square rounded-lg overflow-hidden min-h-[320px] md:min-h-[280px] relative">
                    <Image
                      src={solutionSection.image}
                      alt="Anoop Kurup - Marketing Systems Expert"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-navy-900/80 text-sm text-center mt-4 italic">Anoop Kurup</p>
                </div>
              </div>

              <div className="order-last md:order-1">
                <h2 className="text-section-title font-bold text-navy-900 mb-6">
                  {solutionSection.title}
                </h2>
                <div className="text-lg text-navy-900/80 leading-relaxed space-y-4">
                  {solutionSection.content.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      )}

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Benefits Section */}
      {benefitsSection && (
        <section className="py-20 px-6 bg-gray-50 relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-100 to-transparent"></div>
          </div>
          <div className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-section-title font-bold text-navy-900 mb-6">
                {benefitsSection.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefitsSection.items?.map((benefit: any, index: number) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-cta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {benefit.icon === "package" && (
                        <>
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                          <line x1="12" y1="22.08" x2="12" y2="12"/>
                          <circle cx="12" cy="12" r="2" fill="white"/>
                        </>
                      )}
                      {benefit.icon === "zap" && (
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      )}
                      {benefit.icon === "settings" && (
                        <>
                          <circle cx="12" cy="12" r="3"/>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                        </>
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{benefit.title}</h3>
                  <p className="text-navy-900/80 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>
      )}

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white relative">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-cta-100/20 to-transparent rounded-full transform -translate-x-24 -translate-y-24"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-section-title font-bold text-navy-900 mb-6">
                Marketing That's Predictable, Professional, and Affordable.
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Choose the system that fits your stage of growth — from consistent content to complete marketing operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Content Growth System */}
              <div className="bg-white rounded-lg border border-gray-200 hover:border-navy-400 transition-all duration-300 p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-navy-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Content Growth System</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  Consistent visibility. Credible presence. Effortless execution. Get your content handled — from blogs and LinkedIn posts to newsletters — all planned, written, and published on schedule. Stay top-of-mind with your audience while focusing on your business.
                </p>
                <Button asChild className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                  <Link href="/services/content-growth" className="flex items-center justify-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 5 7 7-7 7"/>
                      <path d="M5 12h14"/>
                    </svg>
                  </Link>
                </Button>
              </div>

              {/* Lead Generation System */}
              <div className="bg-white rounded-lg border border-gray-200 hover:border-navy-400 transition-all duration-300 p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-navy-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Lead Generation System</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  Turn outreach into a predictable lead engine. Reach 100+ ideal prospects every month through structured research, personalized outreach, and monthly optimization. You'll have a steady flow of relevant conversations — without hiring a sales team.
                </p>
                <Button asChild className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                  <Link href="/services/lead-generation" className="flex items-center justify-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 5 7 7-7 7"/>
                      <path d="M5 12h14"/>
                    </svg>
                  </Link>
                </Button>
              </div>

              {/* Marketing Operations Partner */}
              <div className="bg-white rounded-lg border border-gray-200 hover:border-navy-400 transition-all duration-300 p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-navy-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Marketing Operations Partner</h3>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  Your complete marketing system — managed and measured. Combine content, lead generation, and workflow automation under one structured program. Get a marketing function that's consistent, trackable, and aligned with your growth goals.
                </p>
                <Button asChild className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                  <Link href="/services/marketing-operations" className="flex items-center justify-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 5 7 7-7 7"/>
                      <path d="M5 12h14"/>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            {/* CTA Below Cards */}
            <div className="text-center p-8 bg-navy-50 rounded-lg border border-navy-100">
              <p className="text-lg text-navy-900 mb-6">
                <strong>Not sure which fits your business best?</strong> Let's talk.
              </p>
              <Button asChild size="lg" className="bg-cta-500 hover:bg-cta-600 text-white font-semibold">
                <Link href="/contact" className="flex items-center">
                  Book a Discovery Call
                  <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 5 7 7-7 7"/>
                    <path d="M5 12h14"/>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 px-6 bg-white relative">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cta-100/30 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-navy-100/30 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
          <div className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-section-title font-bold text-navy-900 mb-6">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start space-x-2 mb-4">
                    <svg className="w-6 h-6 text-navy-900 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <blockquote className="text-navy-900/80 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-gray-300 pt-4">
                    <div className="font-semibold text-navy-900">{testimonial.author}</div>
                    <div className="text-sm text-navy-900/80">{testimonial.role}</div>
                    <div className="text-sm text-navy-900/80">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>
      )}

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* How It Works Section */}
      {howItWorksSection && (
        <section className="py-20 px-6 bg-gray-50 relative">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-navy-400 via-navy-500 to-navy-400 rounded-full"></div>
          <div className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-section-title font-bold text-navy-900 mb-6">
                {howItWorksSection.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorksSection.steps?.map((step: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-cta-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {step.icon === "file-text" && (
                        <>
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                          <polyline points="14,2 14,8 20,8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                          <polyline points="10,9 9,9 8,9"/>
                        </>
                      )}
                      {step.icon === "settings" && (
                        <>
                          <circle cx="12" cy="12" r="3"/>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                        </>
                      )}
                      {step.icon === "rocket" && (
                        <>
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                        </>
                      )}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Step {step.number}: {step.title}</h3>
                  <p className="text-navy-900/80 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>
      )}

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Why Choose Me Section */}
      {whyChooseSection && (
        <section className="py-20 px-6 bg-white relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-navy-100/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-section-title font-bold text-navy-900 mb-6">
                {whyChooseSection.title}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {whyChooseSection.items?.map((item: any, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg text-navy-900/80"><strong>{item.title}</strong> – {item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqSection && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-section-title font-bold text-navy-900 mb-6">
                {faqSection.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqSection.items?.map((faq: any, index: number) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-navy-900/80">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {ctaSection && (
        <section className="py-16 px-6 bg-gradient-to-br from-navy-800 to-navy-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section-title font-bold mb-6">
              {ctaSection.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {ctaSection.subtitle}
            </p>
            <Button size="lg" className="bg-cta-500 text-white hover:bg-cta-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href={`/${ctaSection.button?.url || 'contact'}`} className="flex items-center">
                {ctaSection.button?.text || 'Get Started'}
                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="m12 5 7 7-7 7"/>
                  <path d="M5 12h14"/>
                </svg>
              </Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}