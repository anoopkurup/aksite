import PageTemplate from "@/components/PageTemplate";
import ContentSections from "@/components/ContentSections";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContentPage as ContentPageType } from "@/lib/content";

interface ContentPageProps {
  contentData: ContentPageType;
  heroBackground?: "white" | "gradient" | "light";
  heroIcon?: string;
}

export default function ContentPage({ contentData, heroBackground = "white", heroIcon = "cpu" }: ContentPageProps) {
  const { frontmatter } = contentData;

  return (
    <PageTemplate 
      title={frontmatter.title}
      subtitle={frontmatter.description}
      heroBackground={heroBackground}
      heroIcon={heroIcon}
    >
      {/* Render content sections */}
      {frontmatter.sections && (
        <ContentSections sections={frontmatter.sections} />
      )}

      {/* Call to Action Section */}
      {frontmatter.cta && (
        <section className="py-16 px-6 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
          <div className="max-w-4xl mx-auto text-center text-white">
            {frontmatter.cta.title && (
              <h2 className="text-3xl font-bold mb-6">{frontmatter.cta.title}</h2>
            )}
            {frontmatter.cta.subtitle && (
              <p className="text-xl text-blue-100 mb-8">
                {frontmatter.cta.subtitle}
              </p>
            )}
            {frontmatter.cta.button && (
              <Button asChild size="lg" className="bg-[#f59e0b] text-white hover:bg-[#d97706] px-8 py-4 rounded-lg font-bold text-lg">
                <Link href={frontmatter.cta.button.url || '/contact'} className="flex items-center">
                  {frontmatter.cta.button.text || 'Get Started'}
                  <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 5 7 7-7 7"/>
                    <path d="M5 12h14"/>
                  </svg>
                </Link>
              </Button>
            )}
          </div>
        </section>
      )}
    </PageTemplate>
  );
}