import { getContentPage } from "@/lib/content";
import ContentPage from "@/components/ContentPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Services - Build a System That Runs Smoothly",
  description: "Professional marketing services for consultants and service firms. Content systems, lead generation, and complete marketing operations. Starting at ₹25,000/month.",
};

export default function ServicesPage() {
  const contentData = getContentPage('services/_index');

  if (!contentData) {
    notFound();
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}
