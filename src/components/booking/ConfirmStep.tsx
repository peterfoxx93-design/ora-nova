"use client"

import { Check, MapPin, Calendar, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { Service, TeamMember } from "@/types"

interface ConfirmStepProps {
  service?: Service
  professional?: TeamMember
  date: string | null
  time: string | null
  patientName: string
  email: string
  phone: string
  country: string
  consent: boolean
  onNameChange: (val: string) => void
  onEmailChange: (val: string) => void
  onPhoneChange: (val: string) => void
  onCountryChange: (val: string) => void
  onConsentChange: (val: boolean) => void
}

const COUNTRIES = [
  "República Dominicana",
  "Estados Unidos",
  "Canadá",
  "España",
  "Reino Unido",
  "Francia",
  "Alemania",
  "Otro",
]

export function ConfirmStep({
  service,
  professional,
  date,
  time,
  patientName,
  email,
  phone,
  country,
  consent,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onCountryChange,
  onConsentChange,
}: ConfirmStepProps) {
  const formattedDate = date
    ? new Date(date + "T12:00:00").toLocaleDateString("es-DO", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : ""

  return (
    <div>
      <h3 className="font-heading text-xl font-semibold mb-1">
        Confirma tu Cita
      </h3>
      <p className="text-neutral-500 text-sm mb-6">
        Revisa los detalles antes de confirmar
      </p>

      {/* Resumen */}
      <div className="bg-secondary/50 rounded-xl p-5 mb-8 space-y-3">
        {service && (
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-accent flex-shrink-0" />
            <div>
              <p className="text-sm text-neutral-500">Servicio</p>
              <p className="font-semibold">{service.name}</p>
              <p className="text-accent font-bold">
                ${service.priceRD.toLocaleString()} USD
              </p>
            </div>
          </div>
        )}
        {professional && (
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-accent flex-shrink-0" />
            <div>
              <p className="text-sm text-neutral-500">Profesional</p>
              <p className="font-semibold">{professional.name}</p>
              <p className="text-sm text-neutral-500">{professional.title}</p>
            </div>
          </div>
        )}
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
          <div>
            <p className="text-sm text-neutral-500">Fecha</p>
            <p className="font-semibold capitalize">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-accent flex-shrink-0" />
          <div>
            <p className="text-sm text-neutral-500">Hora</p>
            <p className="font-semibold">{time} hrs</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
          <div>
            <p className="text-sm text-neutral-500">Ubicación</p>
            <p className="font-semibold">Santo Domingo, República Dominicana</p>
          </div>
        </div>
      </div>

      {/* Datos del paciente */}
      <div className="space-y-4">
        <Input
          label="Nombre Completo"
          value={patientName}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Tu nombre"
        />
        <Input
          label="Correo Electrónico"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="tu@correo.com"
        />
        <Input
          label="Teléfono (con código de país)"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="+1 809 555 0000"
        />
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-neutral-700">
            País de Origen
          </label>
          <select
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            className="w-full h-[44px] px-4 rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
          >
            <option value="">Selecciona tu país</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Consentimiento */}
        <label className="flex items-start gap-3 cursor-pointer pt-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => onConsentChange(e.target.checked)}
            className="mt-1 w-4 h-4 accent-accent"
          />
          <span className="text-sm text-neutral-500">
            Acepto que Ora Nova almacene mis datos para gestionar esta cita.
            No compartiremos tu información con terceros.{" "}
            <a href="#" className="text-accent underline">
              Política de Privacidad
            </a>
          </span>
        </label>
      </div>
    </div>
  )
}
