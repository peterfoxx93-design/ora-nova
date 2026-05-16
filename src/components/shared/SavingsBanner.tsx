"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "ora-nova:savings-banner-dismissed"

export interface SavingsBannerProps {
  className?: string
}

export function SavingsBanner({ className }: SavingsBannerProps) {
  const [visible, setVisible] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setVisible(true)
    }
  }, [])

  function handleDismiss() {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, "true")
    } catch {
      // localStorage no disponible
    }
  }

  if (!mounted || !visible) return null

  return (
    <div
      className={cn(
        "relative flex items-center justify-between gap-4 bg-accent/10 px-4 py-2.5 text-sm",
        className
      )}
    >
      <div className="flex flex-1 items-center justify-center gap-1.5 text-accent">
        <span className="hidden sm:inline">Ahorra hasta</span>
        <span className="font-bold">70%</span>
        <span>vs EE.UU.</span>
        <span className="mx-1 opacity-40">·</span>
        <span>Precios desde</span>
        <span className="font-bold">$1,195</span>
        <span className="mx-1 opacity-40">·</span>
        <span>🇩🇴</span>
      </div>
      <button
        onClick={handleDismiss}
        className="flex size-7 flex-shrink-0 items-center justify-center rounded-full text-accent/50 hover:bg-accent/15 hover:text-accent transition-colors touch-target"
        aria-label="Cerrar banner"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}
