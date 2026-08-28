import type { Metadata } from "next"
import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import { PortfolioList } from "@/components/portfolio-list"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore HBG Info Tech's portfolio of successful projects and see how we've helped businesses achieve their digital goals.",
}

export default function PortfolioPage() {
  return (
    <>
      <NavHeader />
      <main className="flex min-h-screen flex-col">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore our portfolio of successful projects and see how we've helped businesses achieve their
                  digital goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PortfolioList />
      </main>
      <Footer />
    </>
  )
}
