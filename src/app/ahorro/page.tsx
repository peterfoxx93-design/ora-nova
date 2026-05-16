import type { Metadata } from "next"
import { Hero } from "@/components/shared/Hero"
import { SavingsCalculator } from "@/components/calculator/SavingsCalculator"
import { CTASection } from "@/components/shared/CTASection"

export const metadata: Metadata = {
  title: "Calculadora de Ahorro",
  description:
    "Descubre cuánto puedes ahorrar en tu tratamiento dental en República Dominicana. Calculadora interactiva con precios reales 2026.",
}

export default function AhorroPage() {
  return (
    <>
      <Hero
        title="¿Cuánto Puedes Ahorrar?"
        subtitle="Calcula tu ahorro real con precios transparentes. Selecciona tu origen y tratamiento."
        size="small"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <SavingsCalculator />
        </div>
      </section>
      <CTASection />
    </>
  )
}
