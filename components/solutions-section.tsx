"use client"

import { motion } from "framer-motion"
import { Rocket, Server, Cpu, Globe2, Shield, Code2, HeartHandshake, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SolutionsSection() {
  const solutions = [
    {
      title: "HBG Startup Solutions",
      description: "We shape & launch your idea",
      longDesc:
        "Provide high-performance yet cost-effective solutions for your business. Turn your innovative ideas into reality with our expert development team.",
      icon: Rocket,
      features: [
        { icon: Cpu, text: "High Performance Solutions" },
        { icon: Code2, text: "Custom Development" },
        { icon: HeartHandshake, text: "Startup Friendly Pricing" },
        { icon: Zap, text: "Quick Launch" },
      ],
      gradient: "from-[#4f46e5] to-[#7c3aed]",
      href: "/startup-solutions",
    },
    {
      title: "HBG Host",
      description: "Reliable hosting solutions",
      longDesc:
        "Stable domain hosting service with VPS, SSL, website builder, and 24/7 customer support to keep your business running smoothly.",
      icon: Server,
      features: [
        { icon: Globe2, text: "Domain & Hosting" },
        { icon: Shield, text: "SSL Security" },
        { icon: Code2, text: "Website Builder" },
        { icon: HeartHandshake, text: "24/7 Support" },
      ],
      gradient: "from-[#2dd4bf] to-[#0ea5e9]",
      href: "/hosting",
    },
  ]

  return (
    <section id="solutions" className="w-full py-24 md:py-32 bg-gradient-to-br from-[#1a1f35] to-[#2a2a4a]">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-lg bg-gradient-to-r ${solution.gradient}`}
              />

              <div className="relative p-8 rounded-xl bg-[#161c34] backdrop-blur-sm border border-[#00ffff]/50 hover:border-[#00ffff] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 to-transparent group-hover:from-[#00ffff]/10 transition-all duration-500 rounded-xl pointer-events-none" />
                <div className="relative flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center`}
                  >
                    <solution.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                    <p className="text-white/60">{solution.description}</p>
                  </div>
                </div>

                <p className="text-white/80 mb-8">{solution.longDesc}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {solution.features.map((feature, idx) => (
                    <motion.div key={idx} whileHover={{ x: 5 }} className="flex items-center gap-2 text-white/70">
                      <feature.icon className="w-4 h-4 text-[#00ffff]" />
                      <span className="text-sm">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <Link href={solution.href}>
                  <Button className="w-full bg-white/5 border border-white/10 hover:border-white/20 text-white hover:text-[#00ffff] transition-all duration-300">
                    Learn More
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      →
                    </motion.div>
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
