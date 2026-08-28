import type { Metadata } from "next"
import { NavHeader } from "@/components/nav-header"
import { WorksHero } from "@/components/works-hero"
import { ProjectShowcase } from "@/components/project-showcase"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore HBG Info Tech's featured projects spanning web development, mobile apps, and enterprise solutions.",
}

export default function WorksPage() {
  return (
    <>
      <NavHeader />
      <main className="flex min-h-screen flex-col">
        <WorksHero />
        <ProjectShowcase />
      </main>
      <Footer />
    </>
  )
}
