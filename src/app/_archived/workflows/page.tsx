import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function WorkflowsPage() {
  const contentData = getContentPage('workflows/_index');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}