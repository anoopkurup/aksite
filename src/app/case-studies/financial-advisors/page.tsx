import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function FinancialAdvisorsPage() {
  const contentData = getContentPage('case-studies/financial-advisors');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}