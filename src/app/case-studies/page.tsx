import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { getContentPage, processHeroMedia } from "@/lib/content";

export default function CaseStudiesPage() {
  // Get case studies page content from MDX
  const caseStudiesContent = getContentPage('case-studies/_index');
  const heroMedia = caseStudiesContent ? processHeroMedia(caseStudiesContent.frontmatter) : null;
  
  if (!caseStudiesContent) {
    return <div>Content not found</div>;
  }

  const { frontmatter } = caseStudiesContent;
  const caseStudies = frontmatter.case_studies?.items || [];
  return (
    <PageTemplate 
      title={frontmatter.title}
      subtitle={frontmatter.description}
      heroBackground="gradient"
      heroIcon="chart"
      heroMedia={heroMedia}
    >
      {/* Introduction Section */}
      <section className="py-16 px-6 bg-solarized-base03">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">{frontmatter.intro?.title}</h2>
            <div className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed space-y-4">
              {frontmatter.intro?.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-solarized-base02">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{frontmatter.stats?.title}</h2>
            <p className="text-xl text-white/80">
              {frontmatter.stats?.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {frontmatter.stats?.items?.map((stat: any, index: number) => (
              <div key={index} className="p-6 bg-solarized-base02 rounded-lg text-white text-center">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-6 bg-solarized-base03">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">{frontmatter.case_studies?.title}</h2>
            <p className="text-xl text-white/80">
              {frontmatter.case_studies?.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study: any) => (
              <div key={study.id} className="p-6 bg-solarized-base03 rounded-lg">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-solarized-magenta rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18"/>
                        <path d="m19 9-5 5-4-4-3 3"/>
                      </svg>
                    </div>
                    <div className="bg-solarized-cyan/10 text-solarized-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">{study.description}</p>
                </div>

                <div className="bg-solarized-base02 p-4 rounded-lg mb-6">
                  <blockquote className="text-sm text-white/80 mb-3 italic">
                    "{study.testimonial}"
                  </blockquote>
                  <div className="text-xs text-white font-semibold">
                    — {study.author}, {study.role}
                  </div>
                </div>

                <div className="bg-solarized-magenta/10 p-3 rounded-lg">
                  <div className="text-sm font-semibold text-white">Key Result:</div>
                  <div className="text-sm text-white/80">{study.results}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Results Possible */}
      <section className="py-16 px-6 bg-solarized-base02">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">{frontmatter.approach?.title}</h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
              {frontmatter.approach?.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {frontmatter.approach?.items?.map((item: any, index: number) => (
              <div key={index} className="p-8 bg-solarized-base03 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-solarized-base03 to-solarized-base02">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{frontmatter.cta?.title}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {frontmatter.cta?.subtitle}
          </p>
          <Button asChild size="lg" className="bg-solarized-magenta text-black hover:bg-[#F47B78] px-8 py-4 rounded-lg font-bold text-lg">
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