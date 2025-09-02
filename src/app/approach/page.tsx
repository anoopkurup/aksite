import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";

export default function ApproachPage() {
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
      description: "Understand your business model, customer journey, and current marketing."
    },
    {
      number: "2",
      title: "Define",
      description: "Clarify positioning, messaging, and differentiation."
    },
    {
      number: "3",
      title: "Design",
      description: "Create a marketing system that connects strategy with AI-enabled execution."
    },
    {
      number: "4",
      title: "Deploy",
      description: "Implement workflows, templates, and tools with your team."
    },
    {
      number: "5",
      title: "Scale",
      description: "Measure, refine, and expand the system so it grows without chaos."
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

  const applications = [
    {
      iconType: "handshake",
      title: "Consulting Projects",
      description: "Full implementation with hands-on strategy development and system setup.",
      link: "/consulting"
    },
    {
      iconType: "graduation",
      title: "Workshops",
      description: "Intensive sessions where you build your system with guided instruction.",
      link: "/workshops"
    },
    {
      iconType: "cpu",
      title: "AI Solutions",
      description: "Pre-built tools that implement key components of the method.",
      link: "/ai-solutions"
    }
  ];

  return (
    <PageTemplate 
      title="The Lead Machine Method™"
      subtitle="A structured, AI-enabled approach to transform scattered marketing into a predictable, scalable lead generation system."
      heroBackground="gradient"
    >
      {/* Why Most Marketing Doesn't Work */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Why Most Marketing Doesn't Work</h2>
          <p className="text-xl text-charcoal mb-6 font-medium">It's not about effort. It's about structure.</p>
          
          <div className="bg-light-gray p-8 rounded-xl mb-8">
            <p className="text-lg text-charcoal mb-4">Businesses often fail at marketing because:</p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gamboge rounded-full mt-3 mr-4 flex-shrink-0"></div>
                They jump from one tactic to the next without a unifying strategy.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gamboge rounded-full mt-3 mr-4 flex-shrink-0"></div>
                Their messaging is inconsistent and fails to resonate.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gamboge rounded-full mt-3 mr-4 flex-shrink-0"></div>
                They depend too heavily on referrals or one unreliable channel.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gamboge rounded-full mt-3 mr-4 flex-shrink-0"></div>
                They experiment with AI tools, but without a framework to tie it all together.
              </li>
            </ul>
          </div>
          
          <p className="text-lg text-charcoal">
            <strong>The outcome?</strong> Campaigns that fizzle out, growth that feels random, and leaders stuck in the weeds.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">The Core Principles</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corePrinciples.map((principle, index) => (
              <Card key={index} className="p-8 bg-white shadow-soft text-center">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={principle.iconType} className="text-gamboge mx-auto" size={56} />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-4">{principle.title}</h3>
                  <p className="text-charcoal leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Method Timeline */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">The Lead Machine Method Works</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {methodSteps.map((step, index) => (
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

      {/* The Difference It Makes */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">The Difference It Makes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differences.map((diff, index) => (
              <Card key={index} className="p-8 bg-white shadow-soft">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-oxford-blue mb-4">{diff.title}</h3>
                  <p className="text-charcoal leading-relaxed">{diff.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">What Makes This Different</h2>
            <p className="text-xl text-charcoal mb-8">
              Most marketing approaches focus on tactics or tools. The Lead Machine Method™ starts with strategy and builds systems that last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-light-gray">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-oxford-blue mb-6">Traditional Marketing Approach:</h3>
                <ul className="space-y-3 text-charcoal">
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

            <Card className="p-8 bg-azure text-white">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-white mb-6">The Lead Machine Method™:</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gamboge rounded-full mr-3"></div>
                    System-focused
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gamboge rounded-full mr-3"></div>
                    Strategy-driven
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gamboge rounded-full mr-3"></div>
                    Scales with minimal oversight
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gamboge rounded-full mr-3"></div>
                    Delivers predictable results
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-charcoal">
              <strong>The difference is structure.</strong> When marketing operates as a system rather than a collection of campaigns, it becomes an asset that compounds over time.
            </p>
          </div>
        </div>
      </section>

      {/* Applications of the Method */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">Applications of the Method</h2>
            <p className="text-xl text-charcoal">
              The Lead Machine Method™ works across different engagement types:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="p-8 bg-white shadow-soft hover:shadow-medium transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={app.iconType} className="text-gamboge mx-auto" size={56} />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-4">{app.title}</h3>
                  <p className="text-charcoal mb-6 leading-relaxed">{app.description}</p>
                  <Button asChild variant="outline" className="border-azure text-azure hover:bg-azure hover:text-white">
                    <Link href={app.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-azure to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Lead Machine?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether through consulting, a workshop, or AI solutions—I'll help you implement The Lead Machine Method™ in your business.
          </p>
          <Button asChild size="lg" className="bg-gamboge text-oxford-blue hover:bg-yellow-400 px-8 py-4 rounded-full font-bold text-lg">
            <Link href="/contact">Work With Me</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}