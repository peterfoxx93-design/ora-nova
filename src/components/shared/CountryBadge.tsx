import * as React from "react"
import { cn } from "@/lib/utils"
import { formatCurrency } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export interface CountryBadgeProps {
  country: string
  flag: string
  price: number
  isBest?: boolean
}

export function CountryBadge({
  country,
  flag,
  price,
  isBest = false,
}: CountryBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-sm transition-colors",
        isBest
          ? "border-accent/50 bg-accent/10 text-accent"
          : "border-white/10 bg-primary-light/50 text-secondary/70"
      )}
    >
      <span className="text-base leading-none">{flag}</span>
      <span className="font-medium">{country}</span>
      <span className="text-xs opacity-50">·</span>
      <span className="font-semibold">{formatCurrency(price)}</span>
      {isBest && (
        <Badge variant="default" size="sm" className="ml-1">
          Mejor precio
        </Badge>
      )}
    </div>
  )
}
