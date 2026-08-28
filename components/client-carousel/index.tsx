"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import Image from "next/image"

const clients = [
  {
    name: "Tech Corp",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    name: "Innovation Labs",
    logo: "/placeholder.svg?height=60&width=180",
  },
  {
    name: "Future Systems",
    logo: "/placeholder.svg?height=100&width=160",
  },
  {
    name: "Global Solutions",
    logo: "/placeholder.svg?height=70&width=220",
  },
  {
    name: "Digital Dynamics",
    logo: "/placeholder.svg?height=90&width=180",
  },
  {
    name: "Smart Tech",
    logo: "/placeholder.svg?height=75&width=200",
  },
  {
    name: "Cloud Systems",
    logo: "/placeholder.svg?height=85&width=190",
  },
  {
    name: "Data Corp",
    logo: "/placeholder.svg?height=65&width=210",
  },
  {
    name: "AI Solutions",
    logo: "/placeholder.svg?height=95&width=170",
  },
  {
    name: "Tech Innovate",
    logo: "/placeholder.svg?height=80&width=200",
  },
]

export function ClientCarousel() {
  const controls = useAnimationControls()

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      })
    }

    animate()
  }, [controls])

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35] border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent"
          >
            Our Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            Trusted by leading companies worldwide
          </motion.p>
        </div>

        <div className="relative w-full">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1f35] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1f35] to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              className="flex gap-12 items-center"
              style={{
                width: "max-content",
              }}
            >
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-48 h-24 relative group">
                  <div className="absolute inset-0 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#00ffff]/50 transition-all duration-300" />
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        fill
                        className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-48 h-24 relative group">
                  <div className="absolute inset-0 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#00ffff]/50 transition-all duration-300" />
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        fill
                        className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
