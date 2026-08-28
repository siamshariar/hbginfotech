"use client";

import { motion } from "framer-motion";
import { Coins, Zap, ShieldCheck, Rocket, Users, Clock } from "lucide-react";

const bentoItems = [
  {
    title: "Elite Performance, Startup Budget",
    description:
      "Enterprise-grade solutions at a fraction of the cost. We optimize every dollar to maximize your runway.",
    icon: Coins,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Zero-to-Launch in Record Time",
    description:
      "Our streamlined process gets your product to market faster than traditional agencies. Time is money.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-2",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
  },
  {
    title: "Hands-off Development",
    description:
      "Focus on your vision while we handle the architecture, infrastructure, and code. No dev management headaches.",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-400",
  },
  {
    title: "Scalable From Day One",
    description:
      "Built to grow with your success. No rewrites, no technical debt holding you back.",
    icon: Rocket,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    title: "Dedicated Team",
    description:
      "Your project gets a focused team of experts, not shared resources juggling multiple clients.",
    icon: Users,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
  {
    title: "24/7 Support Ecosystem",
    description:
      "Round-the-clock monitoring and support. We're in this together, every step of the way.",
    icon: Clock,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
];

export function BentoGrid() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a1a] to-[#0f0f2a]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 rounded-full">
            The HBG Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Founders Choose Us
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We eliminate the complexity of building tech products, so you can
            focus on what matters most - your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden ${item.className}`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 ${item.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
