import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const contentData = getContentPage('legal/terms-conditions');
  return contentData
    ? { title: contentData.frontmatter.title, description: contentData.frontmatter.description }
    : {};
}

export default function TermsConditionsPage() {
  const contentData = getContentPage('legal/terms-conditions');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}