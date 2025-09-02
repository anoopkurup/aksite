import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function CaseStudiesPage() {
  const contentData = getContentPage('case-studies/_index');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}