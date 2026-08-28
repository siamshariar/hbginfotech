"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Shield, Clock, Users, Trophy, Cpu, Code2, HeartHandshake, Rocket } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "15+ years of experience in delivering cutting-edge software solutions",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Committed to delivering projects on time without compromising quality",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert developers, designers, and project managers at your service",
  },
  {
    icon: Trophy,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes for reliable solutions",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    description: "Expertise in cutting-edge technologies and frameworks",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Well-documented, maintainable, and scalable code architecture",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric",
    description: "Focused on understanding and meeting client requirements",
  },
  {
    icon: Rocket,
    title: "Post-Launch Support",
    description: "Continuous support and maintenance after project completion",
  },
]

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35] overflow-hidden">
      <motion.div ref={containerRef} style={{ y }} className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent"
          >
            Why Choose HBG Info Tech?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            We combine technical excellence with innovative solutions to deliver exceptional results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
              className="group relative p-6 rounded-xl backdrop-blur-sm border border-[#00ffff]/50 hover:border-[#00ffff] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 to-transparent group-hover:from-[#00ffff]/10 transition-all duration-500 rounded-xl" />

              <feature.icon className="relative h-12 w-12 mb-4 text-[#00ffff] group-hover:scale-110 transition-transform duration-300" />

              <h3 className="relative text-xl font-semibold mb-3 text-white group-hover:text-[#00ffff] transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="relative text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Expert Developers" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
              className="relative p-6 rounded-xl backdrop-blur-sm border border-white/10"
            >
              <div className="text-4xl font-bold text-[#00ffff] mb-2">{stat.number}</div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
