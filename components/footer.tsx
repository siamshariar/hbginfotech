"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Development", href: "/services/mobile-development" },
      { name: "Custom Software", href: "/services/custom-software" },
      { name: "Domain & Hosting", href: "/services/domain-hosting" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
    ],
  },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
]

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1a1f35] to-[#0f1729] border-t border-white/5">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="block">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HBG-infotech-JSZoGGYrDJ1DEqzZ0qQkCPMMT8ffpx.png"
                  alt="HBG Info Tech Logo"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                />
              </motion.div>
            </Link>
            <p className="text-white/70 max-w-sm">
              Transforming businesses through innovative technology solutions and exceptional service delivery.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-[#00ffff]" />
                <span>info@hbginfotech.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-[#00ffff]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-[#00ffff]" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#00ffff] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#00ffff]/50 hover:text-[#00ffff] transition-colors duration-200 text-white/70"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-white/50 text-sm">
              © {new Date().getFullYear()} HBG Info Tech. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
