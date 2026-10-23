"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { Code2, Database, Globe2, Laptop, Server, Shield, Smartphone, DollarSign, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const floatingIcons = [
  { icon: Code2, size: 32, x: "20%", y: "30%", delay: 0, color: "#00ffff" },
  { icon: Globe2, size: 42, x: "75%", y: "40%", delay: 0.2, color: "#00ffff" },
  { icon: Database, size: 36, x: "60%", y: "65%", delay: 0.4, color: "#ffff00" },
  { icon: Shield, size: 40, x: "25%", y: "70%", delay: 0.6, color: "#00ffff" },
  { icon: Server, size: 40, x: "85%", y: "25%", delay: 0.8, color: "#ffff00" },
  { icon: Laptop, size: 38, x: "40%", y: "20%", delay: 1, color: "#00ffff" },
  { icon: Smartphone, size: 34, x: "70%", y: "75%", delay: 1.2, color: "#ffff00" },
  { icon: Code2, size: 30, x: "15%", y: "45%", delay: 1.4, color: "#00ffff" },
  { icon: Shield, size: 42, x: "90%", y: "60%", delay: 1.6, color: "#ffff00" },
  { icon: Globe2, size: 36, x: "30%", y: "85%", delay: 1.8, color: "#00ffff" },
]

// Add this special combined icon entry
const costIcon = {
  x: "45%",
  y: "80%",
  delay: 2.0,
  color: "#00ffff",
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  useEffect(() => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.style.position = "absolute"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.pointerEvents = "none"
    containerRef.current?.appendChild(canvas)

    let particles: Array<{ x: number; y: number; dx: number; dy: number; size: number; color: string }> = []
    const particleCount = 100
    const particleColors = ["rgba(0, 255, 255, 0.18)", "rgba(255, 255, 0, 0.18)"]
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let frameId = 0
    let heroVisible = true

    function createParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1.5,
          dy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2,
          color: Math.random() > 0.5 ? particleColors[0] : particleColors[1],
        })
      }
    }

    function animate() {
      frameId = 0
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        if (!reduceMotion) {
          particle.x += particle.dx
          particle.y += particle.dy
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1
      })

      // One path per colour, so each frame needs two fill calls instead of one per particle
      for (const color of particleColors) {
        ctx.beginPath()
        for (const particle of particles) {
          if (particle.color !== color) continue
          ctx.moveTo(particle.x + particle.size, particle.y)
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        }
        ctx.fillStyle = color
        ctx.fill()
      }

      // With reduced motion the particles are drawn once and stay still; they also pause while the hero is off screen
      if (!reduceMotion && heroVisible) frameId = requestAnimationFrame(animate)
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
      if (reduceMotion) animate()
    }

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting
      if (heroVisible && !reduceMotion && !frameId) frameId = requestAnimationFrame(animate)
    })
    if (containerRef.current) visibilityObserver.observe(containerRef.current)

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    if (!reduceMotion) animate()

    return () => {
      cancelAnimationFrame(frameId)
      visibilityObserver.disconnect()
      window.removeEventListener("resize", resizeCanvas)
      canvas.remove()
    }
  }, [])

  return (
    <motion.div
      id="home"
      ref={containerRef}
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2a7b9b] via-[#4b3b82] to-[#1a1f35]"
    >
      {/* Add a subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#2a7b9b]/50 to-[#2a7b9b] opacity-90" />

      {/* Add purple glow effect */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#4b3b82] rounded-full blur-[128px] opacity-20" />

      {/* Add teal glow effect */}
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#1a1f35] rounded-full blur-[128px] opacity-20" />

      {floatingIcons.map((item, index) => (
        <div
          key={index}
          aria-hidden="true"
          style={{ left: item.x, top: item.y, animationDelay: `${item.delay}s` }}
          className={`hero-float absolute text-[${item.color}] drop-shadow-[0_0_8px_${item.color}] filter blur-[0.5px]`}
        >
          <item.icon size={item.size} strokeWidth={1} />
        </div>
      ))}

      <div
        aria-hidden="true"
        style={{ left: costIcon.x, top: costIcon.y, animationDelay: `${costIcon.delay}s` }}
        className={`hero-float absolute text-[${costIcon.color}] drop-shadow-[0_0_8px_${costIcon.color}] filter blur-[0.5px] flex items-center -space-x-1`}
      >
        <DollarSign size={30} strokeWidth={1} />
        <TrendingDown size={30} strokeWidth={1} />
      </div>

      <motion.div style={{ scale }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="text-sm font-medium text-[#00ffff] mb-6 tracking-wider opacity-80">
          WEB & MOBILE DEVELOPMENT SERVICES
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
        >
          <span className="inline-block bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
            Transform Your Business
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
            With Technology
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8"
        >
          We design and build web apps, mobile apps and cloud solutions for businesses, and we make our own apps for
          families too.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-white/20 text-white hover:border-[#00ffff]/50 hover:text-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-8 rounded-full"
          >
            <a href="#services">EXPLORE SERVICES</a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
