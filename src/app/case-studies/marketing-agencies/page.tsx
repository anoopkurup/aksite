import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function MarketingAgenciesPage() {
  const contentData = getContentPage('case-studies/marketing-agencies');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}