import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";

export default function AboutPage() {
  const audienceItems = [
    {
      iconType: "chart",
      title: "Professional Service Firms",
      subheading: "Beyond Referrals",
      description: "Marketing agencies, law firms, consulting practices, training companies, and specialized B2B services firms with 10-50 employees. These are businesses built on expertise and relationships that need systematic approaches to demonstrate thought leadership and generate predictable demand.",
      results: "Typical results: 40-60% increase in qualified leads within 90 days, 25-35% improvement in close rates through better positioning."
    },
    {
      iconType: "monitor",
      title: "Tech-Enabled Businesses",
      subheading: "Scale Without Chaos",
      description: "SaaS companies, IT service providers, digital agencies, and productized service businesses experiencing rapid growth. They need marketing processes that scale efficiently, generate qualified leads consistently, and support better-qualified prospects.",
      results: "Typical results: 50-80% reduction in sales cycle length, 3x improvement in marketing-qualified lead conversion rates."
    },
    {
      iconType: "target",
      title: "Consultants & Experts",
      subheading: "Systematic Growth",
      description: "Independent professionals, boutique consultancies, and subject matter experts earning $150K+ annually who are ready to scale beyond personal capacity. They want systematic lead generation that attracts ideal clients automatically.",
      results: "Typical results: 2-3x increase in inbound inquiries, 50-70% improvement in project value and client quality."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience", description: "Helping businesses build systematic marketing approaches" },
    { number: "200+", label: "Companies Helped", description: "From startups to established professional services firms" },
    { number: "40-60%", label: "Average Lead Increase", description: "Typical results within 90 days of implementation" }
  ];

  const testimonials = [
    {
      quote: "Anoop helped us move from chaotic, reactive marketing to a systematic approach that consistently generates qualified leads. Our close rate improved by 35% within 90 days, and more importantly, we now have predictable pipeline visibility.",
      author: "Sarah Chen",
      role: "Marketing Agency Founder"
    },
    {
      quote: "The AI workflows Anoop designed save our team 15 hours per week on content creation while actually improving quality. It's like having an extra team member focused entirely on marketing, but one that never gets tired or has off days.",
      author: "Michael Rodriguez",
      role: "SaaS CEO"
    },
    {
      quote: "Finally, marketing that makes sense for professional services. Anoop's approach helped us articulate our value clearly and build a pipeline that doesn't depend on just referrals. We've doubled our qualified inquiries in six months.",
      author: "David Thompson",
      role: "Managing Partner, Legal Practice"
    }
  ];

  const principles = [
    {
      title: "Strategy Before Tactics",
      description: "Marketing should be built on positioning and strategy, not just campaigns and content. Too many businesses jump straight to tactics—social media posts, email campaigns, ads—without understanding who they serve, what makes them different, or where their customers actually spend time. I start with strategy: understanding your market position, ideal customer profile, and competitive advantage. Then we build tactics that reinforce that strategy."
    },
    {
      title: "AI as an Enabler, Not a Replacement",
      description: "Artificial intelligence is incredibly powerful when used correctly—it can make marketing faster, cheaper, and more consistent. But it's not magic, and it's not a replacement for human creativity and strategic thinking. I help businesses implement AI workflows that enhance their marketing processes while freeing up human time for higher-value strategic work."
    },
    {
      title: "Systems Win Over Improvisation",
      description: "When marketing is designed as a repeatable process, it creates predictability, accountability, and the ability to scale without proportional increases in effort or team size. Most businesses approach marketing like jazz improvisation—responding to whatever seems urgent that week. I help businesses build marketing systems with documented processes, clear metrics, and workflows that execute consistently."
    },
    {
      title: "Sustainable Growth Over Quick Wins",
      description: "I'm not interested in growth hacks or superficial tactics that generate short-term spikes. My work is about building marketing systems that create sustainable, predictable growth—the kind that keeps working even when you're not actively pushing new campaigns. This approach creates lasting competitive advantages, not temporary bumps."
    }
  ];

  const workProcess = [
    {
      number: "1",
      title: "Discovery & Strategy Foundation",
      description: "We start with comprehensive discovery to understand your business model, competitive position, and growth goals. I audit your current marketing efforts, analyze your customer journey, and identify gaps between your expertise and how it's communicated to prospects. This foundation work reveals why previous marketing efforts haven't delivered consistent results and creates a clear strategic roadmap for moving forward."
    },
    {
      number: "2",
      title: "System Design & Implementation",
      description: "Based on the strategy foundation, I design marketing systems tailored to your business. This includes lead generation workflows, content creation processes, customer nurturing sequences, and AI-enhanced prospecting systems. Each system is built to be repeatable, measurable, and scalable. I work hands-on with your team to implement these systems with training and ongoing support."
    },
    {
      number: "3",
      title: "AI Integration & Optimization",
      description: "Where strategic, I integrate AI tools to make your marketing more efficient without sacrificing quality. This includes AI-powered content creation that maintains your brand voice, automated lead research, personalized email sequences, and data analysis workflows. The goal is to enhance human creativity and free up time for relationship building and strategic planning."
    },
    {
      number: "4",
      title: "Measurement & Iteration",
      description: "Every system includes comprehensive metrics and feedback loops for clear visibility into marketing ROI. We establish baselines, set targets, and create dashboards for real-time insights into lead quality and conversion rates. We build systematic review processes for continuous improvement, ensuring your marketing investment generates measurable returns."
    }
  ];

  return (
    <PageTemplate 
      title="Marketing That Actually Works"
      subtitle="Most brilliant businesses struggle with marketing not because they don't try, but because their efforts are scattered, tactical, and disconnected from any coherent strategy."
      heroBackground="gradient"
      heroIcon="handshake"
    >
      {/* Story Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-oxford-blue/20 to-azure/20 rounded-2xl shadow-lg flex items-center justify-center">
                <LineIcon type="target" className="text-gamboge" size={120} />
              </div>
              <Card className="absolute -bottom-6 -right-6 bg-gamboge p-4 rounded-xl shadow-lg">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-oxford-blue">15+</div>
                  <div className="text-sm text-oxford-blue">Years Experience</div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-oxford-blue mb-6">My Story and Approach</h2>
              <p className="text-charcoal mb-6 leading-relaxed">
                I started my career in research engineering at a technology startup, where I quickly learned that great products don't sell themselves. I moved into intellectual property analysis, helping companies understand competitive landscapes and protect their innovations. Then I made the leap into building businesses of my own—and that's when I truly understood the marketing challenge firsthand.
              </p>
              <p className="text-charcoal mb-6 leading-relaxed">
                This journey taught me that marketing success isn't about following the latest trends or using the fanciest tools. It's about building systems that work consistently, regardless of market conditions or team changes.
              </p>
              <p className="text-charcoal mb-6 leading-relaxed">
                For the past 15+ years, I've been helping businesses fix this fundamental problem. Working with over 200 companies, I've developed a systematic approach that transforms marketing from a necessary evil into a strategic growth engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">Businesses I Help</h2>
            <p className="text-xl text-charcoal max-w-4xl mx-auto mb-4">
              I specialize in professional services and knowledge-driven companies that need systematic approaches to marketing.
            </p>
            <p className="text-charcoal max-w-4xl mx-auto">
              Not every business is ready for what I do. The companies that see dramatic improvements share three characteristics: they value expertise over price, they're willing to invest in systems that compound over time, and they understand that sustainable growth comes from consistent execution, not silver bullets.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {audienceItems.map((item, index) => (
              <Card key={index} className="p-8 bg-white shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={item.iconType} className="text-gamboge" size={56} />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-2">{item.title}</h3>
                  <p className="text-azure font-semibold mb-4">{item.subheading}</p>
                  <p className="text-charcoal mb-6 leading-relaxed">{item.description}</p>
                  <div className="bg-light-gray p-4 rounded-lg">
                    <p className="text-sm font-semibold text-oxford-blue">{item.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-charcoal">
              Real numbers and real feedback from businesses that transformed their marketing approach.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-azure text-white text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-blue-100 mb-2">{stat.label}</div>
                  <div className="text-sm text-blue-200">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-light-gray shadow-soft">
                <CardContent className="p-0">
                  <blockquote className="text-charcoal mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-oxford-blue">{testimonial.author}</p>
                    <p className="text-sm text-azure">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">My Core Principles</h2>
            <p className="text-xl text-charcoal">
              These beliefs guide everything I do and every system I build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="p-8 bg-white shadow-soft">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-oxford-blue mb-4">{principle.title}</h3>
                  <p className="text-charcoal leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">How I Work With Clients</h2>
            <p className="text-xl text-charcoal">
              My approach combines the fundamentals of good marketing with modern AI-driven workflows and automation.
            </p>
          </div>

          <div className="space-y-12">
            {workProcess.map((step, index) => (
              <Card key={index} className="p-8 shadow-soft">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-2 text-center md:text-left">
                      <div className="w-16 h-16 bg-azure text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto md:mx-0 mb-4 md:mb-0">
                        {step.number}
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <h3 className="text-xl font-bold text-oxford-blue mb-4">{step.title}</h3>
                      <p className="text-charcoal leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Together Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Working Together</h2>
          <p className="text-lg text-charcoal mb-6 leading-relaxed">
            When I work with you, I'm hands-on and practical. I'll help you think through positioning and strategy, but I'll also roll up my sleeves to help you implement workflows, set up automation, and optimize processes. I bring both strategic thinking and tactical execution to every engagement.
          </p>
          <p className="text-lg text-charcoal mb-8 leading-relaxed">
            Most importantly, I focus on marketing that aligns with who you are as a business. I'm not trying to turn every client into a social media influencer or content creation machine. Instead, I help you find marketing approaches that feel authentic, sustainable, and effective for your specific business model and goals.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-azure to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Marketing from Chaos to System?</h2>
          <p className="text-xl text-blue-100 mb-8">
            If you're tired of scattered marketing efforts and ready to build systematic approaches that deliver predictable growth, let's discuss how I can help your business.
          </p>
          <Button asChild size="lg" className="bg-gamboge text-oxford-blue hover:bg-yellow-400 px-8 py-4 rounded-full font-bold text-lg">
            <Link href="/contact">Schedule a Strategy Call</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}