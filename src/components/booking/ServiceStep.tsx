"use client"

import { Check } from "lucide-react"
import type { Service } from "@/types"
import { ServiceCard } from "@/components/shared/ServiceCard"

interface ServiceStepProps {
  services: Service[]
  selected: string | null
  onSelect: (id: string) => void
}

export function ServiceStep({ services, selected, onSelect }: ServiceStepProps) {
  return (
    <div>
      <h3 className="font-heading text-xl font-semibold mb-1">
        Selecciona tu Tratamiento
      </h3>
      <p className="text-neutral-500 text-sm mb-6">
        Elige el servicio que necesitas. Todos con precios transparentes.
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelect(service.id)}
            className={`text-left p-4 rounded-lg border-2 transition-all touch-target ${
              selected === service.id
                ? "border-accent bg-accent/5"
                : "border-neutral-300 hover:border-neutral-400"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-2xl">
                {service.id === "implantes" && "🦷"}
                {service.id === "carillas" && "✨"}
                {service.id === "endodoncia" && "🔬"}
                {service.id === "coronas" && "💎"}
                {service.id === "limpieza" && "🌟"}
                {service.id === "blanqueamiento" && "☀️"}
                {service.id === "ortodoncia" && "😊"}
                {service.id === "all-on-4" && "🏗️"}
              </span>
              {selected === service.id && (
                <Check className="w-5 h-5 text-accent" />
              )}
            </div>
            <p className="font-semibold text-sm">{service.name}</p>
            <p className="text-accent font-bold text-lg mt-1">
              ${service.priceRD.toLocaleString()}
            </p>
            <p className="text-xs text-success font-medium">
              Ahorra {service.savingsPercent}%
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
