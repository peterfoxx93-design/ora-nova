import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services } from "@/data/services"
import { countryPrices } from "@/data/prices"
import { faq } from "@/data/testimonials"
import { FAQs } from "@/components/shared/FAQs"
import { CTASection } from "@/components/shared/CTASection"
import { ChevronRight, Clock, ShieldCheck, Syringe } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  if (!service) return { title: "Servicio no encontrado" }
  return { title: service.name, description: service.description }
}

const PRICE_KEYS: Record<string, string> = {
  implantes: "implante",
  carillas: "carilla",
  endodoncia: "endodoncia",
  coronas: "corona",
  limpieza: "limpieza",
  blanqueamiento: "blanqueamiento",
  ortodoncia: "implante",
  "all-on-4": "allOn4",
}

export default async function ServicioDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  if (!service) notFound()

  const priceKey = PRICE_KEYS[slug] || "implante"
  const relatedPrices = countryPrices.map((c) => {
    const price = c[priceKey as keyof typeof c] as number
    return { ...c, price }
  })

  return (
    <>
      <div className="bg-[#F8F7F4] border-b border-[#E5E3DC]">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/servicios" className="hover:text-accent transition-colors">Servicios</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 md:py-16 gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-5xl font-bold">{service.name}</h1>
            <p className="mt-4 text-lg text-[#D1D5DB]">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">Detalle del Tratamiento</h2>
              <p className="text-gray-600 leading-relaxed">{service.technicalDetail}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-[#E5E3DC] bg-white p-4 text-center">
                  <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Duración</p>
                  <p className="font-semibold text-primary">{service.duration}</p>
                </div>
                <div className="rounded-xl border border-[#E5E3DC] bg-white p-4 text-center">
                  <ShieldCheck className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Recuperación</p>
                  <p className="font-semibold text-primary">{service.recovery}</p>
                </div>
                <div className="rounded-xl border border-[#E5E3DC] bg-white p-4 text-center">
                  <Syringe className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Ahorro vs EE.UU.</p>
                  <p className="font-semibold text-success">Hasta {service.savingsPercent}%</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E5E3DC] bg-white p-6">
              <h3 className="font-heading text-xl font-bold text-primary mb-4">Precios por País</h3>
              <div className="space-y-3">
                {relatedPrices.map((c) => {
                  const isRD = c.code === "RD"
                  return (
                    <div key={c.code} className={`flex items-center justify-between rounded-xl p-3 ${isRD ? "bg-accent/10 border border-accent/30" : "bg-[#F8F7F4]"}`}>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{c.flag}</span>
                        <span className="font-medium text-sm">{c.country}</span>
                        {isRD && <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-full">Mejor</span>}
                      </div>
                      <span className={`font-bold ${isRD ? "text-accent" : "text-gray-500"}`}>
                        ${c.price.toLocaleString()} USD
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-primary text-center mb-8">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto">
            <FAQs filter="treatment" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
