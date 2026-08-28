"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "HBG Info Tech delivered an exceptional enterprise solution that transformed our business operations. Their technical expertise and professional approach exceeded our expectations.",
    author: "John Smith",
    position: "CTO",
    company: "TechCorp Industries",
  },
  {
    quote:
      "Working with HBG Info Tech was a game-changer for our digital transformation. Their team's dedication and innovative solutions helped us achieve our goals ahead of schedule.",
    author: "Lisa Chen",
    position: "Director of Innovation",
    company: "Future Dynamics",
  },
  {
    quote:
      "The expertise and commitment shown by HBG Info Tech team was outstanding. They not only delivered a robust solution but also provided excellent support throughout the process.",
    author: "Michael Brown",
    position: "CEO",
    company: "Digital Solutions Inc",
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-[#1a1f35] to-[#2a2a4a] border-t border-white/5 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            Hear what our clients have to say about working with us
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-6 md:px-12"
            >
              <Quote className="w-12 h-12 mx-auto mb-6 text-[#00ffff] opacity-50" />
              <p className="text-xl md:text-2xl text-white mb-8 italic">"{testimonials[currentIndex].quote}"</p>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">{testimonials[currentIndex].author}</h4>
                <p className="text-[#00ffff]">{testimonials[currentIndex].position}</p>
                <p className="text-white/70">{testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-[#00ffff] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-[#00ffff] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#00ffff] w-6" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
