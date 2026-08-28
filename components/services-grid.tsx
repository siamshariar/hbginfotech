"use client"

import { motion } from "framer-motion"
import { Code2, Globe2, Laptop, Shield } from "lucide-react"

const services = [
  {
    icon: <Globe2 className="h-10 w-10" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance and scalability.",
  },
  {
    icon: <Laptop className="h-10 w-10" />,
    title: "Rental Platforms",
    description: "Specialized rental and booking platforms similar to Airbnb, tailored to your specific needs.",
  },
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Custom Solutions",
    description: "Bespoke software solutions designed to solve your unique business challenges.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Security First",
    description: "Enterprise-grade security implementation to protect your data and users.",
  },
]

export function ServicesGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container px-4 md:px-6"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              We provide comprehensive web development solutions to help your business succeed in the digital world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:shadow-lg"
            >
              <div className="rounded-full bg-primary/10 p-4 text-primary">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-center text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
