import PageTemplate from "@/components/PageTemplate";
import ContentSections from "@/components/ContentSections";
import { getContentPage, processHeroMedia } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "100-Day Lead Generation Sprint - Marketing Workshop",
  description: "Build a predictable lead generation system that delivers 10+ qualified leads per month through systematic daily execution and weekly optimization.",
};

export default function WorkshopsPage() {
  // Get workshops page content from MDX
  const workshopsContent = getContentPage('workshops');
  const heroMedia = workshopsContent ? processHeroMedia(workshopsContent.frontmatter) : null;
  
  if (!workshopsContent) {
    return <div>Content not found</div>;
  }

  const { frontmatter } = workshopsContent;
  const sections = frontmatter.sections || [];

  return (
    <PageTemplate 
      title={frontmatter.title}
      subtitle={frontmatter.description}
      heroBackground="gradient"
      heroIcon="target"
      heroMedia={heroMedia}
    >
      <ContentSections sections={sections} />
    </PageTemplate>
  );
}