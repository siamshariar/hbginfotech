"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { posts } from "@/lib/blog-data"

export function BlogSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35] border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent"
          >
            Latest Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            Stay updated with our latest thoughts on technology and innovation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
              className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-[#00ffff]/50 transition-all duration-300 flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1">
                {/* 16:9 thumbnail */}
                <div className="relative w-full aspect-video overflow-hidden bg-[#0f1629]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* category badge */}
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
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-[#00ffff] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{post.excerpt}</p>

                  {/* Author row */}
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
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
          className="text-center mt-16"
        >
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white/20 text-white hover:border-[#00ffff]/50 hover:text-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-8 rounded-full"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
