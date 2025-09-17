import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineIcon from "@/components/LineIcon";
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
      <section className="py-16 px-6 bg-[#fef7ed]">
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
              <Card className="absolute -bottom-6 -right-6 bg-[#f59e0b] p-4 rounded-xl shadow-lg">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-sm text-white">Years Experience</div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">{frontmatter.story?.title}</h2>
              <div className="text-[#374151] leading-relaxed space-y-6">
                {frontmatter.story?.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">{frontmatter.audience?.title}</h2>
            <p className="text-xl text-[#374151] max-w-4xl mx-auto mb-4">
              {frontmatter.audience?.subtitle}
            </p>
            <p className="text-[#374151] max-w-4xl mx-auto">
              {frontmatter.audience?.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {audienceItems.map((item: any, index: number) => (
              <Card key={index} className="p-8 bg-white shadow-navy-soft hover:shadow-navy-medium transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <LineIcon type={item.iconType} className="text-[#f59e0b]" size={56} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{item.title}</h3>
                  <p className="text-[#1e40af] font-semibold mb-4">{item.subheading}</p>
                  <p className="text-[#374151] mb-6 leading-relaxed">{item.description}</p>
                  <div className="bg-[#8fb4ff]/10 border border-[#8fb4ff]/30 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#1e3a8a]">{item.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-6 bg-[#fef7ed]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-[#374151]">
              Real numbers and real feedback from businesses that transformed their marketing approach.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat: any, index: number) => (
              <Card key={index} className="p-6 bg-[#1e3a8a] text-white text-center">
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
            {testimonials.map((testimonial: any, index: number) => (
              <Card key={index} className="p-6 bg-white border-[#8fb4ff]/20 shadow-soft">
                <CardContent className="p-0">
                  <blockquote className="text-[#374151] mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-[#1e3a8a]">{testimonial.author}</p>
                    <p className="text-sm text-[#1e40af]">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{frontmatter.principles?.title}</h2>
            <p className="text-xl text-[#374151]">
              {frontmatter.principles?.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle: any, index: number) => (
              <Card key={index} className="p-8 bg-white shadow-soft">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">{principle.title}</h3>
                  <p className="text-[#374151] leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-16 px-6 bg-[#fef7ed]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{frontmatter.work_process?.title}</h2>
            <p className="text-xl text-[#374151]">
              {frontmatter.work_process?.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            {workProcess.map((step: any, index: number) => (
              <Card key={index} className="p-8 shadow-soft">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-2 text-center md:text-left">
                      <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto md:mx-0 mb-4 md:mb-0">
                        {step.number}
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">{step.title}</h3>
                      <p className="text-[#374151] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Together Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">{frontmatter.closing?.title}</h2>
          <div className="text-lg text-[#374151] leading-relaxed space-y-6">
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
          <Button asChild size="lg" className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white hover:from-[#d97706] hover:to-[#b45309] px-8 py-4 rounded-full font-bold text-lg shadow-lg">
            <Link href={frontmatter.cta?.button?.url || "/contact"} className="flex items-center">
              {frontmatter.cta?.button?.text || "Schedule a Strategy Call"}
              <LineIcon type="arrow-right" className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}