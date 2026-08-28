"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect } from "react"
import { Rocket, Sparkles, Target, Zap, TrendingUp, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StartupSolutionsHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const floatingIcons = [
    { Icon: Rocket, x: "8%", y: "25%", size: 32, delay: 0, color: "#00ffff", rotate: -30 },
    { Icon: Rocket, x: "92%", y: "20%", size: 28, delay: 0.3, color: "#ffff00", rotate: 30 },
    { Icon: Sparkles, x: "15%", y: "70%", size: 26, delay: 0.5, color: "#ffff00" },
    { Icon: Target, x: "85%", y: "65%", size: 30, delay: 0.7, color: "#00ffff" },
    { Icon: Zap, x: "50%", y: "12%", size: 24, delay: 0.9, color: "#00ffff" },
    { Icon: TrendingUp, x: "75%", y: "80%", size: 28, delay: 1.1, color: "#ffff00" },
    { Icon: DollarSign, x: "25%", y: "85%", size: 26, delay: 1.3, color: "#00ffff" },
    { Icon: Rocket, x: "60%", y: "75%", size: 24, delay: 1.5, color: "#00ffff", rotate: 45 },
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
    const particleCount = 80

    function createParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1.5,
          dy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2.5,
          color: Math.random() > 0.5 ? "rgba(0, 255, 255, 0.4)" : "rgba(255, 255, 0, 0.25)",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#1a1f35]"
    >
      {/* Glow effects */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#4f46e5]/40 to-[#1a1f35] opacity-90" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#7c3aed] rounded-full blur-[150px] opacity-30" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#4f46e5] rounded-full blur-[150px] opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ffff] rounded-full blur-[200px] opacity-10" />

      {/* Animated floating icons */}
      {floatingIcons.map(({ Icon, x, y: iconY, size, delay, color, rotate }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: iconY, color, rotate: rotate || 0 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.1, 0.8],
            y: [0, -15, 15, -15, 0],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div style={{ y }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] mb-6 shadow-[0_0_60px_rgba(124,58,237,0.5)]"
          >
            <Rocket className="w-12 h-12 text-white" style={{ transform: "rotate(-45deg)" }} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-[#00ffff] text-sm font-semibold mb-6 tracking-wider border border-[#00ffff]/30">
            HBG STARTUP SOLUTIONS
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              We Shape & Launch
            </span>
            <span className="block bg-gradient-to-r from-[#ffff00] via-white to-[#ffff00] bg-clip-text text-transparent mt-2">
              Your Idea
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Provide high-performance yet cost-effective solutions for your business. 
            Turn your innovative ideas into reality with our expert development team. 
            No hassle, just results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#pricing">
              <Button size="lg" className="bg-[#00ffff] text-[#1a1f35] hover:bg-[#00ffff]/90 font-semibold px-8 py-6 text-lg">
                <Rocket className="mr-2 h-5 w-5" />
                Launch Your Idea
              </Button>
            </Link>
            <Link href="#process">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent">
                See How It Works
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Value props */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { icon: DollarSign, label: "Cost Effective", desc: "Startup-friendly pricing" },
            { icon: Zap, label: "High Performance", desc: "Enterprise-grade quality" },
            { icon: Target, label: "Quick Launch", desc: "From idea to market fast" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00ffff]/30 hover:border-[#00ffff] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300"
            >
              <item.icon className="w-10 h-10 text-[#00ffff] mx-auto mb-3" />
              <div className="text-lg font-semibold text-white mb-1">{item.label}</div>
              <div className="text-sm text-white/60">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 bg-[#00ffff] rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
