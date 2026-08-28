import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { ImpactSection } from "@/components/impact-section"
import { SolutionsSection } from "@/components/solutions-section"
import { HomeProductsSection } from "@/components/home-products-section"
import { ServicesSection } from "@/components/services-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TeamSection } from "@/components/team-section"
import { ClientCarousel } from "@/components/client-carousel"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <NavHeader />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <ImpactSection />
        <SolutionsSection />
        <HomeProductsSection />
        <ServicesSection />
        <TechStackSection />
        <ProjectShowcase />
        <WhyChooseUs />
        <TeamSection />
        <ClientCarousel />
        <TestimonialsSlider />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
