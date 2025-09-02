import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function PodcastPage() {
  const contentData = getContentPage('podcast');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}