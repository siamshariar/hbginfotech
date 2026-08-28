import type { Metadata } from "next"
import { NavHeader } from "@/components/nav-header"
import { ServicesSection } from "@/components/services-section"
import { ServicesHero } from "@/components/services-hero"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, mobile apps, cloud, cybersecurity, and AI services from HBG Info Tech — full-spectrum solutions for digital success.",
}

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
