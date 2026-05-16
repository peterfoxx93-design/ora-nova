import type { Metadata } from "next"
import { Hero } from "@/components/shared/Hero"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { PriceComparison } from "@/components/shared/PriceComparison"
import { FAQs } from "@/components/shared/FAQs"
import { CTASection } from "@/components/shared/CTASection"
import { services } from "@/data/services"
import { serviceCategories } from "@/data/services"

export const metadata: Metadata = {
  title: "Servicios Dentales",
  description:
    "Conoce todos nuestros tratamientos dentales en República Dominicana: implantes, carillas, endodoncia, coronas, limpieza, blanqueamiento y más. Precios transparentes desde $90 USD.",
}

export default function ServiciosPage() {
  return (
    <>
      <Hero
        title="Servicios Dentales"
        subtitle="Odontología integral con tecnología de punta y los mejores materiales del mundo. Todos nuestros precios son transparentes."
        size="small"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <PriceComparison highlight="RD" />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-primary text-center mb-8">
            Preguntas Frecuentes sobre Tratamientos
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQs filter="treatment" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
