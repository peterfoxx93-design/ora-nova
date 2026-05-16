"use client"

import { X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface NavLink {
  label: string
  href: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel — slide from right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[#0A1628] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            {/* Close button */}
            <div className="flex items-center justify-end p-4">
              <button
                onClick={onClose}
                className="touch-target rounded-full p-2 text-[#9CA3AF] transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="px-6 pb-6">
              <Link href="/" onClick={onClose} className="inline-block">
                <span className="font-heading text-2xl font-bold text-[#C9A96E]">
                  ORA NOVA
                </span>
              </Link>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 space-y-1 px-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="touch-target block w-full rounded-xl px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA button */}
            <div className="border-t border-white/10 p-6">
              <Link
                href="/reserva"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] px-6 py-3 font-semibold text-[#0A1628] transition-all hover:opacity-90"
              >
                Agenda tu Cita
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
