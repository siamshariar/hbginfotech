"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Clock, text: "Quick implementation" },
  { icon: Shield, text: "Enterprise security" },
  { icon: Users, text: "Dedicated support" },
];

export function NewAICTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#09090b] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet-600/20 to-transparent blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Schedule a personalized demo to see how our AI solutions can reduce costs and improve customer satisfaction for your business.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className="p-2 rounded-lg bg-violet-500/10">
                    <feature.icon className="h-4 w-4 text-violet-400" />
                  </div>
                  {feature.text}
                </div>
              ))}
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-sm text-white/50 mb-1">Typical results within 30 days:</p>
              <p className="text-white font-medium">
                50% reduction in support tickets, 40% cost savings
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-white/60">
                  We'll be in touch within 24 hours to schedule your personalized demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-semibold text-white mb-2">Get a Free Demo</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">First Name</label>
                    <Input 
                      placeholder="John" 
                      required 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      required 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">Work Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">Company</label>
                  <Input 
                    placeholder="Company name" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">Monthly Support Volume</label>
                  <select className="w-full h-10 rounded-md bg-white/5 border border-white/10 text-white px-3 text-sm">
                    <option value="" className="bg-[#09090b]">Select range</option>
                    <option value="1000" className="bg-[#09090b]">Less than 1,000</option>
                    <option value="5000" className="bg-[#09090b]">1,000 - 5,000</option>
                    <option value="10000" className="bg-[#09090b]">5,000 - 10,000</option>
                    <option value="50000" className="bg-[#09090b]">10,000 - 50,000</option>
                    <option value="100000" className="bg-[#09090b]">50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">Anything else? (Optional)</label>
                  <Textarea 
                    placeholder="Tell us about your support challenges..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[80px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-white/90 rounded-full h-12"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-white/40 text-center">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
