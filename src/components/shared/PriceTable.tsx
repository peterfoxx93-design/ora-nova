import * as React from "react"
import { cn } from "@/lib/utils"
import { formatCurrency } from "@/lib/utils"
import { treatmentLabels } from "@/data/prices"
import type { CountryPrice } from "@/types"

export interface PriceTableProps {
  data: CountryPrice[]
  highlight?: string
}

export function PriceTable({ data, highlight = "RD" }: PriceTableProps) {
  const treatmentKeys = Object.keys(treatmentLabels) as (keyof typeof treatmentLabels)[]

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr>
            <th className="sticky left-0 bg-primary px-4 py-3 text-left text-sm font-semibold text-secondary/60">
              Tratamiento
            </th>
            {data.map((country) => (
              <th
                key={country.code}
                className={cn(
                  "px-4 py-3 text-center text-sm font-semibold",
                  country.code === highlight
                    ? "text-accent"
                    : "text-secondary/60"
                )}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span>{country.flag}</span>
                  <span>{country.code}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {treatmentKeys.map((key) => (
            <tr
              key={key}
              className="border-t border-white/5 transition-colors hover:bg-white/[0.02]"
            >
              <td className="sticky left-0 bg-primary px-4 py-3.5 text-sm font-medium text-secondary">
                {treatmentLabels[key]}
              </td>
              {data.map((country) => {
                const price = country[key] as number
                const isHighlight = country.code === highlight
                const isLowest = price === Math.min(...data.map((c) => c[key] as number))

                return (
                  <td
                    key={country.code}
                    className={cn(
                      "px-4 py-3.5 text-center text-sm font-semibold transition-colors",
                      isHighlight && "bg-accent/5 text-accent",
                      isLowest && !isHighlight && "text-success"
                    )}
                  >
                    {formatCurrency(price)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
