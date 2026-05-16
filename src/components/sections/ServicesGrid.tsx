import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { services } from "@/data/services"
import { ServiceCard } from "@/components/shared/ServiceCard"

export function ServicesGrid() {
  return (
    <section className="bg-[#F8F7F4] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-[#0A1628] sm:text-4xl">
            Tratamientos de <span className="text-[#C9A96E]">Clase Mundial</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Tecnología CAD/CAM, materiales Straumann y Nobel Biocare, odontólogos con formación internacional.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.slice(0, 8).map((service, index) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#C9A96E] px-8 py-3 text-sm font-semibold text-[#C9A96E] transition-all hover:bg-[#C9A96E] hover:text-white active:scale-95"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
