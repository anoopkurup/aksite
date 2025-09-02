import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function ThankYouPage() {
  const contentData = getContentPage('thank-you');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}