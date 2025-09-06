import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function ContactPage() {
  const contentData = getContentPage('contact');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" heroIcon="handshake" />;
}