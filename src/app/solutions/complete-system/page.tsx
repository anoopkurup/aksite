import { getContentPage } from "@/lib/content";
import ContentPage from "@/components/ContentPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Marketing System - Marketing Solutions",
  description: "Get marketing completely off your plate. Full-service marketing operations combining content, lead generation, automation, and strategy.",
};

export default function CompleteSystemPage() {
  const contentData = getContentPage('solutions/complete-system');

  if (!contentData) {
    notFound();
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}
