import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";
import { getContentPage, convertIconName, processHeroMedia } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Consulting - Fix Your Scattered Marketing Strategy",
  description: "Transform scattered marketing efforts into systematic lead generation. Strategic consulting for professional services and tech-enabled businesses.",
};

export default function ConsultingPage() {
  // Get consulting page content from MDX
  const consultingContent = getContentPage('consulting');
  const heroMedia = consultingContent ? processHeroMedia(consultingContent.frontmatter) : null;
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

  const corePrinciples = [
    {
      iconType: "target",
      title: "Strategy First",
      description: "Clarity on positioning, messaging, and customer journey comes before campaigns."
    },
    {
      iconType: "cpu",
      title: "Systems Thinking",
      description: "Marketing should run like a machine: structured, consistent, and scalable."
    },
    {
      iconType: "handshake",
      title: "AI as an Enabler",
      description: "AI makes execution faster, cheaper, and more consistent—while keeping human creativity at the center."
    }
  ];

  const methodSteps = [
    {
      number: "1",
      title: "Diagnose",
      description: "Understand your business model, customer journey, and current marketing challenges."
    },
    {
      number: "2",
      title: "Define",
      description: "Clarify positioning, messaging, and differentiation that resonates with your ideal clients."
    },
    {
      number: "3",
      title: "Design",
      description: "Create a marketing system that connects strategy with AI-enabled execution."
    },
    {
      number: "4",
      title: "Deploy",
      description: "Implement workflows, templates, and tools with your team for consistent execution."
    },
    {
      number: "5",
      title: "Scale",
      description: "Measure, refine, and expand the system so it grows without overwhelming your team."
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

  const differences = [
    {
      title: "For Leaders",
      description: "Confidence that marketing is running on a repeatable system, not random effort. You're no longer stuck in daily firefighting."
    },
    {
      title: "For Teams",
      description: "Clear playbooks, AI-powered workflows, and messaging frameworks make execution faster and less stressful. Everyone knows what to do, and why."
    }
  ];

  return (
    <PageTemplate 
      title={consultingContent?.frontmatter?.title || "Fix Your Marketing"}
      subtitle={consultingContent?.frontmatter?.description || "Your marketing isn't broken. It's just scattered. I help professional services and tech-enabled businesses fix their marketing by creating clarity, focus, and a repeatable system for generating leads."}
      heroBackground="gradient"
      heroIcon="target"
      heroMedia={heroMedia}
    >
      {/* The 6 Most Common Marketing Problems */}
      <section className="py-16 px-6 bg-navy-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Why Most Marketing Doesn't Work</h2>
            <p className="text-xl text-neutral-700 mb-6 font-medium">It's not about effort. It's about structure.</p>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto">
              Most businesses don't fail at marketing because they lack effort. They fail because of these systematic issues:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {marketingProblems.map((problem, index) => (
              <Card key={index} className="p-6 bg-navy-100 shadow-navy-soft">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold text-navy-800 mb-3">{problem.title}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-navy-100 p-8 rounded-xl text-center">
            <p className="text-lg text-neutral-700">
              <strong>The outcome?</strong> Campaigns that fizzle out, growth that feels random, and leaders stuck in the weeds. Marketing feels like chaos. Teams work harder but see diminishing returns.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">The Lead Machine Method™: Core Principles</h2>
            <p className="text-xl text-neutral-700">
              My approach is built on three foundational principles that transform scattered marketing into systematic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corePrinciples.map((principle, index) => (
              <Card key={index} className="p-8 bg-white shadow-navy-soft text-center hover:shadow-navy-medium transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={principle.iconType} className="text-accent mx-auto" size={56} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-4">{principle.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Method Timeline */}
      <section className="py-16 px-6 bg-navy-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">How The Lead Machine Method™ Works</h2>
            <p className="text-xl text-neutral-700">
              A systematic 5-step process that takes you from scattered tactics to predictable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {methodSteps.map((step, index) => (
              <Card key={index} className="p-6 bg-navy-100 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-periwinkle-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-navy-800 mb-3">{step.title}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-16 px-6 bg-navy-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">What Makes This Different</h2>
            <p className="text-xl text-neutral-700 mb-8">
              Most marketing approaches focus on tactics or tools. The Lead Machine Method™ starts with strategy and builds systems that last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="p-8 bg-white shadow-navy-soft">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-navy-800 mb-6">Traditional Marketing Approach:</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Campaign-focused
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Tool-dependent
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Requires constant management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Results are unpredictable
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-periwinkle-600 text-white">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-white mb-6">The Lead Machine Method™:</h3>
                <ul className="space-y-3 text-periwinkle-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    System-focused
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Strategy-driven
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Scales with minimal oversight
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Delivers predictable results
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differences.map((diff, index) => (
              <Card key={index} className="p-8 bg-white shadow-navy-soft">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-navy-800 mb-4">{diff.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{diff.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-neutral-700">
              <strong>The difference is structure.</strong> When marketing operates as a system rather than a collection of campaigns, it becomes an asset that compounds over time.
            </p>
          </div>
        </div>
      </section>

      {/* Fix Your Marketing with a System */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">How I'll Fix Your Marketing</h2>
            <p className="text-xl text-neutral-700 max-w-4xl mx-auto">
              Instead of more tactics, you need strategic clarity and systematic execution. When we work together, we'll build a clear, structured marketing engine that transforms scattered efforts into predictable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 bg-navy-50 shadow-navy-soft hover:shadow-navy-medium transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={solution.iconType} className="text-accent" size={56} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-4">{solution.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* I Work Best With */}
      <section className="py-16 px-6 bg-slate-50">
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
                  <div className="bg-slate-50 p-4 rounded-lg">
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
              <Card key={index} className="p-8 bg-slate-50 shadow-soft">
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
      <section className="py-16 px-6 bg-gradient-to-br from-navy-600 to-navy-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Lead Machine?</h2>
          <p className="text-xl text-navy-100 mb-8">
            You don't need more tactics. You need a system. Let's transform your scattered marketing into predictable growth.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-full font-bold text-lg shadow-navy-strong">
            <Link href="/contact">Work With Me</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}