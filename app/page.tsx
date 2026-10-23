import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { ImpactSection } from "@/components/impact-section"
import { HomeProductsSection } from "@/components/home-products-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
// Hidden on the simplified landing page; the components are kept for future use.
// import { SolutionsSection } from "@/components/solutions-section"
// import { TechStackSection } from "@/components/tech-stack-section"
// import { ProjectShowcase } from "@/components/project-showcase"
// import { WhyChooseUs } from "@/components/why-choose-us"
// import { TeamSection } from "@/components/team-section"
// import { ClientCarousel } from "@/components/client-carousel"
// import { TestimonialsSlider } from "@/components/testimonials-slider"
// import { BlogSection } from "@/components/blog-section"

export default function Home() {
  return (
    <>
      <NavHeader />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <ImpactSection />
        {/* <SolutionsSection /> — HBG Startup Solutions and HBG Host; HBG Host is linked from the header and services */}
        <HomeProductsSection />
        <ServicesSection />
        {/* <TechStackSection /> */}
        {/* <ProjectShowcase /> — Featured Projects */}
        {/* <WhyChooseUs /> — contains unverified statistics */}
        <AboutSection />
        {/* <TeamSection /> — Meet Our Team */}
        {/* <ClientCarousel /> */}
        {/* <TestimonialsSlider /> */}
        {/* <BlogSection /> — Latest Insights */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
