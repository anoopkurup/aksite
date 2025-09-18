import Link from "next/link";
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
  
  // Get about section from MDX
  const aboutSection = homepageContent?.frontmatter?.about;
  
  // Get audience segments from MDX or fallback to hardcoded
  const audienceSegments = homepageContent?.frontmatter?.audience?.items || [
    {
      iconType: "handshake",
      title: "Professional Service Firms",
      subheading: "Beyond Referrals",
      description: "Marketing agencies, law firms, consulting practices, and specialized B2B services firms with 10-50 employees who've hit the ceiling of what referrals alone can deliver.",
      results: "40-60% increase in qualified leads within 90 days",
      link: "/case-studies/professional-services"
    },
    {
      iconType: "monitor",
      title: "Tech-Enabled Businesses",
      subheading: "Scale Without Chaos",
      description: "SaaS companies, IT service providers, and digital agencies experiencing rapid growth but struggling with marketing systems that scale efficiently.",
      results: "50-80% reduction in sales cycle length",
      link: "/case-studies/tech-enabled"
    },
    {
      iconType: "target",
      title: "Consultants & Experts",
      subheading: "Systematic Growth",
      description: "Independent professionals and boutique consultancies earning $150K+ annually, ready to scale beyond personal capacity and networking cycles.",
      results: "2-3x increase in inbound inquiries",
      link: "/case-studies/consultants-experts"
    }
  ];

  // Get services from MDX or fallback to hardcoded
  const services = homepageContent?.frontmatter?.services?.items || [
    {
      iconType: "handshake",
      title: "Consulting",
      description: "Hands-on strategy and positioning for marketing, lead generation, and growth. Get clarity on your market position and build predictable revenue streams.",
      link: "/consulting",
      linkText: "Learn More"
    },
    {
      iconType: "graduation", 
      title: "Workshops",
      description: "Intensive, practical sessions to build your lead generation machine. Learn frameworks and tools to scale with confidence.",
      link: "/workshops",
      linkText: "Explore Workshops"
    },
    {
      iconType: "cpu",
      title: "AI Solutions", 
      description: "AI-enabled tools that make marketing faster, cheaper, and more consistent. Simple automation for content and lead generation.",
      link: "/ai-solutions",
      linkText: "View Solutions"
    }
  ];

  // Get testimonials from MDX or fallback to hardcoded
  const testimonials = homepageContent?.frontmatter?.testimonials?.items || [
    {
      quote: "Anoop helped us move from chaotic, reactive marketing to a systematic approach that consistently generates qualified leads. Our close rate improved by 35% within 90 days.",
      author: "Sarah Chen",
      role: "Founder",
      company: "Strategic Marketing Partners",
      avatar: "/api/placeholder/40/40"
    },
    {
      quote: "The AI workflows Anoop designed save our team 15 hours per week on content creation while maintaining quality. It's like having an extra team member focused on marketing.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "TechFlow Solutions",
      avatar: "/api/placeholder/40/40"
    },
    {
      quote: "Finally, marketing that makes sense for professional services. Anoop's approach helped us articulate our value clearly and build a pipeline that doesn't depend on just referrals.",
      author: "David Thompson",
      role: "Managing Partner", 
      company: "Thompson Legal Advisors",
      avatar: "/api/placeholder/40/40"
    }
  ];


  const approachPrinciples = [
    {
      number: "1",
      title: "Clarity before tools",
      description: "Strategy first, tech second. We start with understanding your business, not picking tools."
    },
    {
      number: "2", 
      title: "AI without hype",
      description: "Practical, everyday workflows that cut costs and save time — no buzzwords, just results."
    },
    {
      number: "3",
      title: "Systems over heroics", 
      description: "Repeatable processes that outlast founder energy and scale with your team."
    }
  ];

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
                  {heroMedia ? (
                    <HeroMedia
                      media={heroMedia}
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-20 h-20 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                          <svg className="w-10 h-10 md:w-8 md:h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="text-white/80 text-base md:text-sm font-medium">Professional Services Marketing</div>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-blue-100 text-sm italic">(Marketing systems that scale beyond referrals)</p>
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
                {heroTitle}
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl">
                {heroDescription}
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

      {/* About Section */}
      {aboutSection && (
        <section className="py-16 px-6 bg-[#fef7ed]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {aboutSection.image && (
                <div className="relative md:col-span-1">
                  <div className="w-full max-w-xs mx-auto aspect-square bg-gradient-to-br from-[#1e3a8a]/20 to-[#8fb4ff]/20 rounded-2xl shadow-lg flex items-center justify-center">
                    <img 
                      src={aboutSection.image.startsWith('/') ? aboutSection.image : `/${aboutSection.image}`} 
                      alt="Anoop Kurup, marketing strategist and consultant, professional headshot in black and white"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              )}
              <div className="md:col-span-2">
                <h2 className="text-section-title font-bold text-[#1e3a8a] mb-6">{aboutSection.title}</h2>
                <div className="text-[#374151] leading-relaxed space-y-4 mb-6">
                  {aboutSection.content.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </div>
                <Button asChild className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                  <Link href="/about" className="flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Target Audience Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-section-title font-bold text-[#1e3a8a]">I Work Best With</h2>
            <p className="text-xl text-[#374151] max-w-4xl mx-auto">
              Over 200+ engagements, I've discovered which types of businesses get the most transformative results from systematic marketing approaches.
            </p>
            <div className="max-w-4xl mx-auto bg-[#8fb4ff]/10 p-6 rounded-lg">
              <p className="text-[#374151]">
                Not every business is ready for what I do. The companies that see dramatic improvements share three characteristics: they value expertise over price, they're willing to invest in systems that compound over time, and they understand that sustainable growth comes from consistent execution, not silver bullets.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {audienceSegments.map((segment: any, index: number) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && (
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 7h-9"/>
                        <path d="M14 17H5"/>
                        <circle cx="17" cy="17" r="3"/>
                        <circle cx="7" cy="7" r="3"/>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="6"/>
                        <circle cx="12" cy="12" r="2"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{segment.title}</h3>
                  <p className="text-[#1e40af] font-semibold mb-4">{segment.subheading}</p>
                </div>
                <p className="text-[#374151] leading-relaxed mb-6">
                  {segment.description}
                </p>
                <div className="bg-[#f59e0b]/10 p-4 rounded-lg mb-6">
                  <p className="text-sm font-semibold text-[#1e3a8a]">
                    Typical results: {segment.results}
                  </p>
                </div>
                <Button asChild className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                  <Link href={segment.link?.url || segment.link || ""}>
                    {segment.link?.text || "View Success Stories"}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-[#fef7ed]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-section-title font-bold text-[#1e3a8a]">What I Offer</h2>
            <p className="text-xl text-[#374151]">
              Multiple ways to work together, tailored to your needs and stage of growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                  {index === 0 && (
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 7h-9"/>
                      <path d="M14 17H5"/>
                      <circle cx="17" cy="17" r="3"/>
                      <circle cx="7" cy="7" r="3"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                      <rect x="9" y="9" width="6" height="6"/>
                      <line x1="9" y1="1" x2="9" y2="4"/>
                      <line x1="15" y1="1" x2="15" y2="4"/>
                      <line x1="9" y1="20" x2="9" y2="23"/>
                      <line x1="15" y1="20" x2="15" y2="23"/>
                      <line x1="20" y1="9" x2="23" y2="9"/>
                      <line x1="20" y1="14" x2="23" y2="14"/>
                      <line x1="1" y1="9" x2="4" y2="9"/>
                      <line x1="1" y1="14" x2="4" y2="14"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-subsection text-[#1e3a8a] mb-4">{service.title}</h3>
                <p className="text-[#374151] leading-relaxed mb-6">{service.description}</p>
                <Button asChild className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white">
                  <Link href={service.link}>{service.linkText || service.link_text}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-section-title font-bold text-[#1e3a8a]">What Clients Say</h2>
            <p className="text-xl text-[#374151]">
              Real results from businesses that transformed their marketing approach.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-[#fef7ed] p-6 rounded-lg">
                <p className="text-[#374151] italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#8fb4ff] rounded-full flex items-center justify-center text-[#1e3a8a] font-bold">
                    {testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e3a8a]">{testimonial.author}</p>
                    <p className="text-sm text-[#374151]">{testimonial.role}</p>
                    <p className="text-sm text-[#374151]">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-16 px-6 bg-[#fef7ed]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-section-title font-bold text-[#1e3a8a]">My Approach</h2>
            <p className="text-xl text-[#374151]">
              My work is built on three principles that drive real results:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {approachPrinciples.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{principle.number}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">{principle.title}</h3>
                <p className="text-[#374151] leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12">
            <h2 className="text-page-title font-bold text-white mb-6">Ready to simplify your marketing and lead generation?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's design a system that works for your business.
            </p>
            <Button size="lg" asChild className="bg-[#f59e0b] text-white hover:bg-[#d97706] px-8 py-4 rounded-full font-bold text-lg">
              <Link href="/contact" className="flex items-center">
                Work With Me
                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}