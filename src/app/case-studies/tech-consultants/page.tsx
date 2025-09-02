import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function TechConsultantsPage() {
  const contentData = getContentPage('case-studies/tech-consultants');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}