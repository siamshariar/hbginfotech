"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

// Product facts and screenshots come from each product's own sources:
// SafeHandoff — https://safehandoff.app (copy, captions and screenshots published there)
// KinTube: Videos for the Family — the app's source code and Android QA screenshots (not yet published)
const products = [
  {
    id: "safehandoff",
    name: "SafeHandoff",
    tagline: "Free App Locker for Parents",
    description:
      "Lock the apps you don’t want your kids in, like email, banking and social media, before you hand over your phone. A handoff timer can lock every app when time is up.",
    features: [
      "Lock the apps you choose, or allow only selected apps",
      "Handoff timer locks every app when time runs out",
      "Unlock with a PIN, pattern, Face ID or fingerprint",
      "Free, with no ads or trackers; everything stays on the device",
    ],
    icon: "/images/products/safehandoff-icon.webp",
    color: "#FEAF20",
    screenshots: [
      { src: "/images/products/safehandoff-1-welcome.webp", caption: "Set up in seconds" },
      { src: "/images/products/safehandoff-2-home.webp", caption: "Your handoff dashboard" },
      { src: "/images/products/safehandoff-3-apps.webp", caption: "Choose what to lock" },
      { src: "/images/products/safehandoff-4-timer.webp", caption: "Set the handoff timer" },
      { src: "/images/products/safehandoff-5-active.webp", caption: "Protection active" },
      { src: "/images/products/safehandoff-6-lock.webp", caption: "PIN or pattern lock" },
    ],
    link: { href: "https://safehandoff.app/", label: "Visit safehandoff.app", external: true },
    status: "Coming soon to iOS and Android",
  },
  {
    id: "kintube",
    name: "KinTube: Videos for the Family",
    tagline: "Safe videos for kids",
    description:
      "Parents create a profile for each child, with an age group, video languages and a safety level, and KinTube shows only videos from its own catalog that fit.",
    features: [
      "Up to five child profiles, each with its own settings",
      "Parental PIN protects settings and profiles",
      "Home feed, Shorts, search and a library for each child",
      "Built for Android phones and Android TV",
    ],
    icon: "/images/products/kintube-icon.webp",
    color: "#E8652D",
    screenshots: [
      { src: "/images/products/kintube-1-home.webp", caption: "Home feed with topics and Shorts" },
      { src: "/images/products/kintube-2-shorts.webp", caption: "Full-screen Shorts" },
      { src: "/images/products/kintube-3-player.webp", caption: "Video player with suggestions" },
      { src: "/images/products/kintube-4-profile.webp", caption: "A profile for each child" },
      { src: "/images/products/kintube-5-pin.webp", caption: "Parental PIN" },
      { src: "/images/products/kintube-6-languages.webp", caption: "Choose video languages" },
    ],
    link: { href: "#contact", label: "Ask About KinTube", external: false },
    status: "In development",
  },
]

type Product = (typeof products)[number]

// Time each screenshot stays on screen while a slideshow plays
const SLIDE_MS = 3500

const controlButton =
  "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [slide, setSlide] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [interacting, setInteracting] = useState(false)
  const [started, setStarted] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const inView = useInView(cardRef, { amount: 0.4 })
  const reduceMotion = useReducedMotion()

  // Visitors who prefer reduced motion start paused; they can still press play
  useEffect(() => {
    if (reduceMotion) setPlaying(false)
  }, [reduceMotion])

  const slideCount = product.screenshots.length
  // Pause while the visitor hovers or tabs through the card, and while it is off screen
  const running = playing && !interacting && inView
  // The second card starts half a step later so the two slideshows never change together
  const delay = started ? SLIDE_MS : SLIDE_MS + (index * SLIDE_MS) / 2

  useEffect(() => {
    if (!running) return
    const timer = setTimeout(() => {
      setStarted(true)
      setSlide((slide + 1) % slideCount)
    }, delay)
    return () => clearTimeout(timer)
  }, [running, slide, slideCount, delay])

  function showSlide(next: number) {
    setStarted(true)
    setSlide((next + slideCount) % slideCount)
  }

  return (
    <motion.article
      ref={cardRef}
      aria-label={product.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
      onPointerEnter={(e) => e.pointerType === "mouse" && setInteracting(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setInteracting(false)}
      onFocus={(e) => e.target.matches(":focus-visible") && setInteracting(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setInteracting(false)
      }}
      className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-[#00ffff]/40"
    >
      {/* Details: grows to fill the card, so both slideshows line up at the bottom */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center gap-4 mb-4">
          <Image src={product.icon} alt="" width={56} height={56} className="h-14 w-14 shrink-0 rounded-2xl shadow-lg" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{product.name}</h3>
            <p className="text-sm font-medium" style={{ color: product.color }}>
              {product.tagline}
            </p>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-5">{product.description}</p>

        <ul className="space-y-2.5 mb-8">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-white/70">
              <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: product.color }} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Status always sits under the button, so the buttons of both cards stay on one line at every width */}
        <div className="mt-auto flex flex-col items-start gap-3">
          {product.link.external ? (
            <Button
              asChild
              className="rounded-full px-6 h-11 font-semibold text-[#0f1629] hover:opacity-90"
              style={{ backgroundColor: product.color }}
            >
              <a href={product.link.href} target="_blank" rel="noopener noreferrer">
                {product.link.label}
                <ArrowUpRight className="h-4 w-4 ml-1" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 h-11 border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              <a href={product.link.href}>{product.link.label}</a>
            </Button>
          )}
          <span className="text-sm text-white/50">{product.status}</span>
        </div>
      </div>

      {/* Screenshot slideshow */}
      <div
        className="flex flex-col items-center border-t border-white/10 px-5 py-8 sm:px-6"
        style={{ background: `radial-gradient(ellipse 75% 65% at 50% 40%, ${product.color}26, transparent 70%)` }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          dragSnapToOrigin
          onDragEnd={(_, info) => {
            if (info.offset.x < -40) showSlide(slide + 1)
            else if (info.offset.x > 40) showSlide(slide - 1)
          }}
          className="relative aspect-[9/19.5] w-[min(220px,34vh)] lg:w-[min(240px,34vh)] cursor-grab active:cursor-grabbing touch-pan-y overflow-hidden rounded-[2rem] border-[6px] border-gray-800 bg-gray-900 shadow-2xl"
        >
          {product.screenshots.map((shot, shotIndex) => {
            const visible = shotIndex === slide
            const offset = visible ? "translate-x-0" : shotIndex < slide ? "-translate-x-8" : "translate-x-8"
            return (
              <Image
                key={shot.src}
                src={shot.src}
                alt={`${product.name} — ${shot.caption}`}
                fill
                sizes="240px"
                draggable={false}
                aria-hidden={!visible}
                className={`select-none object-cover object-top transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${offset} ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
              />
            )
          })}
          <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-black/30">
            {running && (
              <div
                key={slide}
                className="slide-progress h-full"
                style={{ backgroundColor: product.color, animationDuration: `${delay}ms` }}
              />
            )}
          </div>
        </motion.div>

        <p
          className="mt-4 min-h-[1.25rem] text-center text-sm font-medium text-white/70"
          aria-live={running ? "off" : "polite"}
        >
          {product.screenshots[slide].caption}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <button type="button" onClick={() => showSlide(slide - 1)} aria-label="Previous screenshot" className={controlButton}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center">
            {product.screenshots.map((shot, shotIndex) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => showSlide(shotIndex)}
                aria-label={`Screenshot ${shotIndex + 1} of ${slideCount}: ${shot.caption}`}
                aria-current={shotIndex === slide ? "true" : undefined}
                className="flex h-6 items-center justify-center px-1"
              >
                <span
                  className="block h-2 rounded-full transition-all duration-300"
                  style={{
                    width: shotIndex === slide ? 20 : 8,
                    backgroundColor: shotIndex === slide ? product.color : "rgba(255,255,255,0.25)",
                  }}
                />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => showSlide(slide + 1)} aria-label="Next screenshot" className={controlButton}>
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => {
              // Pressing play resumes right away, even while the pointer is over the card
              if (!playing) setInteracting(false)
              setPlaying(!playing)
            }}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            className={controlButton}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export function HomeProductsSection() {
  return (
    <section
      id="products"
      className="w-full py-20 md:py-28 bg-[#191d3a] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#00ffff]/10 text-[#00ffff] text-sm font-medium mb-4">
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
            Apps That Make a Difference
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Our own apps, built to help families use technology more safely.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
