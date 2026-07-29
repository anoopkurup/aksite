import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const contentData = getContentPage('thank-you');
  return contentData
    ? pageMetadata({
        title: contentData.frontmatter.title,
        description: contentData.frontmatter.description || '',
        path: '/thank-you',
      })
    : {};
}

export default function ThankYouPage() {
  const contentData = getContentPage('thank-you');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}