import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function EbooksPage() {
  const contentData = getContentPage('ebooks');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}