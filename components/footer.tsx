"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Linkedin } from "lucide-react"
import { scrollToTop } from "@/lib/scroll-to-top"

// Official HBG Info Tech pages. A link is rendered only once its URL is filled in.
const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "" },
  { name: "LinkedIn", icon: Linkedin, href: "" },
].filter((social) => social.href)

export function Footer() {
  return (
    <footer className="w-full bg-[#0c1022] border-t border-white/5">
      <div className="container px-4 md:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              scrollToTop()
            }}
            className="shrink-0"
            aria-label="HBG Info Tech, back to top"
          >
            <Image
              src="/images/hbg-infotech-light.png"
              alt="HBG Info Tech Logo"
              width={160}
              height={36}
              className="h-9 w-auto"
            />
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`HBG Info Tech on ${social.name}`}
                    whileHover={{ scale: 1.1 }}
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#00ffff]/50 hover:text-[#00ffff] transition-colors duration-200 text-white/70"
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            )}
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} HBG Info Tech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
