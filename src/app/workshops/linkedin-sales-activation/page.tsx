import PageTemplate from "@/components/PageTemplate";
import ContentSections from "@/components/ContentSections";
import { getContentPage, processHeroMedia } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Sales Activation - 30-Day Email Course",
  description: "30-day email course that transforms your LinkedIn profile into a systematic lead generation machine. Daily emails with videos, templates, and actionable tasks to build your LinkedIn sales system.",
};

export default function LinkedInSalesActivationPage() {
  // Get LinkedIn Sales Activation page content from MDX
  const linkedinContent = getContentPage('workshops/linkedin-sales-activation');
  const heroMedia = linkedinContent ? processHeroMedia(linkedinContent.frontmatter) : null;

  if (!linkedinContent) {
    return <div>Content not found</div>;
  }

  const { frontmatter } = linkedinContent;
  const sections = frontmatter.sections || [];

  return (
    <PageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.description}
      heroBackground="gradient"
      heroIcon="linkedin"
      heroMedia={heroMedia}
    >
      <ContentSections sections={sections} />
    </PageTemplate>
  );
}