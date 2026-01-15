import { getContentPage } from "@/lib/content";
import ContentPage from "@/components/ContentPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Operations Partner - Marketing Services",
  description: "Your complete marketing function — managed, measured, and aligned with growth. Combines content, leads, automation, and strategy under one program.",
};

export default function MarketingOperationsPage() {
  const contentData = getContentPage('services/marketing-operations');

  if (!contentData) {
    notFound();
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}
