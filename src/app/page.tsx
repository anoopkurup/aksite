import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LineIcon from "@/components/LineIcon";

export default function Home() {
  const audienceSegments = [
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

  const services = [
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

  const testimonials = [
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
                Clarity. Strategy. Systems.
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
                I help professional service and tech-enabled businesses create clear, consistent, and cost-effective marketing systems — powered by fundamentals, AI, and smart execution.
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
                    <div className="w-full h-64 bg-primary-foreground/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary-foreground/40">
                      <div className="text-center space-y-3">
                        <LineIcon type="image" className="text-primary-foreground/60 mx-auto" size={48} />
                        <p className="text-primary-foreground/80 text-sm font-medium">Hero Image Placeholder</p>
                        <p className="text-primary-foreground/60 text-xs">Professional services marketing visual</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
            {audienceSegments.map((segment, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    <LineIcon type={segment.iconType} className="text-accent mb-4" size={48} />
                    <CardTitle className="text-xl">{segment.title}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {segment.subheading}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
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
                <CardFooter>
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
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <LineIcon type={service.iconType} className="text-accent-foreground" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200">
                    <Link href={service.link}>{service.linkText}</Link>
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
            {testimonials.map((testimonial, index) => (
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
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
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
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="shadow-xl border-l-4 border-l-accent/50">
            <CardHeader>
              <CardTitle className="text-display-sm">Ready to simplify your marketing and lead generation?</CardTitle>
              <CardDescription className="text-lg">
                Let's design a system that works for your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-200">
                <Link href="/contact" className="flex items-center">
                  Work With Me
                  <LineIcon type="arrow-right" className="ml-2" size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-primary-foreground/15 border-primary-foreground/30 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Join the Practical Marketing Newsletter
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg">
                Get weekly strategies, templates, and AI workflows to grow your services business. Practical insights, no fluff.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="max-w-md mx-auto space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-foreground">Email address</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="you@company.com" 
                    className="bg-primary-foreground text-primary"
                  />
                </div>
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-200">
                  Subscribe Now
                </Button>
                <p className="text-sm text-primary-foreground/70">
                  <LineIcon type="shield" className="inline mr-2" size={16} />
                  No spam. Practical, actionable insights only. Unsubscribe anytime.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}