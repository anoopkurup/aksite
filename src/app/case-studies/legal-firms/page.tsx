import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function LegalFirmsPage() {
  const contentData = getContentPage('case-studies/legal-firms');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}