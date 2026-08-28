"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Luxury Resort Booking",
    description: "A premium hotel booking platform with virtual tours and real-time availability.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/luxury-resort-booking",
  },
  {
    title: "Property Rental Platform",
    description: "An Airbnb-style rental marketplace with advanced search and booking features.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/property-rental-platform",
  },
  {
    title: "Corporate Booking System",
    description: "Enterprise travel and accommodation management system for large organizations.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/corporate-booking-system",
  },
]

export function PortfolioGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container px-4 md:px-6"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Discover our latest work and see how we help businesses transform their digital presence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Link href={project.link} className="block">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/90">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/portfolio">
            <Button size="lg" variant="outline">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
