"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";

const comparisonData = [
  {
    feature: "Development Overhead",
    traditional: "High agency fees + management costs",
    hbg: "50% lower overhead",
    hbgHighlight: true,
  },
  {
    feature: "Time to Market",
    traditional: "6-12 months typical",
    hbg: "2x faster deployment",
    hbgHighlight: true,
  },
  {
    feature: "Code Ownership",
    traditional: "Often licensed or restricted",
    hbg: "100% ownership",
    hbgHighlight: true,
  },
  {
    feature: "Scalability",
    traditional: "Requires costly rewrites",
    hbg: "Built-in from day one",
    hbgHighlight: true,
  },
  {
    feature: "Communication",
    traditional: "Multiple stakeholders",
    hbg: "Direct team access",
    hbgHighlight: true,
  },
  {
    feature: "Post-Launch Support",
    traditional: "Expensive retainers",
    hbg: "Included in partnership",
    hbgHighlight: true,
  },
];

export function Comparison() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a1a] to-[#0f0f2a]">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />

      <div className="container relative px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
            The Smart Choice
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Performance vs. Cost
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See how HBG Startup Solutions delivers superior value compared to
            traditional agencies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-white/5">
              <div className="p-4 md:p-6 text-white/60 font-medium">
                Feature
              </div>
              <div className="p-4 md:p-6 text-center border-l border-white/10">
                <span className="text-white/60 font-medium">
                  Traditional Agency
                </span>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-white/10 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-bold">
                    HBG Startup Solutions
                  </span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
                className="grid grid-cols-3 border-t border-white/10 group hover:bg-white/5 transition-colors duration-300"
              >
                <div className="p-4 md:p-6 text-white font-medium">
                  {row.feature}
                </div>
                <div className="p-4 md:p-6 text-center border-l border-white/10 flex items-center justify-center">
                  <span className="text-white/50 text-sm md:text-base">
                    {row.traditional}
                  </span>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-white/10 bg-gradient-to-r from-indigo-600/10 to-cyan-600/10 flex items-center justify-center gap-2">
                  {row.hbgHighlight && (
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  )}
                  <span className="text-emerald-400 font-semibold text-sm md:text-base">
                    {row.hbg}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="mt-8 text-center"
          >
            <p className="text-white/60 mb-2">
              Ready to experience the difference?
            </p>
            <p className="text-lg text-white">
              Join <span className="text-cyan-400 font-bold">100+</span>{" "}
              startups who chose the smarter path.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
