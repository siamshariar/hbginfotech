"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Luxury Resort Booking",
    description:
      "A premium hotel booking platform with virtual tours and real-time availability. Built with Next.js and featuring high-performance search and filtering.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/luxury-resort-booking",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Property Rental Platform",
    description:
      "An Airbnb-style rental marketplace with advanced search and booking features. Includes real-time messaging and secure payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/property-rental-platform",
    tags: ["React", "Express", "MongoDB", "WebSocket"],
  },
  {
    title: "Corporate Booking System",
    description:
      "Enterprise travel and accommodation management system for large organizations. Features include approval workflows and expense tracking.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/corporate-booking-system",
    tags: ["Vue.js", "Laravel", "MySQL", "Docker"],
  },
  // Add more projects here
]

export function PortfolioList() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6"
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col space-y-4"
            >
              <Link href={project.link} className="overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={project.link}>
                  <Button variant="outline" className="mt-4">
                    View Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
