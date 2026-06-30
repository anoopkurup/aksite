import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const contentData = getContentPage('legal/privacy-policy');
  return contentData
    ? { title: contentData.frontmatter.title, description: contentData.frontmatter.description, alternates: { canonical: "/legal/privacy-policy" } }
    : {};
}

export default function PrivacyPolicyPage() {
  const contentData = getContentPage('legal/privacy-policy');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}