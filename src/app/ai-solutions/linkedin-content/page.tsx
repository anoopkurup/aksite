import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function LinkedInContentPage() {
  const contentData = getContentPage('ai-solutions/linkedin-content');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}