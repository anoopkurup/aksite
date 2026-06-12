import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const contentData = getContentPage('podcast');
  return contentData
    ? { title: contentData.frontmatter.title, description: contentData.frontmatter.description }
    : {};
}

export default function PodcastPage() {
  const contentData = getContentPage('podcast');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}