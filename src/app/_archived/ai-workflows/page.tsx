import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function AIWorkflowsPage() {
  const contentData = getContentPage('ai-workflows');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}