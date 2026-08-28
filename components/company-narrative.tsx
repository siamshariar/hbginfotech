"use client"

import { motion } from "framer-motion"
import {
  Lightbulb,
  Search,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  HeartHandshake,
  Target,
  Users,
  Shield,
  Zap,
  Globe2,
} from "lucide-react"

const timeline = [
  {
    year: "Step 01",
    title: "Discovery & Strategy",
    description:
      "We begin every engagement by deeply understanding your business goals, target audience, and competitive landscape. Our strategists collaborate with you to define a clear product roadmap.",
    icon: Search,
  },
  {
    year: "Step 02",
    title: "Design & Prototyping",
    description:
      "Our design team crafts intuitive user experiences and pixel-perfect interfaces. We iterate through wireframes and interactive prototypes to validate concepts before a single line of code is written.",
    icon: PenTool,
  },
  {
    year: "Step 03",
    title: "Development & Engineering",
    description:
      "Our engineers build robust, scalable solutions using modern architectures and best practices. Agile sprints ensure transparent progress with regular demonstrations and feedback loops.",
    icon: Code2,
  },
  {
    year: "Step 04",
    title: "Quality Assurance",
    description:
      "Rigorous automated and manual testing ensures every feature meets our quality bar. Performance, security, and accessibility audits are integral to our delivery pipeline.",
    icon: TestTube2,
  },
  {
    year: "Step 05",
    title: "Launch & Deployment",
    description:
      "We manage seamless deployments with zero-downtime strategies, infrastructure provisioning, and monitoring setup. Your product goes live with confidence.",
    icon: Rocket,
  },
  {
    year: "Step 06",
    title: "Support & Growth",
    description:
      "Post-launch, we provide ongoing support, performance optimization, and feature enhancements. We become your long-term technology partner, not just a vendor.",
    icon: HeartHandshake,
  },
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to empower businesses with technology that creates measurable impact and sustainable growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay at the forefront of technology trends, bringing cutting-edge solutions to every challenge we tackle.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "We believe the best results come from genuine partnership. Your success is our success.",
  },
  {
    icon: Shield,
    title: "Quality Obsessed",
    description:
      "We never compromise on quality. Every line of code, every pixel, every interaction is held to the highest standard.",
  },
  {
    icon: Zap,
    title: "Agile & Adaptive",
    description:
      "We embrace change and iterate quickly, ensuring your product evolves with market demands.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description:
      "With a worldwide team and diverse expertise, we bring international best practices to every project.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function CompanyNarrative() {
  return (
    <div className="w-full">
      {/* Mission Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-[#1a1f35] to-[#2a2a4a]">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent"
            >
              Who We Are
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-8"
            >
              HBG Info Tech is a premium software development firm specializing in building enterprise-grade web
              applications, mobile solutions, and cloud infrastructure. Founded with a vision to bridge the gap between
              innovative ideas and world-class execution, we have helped startups scale and enterprises modernize across
              industries including fintech, healthcare, e-commerce, and education.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { number: "15+", label: "Years of Excellence" },
                { number: "500+", label: "Projects Delivered" },
                { number: "50+", label: "Team Members" },
                { number: "20+", label: "Countries Served" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00ffff]/30"
                >
                  <div className="text-3xl font-bold text-[#00ffff] mb-1">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35] border-t border-white/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we build and every relationship we nurture
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-xl backdrop-blur-sm border border-[#00ffff]/50 hover:border-[#00ffff] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 to-transparent group-hover:from-[#00ffff]/10 transition-all duration-500 rounded-xl" />
                <value.icon className="relative h-10 w-10 mb-4 text-[#00ffff] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="relative text-xl font-semibold mb-3 text-white group-hover:text-[#00ffff] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="relative text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-[#1a1f35] to-[#2a2a4a] border-t border-white/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              A proven methodology refined over 15+ years of delivering exceptional software
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ffff]/50 via-[#00ffff]/20 to-transparent hidden md:block" />
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ffff]/50 via-[#00ffff]/20 to-transparent md:hidden" />

            <div className="flex flex-col gap-12">
              {timeline.map((step, index) => {
                const isEven = index % 2 === 0
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00ffff] shadow-[0_0_12px_rgba(0,255,255,0.5)] z-10 mt-6 shrink-0" />

                    {/* Spacer for mobile */}
                    <div className="w-16 shrink-0 md:hidden" />

                    {/* Content card */}
                    <div className={`flex-1 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                      <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00ffff]/50 transition-all duration-300">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                          <step.icon className="h-6 w-6 text-[#00ffff]" />
                          <span className="text-sm font-bold text-[#00ffff] tracking-wider">{step.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-white/70 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Other half spacer (desktop only) */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
