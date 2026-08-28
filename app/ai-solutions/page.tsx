import { Metadata } from "next";
import { NavHeader } from "@/components/nav-header";
import { AIHero } from "@/components/ai-solutions/hero";
import { ProductQuad } from "@/components/ai-solutions/product-quad";
import { DataBrain } from "@/components/ai-solutions/data-brain";
import { IndustryVerticals } from "@/components/ai-solutions/industry-verticals";
import { SecurityBar } from "@/components/ai-solutions/security-bar";
import { AICTA } from "@/components/ai-solutions/cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | Agentic AI & RAG Systems | HBG Info Tech",
  description:
    "Empower your enterprise with Agentic AI and RAG systems. Autonomous support agents, private knowledge retrieval, and AI infrastructure built for scale and security.",
};

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <NavHeader />
      <AIHero />
      <ProductQuad />
      <DataBrain />
      <IndustryVerticals />
      <SecurityBar />
      <AICTA />
      <Footer />
    </main>
  );
}
