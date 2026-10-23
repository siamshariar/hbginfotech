"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Globe2, Database, Cloud, Server, Cpu, BarChart, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HBG_HOST_URL } from "@/lib/site-config"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Software built around your workflows, from internal tools to customer-facing platforms.",
    features: ["Web Applications", "Enterprise Software", "API Integration", "Legacy System Modernization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "iOS and Android apps, native or cross-platform, designed to be easy to use.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter"],
  },
  {
    icon: Globe2,
    title: "Web Development",
    description: "Fast, responsive websites and web apps, from company sites to online stores.",
    features: ["Frontend Development", "Backend Development", "E-commerce", "CMS Development"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Database design, migration and tuning so your data stays organized and quick to access.",
    features: ["Database Design", "Migration", "Optimization", "Maintenance"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Set up, migrate and scale your applications on AWS, Azure or Google Cloud.",
    features: ["AWS", "Azure", "Google Cloud", "Cloud Migration"],
  },
  {
    icon: Server,
    title: "Domain & Hosting",
    description: "Domains, hosting, SSL and professional email for your business through our hosting brand, HBG Host.",
    features: ["Domain Registration", "Web & WordPress Hosting", "SSL Certificates", "Professional Email"],
    link: { label: "Visit HBG Host", href: HBG_HOST_URL },
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Practical AI features, from predictions to understanding text and images.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Machine Learning Models"],
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Dashboards and reports that turn your data into clear decisions.",
    features: ["Business Intelligence", "Data Visualization", "Big Data Analytics", "Real-time Analytics"],
  },
]

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="w-full py-20 md:py-32 bg-[#12162b] border-t border-white/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
        variants={containerVariants}
        className="container px-4 md:px-6"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-white/70 max-w-3xl mx-auto">
            From custom software to hosting, we cover what your business needs to build, launch and run its digital
            products.
          </motion.p>
        </div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 hover:border-[#00ffff]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <service.icon className="h-12 w-12 mb-4 text-[#00ffff] group-hover:scale-110 transition-transform duration-300" />

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#00ffff] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-white/70 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-white/60 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#00ffff]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {service.link && (
                <a
                  href={service.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#00ffff]/80 hover:text-[#00ffff] transition-colors duration-200"
                >
                  {service.link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-white/20 text-white hover:border-[#00ffff]/50 hover:text-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-8 rounded-full"
          >
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
