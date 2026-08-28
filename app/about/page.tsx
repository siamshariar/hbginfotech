import { NavHeader } from "@/components/nav-header"
import { AboutHero } from "@/components/about-hero"
import { CompanyNarrative } from "@/components/company-narrative"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

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
