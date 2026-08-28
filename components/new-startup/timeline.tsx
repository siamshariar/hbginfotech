"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Building2, Code2, Rocket } from "lucide-react";

const timelineSteps = [
  {
    phase: "01",
    title: "Consultation",
    subtitle: "Discovery & Scoping",
    description:
      "We dive deep into your vision, understand your market, and define a crystal-clear roadmap for success.",
    icon: Search,
    color: "from-indigo-500 to-purple-500",
  },
  {
    phase: "02",
    title: "Architecture",
    subtitle: "Scalable Foundations",
    description:
      "Our architects design a robust, future-proof system that scales with your growth - no rewrites needed.",
    icon: Building2,
    color: "from-purple-500 to-pink-500",
  },
  {
    phase: "03",
    title: "Development",
    subtitle: "High-Velocity Coding",
    description:
      "Our elite dev team builds your product with precision, using cutting-edge tech and agile methodologies.",
    icon: Code2,
    color: "from-pink-500 to-cyan-500",
  },
  {
    phase: "04",
    title: "Launch",
    subtitle: "Deployment & Scaling",
    description:
      "We deploy, monitor, and optimize. Your product goes live with confidence, ready to capture the market.",
    icon: Rocket,
    color: "from-cyan-500 to-emerald-500",
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0f0f2a] to-[#0a0a1a]"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            The Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            From Idea to Market
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A streamlined process designed to get you launched faster, without
            compromising quality.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-px">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-pink-500 to-cyan-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-24">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-2xl bg-[#0a0a1a] flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Pulse effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-50 blur-xl`}
                    />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative">
                      <span
                        className={`inline-block text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}
                      >
                        Phase {step.phase}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-white/60">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
