"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Download, ExternalLink, BookOpen, Shield, Lock, GraduationCap, Sparkles, Play, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "booktalkie",
    name: "BookTalkie",
    tagline: "Snap. Tap. Listen.",
    description: "Transform any children's book into an interactive audio experience. Simply snap a photo of any page, and our AI instantly analyzes the content and reads it aloud with engaging narration.",
    icon: BookOpen,
    color: "#FF6B6B",
    gradient: "from-[#FF6B6B] to-[#FF8E8E]",
    features: [
      "AI-powered text recognition",
      "Natural voice narration",
      "Support for 20+ languages",
      "Offline mode available",
      "Reading progress tracking",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=BookTalkie+Home",
      "/placeholder.svg?height=600&width=300&text=Camera+Scan",
      "/placeholder.svg?height=600&width=300&text=Audio+Player",
      "/placeholder.svg?height=600&width=300&text=Book+Library",
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    websiteUrl: "#",
    stats: { downloads: "50K+", rating: "4.9", reviews: "2.3K" },
  },
  {
    id: "safekids",
    name: "SafeKids Videos & Learning",
    tagline: "Safe Entertainment & Learning",
    description: "A curated platform of child-safe educational videos, interactive quizzes, and learning games. Parents can trust their children are watching appropriate, enriching content.",
    icon: Shield,
    color: "#4ECDC4",
    gradient: "from-[#4ECDC4] to-[#6EE7DF]",
    features: [
      "100% curated safe content",
      "Age-appropriate filtering",
      "Interactive learning quizzes",
      "Educational mini-games",
      "Parental dashboard & reports",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=SafeKids+Home",
      "/placeholder.svg?height=600&width=300&text=Video+Player",
      "/placeholder.svg?height=600&width=300&text=Quiz+Mode",
      "/placeholder.svg?height=600&width=300&text=Learning+Games",
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    websiteUrl: "#",
    stats: { downloads: "25K+", rating: "4.8", reviews: "1.8K" },
  },
  {
    id: "safehandoff",
    name: "SafeHandoff",
    tagline: "Smart AppLocker",
    description: "Securely hand over your device to others with complete peace of mind. Lock specific apps, set time limits, and control exactly what can be accessed when sharing your phone or tablet.",
    icon: Lock,
    color: "#9B59B6",
    gradient: "from-[#9B59B6] to-[#B37DD1]",
    features: [
      "One-tap device handoff",
      "App-specific locking",
      "Customizable time limits",
      "Guest mode profiles",
      "Activity monitoring",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=SafeHandoff+Home",
      "/placeholder.svg?height=600&width=300&text=App+Selection",
      "/placeholder.svg?height=600&width=300&text=Time+Settings",
      "/placeholder.svg?height=600&width=300&text=Guest+Profile",
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    websiteUrl: "#",
    stats: { downloads: "15K+", rating: "4.7", reviews: "980" },
  },
  {
    id: "studyhub",
    name: "StudyHub.ac",
    tagline: "All Your Learning Resources",
    description: "Your comprehensive learning companion. Access curated educational resources, create personalized study plans, track progress, and achieve your academic goals with AI-powered recommendations.",
    icon: GraduationCap,
    color: "#F39C12",
    gradient: "from-[#F39C12] to-[#F5B041]",
    features: [
      "Vast resource library",
      "AI study plan generator",
      "Progress analytics",
      "Flashcard creator",
      "Collaboration tools",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=StudyHub+Dashboard",
      "/placeholder.svg?height=600&width=300&text=Study+Plan",
      "/placeholder.svg?height=600&width=300&text=Resources",
      "/placeholder.svg?height=600&width=300&text=Progress+Stats",
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    websiteUrl: "https://studyhub.ac",
    stats: { downloads: "30K+", rating: "4.8", reviews: "1.5K" },
  },
  {
    id: "safekidsacademy",
    name: "SafeKids.ac",
    tagline: "SafeKids Academy",
    description: "A comprehensive safe learning platform designed for children. Interactive lessons, creative activities, and engaging educational content that makes learning fun while keeping kids protected online.",
    icon: Sparkles,
    color: "#E91E63",
    gradient: "from-[#E91E63] to-[#F48FB1]",
    features: [
      "100% safe learning content",
      "Interactive lessons & activities",
      "Creative learning games",
      "Progress rewards system",
      "Parent monitoring dashboard",
    ],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=SafeKids+Academy+Home",
      "/placeholder.svg?height=600&width=300&text=Interactive+Lessons",
      "/placeholder.svg?height=600&width=300&text=Learning+Games",
      "/placeholder.svg?height=600&width=300&text=Progress+Rewards",
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    websiteUrl: "https://safekids.ac",
    stats: { downloads: "20K+", rating: "4.9", reviews: "1.2K" },
  },
]

function ProductCarousel({ screenshots, productName, color }: { screenshots: string[]; productName: string; color: string }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection)
      setCurrent((prev) => (prev + newDirection + screenshots.length) % screenshots.length)
    },
    [screenshots.length],
  )

  useEffect(() => {
    if (screenshots.length <= 1 || paused) return
    intervalRef.current = setInterval(() => paginate(1), 3000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused, paginate, screenshots.length])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <div
      className="relative w-full max-w-[320px] lg:max-w-[360px] mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Phone Frame */}
      <div className="relative aspect-[9/19] rounded-[3rem] border-[10px] border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-800 rounded-b-2xl z-20" />
        
        {/* Screen */}
        <div className="relative w-full h-full overflow-hidden rounded-[2.2rem] bg-black">
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
                alt={`${productName} screenshot ${current + 1}`}
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 z-10">
            <motion.div
              key={`progress-${current}`}
              className="h-full"
              style={{ backgroundColor: color }}
              initial={{ width: "0%" }}
              animate={{ width: paused ? `${((current + 1) / screenshots.length) * 100}%` : "100%" }}
              transition={{ duration: paused ? 0 : 3, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {screenshots.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setDirection(idx > current ? 1 : -1)
              setCurrent(idx)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "w-6" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            style={{ backgroundColor: idx === current ? color : undefined }}
          />
        ))}
      </div>
    </div>
  )
}

export function ProductsShowcase() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-[#1a1f35] to-[#2a2a4a]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#00ffff]/10 text-[#00ffff] text-sm font-medium mb-4">
            FEATURED PRODUCTS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Apps That Make a Difference
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Each product is crafted with care to solve real problems and enhance everyday experiences for families and learners.
          </p>
        </motion.div>

        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col-reverse ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
            >
              {/* Phone Mockup with Carousel - 40% width */}
              <div className="w-full lg:w-[40%] flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 2 : -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ProductCarousel
                    screenshots={product.screenshots}
                    productName={product.name}
                    color={product.color}
                  />
                </motion.div>
              </div>

              {/* Content - 60% width */}
              <div className="w-full lg:w-[60%] text-center lg:text-left">
                {/* Icon & Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${product.color}20, ${product.color}40)` }}
                  >
                    <product.icon className="h-8 w-8" style={{ color: product.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{product.name}</h3>
                    <p className="text-lg font-medium" style={{ color: product.color }}>{product.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <Sparkles className="h-4 w-4 flex-shrink-0" style={{ color: product.color }} />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{product.stats.downloads}</div>
                    <div className="text-xs text-white/50">Downloads</div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{product.stats.rating}</div>
                    <div className="text-xs text-white/50">Rating</div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{product.stats.reviews}</div>
                    <div className="text-xs text-white/50">Reviews</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <Button
                    asChild
                    className="bg-black hover:bg-gray-900 text-white px-5 h-12 rounded-xl"
                  >
                    <a href={product.appStoreUrl} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      App Store
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-black hover:bg-gray-900 text-white px-5 h-12 rounded-xl"
                  >
                    <a href={product.playStoreUrl} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Play Store
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-5 h-12 rounded-xl bg-transparent"
                  >
                    <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
