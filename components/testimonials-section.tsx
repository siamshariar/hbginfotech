"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "HBG Info Tech delivered an exceptional booking platform that exceeded our expectations. Their attention to detail and commitment to quality is outstanding.",
    author: "Sarah Chen",
    role: "CEO, LuxStays",
  },
  {
    quote:
      "Working with HBG Info Tech was a game-changer for our business. They understood our needs perfectly and delivered a solution that helped us scale rapidly.",
    author: "Michael Rodriguez",
    role: "Founder, RentEasy",
  },
  {
    quote:
      "The team at HBG Info Tech is highly professional and skilled. They provided excellent support throughout the development process and continue to help us grow.",
    author: "Emma Thompson",
    role: "CTO, TravelCore",
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container px-4 md:px-6"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Client Testimonials</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between space-y-4 rounded-lg bg-background p-6 shadow-lg"
            >
              <div className="space-y-2">
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </div>
              <div>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
