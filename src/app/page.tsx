import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LineIcon from "@/components/LineIcon";
import HeroMedia from "@/components/HeroMedia";
import { getContentPage, convertIconName, processHeroMedia } from "@/lib/content";

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
      {/* Hero Section - Modern Navy Theme */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-24 px-6 min-h-[700px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-[#8fb4ff] text-[#1e3a8a] border-[#8fb4ff] hover:bg-[#8fb4ff]/90">
                <LineIcon type="target" className="mr-2" size={16} />
                Trusted by 200+ Professional Services Firms
              </Badge>
              <h1 className="text-hero font-bold leading-tight mb-6 text-white">
                {heroTitle}
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl">
                {heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#e6a817] text-white hover:bg-[#d69e15] font-semibold shadow-lg">
                  <Link href="/contact" className="flex items-center">
                    Work With Me
                    <LineIcon type="arrow-right" className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 text-blue-200 hover:bg-blue-200/20 hover:text-white bg-white/10 font-semibold">
                  <Link href="/workshops">Explore Workshops</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white/15 border-white/30 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <HeroMedia 
                      media={heroMedia} 
                      className="w-full"
                      priority={true}
                    />
                  </div>
                </CardContent>
              </Card>
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
                <Button asChild className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white shadow-lg">
                  <Link href="/about">
                    Read More
                    <LineIcon type="arrow-right" className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Target Audience Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-section-title font-bold text-[#1e3a8a]">I Work Best With</h2>
            <p className="text-xl text-[#374151] max-w-4xl mx-auto">
              Over 200+ engagements, I've discovered which types of businesses get the most transformative results from systematic marketing approaches.
            </p>
            <Card className="max-w-4xl mx-auto bg-[#8fb4ff]/20 border-[#8fb4ff]/30">
              <CardContent className="p-6">
                <p className="text-[#374151]">
                  Not every business is ready for what I do. The companies that see dramatic improvements share three characteristics: they value expertise over price, they're willing to invest in systems that compound over time, and they understand that sustainable growth comes from consistent execution, not silver bullets.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {audienceSegments.map((segment: any, index: number) => (
              <Card key={index} className="h-full hover:shadow-xl transition-shadow flex flex-col bg-white border-[#8fb4ff]/20">
                <CardHeader>
                  <div className="mb-4">
                    <LineIcon type={convertIconName(segment.iconType || segment.icon)} className="text-[#e6a817] mb-4" size={48} />
                    <CardTitle className="text-xl text-[#1e3a8a]">{segment.title}</CardTitle>
                    <CardDescription className="text-[#1e40af] font-semibold">
                      {segment.subheading}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-[#374151] leading-relaxed">
                    {segment.description}
                  </p>
                  <Card className="bg-[#e6a817]/10 border border-[#e6a817]/30">
                    <CardContent className="p-4">
                      <p className="text-sm font-semibold text-[#1e3a8a]">
                        Typical results: {segment.results}
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white shadow-lg">
                    <Link href={segment.link?.url || segment.link || ""}>
                      {segment.link?.text || "View Success Stories"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
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
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#e6a817] bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e6a817] to-[#d69e15] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <LineIcon type={convertIconName(service.iconType || service.icon)} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-subsection text-[#1e3a8a]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#374151] leading-relaxed">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white shadow-lg">
                    <Link href={service.link}>{service.linkText || service.link_text}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-section-title font-bold text-[#1e3a8a]">What Clients Say</h2>
            <p className="text-xl text-[#374151]">
              Real results from businesses that transformed their marketing approach.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#8fb4ff] bg-white">
                <CardContent className="p-6 space-y-4">
                  <p className="text-[#374151] italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <Separator className="bg-[#8fb4ff]/30" />
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-[#8fb4ff] text-[#1e3a8a]">
                        {testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#1e3a8a]">{testimonial.author}</p>
                      <p className="text-sm text-[#374151]">{testimonial.role}</p>
                      <p className="text-sm text-[#374151]">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <Card key={index} className="text-center bg-white border-[#8fb4ff]/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#e6a817] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{principle.number}</span>
                  </div>
                  <CardTitle className="text-xl text-[#1e3a8a]">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#374151] leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
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
            <Button size="lg" asChild className="bg-[#e6a817] text-white hover:bg-[#d69e15] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <Link href="/contact" className="flex items-center">
                Work With Me
                <LineIcon type="arrow-right" className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}