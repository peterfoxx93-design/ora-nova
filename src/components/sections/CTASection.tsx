import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 sm:py-28">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#C9A96E]/5 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          ¿Listo para tu <span className="text-[#C9A96E]">nueva sonrisa</span>?
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
          Agenda una evaluación gratuita y descubre cuánto puedes ahorrar en tu tratamiento dental
          en República Dominicana.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/reserva"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A96E] to-[#D4B87A] px-8 py-3.5 text-sm font-semibold text-[#0A1628] shadow-lg transition-all hover:shadow-[#C9A96E]/30 hover:shadow-xl active:scale-95"
          >
            Agenda tu Cita
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/ahorro"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 active:scale-95"
          >
            <Calculator className="h-4 w-4" />
            Calcula tu Ahorro
          </Link>
        </div>
      </div>
    </section>
  )
}
