import PageTemplate from "@/components/PageTemplate";
import ContentSections from "@/components/ContentSections";
import { getContentPage, processHeroMedia } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stop Waiting for Referrals - 100-Day Sprint for Service Providers",
  description: "Tired of depending on referrals? Build your own way to get 10+ customers every month. Take control of your business growth in 100 days.",
};

export default function LeadGenerationSprintPage() {
  // Get 100-day sprint page content from MDX
  const sprintContent = getContentPage('workshops/100-day-lead-generation-sprint');
  const heroMedia = sprintContent ? processHeroMedia(sprintContent.frontmatter) : null;

  if (!sprintContent) {
    return <div>Content not found</div>;
  }

  const { frontmatter } = sprintContent;
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