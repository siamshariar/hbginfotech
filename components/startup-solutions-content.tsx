"use client"

import { motion } from "framer-motion"
import { 
  Rocket, Lightbulb, Code2, TestTube, Send, Headphones,
  Check, Cpu, Shield, Clock, DollarSign, Users, Zap, Trophy
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const processSteps = [
  {
    icon: Lightbulb,
    title: "Share Your Idea",
    description: "Tell us about your vision. We listen, understand, and help refine your concept into a viable product.",
  },
  {
    icon: Code2,
    title: "We Build It",
    description: "Our expert team designs and develops your solution using cutting-edge technologies and best practices.",
  },
  {
    icon: TestTube,
    title: "Test & Refine",
    description: "Rigorous testing ensures quality. We iterate based on feedback to perfect your product.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "We help you launch to market and provide ongoing support as you grow your business.",
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Enterprise-quality solutions at startup-friendly prices. No hidden costs or surprises.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized, scalable architecture that grows with your business needs.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Agile methodology ensures quick iterations and faster time-to-market.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and robust infrastructure.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Your own team of experts committed to your project's success.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We're with you post-launch for maintenance, updates, and scaling.",
  },
]

const pricingTiers = [
  {
    name: "Starter",
    price: "Contact Us",
    description: "Perfect for MVPs and proof of concept",
    features: [
      "Basic feature set",
      "Responsive design",
      "Core functionality",
      "1 month support",
      "Documentation",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "Contact Us",
    description: "For startups ready to scale",
    features: [
      "Full feature development",
      "Custom UI/UX design",
      "API integrations",
      "3 months support",
      "Performance optimization",
      "Analytics integration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Complete end-to-end solution",
    features: [
      "Complex architecture",
      "Multiple integrations",
      "Advanced security",
      "6 months support",
      "Scalability planning",
      "Priority support",
      "Training included",
    ],
    highlighted: false,
  },
]

export function StartupSolutionsContent() {
  return (
    <>
      {/* Process Section */}
      <section id="process" className="w-full py-24 md:py-32 bg-gradient-to-b from-[#1a1f35] to-[#2a2a4a]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#4f46e5]/20 text-[#00ffff] text-sm font-medium mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              From Idea to Launch
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A streamlined process designed to transform your vision into reality efficiently
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#00ffff] -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(124,58,237,0.4)]"
                    >
                      <step.icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#00ffff] flex items-center justify-center text-[#1a1f35] font-bold text-sm">
                        {index + 1}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#00ffff]/10 text-[#00ffff] text-sm font-medium mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              No Hassle, Just Results
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Focus on your business while we handle the technical complexities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
                className="group relative p-6 rounded-xl backdrop-blur-sm border border-[#00ffff]/50 hover:border-[#00ffff] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 to-transparent group-hover:from-[#00ffff]/10 transition-all duration-500 rounded-xl" />
                
                <benefit.icon className="relative w-12 h-12 text-[#00ffff] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="relative text-xl font-semibold text-white mb-2 group-hover:text-[#00ffff] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="relative text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-24 md:py-32 bg-gradient-to-b from-[#1a1f35] to-[#2a2a4a]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#4f46e5]/20 text-[#00ffff] text-sm font-medium mb-4">
              FLEXIBLE PRICING
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              Solutions for Every Stage
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Transparent pricing tailored to your startup's growth phase
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
                className={`relative p-8 rounded-2xl ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-[#4f46e5]/20 to-[#7c3aed]/10 border-2 border-[#00ffff] shadow-[0_0_40px_rgba(0,255,255,0.2)]"
                    : "bg-white/5 border border-white/10 hover:border-[#00ffff]/50"
                } transition-all duration-300`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-[#00ffff] mb-2">{tier.price}</div>
                <p className="text-white/60 mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/80">
                      <Check className="w-5 h-5 text-[#00ffff] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-[#00ffff] text-[#1a1f35] hover:bg-[#00ffff]/90"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-b from-[#2a2a4a] to-[#1a1f35]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="relative max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-[#4f46e5]/20 to-[#7c3aed]/20 border border-[#00ffff]/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTR2Mkgy NHYtMmgxMnptMC00djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
            
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] mb-6 shadow-[0_0_50px_rgba(124,58,237,0.5)]"
            >
              <Rocket className="w-10 h-10 text-white" style={{ transform: "rotate(-45deg)" }} />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Launch Your Idea?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your vision into a high-performance, cost-effective solution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#00ffff] text-[#1a1f35] hover:bg-[#00ffff]/90 font-semibold px-8">
                  <Send className="mr-2 h-5 w-5" />
                  Start Your Project
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 bg-transparent">
                  <Headphones className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
