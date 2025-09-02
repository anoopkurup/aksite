import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function ConsultantsExpertsPage() {
  const contentData = getContentPage('case-studies/consultants-experts');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}