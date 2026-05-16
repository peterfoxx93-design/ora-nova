import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { services } from "@/data/services"
import { slugify } from "@/lib/utils"

const quickLinks = [
  { label: "Sobre Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
  { label: "Preguntas Frecuentes", href: "/faq" },
]

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-[#D1D5DB]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo + Description */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wider text-[#C9A96E]">
                ORA NOVA
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF]">
              Artistry in Dentistry — Odontología de clase mundial en el corazón del Caribe. Precios
              transparentes, tecnología de punta, resultados excepcionales.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Servicios</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios/${service.id}`}
                    className="touch-target inline-flex text-sm text-[#9CA3AF] transition-colors hover:text-[#C9A96E]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Enlaces</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="touch-target inline-flex text-sm text-[#9CA3AF] transition-colors hover:text-[#C9A96E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/18091234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center gap-3 text-sm text-[#9CA3AF] transition-colors hover:text-[#C9A96E]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#059669]" />
                  +1 (809) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@oranova.do"
                  className="touch-target inline-flex items-center gap-3 text-sm text-[#9CA3AF] transition-colors hover:text-[#C9A96E]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#C9A96E]" />
                  info@oranova.do
                </a>
              </li>
              <li>
                <address className="not-italic">
                  <a
                    href="https://maps.google.com/?q=Av.+Abraham+Lincoln+Santo+Domingo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target inline-flex items-start gap-3 text-sm text-[#9CA3AF] transition-colors hover:text-[#C9A96E]"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A96E]" />
                    Av. Abraham Lincoln 123,<br />
                    Santo Domingo, República Dominicana
                  </a>
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-[#6B7280]">
              &copy; {new Date().getFullYear()} Ora Nova. Todos los derechos reservados.
            </p>
            <p className="text-xs text-[#6B7280]">
              Hecho con <span className="text-[#C9A96E]">❤️</span> en RD
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
