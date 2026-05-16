import { Link } from "react-router-dom"
import { ArrowRight, TrendingDown } from "lucide-react"
import { countryPrices } from "@/data/prices"
import { formatCurrency, calculateSavings } from "@/lib/utils"

// Only show RD, MX, CO, US
const countriesToShow = ["RD", "MX", "CO", "US"]

export function PriceComparison() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-[#0A1628] sm:text-4xl">
            República Dominicana <span className="text-[#C9A96E]">vs el Mundo</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Compara precios de implantes dentales entre países. Precios en USD.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countryPrices
            .filter((c) => countriesToShow.includes(c.code))
            .map((country) => {
              const usPrice = countryPrices.find((c) => c.code === "US")!.implante
              const savings =
                country.code !== "US"
                  ? calculateSavings(usPrice, country.implante)
                  : null

              const isRD = country.code === "RD"

              return (
                <div
                  key={country.code}
                  className={`relative rounded-2xl border-2 p-6 transition-all hover:shadow-lg ${
                    isRD
                      ? "border-[#C9A96E] bg-[#C9A96E]/5 shadow-md"
                      : "border-[#E5E3DC] bg-white"
                  }`}
                >
                  {/* Flag + Country */}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{country.flag}</span>
                    <div>
                      <p className="font-semibold text-[#0A1628]">{country.country}</p>
                      <p className="text-xs text-[#6B7280]">{country.code}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-4">
                    <p className="text-xs text-[#6B7280]">Implante + Corona</p>
                    <p
                      className={`text-3xl font-bold ${
                        isRD ? "text-[#C9A96E]" : "text-[#0A1628]"
                      }`}
                    >
                      {formatCurrency(country.implante)}
                    </p>
                  </div>

                  {/* Savings vs US */}
                  {savings && (
                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#059669]/10 px-3 py-2 text-sm">
                      <TrendingDown className="h-4 w-4 text-[#059669]" />
                      <span className="font-semibold text-[#059669]">
                        -{savings.percentage}% vs EE.UU.
                      </span>
                    </div>
                  )}

                  {/* RD badge */}
                  {isRD && (
                    <div className="absolute -top-2.5 left-4 rounded-full bg-[#C9A96E] px-3 py-0.5 text-xs font-bold text-white">
                      MEJOR VALOR
                    </div>
                  )}

                  {/* US label */}
                  {country.code === "US" && (
                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#DC2626]/10 px-3 py-2 text-sm">
                      <span className="font-semibold text-[#DC2626]">Referencia</span>
                    </div>
                  )}
                </div>
              )
            })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/comparativa"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0A1628] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1A2D4A] active:scale-95"
          >
            Ver Comparativa Completa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
