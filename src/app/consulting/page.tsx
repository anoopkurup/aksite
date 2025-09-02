import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";

export default function ConsultingPage() {
  const marketingProblems = [
    {
      title: "Scattered & Generic Messaging",
      description: "Prospects can't quickly understand what makes you different from competitors, leading to longer sales cycles and price-based competition."
    },
    {
      title: "Tactics Without Strategy",
      description: "Teams post on LinkedIn, run ads, and create content without a unified plan that connects these activities to business goals."
    },
    {
      title: "Over-Reliance on Referrals",
      description: "Growth becomes unpredictable and vulnerable to market changes, economic downturns, or key relationship dependencies."
    },
    {
      title: "Disconnected Tool Experiments",
      description: "AI and new tools are added without integration into systematic workflows, creating more complexity instead of efficiency."
    },
    {
      title: "Weak Follow-Up Systems",
      description: "Qualified prospects who aren't ready to buy immediately are lost, while competitors capture these opportunities."
    },
    {
      title: "Inconsistent Content & Visibility",
      description: "Sporadic posting and content creation means prospects forget about you between interactions, while competitors who show up consistently capture mindshare and opportunities."
    }
  ];

  const solutions = [
    {
      iconType: "target",
      title: "Clarifies Your Positioning & Messaging",
      description: "We'll define exactly what makes you different from competitors and craft messaging that resonates with your ideal clients. You'll have clear value propositions, compelling case studies, and conversation frameworks that make prospects say 'this is exactly what we need' instead of shopping around on price."
    },
    {
      iconType: "chart",
      title: "Maps Your Complete Customer Journey",
      description: "We'll design every touchpoint from first contact to closed deal, ensuring no prospects fall through the cracks. You'll have systematic follow-up sequences, nurturing campaigns, and conversion pathways that guide leads forward automatically, even when your team is focused on delivery."
    },
    {
      iconType: "cpu",
      title: "Builds Repeatable Lead Generation Systems",
      description: "We'll identify the most effective channels for your business and create sustainable workflows that generate qualified leads consistently. This includes content strategies, AI-powered automation, referral systems, and partnership development—all working together to reduce your dependence on any single source."
    }
  ];

  const process = [
    {
      number: "1",
      title: "Discovery & Diagnosis",
      description: "We start by understanding your current marketing, challenges, and growth goals."
    },
    {
      number: "2",
      title: "Strategy & Positioning",
      description: "We define your unique positioning and map the customer journey that fits your business."
    },
    {
      number: "3",
      title: "System Design",
      description: "I create a structured marketing plan that combines strategy with AI-driven execution."
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "I work with your team to set up workflows, templates, and tools so they can run the system confidently."
    },
    {
      number: "5",
      title: "Review & Scale",
      description: "We refine, measure results, and set up your system to scale without you being stuck in daily operations."
    }
  ];

  const audienceItems = [
    {
      iconType: "handshake",
      title: "Professional Service Firms",
      subheading: "Beyond Referrals",
      description: "Marketing agencies, law firms, consulting practices, training companies, and specialized B2B services firms with 10-50 employees. These are businesses built on expertise and relationships, but they've hit the ceiling of what referrals alone can deliver. They need systematic approaches to demonstrate thought leadership, build authority, and generate predictable demand without compromising their professional reputation.",
      results: "Typical results: 40-60% increase in qualified leads within 90 days, 25-35% improvement in close rates through better positioning."
    },
    {
      iconType: "monitor",
      title: "Tech-Enabled Businesses",
      subheading: "Scale Without Chaos",
      description: "SaaS companies, IT service providers, digital agencies, and productized service businesses experiencing rapid growth or planning for it. These companies understand technology but struggle with marketing systems that can keep pace with their ambitions. They have solid products and early traction but need marketing processes that scale efficiently and generate qualified leads consistently.",
      results: "Typical results: 50-80% reduction in sales cycle length, 3x improvement in marketing-qualified lead conversion rates."
    },
    {
      iconType: "target",
      title: "Consultants & Experts",
      subheading: "Systematic Growth",
      description: "Independent professionals, boutique consultancies, and subject matter experts earning $150K+ annually who are ready to scale beyond personal capacity. These are recognized experts in their fields who've outgrown the feast-or-famine cycle of networking and referrals. They want to build personal brands and systematic lead generation that attracts ideal clients automatically.",
      results: "Typical results: 2-3x increase in inbound inquiries, 50-70% improvement in project value and client quality."
    }
  ];

  const deliverables = [
    {
      iconType: "target",
      title: "A Clear Marketing Strategy",
      description: "A comprehensive 20-page strategic blueprint that defines your unique market position, target customer segments, competitive differentiators, and growth priorities. This isn't generic advice—it's a custom roadmap aligned to your specific business goals, market realities, and competitive landscape that your entire team can execute with confidence."
    },
    {
      iconType: "handshake",
      title: "Positioning & Messaging Frameworks",
      description: "Proven messaging templates and positioning statements that eliminate the guesswork from your communications. You'll receive value proposition frameworks, elevator pitches, website copy guidelines, and sales conversation scripts—all crafted to resonate with your ideal clients and differentiate you from competitors."
    },
    {
      iconType: "chart",
      title: "A 12-Month Lead Generation Plan",
      description: "A detailed, month-by-month execution plan that prioritizes the most effective channels for your business. Includes content calendars, campaign workflows, budget allocations, AI automation setups, and performance benchmarks—everything needed to generate consistent, qualified leads without overwhelming your team."
    },
    {
      iconType: "monitor",
      title: "Templates & Workflows",
      description: "Ready-to-use templates and documented processes that accelerate execution and ensure consistency. You'll get email sequences, social media templates, content briefs, prospect research workflows, and AI prompt libraries—plus training materials so your team can implement everything effectively."
    }
  ];

  return (
    <PageTemplate 
      title="Fix Your Marketing"
      subtitle="Your marketing isn't broken. It's just scattered. I help professional services and tech-enabled businesses fix their marketing by creating clarity, focus, and a repeatable system for generating leads."
      heroBackground="white"
    >
      {/* The 6 Most Common Marketing Problems */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">The 6 Most Common Marketing Problems</h2>
            <p className="text-xl text-charcoal max-w-4xl mx-auto">
              Most businesses don't fail at marketing because they lack effort. They fail because of these systematic issues:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {marketingProblems.map((problem, index) => (
              <Card key={index} className="p-6 bg-light-gray shadow-soft">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold text-oxford-blue mb-3">{problem.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-light-gray p-8 rounded-xl text-center">
            <p className="text-lg text-charcoal">
              <strong>The result?</strong> Marketing feels like chaos. Teams work harder but see diminishing returns. Leads are inconsistent. Growth plateaus. Founders feel stuck in the day-to-day instead of building strategic value.
            </p>
          </div>
        </div>
      </section>

      {/* Fix Your Marketing with a System */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">Fix Your Marketing with a System</h2>
            <p className="text-xl text-charcoal max-w-4xl mx-auto">
              Instead of more tactics, you need strategic clarity and systematic execution. When we work together, we'll build a clear, structured marketing engine that transforms scattered efforts into predictable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 bg-white shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={solution.iconType} className="text-gamboge" size={56} />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-4">{solution.title}</h3>
                  <p className="text-charcoal leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Consulting Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">My Consulting Process</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="p-6 bg-light-gray text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-azure text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-oxford-blue mb-3">{step.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* I Work Best With */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">I Work Best With:</h2>
            <p className="text-xl text-charcoal max-w-4xl mx-auto mb-4">
              Over 200+ engagements, I've discovered which types of businesses get the most transformative results from systematic marketing approaches.
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

      {/* What You'll Walk Away With */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">What You'll Walk Away With</h2>
            <p className="text-xl text-charcoal">
              Concrete deliverables designed to transform your marketing from scattered tactics into a systematic growth engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((deliverable, index) => (
              <Card key={index} className="p-8 bg-light-gray shadow-soft">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={deliverable.iconType} className="text-gamboge" size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-4">{deliverable.title}</h3>
                  <p className="text-charcoal leading-relaxed">{deliverable.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-azure to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Let's Fix Your Marketing</h2>
          <p className="text-xl text-blue-100 mb-8">
            You don't need more tactics. You need a system.
          </p>
          <Button asChild size="lg" className="bg-gamboge text-oxford-blue hover:bg-yellow-400 px-8 py-4 rounded-full font-bold text-lg">
            <Link href="/contact">Book a Call</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}