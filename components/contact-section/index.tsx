"use client"

import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL } from "@/lib/site-config"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-gradient-to-b from-[#1a1f35] to-[#2a2a4a] border-t border-white/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Have a project in mind? Email us and tell us about it.
          </p>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/5 to-transparent rounded-xl" />
            <div className="relative px-6 py-10 md:px-10 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Mail className="w-6 h-6 text-[#00ffff]" />
              </div>
              <h3 className="text-white font-medium mb-2">Email Us</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xl md:text-2xl font-semibold text-white hover:text-[#00ffff] transition-colors duration-200 break-all"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-white/60 mt-3 mb-8">Tell us about your project, idea or question.</p>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white/20 text-white hover:border-[#00ffff]/50 hover:text-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 px-8 rounded-full"
              >
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  Send Us an Email
                  <Send className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
