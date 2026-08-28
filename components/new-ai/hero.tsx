"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function NewAIHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090b] pt-20">
      {/* Large glowing orb background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-violet-600/40 via-violet-600/20 to-transparent blur-3xl" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent blur-3xl" />
      
      {/* Floating abstract icons pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 16}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {["◇", "○", "□", "△", "◈", "⬡"][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-8">
            Enterprise AI Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          Cut support costs.
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Scale with AI.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10"
        >
          Intelligent AI systems that handle customer inquiries 24/7. Reduce support costs by up to 70% while delivering exceptional experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium"
          >
            <Link href="#contact">
              Get a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 text-base font-medium bg-transparent"
          >
            <Link href="#products">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Link>
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10"
        >
          {[
            { value: "70%", label: "Cost Reduction" },
            { value: "24/7", label: "Availability" },
            { value: "< 2s", label: "Response Time" },
            { value: "95%", label: "Resolution Rate" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trusted by logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <p className="text-xs text-white/40 uppercase tracking-widest mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50">
            {["Healthcare Corp", "AirConnect", "TechGlobal", "FinanceHub", "RetailMax"].map((name, i) => (
              <span key={i} className="text-white/60 font-semibold text-lg">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
