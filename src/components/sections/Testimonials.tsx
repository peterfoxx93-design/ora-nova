import Link from "next/link"
import { ArrowRight, Star, Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { formatCurrency, cn } from "@/lib/utils"

export function Testimonials() {
  return (
    <section className="bg-[#F8F7F4] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-[#0A1628] sm:text-4xl">
            Lo que dicen <span className="text-[#C9A96E]">nuestros pacientes</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Historias reales de pacientes que transformaron su sonrisa y su bolsillo.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative rounded-2xl border border-[#E5E3DC] bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              {/* Quote icon */}
              <Quote className="absolute right-4 top-4 h-8 w-8 text-[#C9A96E]/10" />

              {/* Header: flag + name + location */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{testimonial.flag}</span>
                <div>
                  <p className="font-semibold text-[#0A1628]">{testimonial.name}</p>
                  <p className="text-xs text-[#6B7280]">{testimonial.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < testimonial.rating
                        ? "fill-[#C9A96E] text-[#C9A96E]"
                        : "text-[#D1D5DB]"
                    )}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Treatment + Savings */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#0A1628]/5 px-3 py-1 text-xs font-medium text-[#0A1628]">
                  {testimonial.treatment}
                </span>
                <span className="rounded-full bg-[#059669]/10 px-3 py-1 text-xs font-semibold text-[#059669]">
                  Ahorró {formatCurrency(testimonial.savings)}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#C9A96E] px-8 py-3 text-sm font-semibold text-[#C9A96E] transition-all hover:bg-[#C9A96E] hover:text-white active:scale-95"
          >
            Ver más historias
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
