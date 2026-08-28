import { NavHeader } from "@/components/nav-header"
import { StartupSolutionsHero } from "@/components/startup-solutions-hero"
import { StartupSolutionsContent } from "@/components/startup-solutions-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "HBG Startup Solutions - We Shape & Launch Your Idea",
  description: "Provide high-performance yet cost-effective solutions for your business. Turn your innovative ideas into reality with our expert development team.",
}

export default function StartupSolutionsPage() {
  return (
    <main className="relative min-h-screen">
      <NavHeader />
      <StartupSolutionsHero />
      <StartupSolutionsContent />
      <Footer />
    </main>
  )
}
