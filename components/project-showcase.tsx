"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"

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
        viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
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
