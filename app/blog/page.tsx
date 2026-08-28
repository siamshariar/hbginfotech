import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import { posts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and articles on web development, architecture, and security from the HBG Info Tech team.",
}

export default function BlogPage() {
  return (
    <>
      <NavHeader />
      <main className="min-h-screen bg-[#0f1629]">
        <section className="w-full py-32 md:py-40 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35] border-b border-white/5">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              Latest Insights
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Stay updated with our latest thoughts on technology and innovation
            </p>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 bg-[#1a1f35]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-[#00ffff]/50 transition-all duration-300 flex flex-col"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1">
                    <div className="relative w-full aspect-video overflow-hidden bg-[#0f1629]">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#00ffff]/20 text-[#00ffff] border border-[#00ffff]/30 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-white/50">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-[#00ffff] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00ffff]/30 to-[#4b3b82]/50 border border-[#00ffff]/30 flex items-center justify-center text-[10px] font-bold text-[#00ffff]">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-xs text-white/50">{post.author}</span>
                        </div>
                        <span className="flex items-center gap-1 text-[#00ffff] text-sm font-medium group-hover:gap-2 transition-all duration-300">
                          Read More <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
