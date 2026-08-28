"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, MessageSquareCode, Sparkles } from "lucide-react";

const products = [
  {
    icon: BrainCircuit,
    title: "Agentic AI",
    description: "Autonomous workflows that think, plan, and execute complex multi-step tasks without human intervention.",
    gradient: "from-violet-600 to-violet-400",
    borderGlow: "hover:shadow-violet-500/20",
    delay: 0,
  },
  {
    icon: Database,
    title: "Advanced RAG Systems",
    description: "Retrieval-Augmented Generation for pinpoint accuracy. Ground your AI in your proprietary data.",
    gradient: "from-cyan-500 to-cyan-300",
    borderGlow: "hover:shadow-cyan-500/20",
    delay: 0.1,
  },
  {
    icon: MessageSquareCode,
    title: "Smart Chatbots",
    description: "24/7 multilingual customer support that actually resolves issues, not just deflects them.",
    gradient: "from-violet-500 to-cyan-400",
    borderGlow: "hover:shadow-violet-500/20",
    delay: 0.2,
  },
  {
    icon: Sparkles,
    title: "AI Assistants",
    description: "Copilots for your internal teams to accelerate productivity and unlock institutional knowledge.",
    gradient: "from-cyan-400 to-violet-500",
    borderGlow: "hover:shadow-cyan-500/20",
    delay: 0.3,
  },
];

export function ProductQuad() {
  return (
    <section className="relative py-24 bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Product Quad
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Four pillars of enterprise AI excellence, engineered for scale and security.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
              transition={{ duration: 0.5, delay: product.delay }}
              className={`group relative p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-500 ${product.borderGlow} hover:shadow-2xl`}
            >
              {/* Moving Light Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-border-flow" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient} mb-6`}>
                  <product.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {product.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {product.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-8 right-8 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
