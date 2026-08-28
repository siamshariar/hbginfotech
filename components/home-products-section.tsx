"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Shield,
  Lock,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "booktalkie",
    name: "BookTalkie",
    tagline: "Snap. Tap. Listen.",
    description:
      "Transform any children's book into an interactive audio experience with AI-powered text recognition and natural voice narration.",
    icon: BookOpen,
    color: "#FF6B6B",
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=BookTalkie+Home",
      "/placeholder.svg?height=600&width=300&text=Camera+Scan",
      "/placeholder.svg?height=600&width=300&text=Audio+Player",
    ],
    stats: { downloads: "50K+", rating: "4.9" },
  },
  {
    id: "safekids",
    name: "SafeKids Videos & Learning",
    tagline: "Safe Entertainment & Learning",
    description:
      "Curated child-safe educational videos, interactive quizzes, and learning games that parents can trust.",
    icon: Shield,
    color: "#4ECDC4",
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=SafeKids+Home",
      "/placeholder.svg?height=600&width=300&text=Video+Player",
      "/placeholder.svg?height=600&width=300&text=Quiz+Mode",
    ],
    stats: { downloads: "25K+", rating: "4.8" },
  },
  {
    id: "safehandoff",
    name: "SafeHandoff",
    tagline: "Smart AppLocker",
    description:
      "Securely hand over your device to others with app-specific locking, time limits, and guest profiles.",
    icon: Lock,
    color: "#9B59B6",
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=SafeHandoff+Home",
      "/placeholder.svg?height=600&width=300&text=App+Selection",
      "/placeholder.svg?height=600&width=300&text=Time+Settings",
    ],
    stats: { downloads: "15K+", rating: "4.7" },
  },
  {
    id: "studyhub",
    name: "StudyHub.ac",
    tagline: "All Your Learning Resources",
    description:
      "Access curated educational resources, create personalized study plans, and track academic progress with AI.",
    icon: GraduationCap,
    color: "#F39C12",
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=StudyHub+Dashboard",
      "/placeholder.svg?height=600&width=300&text=Study+Plan",
      "/placeholder.svg?height=600&width=300&text=Resources",
    ],
    stats: { downloads: "30K+", rating: "4.8" },
  },
  {
    id: "safekidsacademy",
    name: "SafeKids.ac",
    tagline: "SafeKids Academy",
    description:
      "A comprehensive safe learning platform with interactive lessons, creative activities, and engaging educational content for kids.",
    icon: Sparkles,
    color: "#E91E63",
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=SafeKids+Academy",
      "/placeholder.svg?height=600&width=300&text=Interactive+Lessons",
      "/placeholder.svg?height=600&width=300&text=Learning+Games",
    ],
    stats: { downloads: "20K+", rating: "4.9" },
  },
]

function MiniPhoneCarousel({
  screenshots,
  color,
}: {
  screenshots: string[]
  color: string
}) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % screenshots.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [screenshots.length])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <div className="relative aspect-[9/19] rounded-[2rem] border-[6px] border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl z-20" />
      <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] bg-black">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            <Image
              src={screenshots[current]}
              alt="App screenshot"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/30 z-10">
          <motion.div
            key={`bar-${current}`}
            className="h-full"
            style={{ backgroundColor: color }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  )
}

export function HomeProductsSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % products.length)
  }, [])

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + products.length) % products.length)
  }, [])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(goNext, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused, goNext])

  const product = products[active]

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#00ffff]/10 text-[#00ffff] text-sm font-medium mb-4">
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
            Apps That Make a Difference
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Crafted with care to solve real problems for families and learners worldwide.
          </p>
        </motion.div>

        {/* Product Selector Tabs */}
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-12">
          {products.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setActive(idx)
                setPaused(true)
                setTimeout(() => setPaused(false), 8000)
              }}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                idx === active
                  ? "text-white shadow-lg"
                  : "text-white/50 hover:text-white/80 bg-white/5 hover:bg-white/10"
              }`}
              style={
                idx === active
                  ? { backgroundColor: `${p.color}20`, boxShadow: `0 0 20px ${p.color}30` }
                  : undefined
              }
            >
              {idx === active && (
                <motion.div
                  layoutId="activeProductTab"
                  className="absolute inset-0 rounded-full border"
                  style={{ borderColor: `${p.color}80` }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <p.icon className="h-4 w-4 relative z-10" style={idx === active ? { color: p.color } : undefined} />
              <span className="relative z-10 hidden sm:inline">{p.name}</span>
            </button>
          ))}
        </div>

        {/* Main Spotlight Area */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-4xl mx-auto"
            >
              {/* Phone Preview */}
              <div className="w-full max-w-[240px] lg:max-w-[260px] flex-shrink-0">
                <motion.div
                  initial={{ scale: 0.9, rotate: -3 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <MiniPhoneCarousel
                    screenshots={product.screenshots}
                    color={product.color}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${product.color}25, ${product.color}50)` }}
                  >
                    <product.icon className="h-6 w-6" style={{ color: product.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{product.name}</h3>
                    <p className="text-sm font-medium" style={{ color: product.color }}>
                      {product.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-xl">
                  {product.description}
                </p>

                {/* Stats Row */}
                <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">{product.stats.downloads}</span>
                    <span className="text-sm text-white/40">Downloads</span>
                  </div>
                  <div className="w-px h-8 bg-white/15" />
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">{product.stats.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          style={{ color: product.color }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <Button
                    asChild
                    className="rounded-full px-6 h-11 text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    <Link href="/products">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-6 h-11 border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Link href="/products">
                      View All Products
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next Arrows */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              type="button"
              onClick={() => {
                goPrev()
                setPaused(true)
                setTimeout(() => setPaused(false), 8000)
              }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Progress Dots */}
            <div className="flex items-center gap-2">
              {products.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setActive(idx)
                    setPaused(true)
                    setTimeout(() => setPaused(false), 8000)
                  }}
                  className="relative h-2 rounded-full transition-all duration-500"
                  style={{
                    width: idx === active ? 32 : 8,
                    backgroundColor: idx === active ? p.color : "rgba(255,255,255,0.2)",
                  }}
                >
                  {idx === active && !paused && (
                    <motion.div
                      className="absolute inset-0 rounded-full origin-left"
                      style={{ backgroundColor: `${p.color}60` }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                goNext()
                setPaused(true)
                setTimeout(() => setPaused(false), 8000)
              }}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Background Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 transition-colors duration-700"
          style={{
            background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${product.color}15, transparent)`,
          }}
        />
      </div>
    </section>
  )
}
