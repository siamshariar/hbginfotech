"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Connect Your Channels",
    description: "Integrate with your existing support channels - chat, email, phone, social media. One-click setup with popular platforms.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Train on Your Data",
    description: "Upload your knowledge base, FAQs, and past conversations. Our AI learns your products, policies, and brand voice.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Deploy & Automate",
    description: "Go live in minutes. AI handles inquiries instantly while complex issues are seamlessly escalated to human agents.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimize & Scale",
    description: "Monitor performance in real-time. AI continuously improves from interactions and feedback loops.",
  },
];

export function NewAIHowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0f0f12] to-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Get up and running in days, not months. Our streamlined implementation process ensures fast time-to-value.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Number badge */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <span className="text-sm font-bold text-white">{step.number}</span>
                  {/* Pulse effect on active */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-violet-500/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                </div>

                <div className="text-center lg:text-left">
                  <div className="inline-flex p-3 rounded-xl bg-white/5 mb-4">
                    <step.icon className="h-6 w-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
