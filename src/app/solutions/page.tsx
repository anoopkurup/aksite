import { getContentPage } from "@/lib/content";
import ContentPage from "@/components/ContentPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Solutions - Build Visibility, Generate Leads, Grow Your Business",
  description: "Three outcome-focused marketing solutions for professional service firms: Build visibility and authority, generate consistent leads, or get a complete marketing system that runs itself.",
};

export default function SolutionsPage() {
  const contentData = getContentPage('solutions/_index');

  if (!contentData) {
    notFound();
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}
