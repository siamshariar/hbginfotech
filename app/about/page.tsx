import type { Metadata } from "next"
import { NavHeader } from "@/components/nav-header"
import { AboutHero } from "@/components/about-hero"
import { CompanyNarrative } from "@/components/company-narrative"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about HBG Info Tech — our mission, our team, and how we build technology that drives real business results.",
}

export default function AboutPage() {
  return (
    <>
      <NavHeader />
      <main className="flex min-h-screen flex-col">
        <AboutHero />
        <CompanyNarrative />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
