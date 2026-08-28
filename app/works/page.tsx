import { NavHeader } from "@/components/nav-header"
import { WorksHero } from "@/components/works-hero"
import { ProjectShowcase } from "@/components/project-showcase"
import { Footer } from "@/components/footer"

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
