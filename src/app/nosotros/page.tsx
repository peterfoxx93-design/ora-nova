import type { Metadata } from "next"
import { Hero } from "@/components/shared/Hero"
import { CTASection } from "@/components/shared/CTASection"
import { team } from "@/data/team"
import { Award, Heart, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo de Ora Nova: especialistas en implantes, estética dental, endodoncia y periodoncia con formación internacional.",
}

const values = [
  {
    icon: Award,
    title: "Excelencia Clínica",
    description: "Estándares internacionales con los mejores materiales y tecnología de punta.",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description: "Cada paciente es único. Diseñamos tu plan de tratamiento a tu medida.",
  },
  {
    icon: Shield,
    title: "Transparencia Total",
    description: "Precios claros, sin sorpresas. Te explicamos cada paso del proceso.",
  },
  {
    icon: Users,
    title: "Equipo Multidisciplinario",
    description: "Especialistas coordinados para brindarte el mejor resultado posible.",
  },
]

export default function NosotrosPage() {
  return (
    <>
      <Hero
        title="Conoce a Nuestro Equipo"
        subtitle="Profesionales apasionados por transformar sonrisas con excelencia y calidez."
        size="small"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col sm:flex-row gap-6 rounded-2xl border border-[#E5E3DC] bg-white p-6 shadow-sm"
              >
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-3xl font-bold text-white mx-auto sm:mx-0">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-accent font-medium">{member.title}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{member.education}</p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Nuestros Valores</h2>
            <p className="mt-3 text-gray-500 text-lg">El pilar de nuestra clínica</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#E5E3DC] bg-[#F8F7F4] p-6 text-center">
                <v.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
