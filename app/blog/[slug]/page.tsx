import { notFound } from "next/navigation"
import { posts } from "@/lib/blog-data"
import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import BlogDetailClient from "@/components/blog-detail-client"

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main className="min-h-screen bg-[#0f1629]">
      <NavHeader />
      <BlogDetailClient post={post} related={related} />
      <Footer />
    </main>
  )
}
