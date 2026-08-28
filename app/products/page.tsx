import type { Metadata } from "next"
import { NavHeader } from "@/components/nav-header"
import { ProductsHero } from "@/components/products-hero"
import { ProductsShowcase } from "@/components/products-showcase"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Products",
  description: "Discover HBG Info Tech's suite of apps — crafted to solve real problems for families, learners, and businesses.",
}

export default function ProductsPage() {
  return (
    <>
      <NavHeader />
      <main className="flex min-h-screen flex-col">
        <ProductsHero />
        <ProductsShowcase />
      </main>
      <Footer />
    </>
  )
}
