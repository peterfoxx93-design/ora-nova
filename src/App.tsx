import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SavingsBanner } from "@/components/shared/SavingsBanner"
import { ChatWidget } from "@/components/chatbot/ChatWidget"
import { PageHero } from "@/components/shared/PageHero"
import { CTASection } from "@/components/shared/CTASection"
import { Hero } from "@/components/sections/Hero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { PriceComparison } from "@/components/sections/PriceComparison"
import { StatsBar } from "@/components/sections/StatsBar"
import { Testimonials } from "@/components/sections/Testimonials"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { FAQs } from "@/components/shared/FAQs"
import { BookingFlow } from "@/components/booking/BookingFlow"
import { SavingsCalculator } from "@/components/calculator/SavingsCalculator"
import { services } from "@/data/services"
import { team } from "@/data/team"
import { blogPosts, blogCategories } from "@/data/blog-posts"
import { countryPrices, rdAdvantages } from "@/data/prices"
import { faq } from "@/data/testimonials"
import { MapPin, ShieldCheck, Umbrella, Award, CalendarDays, Clock, ArrowRight, ArrowLeft } from "lucide-react"
import { Link, useParams, Navigate } from "react-router-dom"
import { useState } from "react"
import { cn } from "@/lib/utils"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PriceComparison />
      <StatsBar />
      <Testimonials />
      <CTASection />
    </>
  )
}

function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Servicios Dentales"
        subtitle="Odontología integral con tecnología de punta y los mejores materiales del mundo. Todos nuestros precios son transparentes."
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (<ServiceCard key={s.id} service={s} />))}
          </div>
        </div>
      </section>
      <PriceComparison highlight="RD" />
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-[#0A1628] text-center mb-8">Preguntas Frecuentes sobre Tratamientos</h2>
          <div className="max-w-3xl mx-auto"><FAQs filter="treatment" /></div>
          <div className="text-center mt-8">
            <Link to="/reserva" className="gradient-cta text-[#0A1628] inline-flex h-[44px] items-center justify-center rounded-full px-8 font-semibold shadow-lg transition-all hover:scale-105">
              Agenda tu Cita <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}

function ServicioDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.id === slug)
  if (!service) return <Navigate to="/" replace />

  const priceKeys: Record<string, string> = {
    implantes: "implante", carillas: "carilla", endodoncia: "endodoncia",
    coronas: "corona", limpieza: "limpieza", blanqueamiento: "blanqueamiento",
    ortodoncia: "implante", "all-on-4": "allOn4",
  }
  const priceKey = priceKeys[slug || ""] || "implante"
  const relatedPrices = countryPrices.map((c) => ({ ...c, price: c[priceKey as keyof typeof c] as number }))

  return (
    <>
      <div className="bg-[#F8F7F4] border-b border-[#E5E3DC]">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#C9A96E] transition-colors">Inicio</Link>
            <ArrowRight className="h-4 w-4" />
            <Link to="/servicios" className="hover:text-[#C9A96E] transition-colors">Servicios</Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-[#0A1628] font-medium">{service.name}</span>
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
              <h2 className="font-heading text-2xl font-bold text-[#0A1628] mb-4">Detalle del Tratamiento</h2>
              <p className="text-gray-600 leading-relaxed">{service.technicalDetail}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-[#E5E3DC] bg-white p-4 text-center">
                  <Clock className="h-6 w-6 text-[#C9A96E] mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Duración</p>
                  <p className="font-semibold text-[#0A1628]">{service.duration}</p>
                </div>
                <div className="rounded-xl border border-[#E5E3DC] bg-white p-4 text-center">
                  <ShieldCheck className="h-6 w-6 text-[#C9A96E] mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Recuperación</p>
                  <p className="font-semibold text-[#0A1628]">{service.recovery}</p>
                </div>
                <div className="rounded-xl border border-[#E5E3DC] bg-white p-4 text-center">
                  <Award className="h-6 w-6 text-[#C9A96E] mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Ahorro vs EE.UU.</p>
                  <p className="font-semibold text-success">Hasta {service.savingsPercent}%</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E5E3DC] bg-white p-6">
              <h3 className="font-heading text-xl font-bold text-[#0A1628] mb-4">Precios por País</h3>
              <div className="space-y-3">
                {relatedPrices.map((c) => {
                  const isRD = c.code === "RD"
                  return (
                    <div key={c.code} className={`flex items-center justify-between rounded-xl p-3 ${isRD ? "bg-[#C9A96E]/10 border border-[#C9A96E]/30" : "bg-[#F8F7F4]"}`}>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{c.flag}</span>
                        <span className="font-medium text-sm">{c.country}</span>
                        {isRD && <span className="text-xs bg-[#C9A96E] text-white px-2 py-0.5 rounded-full">Mejor</span>}
                      </div>
                      <span className={`font-bold ${isRD ? "text-[#C9A96E]" : "text-gray-500"}`}>${c.price.toLocaleString()} USD</span>
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
          <h2 className="font-heading text-3xl font-bold text-[#0A1628] text-center mb-8">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto"><FAQs filter="treatment" /></div>
        </div>
      </section>
      <CTASection />
    </>
  )
}

function ReservaPage() {
  return (
    <>
      <PageHero title="Reserva Tu Cita" subtitle="Agenda tu evaluación gratuita en 4 pasos. Sin compromiso." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4"><BookingFlow /></div>
      </section>
    </>
  )
}

function NosotrosPage() {
  const values = [
    { icon: Award, title: "Excelencia Clínica", description: "Estándares internacionales." },
    { icon: ShieldCheck, title: "Transparencia Total", description: "Precios claros sin sorpresas." },
    { icon: Umbrella, title: "Atención Integral", description: "Coordinamos todo por ti." },
    { icon: MapPin, title: "Ubicación Estratégica", description: "Santo Domingo, corazón del Caribe." },
  ]
  return (
    <>
      <PageHero title="Conoce a Nuestro Equipo" subtitle="Profesionales apasionados por transformar sonrisas." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col sm:flex-row gap-6 rounded-2xl border border-[#E5E3DC] bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#E0CDA0] flex items-center justify-center text-3xl font-bold text-white mx-auto sm:mx-0">
                    {m.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A1628]">{m.name}</h3>
                  <p className="text-[#C9A96E] font-medium">{m.title}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.specialties.map((s) => (<span key={s} className="rounded-full bg-[#C9A96E]/10 px-3 py-1 text-xs font-medium text-[#C9A96E]">{s}</span>))}
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{m.education}</p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const filtered = activeCategory ? blogPosts.filter((p) => p.category === activeCategory) : blogPosts
  const featured = filtered.filter((p) => p.featured)
  const regular = filtered.filter((p) => !p.featured)

  const emoji = (cat: string) => {
    if (cat === "Turismo Dental") return "🌍"
    if (cat === "Comparativas") return "📊"
    if (cat === "Estética") return "✨"
    if (cat === "Implantes") return "🦷"
    return "💭"
  }

  return (
    <>
      <PageHero title="Blog & Recursos" subtitle="Guías, comparativas y todo sobre turismo dental en RD." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2 mb-10">
            {[null, ...blogCategories].map((cat) => (
              <button key={cat || "all"} onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors touch-target ${
                  activeCategory === cat ? "bg-[#0A1628] text-white" : "bg-[#E5E3DC] text-gray-600 hover:bg-[#C9A96E]/20"
                }`}>
                {cat || "Todos"}
              </button>
            ))}
          </div>
          {featured.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {featured.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-[#E5E3DC] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="h-48 bg-gradient-to-br from-[#1A2D4A] to-[#0A1628] flex items-center justify-center">
                    <span className="text-4xl">{emoji(post.category)}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                    <span className="inline-block rounded-full bg-[#C9A96E]/10 px-3 py-1 text-xs font-medium text-[#C9A96E] mb-2">{post.category}</span>
                    <h3 className="text-lg font-bold text-[#0A1628] group-hover:text-[#C9A96E] transition-colors">{post.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regular.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}
                className="group rounded-2xl border border-[#E5E3DC] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-40 bg-gradient-to-br from-[#C9A96E]/20 to-[#C9A96E]/5 flex items-center justify-center">
                  <span className="text-3xl">{emoji(post.category)}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                  <span className="inline-block rounded-full bg-[#C9A96E]/10 px-3 py-0.5 text-xs font-medium text-[#C9A96E] mb-2">{post.category}</span>
                  <h3 className="text-base font-bold text-[#0A1628] group-hover:text-[#C9A96E] transition-colors">{post.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />
  return (
    <>
      <div className="bg-[#F8F7F4] border-b border-[#E5E3DC]">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#C9A96E] transition-colors">Inicio</Link>
            <ArrowRight className="h-4 w-4" />
            <Link to="/blog" className="hover:text-[#C9A96E] transition-colors">Blog</Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-[#0A1628] font-medium">{post.title}</span>
          </nav>
        </div>
      </div>
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8">
            <span className="inline-block rounded-full bg-[#C9A96E]/10 px-3 py-1 text-xs font-medium text-[#C9A96E] mb-3">{post.category}</span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628]">{post.title}</h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
            </div>
            <p className="mt-4 text-lg text-gray-600">{post.description}</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#C9A96E]/10 to-[#C9A96E]/5 p-8 text-center mb-8">
            <h2 className="font-heading text-2xl font-bold text-[#0A1628] mb-4">Contenido en Desarrollo</h2>
            <p className="text-gray-600">Este artículo estará disponible próximamente.</p>
            <Link to="/comparativa" className="mt-4 inline-flex items-center gap-2 text-[#C9A96E] font-semibold hover:underline">
              Ver comparativa de precios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
      <PriceComparison highlight="RD" />
      <CTASection />
    </>
  )
}

function ComparativaPage() {
  const countries = countryPrices
  const chartData = countries.map((c) => ({ label: c.flag, price: c.implante, isRD: c.code === "RD", country: c.country }))
  const maxPrice = Math.max(...chartData.map((d) => d.price))
  const icons: Record<string, React.ComponentType<{ className?: string }>> = { "map-pin": MapPin, "shield-check": ShieldCheck, umbrella: Umbrella, award: Award }

  return (
    <>
      <PageHero title="RD vs el Mundo: Precios 2026" subtitle="Un implante dental en RD cuesta desde $1,195 USD. En EE.UU., $4,500 USD. Ahorra hasta 78%." />
      <PriceComparison highlight="RD" />
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-[#0A1628] text-center mb-12">¿Por Qué RD?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rdAdvantages.map((adv) => {
              const Icon = icons[adv.icon] || MapPin
              return (<div key={adv.title} className="rounded-2xl border border-[#E5E3DC] bg-[#F8F7F4] p-6">
                <Icon className="h-10 w-10 text-[#C9A96E] mb-4" />
                <h3 className="font-semibold text-[#0A1628]">{adv.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{adv.description}</p>
              </div>)
            })}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-[#0A1628] text-center mb-4">Precio de Implante por País</h2>
          <p className="text-center text-gray-500 mb-10">Comparativa visual en USD</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {chartData.map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <span className="text-2xl w-10 text-center">{d.label}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-[#0A1628]">{d.country}</span>
                    <span className={`text-sm font-bold ${d.isRD ? "text-[#C9A96E]" : "text-gray-500"}`}>${d.price.toLocaleString()} USD</span>
                  </div>
                  <div className="h-8 w-full rounded-lg bg-[#E5E3DC] overflow-hidden">
                    <div className={`h-full rounded-lg transition-all duration-700 ${d.isRD ? "bg-[#C9A96E]" : "bg-[#1A2D4A]"}`}
                      style={{ width: `${(d.price / maxPrice) * 100}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}

function AhorroPage() {
  return (
    <>
      <PageHero title="¿Cuánto Puedes Ahorrar?" subtitle="Calcula tu ahorro real con precios transparentes." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4"><SavingsCalculator /></div>
      </section>
      <CTASection />
    </>
  )
}

function ContactoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", message: "", consent: false })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-24 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="font-heading text-3xl font-bold text-[#0A1628] mb-4">¡Mensaje Enviado!</h1>
          <p className="text-gray-500 mb-8">Te responderemos en máximo 24 horas hábiles.</p>
          <Link to="/" className="gradient-cta text-[#0A1628] inline-flex h-[44px] items-center justify-center rounded-full px-8 font-semibold">Volver al Inicio</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageHero title="Contacto" subtitle="Estamos aquí para ayudarte. Escríbenos y te responderemos pronto." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl p-8 border border-[#E5E3DC]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required
                className="w-full h-[44px] px-4 rounded-lg border border-[#E5E3DC] focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required
                className="w-full h-[44px] px-4 rounded-lg border border-[#E5E3DC] focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-[44px] px-4 rounded-lg border border-[#E5E3DC] focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">País</label>
              <select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}
                className="w-full h-[44px] px-4 rounded-lg border border-[#E5E3DC] bg-white focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] outline-none transition-colors">
                <option value="">Selecciona</option>
                <option value="RD">República Dominicana</option>
                <option value="US">Estados Unidos</option>
                <option value="CA">Canadá</option>
                <option value="ES">España</option>
                <option value="OTRO">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[#E5E3DC] focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] outline-none transition-colors" />
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} required
                className="mt-1 w-4 h-4 accent-[#C9A96E]" />
              <span className="text-sm text-gray-500">Acepto que Ora Nova almacene mis datos para gestionar esta consulta.</span>
            </label>
            <button type="submit" disabled={!form.consent}
              className="gradient-cta text-[#0A1628] w-full h-[44px] rounded-full font-semibold shadow-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
              Enviar Mensaje
            </button>
          </form>
          <div className="mt-10">
            <h2 className="font-heading text-2xl font-bold text-[#0A1628] text-center mb-6">Preguntas Frecuentes</h2>
            <div className="max-w-2xl mx-auto"><FAQs filter="travel" /></div>
          </div>
        </div>
      </section>
    </>
  )
}

function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="text-[10rem] font-heading font-bold text-[#C9A96E]/20 select-none">404</div>
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628]">Página No Encontrada</h1>
      <p className="mt-3 text-gray-500 max-w-md">La página que buscas no existe o ha sido movida.</p>
      <Link to="/" className="mt-8 gradient-cta text-[#0A1628] inline-flex h-[44px] items-center gap-2 rounded-full px-8 font-semibold shadow-lg hover:scale-105 transition-all">
        <ArrowLeft className="h-4 w-4" /> Volver al Inicio
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-[#C9A96E] focus:text-white focus:font-semibold">
        Saltar al contenido principal
      </a>
      <Navbar />
      <SavingsBanner />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/servicios/:slug" element={<ServicioDetailPage />} />
          <Route path="/reserva" element={<ReservaPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/comparativa" element={<ComparativaPage />} />
          <Route path="/ahorro" element={<AhorroPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
