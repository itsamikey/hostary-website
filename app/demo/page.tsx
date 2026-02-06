import type { Metadata } from "next";
import { DemoPageClient } from "@/components/demo/demo-page-client";

export const metadata: Metadata = {
  title: "Interactive Demo",
  description:
    "See what your guests experience with Hostary. Enter a guest name and preview the personalized TV welcome screen, local recommendations, and property info.",
};

export default function DemoPage() {
  return <DemoPageClient />;
}
