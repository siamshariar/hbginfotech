"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, Eye } from "lucide-react";

const securityFeatures = [
  {
    icon: Server,
    title: "Private VPC Deployment",
    description: "Your AI runs exclusively within your own virtual private cloud infrastructure.",
  },
  {
    icon: Lock,
    title: "Data Encryption at Rest",
    description: "AES-256 encryption for all stored data with customer-managed keys.",
  },
  {
    icon: Eye,
    title: "Zero-Retention LLM",
    description: "No training on your data. No logs. Complete prompt privacy guaranteed.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II",
    description: "Enterprise-grade compliance with continuous security monitoring.",
  },
];

export function SecurityBar() {
  return (
    <section className="relative py-20 bg-slate-950">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm mb-6">
            <ShieldCheck className="w-4 h-4" />
            Security-First Architecture
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Enterprise Trust & Compliance
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-green-500/30 transition-all duration-300"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-slate-800"
        >
          {["GDPR Compliant", "HIPAA Ready", "ISO 27001", "SOC 2"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-slate-500 text-sm"
            >
              <ShieldCheck className="w-4 h-4 text-green-500" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
