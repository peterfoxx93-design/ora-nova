import type { Metadata } from "next"
import { Hero } from "@/components/shared/Hero"
import { BookingFlow } from "@/components/booking/BookingFlow"

export const metadata: Metadata = {
  title: "Reserva tu Cita",
  description:
    "Agenda tu evaluación gratuita en Ora Nova. Selecciona tu tratamiento, profesional y fecha preferida. Te confirmamos en máximo 2 horas.",
}

export default function ReservaPage() {
  return (
    <>
      <Hero
        title="Reserva Tu Cita"
        subtitle="Agenda tu evaluación gratuita en 4 pasos. Sin compromiso."
        size="small"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <BookingFlow />
        </div>
      </section>
    </>
  )
}
