"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Building2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Zap,
  Shield,
  BarChart3,
  Code2,
  Layers,
  Globe,
  Lightbulb,
  Target,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/components/project-showcase"

// ─── Auto-advancing carousel ──────────────────────────────────────────────────

function DetailCarousel({ images, title }: { images: string[]; title: string }) {
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

  // Auto-advance every 4 s, pause on hover
  useEffect(() => {
    if (images.length <= 1 || paused) return
    intervalRef.current = setInterval(() => paginate(1), 4000)
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
      className="relative w-full overflow-hidden rounded-2xl bg-[#0f1629] border border-white/10 group/carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main image */}
      <div className="relative h-[300px] md:h-[420px]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${title} — screenshot ${current + 1}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Counter */}
        <div className="absolute top-4 right-4 z-10 text-sm text-white/80 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
          {current + 1} / {images.length}
        </div>

        {/* Progress bar */}
        {images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-10">
            <motion.div
              key={current}
              className="h-full bg-[#00ffff]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: paused ? 0 : 4, ease: "linear" }}
            />
          </div>
        )}

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => { setPaused(true); paginate(-1) }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 hover:border-[#00ffff]/60 hover:text-[#00ffff] transition-all duration-200"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => { setPaused(true); paginate(1) }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 hover:border-[#00ffff]/60 hover:text-[#00ffff] transition-all duration-200"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 p-3 bg-[#0f1629]/80">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); setPaused(true) }}
              className={`relative h-16 flex-1 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === current ? "border-[#00ffff]" : "border-white/10 hover:border-white/30"
              }`}
              aria-label={`View screenshot ${i + 1}`}
            >
              <Image src={img} alt={`${title} thumbnail ${i + 1}`} fill className="object-cover object-center" sizes="120px" />
              {i !== current && <div className="absolute inset-0 bg-black/40" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

// Feature tabs data derived from a project
const TAB_ICONS = [Code2, Layers, Zap, Shield, BarChart3, Globe]

function getFeatureTabs(project: Project) {
  return [
    {
      id: "overview",
      label: "Overview",
      icon: Lightbulb,
      content: {
        heading: "Project Overview",
        body: project.overview,
        highlights: [
          `Built for the ${project.industry} sector`,
          `Delivered by a team of ${project.team}`,
          `Completed in ${project.duration}`,
          "Fully production-ready at launch",
        ],
      },
    },
    {
      id: "challenge",
      label: "Challenge",
      icon: Target,
      content: {
        heading: "The Challenge",
        body: project.challenge,
        highlights: [
          "Complex legacy system constraints",
          "Tight delivery timeline",
          "High scalability requirements",
          "Multi-stakeholder alignment needed",
        ],
      },
    },
    {
      id: "solution",
      label: "Solution",
      icon: Rocket,
      content: {
        heading: "Our Solution",
        body: project.solution,
        highlights: [
          "Modern, scalable architecture",
          "Performance-first design decisions",
          "Automated CI/CD pipelines",
          "Comprehensive test coverage",
        ],
      },
    },
  ]
}

// ─── Interactive Feature Tabs ─────────────────────────────────────────────────

function FeatureTabs({ project }: { project: Project }) {
  const tabs = getFeatureTabs(project)
  const [active, setActive] = useState(tabs[0].id)
  const current = tabs.find((t) => t.id === active)!

  return (
    <section className="container px-4 md:px-6 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Project Deep Dive</h2>
        <p className="text-white/50 text-sm">Explore the full story behind the build</p>
      </motion.div>

      {/* Tab bar */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex gap-1 p-1 bg-white/5 border border-white/10 rounded-xl">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-250 ${
                  isActive ? "text-[#0f1629]" : "text-white/50 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-[#00ffff] rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="relative w-4 h-4" />
                <span className="relative">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
        >
          <div className="lg:col-span-3 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-xl font-bold text-white mb-4">{current.content.heading}</h3>
            <p className="text-white/65 leading-relaxed">{current.content.body}</p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            {current.content.highlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#00ffff]/30 hover:bg-[#00ffff]/5 transition-all duration-200"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00ffff] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">{h}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

// ─── Build Process Timeline ───────────────────────────────────────────────────

const PHASES = [
  { icon: Lightbulb, label: "Discovery", desc: "Requirements gathering, stakeholder interviews, technical feasibility analysis, and defining the project scope." },
  { icon: Code2, label: "Design & Architecture", desc: "System design, UI/UX wireframes, database schema planning, and tech stack finalisation." },
  { icon: Layers, label: "Development", desc: "Iterative sprint-based development with continuous integration, code reviews, and unit testing." },
  { icon: Zap, label: "QA & Testing", desc: "End-to-end testing, performance benchmarking, security audits, and user acceptance testing." },
  { icon: Rocket, label: "Launch", desc: "Zero-downtime deployment, monitoring setup, client handover, and 30-day post-launch support." },
]

function ProcessTimeline() {
  return (
    <section className="border-t border-white/5 bg-white/[0.015]">
      <div className="container px-4 md:px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">How We Built It</h2>
          <p className="text-white/50 text-sm">Our proven 5-phase delivery process</p>
        </motion.div>

        {/* Desktop: horizontal; Mobile: vertical */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-[28px] left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-gradient-to-r from-transparent via-[#00ffff]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {PHASES.map((phase, i) => {
              const Icon = phase.icon
              return (
                <motion.div
                  key={phase.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Icon bubble */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#1a1f35] border-2 border-[#00ffff]/30 group-hover:border-[#00ffff] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                      <Icon className="w-6 h-6 text-[#00ffff]" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0f1629] border border-[#00ffff]/40 flex items-center justify-center">
                      <span className="text-[#00ffff] text-[10px] font-bold">{i + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#00ffff] transition-colors duration-200">
                    {phase.label}
                  </h3>
                  <p className="text-white/45 text-xs leading-relaxed">{phase.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Tech Stack Spotlight ─────────────────────────────────────────────────────

const TECH_ICONS: Record<string, string> = {
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java Spring": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "WebRTC": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
}

function TechSpotlight({ technologies }: { technologies: string[] }) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="container px-4 md:px-6 py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Tech Stack Spotlight</h2>
        <p className="text-white/50 text-sm">Technologies powering this project</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, i) => {
          const iconSrc = TECH_ICONS[tech]
          const isHovered = hovered === tech
          return (
            <motion.div
              key={tech}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(tech)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex flex-col items-center gap-3 px-6 py-5 rounded-2xl border cursor-default transition-all duration-300 ${
                isHovered
                  ? "border-[#00ffff]/60 bg-[#00ffff]/10 shadow-[0_0_24px_rgba(0,255,255,0.2)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {iconSrc ? (
                <div className="w-10 h-10 relative">
                  <Image src={iconSrc} alt={tech} fill className="object-contain" sizes="40px" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-lg bg-[#00ffff]/10 border border-[#00ffff]/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-[#00ffff]" />
                </div>
              )}
              <span className={`text-sm font-medium transition-colors duration-200 ${isHovered ? "text-[#00ffff]" : "text-white/70"}`}>
                {tech}
              </span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

interface Props {
  project: Project
  prevProject: Project | null
  nextProject: Project | null
}

export function ProjectDetailClient({ project, prevProject, nextProject }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1f35] to-[#0f1729]">

      {/* ── Hero ── */}
      <div className="relative pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a7b9b]/30 via-[#4b3b82]/20 to-transparent pointer-events-none" />
        <div className="absolute top-24 left-1/4 w-72 h-72 rounded-full bg-[#00ffff]/5 blur-3xl pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-56 h-56 rounded-full bg-[#4b3b82]/20 blur-3xl pointer-events-none" />

        <div className="container px-4 md:px-6 py-12 md:py-16 relative">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#00ffff] text-sm font-medium transition-colors duration-200 mb-8 group/back"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover/back:-translate-x-1" />
              Back to Works
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: info */}
            <div>
              <motion.span custom={0} variants={fadeUp} initial="hidden" animate="visible"
                className="inline-block text-sm font-semibold text-[#00ffff] tracking-wider uppercase mb-4">
                {project.category}
              </motion.span>
              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {project.title}
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
                className="text-white/70 text-lg leading-relaxed mb-8">
                {project.description}
              </motion.p>

              {/* Meta */}
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
                className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Clock, label: "Duration", value: project.duration },
                  { icon: Users, label: "Team Size", value: project.team },
                  { icon: Building2, label: "Industry", value: project.industry },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <Icon className="w-4 h-4 text-[#00ffff] shrink-0" />
                    <div>
                      <div className="text-white/40 text-xs">{label}</div>
                      <div className="text-white text-sm font-semibold">{value}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Tech pills */}
              <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-sm font-medium px-3 py-1 rounded-full bg-[#00ffff]/10 text-[#00ffff] border border-[#00ffff]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: auto-advancing carousel */}
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
              <DetailCarousel images={project.images} title={project.title} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Results stats ── */}
      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="container px-4 md:px-6 py-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((result, i) => (
              <motion.div key={i} custom={i} variants={fadeUp}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00ffff]/30 hover:shadow-[0_0_16px_rgba(0,255,255,0.1)] transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#00ffff] mb-2">{result.metric}</div>
                <div className="text-white/60 text-sm leading-snug">{result.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Interactive feature tabs ── */}
      <FeatureTabs project={project} />

      {/* ── Build process timeline ── */}
      <ProcessTimeline />

      {/* ── Tech stack spotlight ── */}
      <TechSpotlight technologies={project.technologies} />

      {/* ── Prev / Next ── */}
      {(prevProject || nextProject) && (
        <div className="border-t border-white/5">
          <div className="container px-4 md:px-6 py-12">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-wider text-center mb-8">More Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevProject ? (
                <Link href={`/works/${prevProject.slug}`}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-white/10 hover:border-[#00ffff]/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300">
                  <ArrowLeft className="w-5 h-5 text-white/40 group-hover:text-[#00ffff] transition-colors duration-200 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-white/40 text-xs mb-1">Previous</div>
                    <div className="text-white font-semibold text-sm group-hover:text-[#00ffff] transition-colors duration-200 truncate">{prevProject.title}</div>
                  </div>
                </Link>
              ) : <div />}

              {nextProject ? (
                <Link href={`/works/${nextProject.slug}`}
                  className="group flex items-center gap-4 p-5 rounded-xl border border-white/10 hover:border-[#00ffff]/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 md:flex-row-reverse md:text-right">
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#00ffff] transition-colors duration-200 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-white/40 text-xs mb-1">Next</div>
                    <div className="text-white font-semibold text-sm group-hover:text-[#00ffff] transition-colors duration-200 truncate">{nextProject.title}</div>
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <div className="border-t border-white/5 bg-gradient-to-b from-transparent to-[#0f1629]/60">
        <div className="container px-4 md:px-6 py-16 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a similar project in mind?</h2>
            <p className="text-white/60 mb-8">{"Let's talk about how we can build something great together."}</p>
            <Link href="/#contact">
              <Button className="bg-[#00ffff] text-[#0f1629] hover:bg-[#00ffff]/90 font-bold px-8 h-12 rounded-full text-base shadow-[0_0_24px_rgba(0,255,255,0.35)] hover:shadow-[0_0_36px_rgba(0,255,255,0.5)] transition-all duration-300">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
