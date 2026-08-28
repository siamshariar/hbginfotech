import { NavHeader } from "@/components/nav-header";
import { Footer } from "@/components/footer";
import { NewAIHero } from "@/components/new-ai/hero";
import { NewAIProducts } from "@/components/new-ai/products";
import { NewAIIndustries } from "@/components/new-ai/industries";
import { NewAIROICalculator } from "@/components/new-ai/roi-calculator";
import { NewAIHowItWorks } from "@/components/new-ai/how-it-works";
import { NewAICTA } from "@/components/new-ai/cta";

export const metadata = {
  title: "Enterprise AI Solutions | HBG Info Tech",
  description: "Cut customer support costs by up to 70% with our AI Chatbot, Agentic AI, AI Assistant, and RAG Systems. Built for Healthcare, Airlines, and Enterprise.",
};

export default function NewAISolutionsPage() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <NavHeader />
      <NewAIHero />
      <NewAIProducts />
      <NewAIIndustries />
      <NewAIROICalculator />
      <NewAIHowItWorks />
      <NewAICTA />
      <Footer />
    </main>
  );
}
