"use client"

import { motion } from "framer-motion"

export function ImpactSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-br from-[#1e1b4b] to-[#312e81]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white font-['Playfair_Display',serif]">Crafting Digital Experiences That</span>
            <br />
            <span className="text-[#2dd4bf]">Make an Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            From concept to execution, we deliver cutting-edge solutions that help businesses thrive in the digital age.
            Our expertise spans across web development, custom applications, and innovative digital strategies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
