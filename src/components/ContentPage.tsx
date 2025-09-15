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
        <section className="py-16 px-6 bg-gradient-to-br from-azure to-blue-700">
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
              <Button asChild size="lg" className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white hover:from-[#d97706] hover:to-[#b45309] px-8 py-4 rounded-full font-bold text-lg">
                <Link href={frontmatter.cta.button.url || '/contact'}>
                  {frontmatter.cta.button.text || 'Get Started'}
                </Link>
              </Button>
            )}
          </div>
        </section>
      )}
    </PageTemplate>
  );
}