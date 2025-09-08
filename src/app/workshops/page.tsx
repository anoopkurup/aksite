import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";

export default function WorkshopsPage() {
  const whyJoinReasons = [
    {
      iconType: "target",
      title: "Daily Focus",
      description: "Just 30 minutes daily with clear, actionable tasks that build your lead generation system."
    },
    {
      iconType: "chart",
      title: "Weekly Optimization",
      description: "1-hour strategy sessions every Saturday to refine and improve performance."
    },
    {
      iconType: "handshake",
      title: "Personal Guidance",
      description: "Direct access to coaching and support throughout your 100-day journey."
    }
  ];


  const sprintFeatures = [
    {
      title: "Complete Lead Generation System",
      features: [
        "A complete lead generation system tailored to your business and target market",
        "Optimized messaging and positioning that resonates with your ideal clients",
        "Systematic daily execution routines that compound into predictable results",
        "Performance tracking and optimization processes for continuous improvement"
      ]
    },
    {
      title: "Guaranteed Results",
      features: [
        "Automated follow-up sequences that nurture prospects into qualified leads",
        "Custom messaging frameworks and positioning development",
        "Weekly 1-on-1 strategy and optimization sessions",
        "100% guarantee: 5+ qualified leads by day 90 or we work with you for 60 more days free"
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
      title="100-Day Lead Generation Sprint"
      subtitle="Build a predictable lead generation system that delivers 5+ qualified leads per month through systematic daily execution and weekly optimization."
      heroBackground="gradient"
      heroIcon="target"
    >
      {/* Why Join My Workshops */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">Why This 100-Day Sprint Works</h2>
            <p className="text-xl text-charcoal">
              This isn't theory or motivation. It's 100 days of systematic execution with proven frameworks that deliver predictable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyJoinReasons.map((reason, index) => (
              <Card key={index} className="p-8 bg-white shadow-soft text-center">
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

      {/* Program Structure */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">Program Structure</h2>
            <p className="text-xl text-charcoal">
              A systematic approach that transforms scattered marketing efforts into predictable lead generation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-azure text-white text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold mb-2">30min</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Daily Commitment</div>
                <div className="text-sm text-blue-200">Monday-Friday task sequences</div>
              </CardContent>
            </Card>
            <Card className="p-6 bg-azure text-white text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold mb-2">1hr</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Weekly Strategy</div>
                <div className="text-sm text-blue-200">Every Saturday planning session</div>
              </CardContent>
            </Card>
            <Card className="p-6 bg-azure text-white text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold mb-2">100</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Days to Freedom</div>
                <div className="text-sm text-blue-200">System to get 10+ leads/month</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 100 Days Lead Generation Sprint */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">What You'll Build in 100 Days</h2>
            <p className="text-xl text-charcoal mb-8">
              By the end of this sprint, you'll have a complete lead generation system that consistently delivers qualified prospects to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sprintFeatures.map((feature, index) => (
              <Card key={index} className={`p-8 shadow-soft ${feature.highlight ? 'bg-azure text-white' : 'bg-white'}`}>
                <CardContent className="p-0">
                  <h3 className={`text-xl font-bold mb-4 ${feature.highlight ? 'text-white' : 'text-oxford-blue'}`}>{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className={`flex items-start ${feature.highlight ? 'text-blue-100' : 'text-charcoal'}`}>
                        <div className={`w-2 h-2 ${feature.highlight ? 'bg-[#e6a817]' : 'bg-[#e6a817]'} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
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
      <section className="py-16 px-6 bg-white">
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
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">Workshop Formats</h2>
            <p className="text-xl text-charcoal">
              Choose the delivery method that works best for your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshopFormats.map((format, index) => (
              <Card key={index} className="p-8 bg-white shadow-soft text-center">
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
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your 100-Day Sprint?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the next cohort and build your predictable lead generation system.
          </p>
          <Button asChild size="lg" className="bg-[#e6a817] text-white hover:bg-[#d69e15] px-8 py-4 rounded-full font-bold text-lg">
            <Link href="/contact">Join the Sprint</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}