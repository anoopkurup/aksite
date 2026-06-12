import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const contentData = getContentPage('thank-you');
  return contentData
    ? { title: contentData.frontmatter.title, description: contentData.frontmatter.description }
    : {};
}

export default function ThankYouPage() {
  const contentData = getContentPage('thank-you');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}