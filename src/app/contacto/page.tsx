"use client"

import { useState } from "react"
import { services } from "@/data/services"
import { faq } from "@/data/testimonials"
import { FAQs } from "@/components/shared/FAQs"
import { Send, CheckCircle2 } from "lucide-react"

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      <section className="py-16 md:py-20 gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold">Contacto</h1>
          <p className="mt-3 text-lg text-[#D1D5DB]">Estamos aquí para resolver todas tus dudas</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">Envíanos un Mensaje</h2>
              {submitted ? (
                <div className="rounded-2xl bg-success/10 border border-success/30 p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
                  <p className="text-lg font-semibold text-success">¡Mensaje enviado!</p>
                  <p className="text-sm text-gray-500 mt-2">Te responderemos en máximo 2 horas hábiles.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Nombre completo</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#E5E3DC] bg-[#F8F7F4] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[#E5E3DC] bg-[#F8F7F4] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#E5E3DC] bg-[#F8F7F4] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">País</label>
                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#E5E3DC] bg-[#F8F7F4] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Mensaje</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full rounded-xl border border-[#E5E3DC] bg-[#F8F7F4] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-gray-500">
                      He leído y acepto la política de privacidad y autorizo el tratamiento de mis datos personales para
                      recibir información sobre los servicios de Ora Nova.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={!form.consent}
                    className="flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-white font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">Nuestra Ubicación</h2>
              <div className="rounded-2xl overflow-hidden border border-[#E5E3DC] mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0!2d-69.9388!3d18.4806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzUwLjAiTiA2OcKwNTYnMTkuNyJX!5e0!3m2!1ses!2sdo!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Ora Nova"
                />
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Preguntas Frecuentes sobre Viajes
              </h2>
              <FAQs filter="travel" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
