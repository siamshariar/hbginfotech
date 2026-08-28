"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const orbitingIcons = [
  { icon: Sparkles, delay: 0, radius: 120, duration: 8 },
  { icon: Star, delay: 1, radius: 140, duration: 10 },
  { icon: Zap, delay: 2, radius: 100, duration: 7 },
  { icon: Sparkles, delay: 3, radius: 160, duration: 12 },
  { icon: Star, delay: 4, radius: 130, duration: 9 },
  { icon: Zap, delay: 5, radius: 110, duration: 11 },
];

export function NewStartupHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0f0f2a]">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Orbiting rocket system */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
            {/* Central rocket */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                {/* Rocket glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-full blur-2xl opacity-50 scale-150" />
                <div className="relative bg-gradient-to-br from-indigo-600 to-cyan-500 p-8 rounded-full">
                  <Rocket className="w-16 h-16 md:w-20 md:h-20 text-white transform -rotate-45" />
                </div>
                {/* Thrust flame */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-orange-400 via-yellow-400 to-transparent rounded-full blur-sm"
                  animate={{ scaleY: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  style={{ transform: "translateX(-50%) rotate(45deg)" }}
                />
              </div>
            </motion.div>

            {/* Orbiting icons */}
            {orbitingIcons.map((item, index) => (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: item.delay,
                }}
                style={{
                  width: item.radius * 2,
                  height: item.radius * 2,
                  marginLeft: -item.radius,
                  marginTop: -item.radius,
                }}
              >
                <motion.div
                  className="absolute bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-lg"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: item.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: item.delay,
                  }}
                >
                  <item.icon className="w-4 h-4 text-cyan-400" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              Launch Your Vision
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">HBG Startup Solutions:</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              We Shape & Launch Your Idea
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-white/60 mb-10"
          >
            High-performance, cost-effective product development for visionaries.
            Stop worrying about code; start focusing on growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white px-8 py-6 text-lg rounded-2xl border-0 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Start Your Launch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </Button>
            </Link>
            <Link href="#timeline">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-6 text-lg rounded-2xl"
              >
                See How It Works
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
    </section>
  );
}
