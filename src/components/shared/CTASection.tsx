import Link from "next/link"

export function CTASection() {
  return (
    <section className="gradient-hero py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
          ¿Listo para tu Nueva Sonrisa?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-secondary/80">
          Agenda una evaluación gratuita y descubre cuánto puedes ahorrar en tu tratamiento dental en República Dominicana.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/reserva"
            className="gradient-cta text-primary inline-flex h-[44px] min-w-[200px] items-center justify-center rounded-full px-8 font-semibold shadow-lg transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-accent"
          >
            Agenda tu Cita
          </Link>
          <Link
            href="/ahorro"
            className="inline-flex h-[44px] min-w-[200px] items-center justify-center rounded-full border-2 border-white/30 px-8 font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-accent"
          >
            Calcula tu Ahorro
          </Link>
        </div>
      </div>
    </section>
  )
}
