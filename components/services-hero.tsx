"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { Code2, Settings, Cpu, Blocks, Globe2, Shield, Database, Smartphone } from "lucide-react"

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const floatingIcons = [
    { Icon: Code2, x: "10%", y: "20%", size: 28, delay: 0, color: "#00ffff" },
    { Icon: Settings, x: "85%", y: "25%", size: 32, delay: 0.2, color: "#ffff00" },
    { Icon: Cpu, x: "18%", y: "65%", size: 36, delay: 0.4, color: "#00ffff" },
    { Icon: Blocks, x: "78%", y: "60%", size: 30, delay: 0.6, color: "#ffff00" },
    { Icon: Globe2, x: "50%", y: "15%", size: 26, delay: 0.8, color: "#00ffff" },
    { Icon: Shield, x: "65%", y: "75%", size: 34, delay: 1.0, color: "#00ffff" },
    { Icon: Database, x: "35%", y: "80%", size: 28, delay: 1.2, color: "#ffff00" },
    { Icon: Smartphone, x: "90%", y: "50%", size: 24, delay: 1.4, color: "#00ffff" },
  ]

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
    const particleCount = 60

    function createParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1.2,
          dy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 2,
          color: Math.random() > 0.5 ? "rgba(0, 255, 255, 0.3)" : "rgba(255, 255, 0, 0.2)",
        })
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.remove()
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2a7b9b] via-[#4b3b82] to-[#1a1f35]"
    >
      {/* Glow effects matching home page */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#2a7b9b]/50 to-[#2a7b9b] opacity-90" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#4b3b82] rounded-full blur-[128px] opacity-20" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#1a1f35] rounded-full blur-[128px] opacity-20" />

      {/* Animated floating icons */}
      {floatingIcons.map(({ Icon, x, y: iconY, size, delay, color }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: iconY, color }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1, 0.8],
            x: [0, -10, 10, -10, 0],
            y: [0, -10, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div style={{ y }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#00ffff] text-sm font-medium mb-6 tracking-wider">
            OUR SERVICES
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            <span className="inline-block bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              for Digital Success
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            From web development to cloud solutions, we offer a full spectrum of services to help your business thrive
            in the digital landscape.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "200+", label: "Projects Delivered" },
            { number: "50+", label: "Expert Developers" },
            { number: "99%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00ffff]/30"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#00ffff]">{stat.number}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
