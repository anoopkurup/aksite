import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function AILeadMachineWorkshopPage() {
  const contentData = getContentPage('workshops/ai-lead-machine');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}