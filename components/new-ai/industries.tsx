"use client";

import { motion } from "framer-motion";
import { Building2, Plane, Stethoscope, ArrowRight } from "lucide-react";
import { useState } from "react";

const industries = [
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare",
    description: "Transform patient support with AI that understands medical terminology, schedules appointments, answers insurance queries, and provides 24/7 assistance.",
    stats: [
      { value: "60%", label: "Reduction in call wait times" },
      { value: "45%", label: "Lower support costs" },
      { value: "89%", label: "Patient satisfaction" },
    ],
    useCases: [
      "Appointment scheduling & reminders",
      "Insurance eligibility checks",
      "Prescription refill requests",
      "Symptom pre-screening",
      "Post-visit follow-ups",
    ],
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
  },
  {
    id: "airlines",
    icon: Plane,
    title: "Airlines",
    description: "Handle booking changes, flight status inquiries, baggage tracking, and loyalty program queries instantly. Reduce call center volume by 70%.",
    stats: [
      { value: "70%", label: "Fewer support calls" },
      { value: "< 30s", label: "Average resolution" },
      { value: "$2.5M", label: "Annual savings" },
    ],
    useCases: [
      "Flight rebooking & changes",
      "Real-time status updates",
      "Baggage tracking & claims",
      "Loyalty program support",
      "Upgrade & seat selection",
    ],
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-500/10",
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise",
    description: "Scale customer support without scaling headcount. Handle product inquiries, technical support, order tracking, and account management automatically.",
    stats: [
      { value: "24/7", label: "Global coverage" },
      { value: "85%", label: "Auto-resolution rate" },
      { value: "3x", label: "Agent productivity" },
    ],
    useCases: [
      "Product & pricing inquiries",
      "Order status & tracking",
      "Technical troubleshooting",
      "Account management",
      "Returns & refunds",
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
  },
];

export function NewAIIndustries() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#09090b] to-[#0f0f12]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Built for Your Industry
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Pre-trained models and workflows tailored to your specific industry needs
          </p>
        </motion.div>

        {/* Industry selector */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {industries.map((industry) => (
            <motion.button
              key={industry.id}
              onClick={() => setActiveIndustry(industry)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-6 rounded-2xl border transition-all text-left ${
                activeIndustry.id === industry.id
                  ? "bg-white/10 border-white/20"
                  : "bg-white/5 border-white/10 hover:border-white/15"
              }`}
            >
              {activeIndustry.id === industry.id && (
                <motion.div
                  layoutId="industry-indicator"
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} rounded-t-2xl`}
                />
              )}
              <div className={`inline-flex p-3 rounded-xl ${industry.bgColor} mb-4`}>
                <industry.icon className={`h-6 w-6 bg-gradient-to-r ${industry.color} bg-clip-text`} style={{ color: industry.id === 'healthcare' ? '#f43f5e' : industry.id === 'airlines' ? '#0ea5e9' : '#8b5cf6' }} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{industry.title}</h3>
              <p className="text-sm text-white/50 line-clamp-2">{industry.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Active industry details */}
        <motion.div
          key={activeIndustry.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Stats */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-6">
              Proven Results
            </h4>
            <div className="grid gap-6">
              {activeIndustry.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${activeIndustry.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Use cases */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-6">
              Use Cases
            </h4>
            <ul className="space-y-4">
              {activeIndustry.useCases.map((useCase, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <ArrowRight className={`h-4 w-4 flex-shrink-0`} style={{ color: activeIndustry.id === 'healthcare' ? '#f43f5e' : activeIndustry.id === 'airlines' ? '#0ea5e9' : '#8b5cf6' }} />
                  {useCase}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
