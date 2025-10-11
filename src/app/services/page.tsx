import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Services - Build a System That Runs Smoothly",
  description: "Professional marketing services for consultants and service firms. Content systems, lead generation, and complete marketing operations. Starting at ₹25,000/month.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Content Growth System",
      tagline: "Stay visible. Build credibility.",
      description: "Get your content handled — from blogs and LinkedIn posts to newsletters — all planned, written, and published on schedule.",
      includes: [
        "4 blog articles per month",
        "8 LinkedIn posts per month",
        "2 newsletters each month",
        "Monthly content plan"
      ],
      investment: "₹25,000 – ₹30,000/month",
      href: "/services/content-growth"
    },
    {
      title: "Lead Generation System",
      tagline: "Build a steady pipeline.",
      description: "Reach 100+ ideal prospects every month through structured research, personalized outreach, and monthly optimization.",
      includes: [
        "100–200 prospect list monthly",
        "Personalized outreach campaigns",
        "CRM tracking dashboard",
        "Monthly optimization"
      ],
      investment: "₹40,000 – ₹55,000/month",
      href: "/services/lead-generation"
    },
    {
      title: "Marketing Operations Partner",
      tagline: "Complete marketing engine.",
      description: "Combine content, lead generation, and workflow automation under one structured program aligned with your growth goals.",
      includes: [
        "Full Content Growth System",
        "Full Lead Generation System",
        "Marketing automation & reporting",
        "Quarterly strategy review"
      ],
      investment: "₹70,000 – ₹1,00,000/month",
      href: "/services/marketing-operations"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build a Marketing System<br />That Runs Smoothly — Every Month
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
            You don't need a big team or complicated tools to grow your business. With the right systems in place, your marketing can run predictably, create consistent visibility, and generate qualified leads — while you focus on serving clients.
          </p>
        </div>
      </section>

      {/* Media Container */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="m10 15 5-3-5-3z" fill="currentColor" />
              </svg>
              <p className="text-sm">Video or visual overview placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">The Marketing Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Most professional service firms face the same marketing struggles — and they're not getting easier.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-navy-900">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Marketing feels like extra work</h3>
                  <p className="text-gray-700">Writing content, reaching out to prospects, managing campaigns — it all takes time away from billable client work and core business activities.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-navy-900">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Inconsistent visibility</h3>
                  <p className="text-gray-700">You publish when you have time, but weeks go by without updates. Your audience forgets you exist. Competitors stay visible while you disappear.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-navy-900">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Unpredictable lead flow</h3>
                  <p className="text-gray-700">Referrals are great until they dry up. You need a system that creates steady conversations with qualified prospects — not feast-or-famine cycles.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-navy-900">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Hiring feels risky and expensive</h3>
                  <p className="text-gray-700">Full-time marketing hires cost ₹8-12 lakh annually, plus training and management overhead. Agencies promise results but deliver generic strategies that don't fit your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">The Solution: Marketing Systems That Run Smoothly</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Instead of one-time campaigns or scattered efforts, these services create a repeatable rhythm — consistent visibility, regular outreach, and ongoing improvement. You get structured marketing that works month after month, without the chaos.
          </p>
          <div className="bg-navy-50 p-8 rounded-lg border-l-4 border-[#FFBF00]">
            <p className="text-lg text-navy-900 leading-relaxed">
              <strong>Here's how it works:</strong> Choose a system that fits your growth stage. We handle the planning, execution, and optimization every month. You stay focused on serving clients while your marketing runs predictably in the background.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Services Comparison Table */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Three Systems. Three Growth Stages.</h2>
            <p className="text-lg text-gray-700">Choose the system that matches where you are and where you're going.</p>
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="bg-white rounded-lg p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 pr-6 text-navy-900 font-bold text-lg w-1/4">Feature</th>
                    <th className="text-center py-4 px-4 w-1/4">
                      <div className="text-navy-900 font-bold text-xl mb-1">Content Growth System</div>
                      <div className="text-sm text-gray-600">Stay visible. Build credibility.</div>
                    </th>
                    <th className="text-center py-4 px-4 w-1/4">
                      <div className="text-navy-900 font-bold text-xl mb-1">Lead Generation System</div>
                      <div className="text-sm text-gray-600">Build a steady pipeline.</div>
                    </th>
                    <th className="text-center py-4 px-4 w-1/4">
                      <div className="text-navy-900 font-bold text-xl mb-1">Marketing Operations Partner</div>
                      <div className="text-sm text-gray-600">Complete marketing engine.</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Blog Articles */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6 text-gray-700">Blog Articles</td>
                    <td className="text-center py-4 px-4 text-gray-700">4 per month</td>
                    <td className="text-center py-4 px-4 text-gray-500">—</td>
                    <td className="text-center py-4 px-4 text-gray-700">4 per month</td>
                  </tr>

                  {/* LinkedIn Posts */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6 text-gray-700">LinkedIn Posts</td>
                    <td className="text-center py-4 px-4 text-gray-700">8 per month</td>
                    <td className="text-center py-4 px-4 text-gray-500">—</td>
                    <td className="text-center py-4 px-4 text-gray-700">8 per month</td>
                  </tr>

                  {/* Newsletters */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6 text-gray-700">Newsletters</td>
                    <td className="text-center py-4 px-4 text-gray-700">2 per month</td>
                    <td className="text-center py-4 px-4 text-gray-500">—</td>
                    <td className="text-center py-4 px-4 text-gray-700">2 per month</td>
                  </tr>

                  {/* Prospect Research */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6 text-gray-700">Prospect Research</td>
                    <td className="text-center py-4 px-4 text-gray-500">—</td>
                    <td className="text-center py-4 px-4 text-gray-700">100-200 leads/month</td>
                    <td className="text-center py-4 px-4 text-gray-700">100-200 leads/month</td>
                  </tr>

                  {/* Outreach Campaigns */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6 text-gray-700">Outreach Campaigns</td>
                    <td className="text-center py-4 px-4 text-gray-500">—</td>
                    <td className="text-center py-4 px-4 text-gray-700">✓ Personalized</td>
                    <td className="text-center py-4 px-4 text-gray-700">✓ Personalized</td>
                  </tr>

                  {/* CRM Management */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6 text-gray-700">CRM Management</td>
                    <td className="text-center py-4 px-4 text-gray-500">—</td>
                    <td className="text-center py-4 px-4 text-gray-700">✓ Tracking Dashboard</td>
                    <td className="text-center py-4 px-4 text-gray-700">✓ Full Integration</td>
                  </tr>

                  {/* Marketing Automation */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6 text-gray-700">Marketing Automation</td>
                    <td className="text-center py-4 px-4 text-gray-500">—</td>
                    <td className="text-center py-4 px-4 text-gray-500">—</td>
                    <td className="text-center py-4 px-4 text-gray-700">✓ Monthly improvements</td>
                  </tr>

                  {/* Strategy Review */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6 text-gray-700">Strategy Review</td>
                    <td className="text-center py-4 px-4 text-gray-700">Monthly check-in</td>
                    <td className="text-center py-4 px-4 text-gray-700">Monthly optimization</td>
                    <td className="text-center py-4 px-4 text-gray-700">Quarterly deep-dive</td>
                  </tr>

                  {/* Investment */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-6 text-gray-700">Monthly Investment</td>
                    <td className="text-center py-4 px-4">
                      <div className="text-gray-700 text-base">₹25,000 – ₹30,000</div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="text-gray-700 text-base">₹40,000 – ₹55,000</div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="text-gray-700 text-base">₹70,000 – ₹1,00,000</div>
                    </td>
                  </tr>

                  {/* Best For */}
                  <tr className="border-b-2 border-gray-200 bg-navy-50">
                    <td className="py-4 pr-6 font-bold text-navy-900">Best For</td>
                    <td className="text-center py-4 px-4 text-sm text-gray-700">Consultants & boutique firms building visibility</td>
                    <td className="text-center py-4 px-4 text-sm text-gray-700">Growing firms ready for pipeline consistency</td>
                    <td className="text-center py-4 px-4 text-sm text-gray-700">₹5-10 Cr firms scaling with structure</td>
                  </tr>

                  {/* CTA */}
                  <tr>
                    <td className="py-6 pr-6"></td>
                    <td className="text-center py-6 px-4">
                      <Button asChild className="bg-cta-500 hover:bg-cta-600 text-white font-semibold">
                        <Link href={services[0].href}>Learn More</Link>
                      </Button>
                    </td>
                    <td className="text-center py-6 px-4">
                      <Button asChild className="bg-cta-500 hover:bg-cta-600 text-white font-semibold">
                        <Link href={services[1].href}>Learn More</Link>
                      </Button>
                    </td>
                    <td className="text-center py-6 px-4">
                      <Button asChild className="bg-cta-500 hover:bg-cta-600 text-white font-semibold">
                        <Link href={services[2].href}>Learn More</Link>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile/Tablet Service Cards */}
          <div className="lg:hidden space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.tagline}</p>
                </div>

                <p className="text-gray-700 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-navy-900 mb-3">What's Included</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-sm text-gray-600">Starting at</p>
                  <p className="text-lg text-gray-700">{service.investment}</p>
                </div>

                <Button asChild className="w-full bg-cta-500 hover:bg-cta-600 text-white font-semibold">
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Why These Systems Work */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why These Systems Work</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the past decade, I've helped professional service and knowledge businesses grow through a structured, systems-first approach to marketing. Instead of one-time campaigns or scattered efforts, these retainers create a repeatable rhythm — consistent visibility, regular outreach, and ongoing improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Predictable</h3>
              <p className="text-gray-700">Marketing that runs like clockwork. Same schedule, same quality, every month.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Consistent</h3>
              <p className="text-gray-700">Build momentum over time. No more stop-start cycles or visibility gaps.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Affordable</h3>
              <p className="text-gray-700">Fraction of a full-time hire. Better than agencies that don't understand your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-navy-800 to-navy-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Marketing?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's have a quick conversation about your goals and see which system fits best. You'll walk away with a clear action plan — even if we don't end up working together.
          </p>
          <Button asChild size="lg" className="bg-cta-500 text-white hover:bg-cta-600 px-8 py-4 rounded-lg font-bold text-lg">
            <Link href="/contact" className="flex items-center">
              Book a Discovery Call
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 5 7 7-7 7"/>
                <path d="M5 12h14"/>
              </svg>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
