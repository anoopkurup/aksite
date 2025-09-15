import PageTemplate from "@/components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LineIcon from "@/components/LineIcon";
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">{frontmatter.intro?.title}</h2>
            <div className="text-xl text-charcoal max-w-4xl mx-auto leading-relaxed space-y-4">
              {frontmatter.intro?.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-4">{frontmatter.stats?.title}</h2>
            <p className="text-xl text-charcoal">
              {frontmatter.stats?.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {frontmatter.stats?.items?.map((stat: any, index: number) => (
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

      {/* Case Studies Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">{frontmatter.case_studies?.title}</h2>
            <p className="text-xl text-charcoal">
              {frontmatter.case_studies?.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study: any) => (
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

                  <div className="bg-[#f59e0b]/10 p-3 rounded-lg">
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
            <h2 className="text-3xl font-bold text-oxford-blue mb-6">{frontmatter.approach?.title}</h2>
            <p className="text-xl text-charcoal max-w-4xl mx-auto mb-8">
              {frontmatter.approach?.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {frontmatter.approach?.items?.map((item: any, index: number) => (
              <Card key={index} className="p-8 bg-white shadow-soft">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-oxford-blue mb-4">{item.title}</h3>
                  <p className="text-charcoal leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-azure to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{frontmatter.cta?.title}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {frontmatter.cta?.subtitle}
          </p>
          <Button asChild size="lg" className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white hover:from-[#d97706] hover:to-[#b45309] px-8 py-4 rounded-full font-bold text-lg">
            <Link href={frontmatter.cta?.button?.url || "/contact"}>{frontmatter.cta?.button?.text || "Schedule a Strategy Call"}</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
}