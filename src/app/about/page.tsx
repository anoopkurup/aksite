import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getContentPage, processHeroMedia } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Anoop Kurup - Marketing Strategy for Professional Services",
  description: "Learn how I help professional services firms create systematic marketing approaches that scale beyond referrals and deliver predictable lead generation.",
};

export default function AboutPage() {
  // Get about page content from MDX
  const aboutContent = getContentPage('about');
  const heroMedia = aboutContent ? processHeroMedia(aboutContent.frontmatter) : null;
  
  if (!aboutContent) {
    return <div>Content not found</div>;
  }

  const { frontmatter } = aboutContent;
  const audienceItems = frontmatter.audience?.items || [];
  const stats = frontmatter.stats || [];
  const testimonials = frontmatter.testimonials?.items || [];
  const principles = frontmatter.principles?.items || [];
  const workProcess = frontmatter.work_process?.items || [];

  return (
    <PageTemplate 
      title={frontmatter.title}
      subtitle={frontmatter.description}
      heroBackground="gradient"
      heroIcon="handshake"
      heroMedia={heroMedia}
    >
      {/* Story Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-[#1e3a8a]/20 to-[#8fb4ff]/20 rounded-2xl shadow-lg flex items-center justify-center">
                <img 
                  src={frontmatter.story?.image || "/images/about/anoop-bw.webp"} 
                  alt="Anoop Kurup"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cta-500 p-4 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-sm text-white">Years Experience</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">{frontmatter.story?.title}</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                {frontmatter.story?.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{frontmatter.audience?.title}</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-4">
              {frontmatter.audience?.subtitle}
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto">
              {frontmatter.audience?.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {audienceItems.map((item: any, index: number) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-cta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && (
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 7h-9"/>
                        <path d="M14 17H5"/>
                        <circle cx="17" cy="17" r="3"/>
                        <circle cx="7" cy="7" r="3"/>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="6"/>
                        <circle cx="12" cy="12" r="2"/>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-cta-600 font-semibold mb-4">{item.subheading}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                <div className="bg-navy-50 p-4 rounded-lg border border-navy-100">
                  <p className="text-sm font-semibold text-navy-800">{item.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-gray-700">
              Real numbers and real feedback from businesses that transformed their marketing approach.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat: any, index: number) => (
              <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm text-center">
                <div className="text-3xl font-bold mb-2 text-navy-900">{stat.number}</div>
                <div className="text-lg font-semibold text-cta-600 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.author}</p>
                  <p className="text-sm text-cta-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">{frontmatter.principles?.title}</h2>
            <p className="text-xl text-gray-700">
              {frontmatter.principles?.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle: any, index: number) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">{principle.title}</h3>
                <p className="text-gray-700 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">{frontmatter.work_process?.title}</h2>
            <p className="text-xl text-gray-700">
              {frontmatter.work_process?.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            {workProcess.map((step: any, index: number) => (
              <div key={index} className="p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-2 text-center md:text-left">
                    <div className="w-16 h-16 bg-cta-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto md:mx-0 mb-4 md:mb-0">
                      {step.number}
                    </div>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="text-xl font-bold text-navy-900 mb-4">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Together Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">{frontmatter.closing?.title}</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            {frontmatter.closing?.content.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{frontmatter.cta?.title}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {frontmatter.cta?.subtitle}
          </p>
          <Button asChild size="lg" className="bg-cta-500 text-white hover:bg-cta-600 px-8 py-4 rounded-lg font-bold text-lg">
            <Link href={frontmatter.cta?.button?.url || "/contact"} className="flex items-center">
              {frontmatter.cta?.button?.text || "Schedule a Strategy Call"}
              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 5 7 7-7 7"/>
                <path d="M5 12h14"/>
              </svg>
            </Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}