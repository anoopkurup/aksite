import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const contentData = getContentPage('legal/terms-conditions');
  return contentData
    ? pageMetadata({
        title: contentData.frontmatter.title,
        description: contentData.frontmatter.description || '',
        path: '/legal/terms-conditions',
      })
    : {};
}

export default function TermsConditionsPage() {
  const contentData = getContentPage('legal/terms-conditions');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}