import { NavHeader } from "@/components/nav-header"
import { ProductsHero } from "@/components/products-hero"
import { ProductsShowcase } from "@/components/products-showcase"
import { Footer } from "@/components/footer"

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
