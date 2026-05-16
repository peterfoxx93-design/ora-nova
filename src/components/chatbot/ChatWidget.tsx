"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A96E] text-white shadow-lg transition-all hover:bg-[#B8965A] hover:scale-105 active:scale-95"
        aria-label="Abrir chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl border border-[#E5E3DC] bg-white shadow-2xl">
          <div className="flex items-center gap-3 rounded-t-2xl bg-[#0A1628] px-4 py-3 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A96E] text-xs font-bold">
              ON
            </div>
            <div>
              <p className="text-sm font-semibold">Ora Nova</p>
              <p className="text-xs text-[#9CA3AF]">Responde en minutos</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-sm text-[#6B7280]">
              ¡Hola! ¿En qué podemos ayudarte? Agenda tu evaluación gratuita o consulta nuestros precios.
            </p>
            <a
              href="https://wa.me/18091234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#059669] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#047857]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button className="text-xs text-[#9CA3AF] underline underline-offset-2 hover:text-[#6B7280]">
              Chatear ahora
            </button>
          </div>
        </div>
      )}
    </>
  )
}
