import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

// Case studies data extracted from the markdown files
const caseStudies = [
  {
    id: "marketing-agencies",
    title: "Marketing Agencies",
    category: "Professional Services",
    description: "Marketing agencies solved the 'cobbler's children' problem and built systematic lead generation for their own practices while serving clients.",
    testimonial: "Anoop's approach helped us practice what we preach. We went from sporadic new business to a consistent 5-8 qualified inquiries per month.",
    author: "Sarah Chen",
    role: "Marketing Agency Founder",
    results: "5-8 qualified inquiries per month",
    icon: "chart"
  },
  {
    id: "legal-firms",
    title: "Legal & IP Firms",
    category: "Professional Services", 
    description: "Law firms built thought leadership platforms that attract ideal clients while maintaining professional standards and ethical compliance.",
    testimonial: "Anoop helped us build a thought leadership platform that generates 3-4 qualified corporate inquiries per month while staying within our professional guidelines.",
    author: "David Thompson",
    role: "Managing Partner, IP Law Practice",
    results: "3-4 qualified corporate inquiries per month",
    icon: "handshake"
  },
  {
    id: "saas-companies",
    title: "SaaS Companies",
    category: "Tech-Enabled",
    description: "SaaS companies scaled their marketing systems efficiently, reducing sales cycles and improving lead quality through systematic approaches.",
    testimonial: "The systematic approach reduced our sales cycle by 50% and tripled our marketing-qualified lead conversion rate.",
    author: "Michael Rodriguez",
    role: "SaaS CEO",
    results: "50% shorter sales cycle, 3x conversion rate",
    icon: "monitor"
  },
  {
    id: "it-services",
    title: "IT Service Providers",
    category: "Tech-Enabled",
    description: "IT service companies moved beyond technical expertise to build marketing systems that consistently generate qualified enterprise clients.",
    testimonial: "Finally, marketing that makes technical sense. Our pipeline became predictable and our close rate improved by 40%.",
    author: "James Kumar",
    role: "IT Services Director",
    results: "40% improvement in close rates",
    icon: "cpu"
  },
  {
    id: "strategy-consultants",
    title: "Strategy Consultants",
    category: "Consultants & Experts",
    description: "Independent strategy consultants built personal brands and systematic lead generation that attracts Fortune 500 clients automatically.",
    testimonial: "Moved from feast-or-famine to predictable $50K+ project inquiries every month through systematic thought leadership.",
    author: "Lisa Park",
    role: "Strategy Consultant",
    results: "$50K+ project inquiries monthly",
    icon: "target"
  },
  {
    id: "training-companies",
    title: "Training Companies",
    category: "Professional Services",
    description: "Corporate training companies transformed their business development from event-dependent to systematically generated corporate contracts.",
    testimonial: "We went from chasing conferences to having enterprise clients find us. Revenue increased 200% in 18 months.",
    author: "Robert Chen",
    role: "Training Company CEO", 
    results: "200% revenue increase in 18 months",
    icon: "graduation"
  },
  {
    id: "financial-advisors",
    title: "Financial Advisors",
    category: "Professional Services",
    description: "Financial advisory practices built compliant marketing systems that attract high-net-worth clients while meeting regulatory requirements.",
    testimonial: "Built a compliant marketing system that generates 2-3 qualified high-net-worth prospects per month consistently.",
    author: "Patricia Williams",
    role: "Financial Advisor",
    results: "2-3 high-net-worth prospects monthly",
    icon: "dollar-sign"
  },
  {
    id: "tech-consultants", 
    title: "Tech Consultants",
    category: "Consultants & Experts",
    description: "Technology consultants leveraged their expertise to build systematic lead generation that attracts enterprise clients seeking digital transformation.",
    testimonial: "Transformed from networking-dependent to systematic lead generation. Now booking $100K+ digital transformation projects consistently.",
    author: "Alex Chen",
    role: "Technology Consultant",
    results: "$100K+ projects consistently",
    icon: "code"
  },
  {
    id: "productized-services",
    title: "Productized Service Businesses",
    category: "Tech-Enabled", 
    description: "Productized service businesses scaled their marketing to support rapid growth while maintaining service quality and client satisfaction.",
    testimonial: "Scaled from $10K to $100K monthly recurring revenue with systematic marketing that actually scales with the business.",
    author: "Jordan Taylor",
    role: "Productized Service Founder",
    results: "$10K to $100K MRR growth",
    icon: "package"
  }
];

export default function CaseStudiesPage() {
  return (
    <PageTemplate 
      title="Case Studies"
      subtitle="Real results from businesses that transformed their marketing with systematic approaches. See how companies like yours achieved predictable growth."
      heroBackground="gradient"
      heroIcon="chart"
    >
      {/* Introduction Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">Proven Results Across Industries</h2>
            <p className="text-xl text-charcoal max-w-4xl mx-auto mb-8">
              Over 15 years and 200+ engagements, I've helped businesses transform chaotic marketing into systematic growth engines. These case studies show the specific strategies, implementations, and results achieved across different industries and business types.
            </p>
            <p className="text-lg text-charcoal max-w-4xl mx-auto">
              Each case study demonstrates how strategic marketing systems, combined with AI-powered workflows, create predictable and scalable growth for professional services and tech-enabled businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">Results That Matter</h2>
            <p className="text-xl text-charcoal">
              Consistent outcomes across different industries and business models.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-azure text-white text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold mb-2">40-60%</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Average Lead Increase</div>
                <div className="text-sm text-blue-200">Within 90 days of implementation</div>
              </CardContent>
            </Card>
            <Card className="p-6 bg-azure text-white text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold mb-2">35%</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Close Rate Improvement</div>
                <div className="text-sm text-blue-200">Through better positioning and qualification</div>
              </CardContent>
            </Card>
            <Card className="p-6 bg-azure text-white text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold mb-2">3x</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">Marketing Efficiency</div>
                <div className="text-sm text-blue-200">Qualified lead conversion rate improvement</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">Success Stories by Industry</h2>
            <p className="text-xl text-charcoal">
              Real businesses, real challenges, real solutions, and measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="p-6 bg-white shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <LineIcon type={study.icon} className="text-gamboge" size={48} />
                      <Badge variant="secondary" className="bg-azure/10 text-azure">
                        {study.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-oxford-blue mb-3">{study.title}</h3>
                    <p className="text-charcoal mb-6 leading-relaxed">{study.description}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg mb-6">
                    <blockquote className="text-sm text-charcoal mb-3 italic">
                      "{study.testimonial}"
                    </blockquote>
                    <div className="text-xs text-oxford-blue font-semibold">
                      — {study.author}, {study.role}
                    </div>
                  </div>

                  <div className="bg-[#e6a817]/10 p-3 rounded-lg">
                    <div className="text-sm font-semibold text-oxford-blue">Key Result:</div>
                    <div className="text-sm text-charcoal">{study.results}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Results Possible */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">What Makes These Results Possible</h2>
            <p className="text-xl text-charcoal max-w-4xl mx-auto mb-8">
              These case studies represent more than just good outcomes—they demonstrate what happens when businesses commit to systematic approaches to marketing. Each success story follows a similar pattern:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white shadow-soft">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Strategic Foundation First</h3>
                <p className="text-charcoal leading-relaxed">
                  We start with positioning, market analysis, and customer journey mapping before touching any tactics or tools.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-soft">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Systems Over Campaigns</h3>
                <p className="text-charcoal leading-relaxed">
                  Rather than running individual marketing campaigns, we build repeatable processes that generate consistent results month after month.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-soft">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-oxford-blue mb-4">AI Integration Done Right</h3>
                <p className="text-charcoal leading-relaxed">
                  We implement AI workflows that enhance human creativity and strategic thinking, making marketing more efficient without sacrificing quality.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-soft">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Measurement and Optimization</h3>
                <p className="text-charcoal leading-relaxed">
                  Every system includes clear metrics and feedback loops, allowing for continuous improvement and predictable scaling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-azure to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8">
            If you're ready to move from chaotic marketing to systematic growth, let's discuss how we can work together.
          </p>
          <Button asChild size="lg" className="bg-[#e6a817] text-white hover:bg-[#d69e15] px-8 py-4 rounded-full font-bold text-lg">
            <Link href="/contact">Schedule a Strategy Call</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}