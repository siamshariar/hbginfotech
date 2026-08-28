import { NavHeader } from "@/components/nav-header"
import { ServicesSection } from "@/components/services-section"
import { ServicesHero } from "@/components/services-hero"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <>
      <NavHeader />
      <main className="flex min-h-screen flex-col">
        <ServicesHero />
        <ServicesSection />
      </main>
      <Footer />
    </>
  )
}
