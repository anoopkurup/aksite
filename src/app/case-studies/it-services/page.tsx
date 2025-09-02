import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function ITServicesPage() {
  const contentData = getContentPage('case-studies/it-services');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}