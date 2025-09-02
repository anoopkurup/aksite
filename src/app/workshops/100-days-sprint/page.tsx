import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function HundredDaysSprintPage() {
  const contentData = getContentPage('workshops/100-days-sprint');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}