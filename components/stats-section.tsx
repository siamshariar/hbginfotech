"use client"

import { motion } from "framer-motion"

const stats = [
  { number: "100+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support" },
]

export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container px-4 md:px-6"
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Delivering Excellence in Every Project
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Our track record speaks for itself. We combine technical expertise with creative innovation to deliver
              outstanding results.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center space-y-2 rounded-lg border p-6 text-center"
              >
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
