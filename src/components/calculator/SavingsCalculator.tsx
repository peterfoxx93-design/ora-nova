"use client"

import { useState } from "react"
import { services } from "@/data/services"
import { countryPrices } from "@/data/prices"
import { formatCurrency } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import { Plane, PiggyBank, TrendingDown } from "lucide-react"

const origins = [
  { code: "US", label: "Estados Unidos", flag: "\u{1F1FA}\u{1F1F8}" },
  { code: "CA", label: "Canadá", flag: "\u{1F1E8}\u{1F1E6}" },
  { code: "EU", label: "Europa", flag: "\u{1F30D}" },
]

const flightEstimates: Record<string, number> = {
  US: 400,
  CA: 500,
  EU: 700,
}

export function SavingsCalculator() {
  const [origin, setOrigin] = useState("US")
  const [treatmentId, setTreatmentId] = useState("implantes")

  const service = services.find((s) => s.id === treatmentId)
  const originPrice = origin === "US"
    ? service?.priceUS
    : origin === "CA"
      ? service?.priceUS // closest proxy for CA
      : service?.priceUS
  const rdPrice = service?.priceRD || 0
  const savings = (originPrice || 0) - rdPrice
  const savingsPercent = originPrice ? Math.round(((originPrice - rdPrice) / originPrice) * 100) : 0
  const flightCost = flightEstimates[origin] || 0
  const netSavings = savings - flightCost

  return (
    <div className="rounded-2xl border border-[#E5E3DC] bg-white p-6 md:p-8 shadow-sm">
      <h2 className="font-heading text-2xl font-bold text-primary mb-6">Calcula tu Ahorro</h2>

      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Tu país de origen</label>
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full rounded-xl border border-[#E5E3DC] bg-[#F8F7F4] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {origins.map((o) => (
              <option key={o.code} value={o.code}>
                {o.flag} {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Tratamiento</label>
          <select
            value={treatmentId}
            onChange={(e) => setTreatmentId(e.target.value)}
            className="w-full rounded-xl border border-[#E5E3DC] bg-[#F8F7F4] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${origin}-${treatmentId}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-[#F8F7F4] p-4 border border-[#E5E3DC]">
              <p className="text-sm text-gray-500">Precio en tu país</p>
              <p className="text-2xl font-bold text-gray-700 mt-1">
                {originPrice ? formatCurrency(originPrice) : "—"}
              </p>
            </div>
            <div className="rounded-xl bg-accent/5 p-4 border border-accent/30">
              <p className="text-sm text-gray-500">Precio en RD (Ora Nova)</p>
              <p className="text-2xl font-bold text-accent mt-1">
                {formatCurrency(rdPrice)}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-success/5 border border-success/30 p-4">
            <div className="flex items-center gap-2 text-success mb-2">
              <PiggyBank className="h-5 w-5" />
              <span className="font-semibold">Tu Ahorro Directo</span>
            </div>
            <p className="text-3xl font-bold text-success">
              {formatCurrency(savings)}{" "}
              <span className="text-lg font-medium">({savingsPercent}% menos)</span>
            </p>
          </div>

          <div className="rounded-xl border border-[#E5E3DC] bg-[#F8F7F4] p-4">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Plane className="h-5 w-5" />
              <span className="font-semibold">Vuelo redondo estimado</span>
            </div>
            <p className="text-xl font-bold text-gray-700">{formatCurrency(flightCost)}</p>
          </div>

          <div className="rounded-xl bg-primary p-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="h-5 w-5" />
              <span className="font-semibold">Ahorro Neto (incluyendo vuelo)</span>
            </div>
            <p className="text-3xl font-bold">
              {formatCurrency(Math.max(0, netSavings))}
            </p>
            {netSavings > 0 && (
              <p className="text-sm text-gray-300 mt-1">
                ¡Incluso pagando el vuelo, sigues ahorrando!
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
