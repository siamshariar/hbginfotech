"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Project = {
  slug: string
  title: string
  category: string
  description: string
  images: string[]
  technologies: string[]
  duration: string
  team: string
  industry: string
  overview: string
  challenge: string
  solution: string
  results: { metric: string; label: string }[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with real-time inventory management and AI-powered recommendations.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&h=600&fit=crop",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "TensorFlow"],
    overview:
      "A comprehensive e-commerce solution built for scale, enabling businesses to manage products, orders, and customers from a single dashboard. The platform integrates AI-powered product recommendations that increased average order value by 28%.",
    challenge:
      "The client needed a platform that could handle 50,000+ SKUs, peak traffic of 10,000 concurrent users, and integrate with multiple third-party logistics providers — all within a 4-month timeline.",
    solution:
      "We architected a microservices-based Next.js frontend with a Node.js API layer, leveraging MongoDB's flexible schema for product variants. A custom TensorFlow recommendation engine was trained on historical purchase data.",
    results: [
      { metric: "28%", label: "Increase in Average Order Value" },
      { metric: "99.9%", label: "Uptime During Peak Sales" },
      { metric: "2.1s", label: "Average Page Load Time" },
      { metric: "40%", label: "Reduction in Cart Abandonment" },
    ],
    duration: "4 months",
    team: "6 engineers",
    industry: "Retail",
  },
  {
    slug: "healthcare-management-system",
    title: "Healthcare Management System",
    category: "Enterprise Software",
    description:
      "Comprehensive healthcare management solution with electronic health records and telemedicine capabilities.",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=600&fit=crop",
    ],
    technologies: ["React", "Java Spring", "PostgreSQL", "WebRTC"],
    overview:
      "An end-to-end healthcare management platform serving 120+ clinics. The system unifies patient records, appointment scheduling, telemedicine consultations, and billing into a HIPAA-compliant solution.",
    challenge:
      "Legacy siloed systems meant doctors spent 35% of their time on administrative tasks. The client needed a unified platform that was HIPAA-compliant and could be rolled out without disrupting ongoing patient care.",
    solution:
      "We built a React-based SPA with real-time WebRTC video consultations, backed by a Java Spring microservices architecture. PostgreSQL with row-level security handles sensitive patient data with full audit logging.",
    results: [
      { metric: "35%", label: "Reduction in Admin Time" },
      { metric: "120+", label: "Clinics Onboarded" },
      { metric: "4.8★", label: "Patient Satisfaction Score" },
      { metric: "60%", label: "Faster Appointment Booking" },
    ],
    duration: "6 months",
    team: "8 engineers",
    industry: "Healthcare",
  },
  {
    slug: "fintech-mobile-app",
    title: "FinTech Mobile App",
    category: "Mobile Development",
    description: "Cross-platform mobile application for personal finance management with AI-driven insights.",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop",
    ],
    technologies: ["React Native", "Python", "TensorFlow", "AWS"],
    overview:
      "A cross-platform personal finance app with over 200,000 downloads in its first year. The AI engine categorizes transactions, forecasts spending, and surfaces personalized saving opportunities in real time.",
    challenge:
      "Users were overwhelmed by raw transaction data and struggling to form meaningful savings habits. The product needed to work across iOS and Android while connecting securely to 3,000+ bank institutions.",
    solution:
      "A React Native app with a Python/TensorFlow backend processes transactions via Plaid APIs. The ML model was trained on anonymized spending data to deliver actionable weekly insights per user.",
    results: [
      { metric: "200K+", label: "Downloads in Year One" },
      { metric: "4.7★", label: "App Store Rating" },
      { metric: "22%", label: "Average User Savings Increase" },
      { metric: "3,000+", label: "Bank Integrations" },
    ],
    duration: "5 months",
    team: "5 engineers",
    industry: "FinTech",
  },
]

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection)
      setCurrent((prev) => (prev + newDirection + images.length) % images.length)
    },
    [images.length],
  )

  // Auto-advance every 3.5 s, pause on hover
  useEffect(() => {
    if (images.length <= 1 || paused) return
    intervalRef.current = setInterval(() => paginate(1), 3500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused, paginate, images.length])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <div
      className="relative h-56 overflow-hidden rounded-t-xl bg-[#0f1629] group/carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); paginate(-1) }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 hover:border-[#00ffff]/60 hover:text-[#00ffff] transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); paginate(1) }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 hover:border-[#00ffff]/60 hover:text-[#00ffff] transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.preventDefault(); setDirection(i > current ? 1 : -1); setCurrent(i) }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-5 bg-[#00ffff]" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className="absolute top-3 right-3 z-10 text-xs text-white/70 bg-black/40 rounded-full px-2 py-0.5 font-medium">
            {current + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export function ProjectShowcase() {
  return (
    <section
      id="works"
      className="w-full py-20 md:py-32 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35] border-t border-white/5 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container px-4 md:px-6"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-white/70 max-w-3xl mx-auto">
            Explore our latest work and see how we help businesses transform their digital presence
          </motion.p>
        </div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-[#00ffff]/50 hover:shadow-[0_0_24px_rgba(0,255,255,0.1)] transition-all duration-300 flex flex-col"
            >
              <ImageCarousel images={project.images} title={project.title} />

              <div className="p-6 flex flex-col flex-1">
                <span className="text-sm text-[#00ffff] font-medium mb-1">{project.category}</span>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00ffff] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={`/works/${project.slug}`}>
                  <Button
                    variant="ghost"
                    className="w-full bg-transparent group/btn border border-white/20 hover:border-[#00ffff]/60 text-white hover:text-[#00ffff] hover:bg-[#00ffff]/5 transition-all duration-300"
                  >
                    View Project Details
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-16">
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white/20 text-white hover:border-[#00ffff]/50 hover:text-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-8 rounded-full"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
