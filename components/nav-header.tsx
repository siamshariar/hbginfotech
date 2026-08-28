"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
]

const menuItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.18,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: { opacity: 0, x: 16, transition: { duration: 0.1 } },
}

function AnimatedMenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.18, ease: "easeInOut" }}
        className="block h-[2px] w-6 bg-white origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.12, ease: "easeInOut" }}
        className="block h-[2px] w-4 bg-white/70 ml-auto origin-right"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.18, ease: "easeInOut" }}
        className="block h-[2px] w-6 bg-white origin-center"
      />
    </div>
  )
}

export function NavHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleContact = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (pathname === "/") {
        // Already on home — just scroll directly to the section
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      } else {
        // Navigate to home with hash; ScrollToTop will skip reset because hash is present
        router.push("/#contact")
      }
    },
    [pathname, router],
  )

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

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

  function isActive(href: string) {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "bg-[#0f1629]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_1px_12px_rgba(0,0,0,0.25)]"
            : "bg-gradient-to-b from-black/35 via-black/10 to-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-6 lg:px-10 h-[72px]">
          {/* Logo */}
          <Link href="/" className="relative z-10 shrink-0">
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
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-[0.925rem] font-medium tracking-wide transition-colors duration-150 ${
                    active ? "text-white" : "text-white/60 hover:text-white/90"
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
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <Button
            onClick={handleContact}
            className="hidden lg:flex relative overflow-hidden bg-[#00ffff]/10 text-[#00ffff] border border-[#00ffff]/30 hover:bg-[#00ffff] hover:text-[#0f1629] hover:border-[#00ffff] transition-all duration-200 px-5 h-9 text-sm font-semibold tracking-wide rounded-lg group"
          >
            <Mail className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-[15deg]" />
            Contact Us
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden relative z-[60] p-2 -mr-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatedMenuIcon isOpen={mobileOpen} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 500, damping: 38, mass: 0.8 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-[360px] lg:hidden bg-gradient-to-b from-[#0f1629] via-[#161d3a] to-[#0f1629] border-l border-white/[0.08] shadow-[-8px_0_30px_rgba(0,0,0,0.4)]"
            >
              {/* Close Button */}
              <div className="flex justify-end px-6 pt-6">
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg border border-white/10 hover:border-[#00ffff]/50 hover:text-[#00ffff] text-white/60 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col h-[calc(100%-60px)] pt-8 pb-10 px-8">
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item, i) => {
                    const active = isActive(item.href)
                    return (
                      <motion.div
                        key={item.name}
                        custom={i}
                        variants={menuItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-lg font-medium transition-all duration-150 ${
                            active
                              ? "text-[#00ffff] bg-[#00ffff]/[0.08]"
                              : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                          }`}
                        >
                          {active && (
                            <span className="w-1 h-5 rounded-full bg-[#00ffff] shrink-0" />
                          )}
                          {item.name}
                        </Link>
                      </motion.div>
                    )
                  })}
                  {/* Contact Us — separate to use smart handler */}
                  <motion.div
                    custom={menuItems.length}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <button
                      type="button"
                      onClick={(e) => { setMobileOpen(false); handleContact(e) }}
                      className="w-full flex items-center gap-3 py-3.5 px-4 rounded-xl text-lg font-medium text-white/70 hover:text-white hover:bg-white/[0.04] transition-all duration-150"
                    >
                      <Mail className="h-4 w-4 shrink-0" />
                      Contact Us
                    </button>
                  </motion.div>
                </nav>

                <div className="mt-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.18 }}
                    className="pt-6 border-t border-white/[0.08]"
                  >
                    <p className="text-white/40 text-xs font-medium tracking-wider uppercase mb-2">Get in touch</p>
                    <a href="mailto:info@hbginfotech.com" className="text-white/60 text-sm hover:text-[#00ffff] transition-colors duration-150">
                      info@hbginfotech.com
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
