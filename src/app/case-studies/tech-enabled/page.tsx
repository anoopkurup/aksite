import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function TechEnabledPage() {
  const contentData = getContentPage('case-studies/tech-enabled');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}