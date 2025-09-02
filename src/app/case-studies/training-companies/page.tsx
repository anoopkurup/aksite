import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function TrainingCompaniesPage() {
  const contentData = getContentPage('case-studies/training-companies');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}