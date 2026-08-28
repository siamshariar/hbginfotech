"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function CTASection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0f0f2a] to-[#0a0a1a] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />

      <div className="container relative px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - CTA content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              Ready to Launch?
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>

            <p className="text-lg text-white/60 mb-8">
              Your vision deserves world-class execution. Share your idea with
              us, and let&apos;s explore how we can bring it to life - faster,
              smarter, and more cost-effectively.
            </p>

            {/* Floating rocket */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-block mb-8"
            >
              <div className="relative bg-gradient-to-br from-indigo-600 to-cyan-500 p-6 rounded-2xl">
                <Rocket className="w-12 h-12 text-white transform -rotate-45" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-2xl blur-xl opacity-50" />
              </div>
            </motion.div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <span>contact@hbginfotech.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <span>Available Worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
              {/* Gradient accent */}
              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

              <h3 className="text-2xl font-bold text-white mb-6">
                Start Your Journey
              </h3>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@startup.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Company / Project Name
                  </label>
                  <Input
                    placeholder="Your awesome startup"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Tell Us About Your Idea
                  </label>
                  <Textarea
                    placeholder="Describe your vision, goals, and timeline..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500 rounded-xl min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white h-12 rounded-xl font-semibold group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Launch Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <p className="text-center text-sm text-white/40">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
