"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Globe2, Database, Cloud, Shield, Cpu, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to solve your unique business challenges.",
    features: ["Web Applications", "Enterprise Software", "API Integration", "Legacy System Modernization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter"],
  },
  {
    icon: Globe2,
    title: "Web Development",
    description: "Responsive and scalable web solutions that help businesses thrive in the digital world.",
    features: ["Frontend Development", "Backend Development", "E-commerce", "CMS Development"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Robust database architecture and management services for optimal data handling.",
    features: ["Database Design", "Migration", "Optimization", "Maintenance"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud-native solutions and migration services to enhance scalability and performance.",
    features: ["AWS", "Azure", "Google Cloud", "Cloud Migration"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: ["Security Audit", "Penetration Testing", "Security Implementation", "Monitoring"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage the power of AI to drive business growth.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Machine Learning Models"],
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our analytics solutions.",
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
    <section id="services" className="w-full py-20 md:py-32 bg-gradient-to-b from-[#1a1f35] to-[#2a2a4a] border-t border-white/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
            We offer a comprehensive suite of software development services to help businesses innovate and stay ahead
            in the digital age.
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-16">
          <Button
            size="lg"
            className="bg-transparent border-2 border-white/20 text-white hover:border-[#00ffff]/50 hover:text-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-8 rounded-full"
          >
            View All Services
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
