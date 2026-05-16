"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Link } from "react-router-dom"
import { Calculator, ArrowRight } from "lucide-react"

const statsLines = [
  "Desde $1,195 por implante",
  "Ahorra hasta 73% vs EE.UU.",
  "8 años de garantía",
  "15,000+ pacientes satisfechos",
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statsLines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden gradient-hero">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2000&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />

      {/* Subtle gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/50 to-[#0A1628]/90"
        aria-hidden="true"
      />

      {/* Decorative light orbs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#C9A96E]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#C9A96E]/3 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 px-4 py-1.5 text-xs font-medium text-[#C9A96E]"
        >
          <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
          Turismo Dental en República Dominicana
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          La mejor odontología de <br />
          <span className="text-[#C9A96E]">Latinoamérica</span> está en el Caribe
        </motion.h1>

        {/* Subtitle in English */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#9CA3AF] sm:text-xl"
        >
          World-class dentistry in the heart of the Caribbean.
        </motion.p>

        {/* Typewriter stats */}
        <div className="mt-8 flex items-center justify-center">
          <div className="relative h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-lg font-semibold text-[#C9A96E] sm:text-xl"
              >
                {statsLines[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/ahorro"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] px-8 py-3.5 text-sm font-semibold text-[#0A1628] shadow-lg transition-all hover:shadow-[#C9A96E]/30 hover:shadow-xl active:scale-95"
          >
            <Calculator className="h-4 w-4" />
            Calcula tu Ahorro
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 active:scale-95"
          >
            Ver Servicios
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-[#6B7280]"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
            Straumann &amp; Nobel Biocare
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
            CAD/CAM Digital
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
            Garantía hasta 10 años
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
            Odontólogos internacionales
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-xs text-[#6B7280]"
        >
          <span>Descubre más</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
