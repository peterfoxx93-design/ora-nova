import type { Metadata } from "next"
import { Hero } from "@/components/shared/Hero"
import { PriceComparison } from "@/components/shared/PriceComparison"
import { CTASection } from "@/components/shared/CTASection"
import { countryPrices, rdAdvantages } from "@/data/prices"
import { MapPin, ShieldCheck, Umbrella, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Comparativa de Precios: RD vs el Mundo",
  description:
    "Comparativa completa de precios dentales 2026. República Dominicana vs México, Colombia, Argentina, EE.UU. y Canadá. Ahorra hasta 78% en tu tratamiento dental.",
}

const advantageIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "map-pin": MapPin,
  "shield-check": ShieldCheck,
  umbrella: Umbrella,
  award: Award,
}

export default function ComparativaPage() {
  const countries = countryPrices
  const usPrice = countries.find((c) => c.code === "US")
  const rdPrice = countries.find((c) => c.code === "RD")

  const chartData = countries.map((c) => ({
    label: c.flag,
    price: c.implante,
    isRD: c.code === "RD",
    country: c.country,
  }))

  const maxPrice = Math.max(...chartData.map((d) => d.price))

  return (
    <>
      <Hero
        title="RD vs el Mundo: Precios 2026"
        subtitle={`Un implante dental en RD cuesta desde $1,195 USD. En EE.UU., $4,500 USD. Ahorra hasta 78%.`}
        size="small"
      />

      <PriceComparison highlight="RD" />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">¿Por Qué RD?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rdAdvantages.map((adv) => {
              const Icon = advantageIcons[adv.icon] || MapPin
              return (
                <div key={adv.title} className="rounded-2xl border border-[#E5E3DC] bg-[#F8F7F4] p-6">
                  <Icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-semibold text-primary">{adv.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{adv.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-primary text-center mb-4">
            Precio de Implante por País
          </h2>
          <p className="text-center text-gray-500 mb-10">Comparativa visual en USD</p>

          <div className="max-w-3xl mx-auto space-y-4">
            {chartData.map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <span className="text-2xl w-10 text-center">{d.label}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-primary">{d.country}</span>
                    <span className={`text-sm font-bold ${d.isRD ? "text-accent" : "text-gray-500"}`}>
                      ${d.price.toLocaleString()} USD
                    </span>
                  </div>
                  <div className="h-8 w-full rounded-lg bg-[#E5E3DC] overflow-hidden">
                    <div
                      className={`h-full rounded-lg transition-all duration-700 ${d.isRD ? "bg-accent" : "bg-primary-light"}`}
                      style={{ width: `${(d.price / maxPrice) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
