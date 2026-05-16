"use client"

import * as React from "react"
import { motion } from "motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"
import * as LucideIcons from "lucide-react"
import type { Service } from "@/types"

export interface ServiceCardProps {
  service: Service
  featured?: boolean
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  tooth: LucideIcons.Tooth,
  sparkles: LucideIcons.Sparkles,
  scan: LucideIcons.Scan,
  gem: LucideIcons.Gem,
  sparkle: LucideIcons.Sparkle,
  sun: LucideIcons.Sun,
  smile: LucideIcons.Smile,
  layers: LucideIcons.Layers,
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || LucideIcons.Tooth

  return (
    <motion.div
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-primary-light/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20",
        featured && "ring-1 ring-accent/30"
      )}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {featured && (
        <div className="absolute -right-1 -top-1 z-10">
          <Badge variant="default" size="sm">
            ★ Más popular
          </Badge>
        </div>
      )}

      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <IconComponent className="size-6" />
      </div>

      <h3 className="mb-1.5 font-heading text-lg font-bold text-secondary">
        {service.name}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-secondary/60">
        {service.description}
      </p>

      <div className="mb-4 flex items-baseline gap-2">
        <span className="font-heading text-3xl font-bold text-accent">
          {formatCurrency(service.priceRD)}
        </span>
        <span className="text-sm text-secondary/40">USD</span>
      </div>

      {service.savingsPercent > 0 && (
        <Badge variant="success" size="sm" className="mb-4">
          Ahorra {service.savingsPercent}%
        </Badge>
      )}

      <details className="group/details mt-auto">
        <summary className="cursor-pointer text-xs font-medium text-accent/70 hover:text-accent transition-colors">
          {service.duration} · Ver detalle técnico
        </summary>
        <p className="mt-2 text-xs leading-relaxed text-secondary/50">
          {service.technicalDetail}
        </p>
      </details>
    </motion.div>
  )
}
