"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { Menu } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MobileMenu, type NavLink } from "./MobileMenu"

const navLinks: NavLink[] = [
  { label: "Servicios", href: "/servicios" },
  { label: "Precios", href: "/comparativa" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          isScrolled
            ? "glass-dark shadow-lg shadow-black/10"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <span className="font-heading text-xl font-bold tracking-wider text-[#C9A96E] sm:text-2xl">
              ORA NOVA
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "touch-target rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isScrolled
                      ? "text-[#E5E3DC] hover:bg-white/10 hover:text-white"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/reserva"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] px-5 py-2 text-sm font-semibold text-[#0A1628] transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
            >
              Agenda tu Cita
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="touch-target flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Abrir menú de navegación"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        {/* Progress bar (subtle accent line at bottom on scroll) */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-[#C9A96E] to-[#D4B87A]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </header>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  )
}
