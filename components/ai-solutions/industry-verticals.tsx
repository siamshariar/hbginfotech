"use client";

import { motion } from "framer-motion";
import { HeartPulse, Plane, Building2, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "HIPAA-compliant patient data synthesis and AI assistant tools for clinical workflows.",
    features: ["Patient data analysis", "Clinical decision support", "Medical records synthesis"],
    gradient: "from-rose-500 to-pink-600",
    bgGlow: "bg-rose-500/10",
  },
  {
    icon: Plane,
    title: "Airlines",
    description: "High-velocity booking agents and automated customer resolution for travel disruptions.",
    features: ["Smart booking agents", "Delay management AI", "Multilingual support"],
    gradient: "from-sky-500 to-blue-600",
    bgGlow: "bg-sky-500/10",
  },
  {
    icon: Building2,
    title: "Corporate",
    description: "Cost-reduction through internal knowledge automation and intelligent process optimization.",
    features: ["Knowledge base AI", "Process automation", "Employee copilots"],
    gradient: "from-violet-500 to-purple-600",
    bgGlow: "bg-violet-500/10",
  },
];

export function IndustryVerticals() {
  return (
    <section className="relative py-24 bg-slate-950">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Vertical Intelligence
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Purpose-built AI solutions for industries with the highest compliance and performance demands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className={`absolute inset-0 ${industry.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-full p-8 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden">
                {/* Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient}`} />

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${industry.gradient} mb-6`}>
                  <industry.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {industry.title}
                </h3>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors group/btn">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
