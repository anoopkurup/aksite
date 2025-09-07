import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LineIcon from "@/components/LineIcon";
import { getContentPage, convertIconName } from "@/lib/content";

export default function Home() {
  // Get homepage content from MDX
  const homepageContent = getContentPage('_index');
  const heroImage = homepageContent?.frontmatter?.hero_image || "/images/hero/homepage-heroimage.webp";
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
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-24 px-6 min-h-[700px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                <LineIcon type="target" className="mr-2" size={16} />
                Trusted by 200+ Professional Services Firms
              </Badge>
              <h1 className="text-display-lg md:text-display-xl font-bold leading-tight mb-6 text-primary-foreground">
                {heroTitle}
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
                {heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <Link href="/contact" className="flex items-center">
                    Work With Me
                    <LineIcon type="arrow-right" className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary bg-primary-foreground/10 font-semibold">
                  <Link href="/workshops">Explore Workshops</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-primary-foreground/15 border-primary-foreground/30 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <img 
                        src={heroImage} 
                        alt="Professional services marketing solutions"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {aboutSection && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {aboutSection.image && (
                <div className="relative md:col-span-1">
                  <div className="w-full max-w-xs mx-auto aspect-square bg-gradient-to-br from-oxford-blue/20 to-azure/20 rounded-2xl shadow-lg flex items-center justify-center">
                    <img 
                      src={aboutSection.image.startsWith('/') ? aboutSection.image : `/${aboutSection.image}`} 
                      alt="About Anoop Kurup"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              )}
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-oxford-blue mb-6">{aboutSection.title}</h2>
                <div className="text-charcoal leading-relaxed space-y-4 mb-6">
                  {aboutSection.content.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-display-md font-bold text-foreground">I Work Best With</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Over 200+ engagements, I've discovered which types of businesses get the most transformative results from systematic marketing approaches.
            </p>
            <Card className="max-w-4xl mx-auto bg-muted/50">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Not every business is ready for what I do. The companies that see dramatic improvements share three characteristics: they value expertise over price, they're willing to invest in systems that compound over time, and they understand that sustainable growth comes from consistent execution, not silver bullets.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {audienceSegments.map((segment: any, index: number) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="mb-4">
                    <LineIcon type={convertIconName(segment.iconType || segment.icon)} className="text-accent mb-4" size={48} />
                    <CardTitle className="text-xl">{segment.title}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {segment.subheading}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-muted-foreground leading-relaxed">
                    {segment.description}
                  </p>
                  <Card className="bg-accent/20 border border-accent/30">
                    <CardContent className="p-4">
                      <p className="text-sm font-semibold text-foreground">
                        Typical results: {segment.results}
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200">
                    <Link href={segment.link}>View Success Stories</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-display-md font-bold text-foreground">What I Offer</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to work together, tailored to your needs and stage of growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <LineIcon type={convertIconName(service.iconType || service.icon)} className="text-accent-foreground" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                    <Link href={service.link}>{service.link_text}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-display-md font-bold text-foreground">What Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real results from businesses that transformed their marketing approach.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent/10">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <Separator />
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-100 to-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-display-md font-bold text-foreground">My Approach</h2>
            <p className="text-xl text-muted-foreground">
              My work is built on three principles that drive real results:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {approachPrinciples.map((principle, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent-foreground">{principle.number}</span>
                  </div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-azure to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12">
            <h2 className="text-display-sm font-bold text-white mb-6">Ready to simplify your marketing and lead generation?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's design a system that works for your business.
            </p>
            <Button size="lg" asChild className="bg-gamboge text-oxford-blue hover:bg-yellow-400 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200">
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