"use client"

import { motion } from "framer-motion"
import { Code2, HeartHandshake, Smartphone } from "lucide-react"

const pillars = [
  {
    icon: Code2,
    title: "Custom Software",
    description: "Web, mobile and cloud applications shaped around how your business works.",
  },
  {
    icon: Smartphone,
    title: "Our Own Products",
    description: "We design, build and maintain our own apps, including SafeHandoff and KinTube Videos & Learning.",
  },
  {
    icon: HeartHandshake,
    title: "Support After Launch",
    description: "We stay on to maintain, improve and support the software we build.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35] border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-12"
          >
            HBG Info Tech is a software development company. We design and build web applications, mobile apps and
            cloud solutions for businesses, from the first idea through launch and beyond. We also create our own
            products: apps that help families use their devices with more peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
              className="group relative p-6 rounded-xl backdrop-blur-sm border border-[#00ffff]/30 hover:border-[#00ffff]/70 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 to-transparent group-hover:from-[#00ffff]/10 transition-all duration-500 rounded-xl" />
              <pillar.icon className="relative h-10 w-10 mb-4 text-[#00ffff]" />
              <h3 className="relative text-xl font-semibold mb-2 text-white">{pillar.title}</h3>
              <p className="relative text-white/70">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
