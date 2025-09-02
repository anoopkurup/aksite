import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function TermsConditionsPage() {
  const contentData = getContentPage('legal/terms-conditions');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}