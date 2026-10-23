"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { CONTACT_EMAIL, HBG_HOST_URL } from "@/lib/site-config"
import { SCROLL_TO_TOP_EVENT, scrollToTop } from "@/lib/scroll-to-top"

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
]

// Sections tracked for the active menu indicator, in page order.
const sectionIds = ["home", "services", "products", "about", "contact"]

function AnimatedMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      <span
        className={`block h-[2px] w-6 bg-white origin-center transition-transform duration-200 ease-in-out motion-reduce:transition-none ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-4 bg-white/70 ml-auto origin-right transition-[opacity,transform] duration-150 ease-in-out motion-reduce:transition-none ${
          isOpen ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-6 bg-white origin-center transition-transform duration-200 ease-in-out motion-reduce:transition-none ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </div>
  )
}

export function NavHeader() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  // True while a logo click is scrolling back to the top; Home stays selected meanwhile
  const holdHomeRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
      if (holdHomeRef.current) {
        if (window.scrollY < 2) holdHomeRef.current = false
        return
      }
      // The last section may be too short to reach the middle of tall viewports
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveSection("contact")
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Highlight the menu item of the section crossing the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (holdHomeRef.current) return
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  // A logo click selects Home at once instead of stepping through every section on the way up.
  // If the visitor scrolls, taps or types before the top is reached, the tracking resumes from where they are.
  useEffect(() => {
    const handleScrollToTop = () => {
      setActiveSection("home")
      holdHomeRef.current = window.scrollY > 1
    }
    const release = () => {
      if (!holdHomeRef.current) return
      holdHomeRef.current = false
      const middle = window.innerHeight / 2
      const current = sectionIds.find((id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect()
        return rect && rect.top <= middle && rect.bottom > middle
      })
      if (current) setActiveSection(current)
    }
    const inputs = ["wheel", "pointerdown", "keydown"] as const
    window.addEventListener(SCROLL_TO_TOP_EVENT, handleScrollToTop)
    inputs.forEach((type) => window.addEventListener(type, release, { passive: true }))
    return () => {
      window.removeEventListener(SCROLL_TO_TOP_EVENT, handleScrollToTop)
      inputs.forEach((type) => window.removeEventListener(type, release))
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Keyboard support for the mobile menu: focus the close button, close on Escape
  useEffect(() => {
    if (!mobileOpen) return
    closeButtonRef.current?.focus()
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mobileOpen])

  function isActive(href: string) {
    return href === `#${activeSection}`
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          hasScrolled
            ? "bg-[#0f1629]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_1px_12px_rgba(0,0,0,0.25)]"
            : "bg-gradient-to-b from-black/35 via-black/10 to-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-6 lg:px-10 h-[72px]">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              setMobileOpen(false)
              scrollToTop()
            }}
            className="relative z-10 shrink-0"
            aria-label="HBG Info Tech home"
          >
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Image
                src="/images/hbg-infotech-light.png"
                alt="HBG Info Tech Logo"
                width={160}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {menuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "true" : undefined}
                  className={`relative px-4 py-2 text-[0.925rem] font-medium tracking-wide transition-colors duration-150 ${
                    active ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#00ffff] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </a>
              )
            })}
            <span className="mx-2 h-4 w-px bg-white/15" aria-hidden="true" />
            <a
              href={HBG_HOST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors duration-150"
            >
              HBG Host
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </nav>

          {/* Desktop CTA */}
          <Button
            asChild
            className="hidden lg:flex relative overflow-hidden bg-[#00ffff]/10 text-[#00ffff] border border-[#00ffff]/30 hover:bg-[#00ffff] hover:text-[#0f1629] hover:border-[#00ffff] transition-all duration-200 px-5 h-9 text-sm font-semibold tracking-wide rounded-full group"
          >
            <a href="#contact">
              <Mail className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-[15deg]" />
              Contact Us
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden relative z-[60] p-2 -mr-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <AnimatedMenuIcon isOpen={mobileOpen} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer: always mounted and toggled with CSS so it opens on the next frame */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 lg:hidden transition-[opacity,visibility] duration-200 motion-reduce:transition-none ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Drawer Panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-[360px] lg:hidden bg-gradient-to-b from-[#0f1629] via-[#161d3a] to-[#0f1629] border-l border-white/[0.08] shadow-[-8px_0_30px_rgba(0,0,0,0.4)] transition-[transform,visibility] duration-200 ease-out motion-reduce:transition-none ${
          mobileOpen ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end px-6 pt-6">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg border border-white/10 hover:border-[#00ffff]/50 hover:text-[#00ffff] text-white/60 transition-all duration-200"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-60px)] pt-8 pb-10 px-8 overflow-y-auto">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {[...menuItems, { name: "Contact Us", href: "#contact" }].map((item) => {
              const active = isActive(item.href)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "true" : undefined}
                  className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-lg font-medium transition-all duration-150 ${
                    active
                      ? "text-[#00ffff] bg-[#00ffff]/[0.08]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {active && <span className="w-1 h-5 rounded-full bg-[#00ffff] shrink-0" />}
                  {item.name}
                </a>
              )
            })}
          </nav>

          <div className="mt-auto pt-8">
            <div className="pt-6 border-t border-white/[0.08] space-y-4">
              <div>
                <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-2">Get in touch</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/60 text-sm hover:text-[#00ffff] transition-colors duration-150 break-all">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <a
                href={HBG_HOST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/60 text-sm hover:text-[#00ffff] transition-colors duration-150"
              >
                HBG Host: domains &amp; hosting
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
