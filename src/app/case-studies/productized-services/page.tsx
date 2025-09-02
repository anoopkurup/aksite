import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function ProductizedServicesPage() {
  const contentData = getContentPage('case-studies/productized-services');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}