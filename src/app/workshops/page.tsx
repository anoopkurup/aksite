import PageTemplate from "@/components/PageTemplate";
import ContentSections from "@/components/ContentSections";
import { getContentPage, processHeroMedia } from "@/lib/content";

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