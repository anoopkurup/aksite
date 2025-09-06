import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function AILeadMachineWorkflowPage() {
  const contentData = getContentPage('workflows/ai-lead-machine');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}