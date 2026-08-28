import { NavHeader } from "@/components/nav-header";
import { NewStartupHero } from "@/components/new-startup/hero";
import { BentoGrid } from "@/components/new-startup/bento-grid";
import { Timeline } from "@/components/new-startup/timeline";
import { Comparison } from "@/components/new-startup/comparison";
import { CTASection } from "@/components/new-startup/cta";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Startup Solutions | We Shape & Launch Your Idea",
  description:
    "High-performance, cost-effective product development for visionaries. Stop worrying about code; start focusing on growth.",
};

export default function NewStartupSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <NavHeader />
      <NewStartupHero />
      <BentoGrid />
      <Timeline />
      <Comparison />
      <CTASection />
      <Footer />
    </main>
  );
}
