import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";

export default function WorkshopsPage() {
  const whyJoinReasons = [
    {
      iconType: "graduation",
      title: "Hands-on",
      description: "You build your own system during the workshop."
    },
    {
      iconType: "cpu",
      title: "AI-enabled",
      description: "I give you tested workflows and prompts to speed up execution."
    },
    {
      iconType: "target",
      title: "Strategic + Practical",
      description: "You'll leave with clarity on what to do and the tools to actually do it."
    }
  ];

  const aiLeadMachineFeatures = [
    {
      title: "What You'll Learn",
      features: [
        "Map your customer journey and align it with AI-powered execution",
        "Create AI workflows for content, prospecting, and nurturing leads at scale",
        "Cut marketing costs while improving speed and consistency",
        "Access tested prompt libraries you can immediately adapt"
      ]
    },
    {
      title: "What You'll Get",
      features: [
        "A custom AI-enabled lead generation system for your business",
        "Pre-built templates, workflows, and prompts for daily operations",
        "Clear framework for balancing human creativity with AI automation"
      ],
      highlight: true
    }
  ];

  const sprintFeatures = [
    {
      title: "Strategic Foundation",
      features: [
        "Clarify your positioning and messaging for maximum impact",
        "Pick the right channels and tactics for your specific market",
        "Design a 12-month lead generation plan with 100-day sprint cycles",
        "Build tracking systems to refine and optimize continuously"
      ]
    },
    {
      title: "Guaranteed Outcomes",
      features: [
        "A 100-day actionable roadmap for consistent lead generation",
        "Messaging frameworks and channel strategies tailored to your market",
        "Team confidence to execute systematically without firefighting"
      ],
      highlight: true
    }
  ];

  const stats = [
    {
      number: "5-15",
      label: "Qualified Leads",
      description: "Per month within 90 days"
    },
    {
      number: "35%",
      label: "Close Rate Improvement",
      description: "Through better positioning"
    },
    {
      number: "15hrs",
      label: "Time Saved Weekly",
      description: "Via AI automation"
    }
  ];

  const workshopFormats = [
    {
      iconType: "handshake",
      title: "Live Online Sessions",
      description: "Interactive workshops with real-time implementation and instant feedback."
    },
    {
      iconType: "monitor",
      title: "Self-Paced + Coaching",
      description: "Work at your own speed with weekly check-ins and personalized guidance."
    },
    {
      iconType: "target",
      title: "Custom Team Training",
      description: "Tailored sessions for in-house teams implementing together."
    }
  ];

  return (
    <PageTemplate 
      title="Workshops"
      subtitle="Hands-on, AI-enabled workshops to build a predictable lead generation system: AI Lead Machine and 100 Days Lead Generation Sprint."
      heroBackground="gradient"
    >
      {/* Why Join My Workshops */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">Why Join My Workshops?</h2>
            <p className="text-xl text-charcoal">
              Most workshops inspire you for a day, but leave you with nothing to implement. Mine are different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyJoinReasons.map((reason, index) => (
              <Card key={index} className="p-8 bg-light-gray shadow-soft text-center">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={reason.iconType} className="text-gamboge mx-auto" size={56} />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-4">{reason.title}</h3>
                  <p className="text-charcoal leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Lead Machine */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">AI Lead Machine™</h2>
            <p className="text-xl text-charcoal mb-8">
              Turn AI into your in-house marketing assistant. Design a marketing engine powered by AI—without losing the human creativity and judgment your business depends on.
            </p>
            <Button asChild className="bg-azure text-white hover:bg-oxford-blue px-8 py-3 rounded-full font-semibold">
              <Link href="/workshops/ai-lead-machine">Learn More</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiLeadMachineFeatures.map((feature, index) => (
              <Card key={index} className={`p-8 shadow-soft ${feature.highlight ? 'bg-azure text-white' : 'bg-white'}`}>
                <CardContent className="p-0">
                  <h3 className={`text-xl font-bold mb-4 ${feature.highlight ? 'text-white' : 'text-oxford-blue'}`}>{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className={`flex items-start ${feature.highlight ? 'text-blue-100' : 'text-charcoal'}`}>
                        <div className={`w-2 h-2 ${feature.highlight ? 'bg-gamboge' : 'bg-gamboge'} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 100 Days Lead Generation Sprint */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">100 Days Lead Generation Sprint</h2>
            <p className="text-xl text-charcoal mb-8">
              Design, test, and implement your lead generation system in 100 days. Built for businesses that want results quickly and are ready to put in focused effort.
            </p>
            <Button asChild className="bg-azure text-white hover:bg-oxford-blue px-8 py-3 rounded-full font-semibold">
              <Link href="/workshops/100-days-sprint">Learn More</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sprintFeatures.map((feature, index) => (
              <Card key={index} className={`p-8 shadow-soft ${feature.highlight ? 'bg-azure text-white' : 'bg-light-gray'}`}>
                <CardContent className="p-0">
                  <h3 className={`text-xl font-bold mb-4 ${feature.highlight ? 'text-white' : 'text-oxford-blue'}`}>{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className={`flex items-start ${feature.highlight ? 'text-blue-100' : 'text-charcoal'}`}>
                        <div className={`w-2 h-2 ${feature.highlight ? 'bg-gamboge' : 'bg-gamboge'} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Results */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">Workshop Results</h2>
            <p className="text-xl text-charcoal">
              Real outcomes from participants who implemented the systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Workshop Formats */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">Workshop Formats</h2>
            <p className="text-xl text-charcoal">
              Choose the delivery method that works best for your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshopFormats.map((format, index) => (
              <Card key={index} className="p-8 bg-light-gray shadow-soft text-center">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={format.iconType} className="text-gamboge mx-auto" size={56} />
                  </div>
                  <h3 className="text-xl font-bold text-oxford-blue mb-4">{format.title}</h3>
                  <p className="text-charcoal leading-relaxed">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-azure to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Lead Generation System?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose the workshop that fits your business needs and let's get started.
          </p>
          <Button asChild size="lg" className="bg-gamboge text-oxford-blue hover:bg-yellow-400 px-8 py-4 rounded-full font-bold text-lg">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}