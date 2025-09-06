import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function LinkedInPostCreatorPage() {
  const contentData = getContentPage('workflows/linkedin-post-creator');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}