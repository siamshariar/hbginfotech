"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Link2,
  CheckCircle2,
  ChevronUp,
} from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 h-[3px] bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-[#00ffff] to-[#4b3b82] origin-left"
        style={{ scaleX: progress / 100 }}
        transition={{ ease: "linear" }}
      />
    </div>
  )
}

function TableOfContents({ sections }: { sections: { heading: string }[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-section"))
            if (!isNaN(idx)) setActive(idx)
          }
        })
      },
      { rootMargin: "-30% 0px -60% 0px" },
    )
    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">On this page</p>
      <ul className="space-y-1">
        {sections.map((s, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => {
                document.querySelector(`[data-section="${i}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className={`w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all duration-200 border-l-2 ${
                active === i
                  ? "text-[#00ffff] border-[#00ffff] bg-[#00ffff]/5"
                  : "text-white/40 border-transparent hover:text-white/70 hover:border-white/20"
              }`}
            >
              {s.heading}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== "undefined" ? window.location.href : ""

  const copy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex flex-col items-center gap-3 sticky top-24">
      <p className="text-[10px] uppercase tracking-widest text-white/30 -rotate-90 mb-4 mt-2 whitespace-nowrap">Share</p>
      <motion.a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 transition-all duration-200"
      >
        <Twitter className="w-4 h-4" />
      </motion.a>
      <motion.a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all duration-200"
      >
        <Linkedin className="w-4 h-4" />
      </motion.a>
      <motion.button
        type="button"
        onClick={copy}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-9 h-9 rounded-full bg-white/5 border flex items-center justify-center transition-all duration-200 ${
          copied ? "border-[#00ffff]/60 text-[#00ffff]" : "border-white/10 text-white/50 hover:text-[#00ffff] hover:border-[#00ffff]/40"
        }`}
      >
        {copied ? <CheckCircle2 className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </motion.button>
    </div>
  )
}

interface Props {
  post: BlogPost
  related: BlogPost[]
}

export default function BlogDetailClient({ post, related }: Props) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <div ref={heroRef} className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1629] via-[#0f1629]/60 to-[#0f1629]/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a7b9b]/30 via-[#4b3b82]/20 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative h-full flex flex-col justify-end pb-12 pt-32"
        >
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/40 mb-5">
              <Link href="/" className="hover:text-[#00ffff] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#00ffff] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/60 truncate max-w-[200px]">{post.title}</span>
            </div>

            {/* Category */}
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#00ffff]/15 text-[#00ffff] border border-[#00ffff]/30 mb-4">
              {post.category}
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance max-w-3xl"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-5 mt-6 text-sm text-white/50"
            >
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#00ffff]" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#00ffff]" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#00ffff]" />{post.readTime}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Body */}
      <div className="bg-[#0f1629]">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto py-16">
          <div className="flex gap-8 lg:gap-14">

            {/* Share sidebar (desktop only) */}
            <aside className="hidden xl:flex flex-col items-center w-10 shrink-0 pt-2">
              <ShareButtons title={post.title} />
            </aside>

            {/* Main content */}
            <article className="flex-1 min-w-0">

              {/* Intro */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed border-l-4 border-[#00ffff]/50 pl-5 mb-12 italic"
              >
                {post.content.intro}
              </motion.p>

              {/* Sections */}
              <div className="space-y-14">
                {post.content.sections.map((section, i) => (
                  <motion.section
                    key={i}
                    data-section={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
                    className="scroll-mt-28"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-1 h-7 rounded-full bg-gradient-to-b from-[#00ffff] to-[#4b3b82]" />
                      {section.heading}
                    </h2>
                    <p className="text-white/70 leading-[1.85] text-base md:text-[1.05rem]">{section.body}</p>
                  </motion.section>
                ))}
              </div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
                className="mt-14 p-6 rounded-2xl bg-gradient-to-br from-[#00ffff]/5 to-[#4b3b82]/10 border border-[#00ffff]/20"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#00ffff] mb-3">Key Takeaway</p>
                <p className="text-white/80 leading-relaxed">{post.content.conclusion}</p>
              </motion.div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-white/30" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-[#00ffff] hover:border-[#00ffff]/30 transition-colors duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile share */}
              <div className="mt-8 flex xl:hidden items-center gap-3">
                <Share2 className="w-4 h-4 text-white/40" />
                <span className="text-sm text-white/40 mr-1">Share:</span>
                <ShareButtons title={post.title} />
              </div>

              {/* Author card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
                className="mt-14 flex items-center gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00ffff]/30 to-[#4b3b82]/50 border-2 border-[#00ffff]/30 flex items-center justify-center text-2xl font-bold text-[#00ffff] shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{post.author}</p>
                  <p className="text-[#00ffff] text-sm">{post.authorRole} — HBG Info Tech</p>
                  <p className="text-white/50 text-sm mt-1 leading-relaxed">
                    Part of the HBG engineering team, focused on building scalable, modern software solutions for clients worldwide.
                  </p>
                </div>
              </motion.div>

              {/* Prev / Back nav */}
              <div className="mt-10 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-[#00ffff] transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" /> All Articles
                </Link>
              </div>
            </article>

            {/* Table of contents sidebar (desktop) */}
            <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
              <TableOfContents sections={post.content.sections} />
            </aside>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
              className="mt-24 border-t border-white/[0.08] pt-16"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00ffff]/40 transition-all duration-300"
                  >
                    <div className="relative w-28 aspect-video rounded-lg overflow-hidden shrink-0 bg-[#0a0f20]">
                      <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <span className="text-[11px] text-[#00ffff] font-semibold mb-1">{r.category}</span>
                      <h3 className="text-sm font-semibold text-white group-hover:text-[#00ffff] transition-colors duration-200 line-clamp-2 leading-snug">
                        {r.title}
                      </h3>
                      <span className="mt-2 flex items-center gap-1 text-xs text-white/40">
                        {r.readTime} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll-to-top */}
      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-8 right-6 z-50 w-10 h-10 rounded-full bg-[#00ffff]/10 border border-[#00ffff]/30 text-[#00ffff] flex items-center justify-center hover:bg-[#00ffff]/20 transition-colors duration-200 shadow-lg"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </>
  )
}
