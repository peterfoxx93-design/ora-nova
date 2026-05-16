"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, ChevronLeft, Calendar, Clock, User, FileText } from "lucide-react"
import { services } from "@/data/services"
import { team } from "@/data/team"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ServiceStep } from "./ServiceStep"
import { DateTimeStep } from "./DateTimeStep"
import { ConfirmStep } from "./ConfirmStep"

const STEPS = [
  { id: 1, label: "Servicio", icon: FileText },
  { id: 2, label: "Profesional", icon: User },
  { id: 3, label: "Fecha y Hora", icon: Calendar },
  { id: 4, label: "Confirmar", icon: Check },
]

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [patientName, setPatientName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedService !== null
      case 2: return selectedProfessional !== null
      case 3: return selectedDate !== null && selectedTime !== null
      case 4: return patientName.length > 0 && email.includes("@") && consent
      default: return false
    }
  }

  const handleNext = () => {
    if (canProceed() && currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleSubmit = async () => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitted(true)
  }

  const service = services.find((s) => s.id === selectedService)
  const professional = team.find((t) => t.name === selectedProfessional)

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-success" />
        </div>
        <h2 className="font-heading text-3xl font-bold mb-4">
          ¡Cita Agendada!
        </h2>
        <p className="text-neutral-500 mb-8">
          Te hemos enviado un correo con los detalles de tu cita.
          Te confirmaremos en máximo 2 horas hábiles.
        </p>
        <Button variant="primary" asChild>
          <a href="/">Volver al Inicio</a>
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-12">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  currentStep >= step.id
                    ? "bg-accent text-white"
                    : "bg-neutral-300 text-neutral-500"
                }`}
              >
                {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
              </div>
              <span className="text-xs mt-1 text-neutral-500 hidden sm:block">
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${
                  currentStep > step.id ? "bg-accent" : "bg-neutral-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-neutral-300"
        >
          {currentStep === 1 && (
            <ServiceStep
              services={services}
              selected={selectedService}
              onSelect={setSelectedService}
            />
          )}
          {currentStep === 2 && (
            <div>
              <h3 className="font-heading text-xl font-semibold mb-1">
                Selecciona tu Profesional
              </h3>
              <p className="text-neutral-500 text-sm mb-6">
                Todos nuestros especialistas tienen formación internacional
              </p>
              <div className="grid gap-3">
                {team
                  .filter(
                    (t) =>
                      !selectedService ||
                      t.specialties.some((s) =>
                        services
                          .find((sv) => sv.id === selectedService)
                          ?.name.includes(s.slice(0, 5))
                      )
                  )
                  .map((member) => (
                    <button
                      key={member.name}
                      onClick={() => setSelectedProfessional(member.name)}
                      className={`text-left p-4 rounded-lg border-2 transition-all touch-target ${
                        selectedProfessional === member.name
                          ? "border-accent bg-accent/5"
                          : "border-neutral-300 hover:border-neutral-400"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-semibold text-sm">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{member.name}</p>
                          <p className="text-sm text-neutral-500">
                            {member.title}
                          </p>
                        </div>
                        {selectedProfessional === member.name && (
                          <Check className="w-5 h-5 text-accent" />
                        )}
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <DateTimeStep
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectDate={setSelectedDate}
              onSelectTime={setSelectedTime}
            />
          )}
          {currentStep === 4 && (
            <ConfirmStep
              service={service}
              professional={professional}
              date={selectedDate}
              time={selectedTime}
              patientName={patientName}
              email={email}
              phone={phone}
              country={country}
              consent={consent}
              onNameChange={setPatientName}
              onEmailChange={setEmail}
              onPhoneChange={setPhone}
              onCountryChange={setCountry}
              onConsentChange={setConsent}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        {currentStep > 1 ? (
          <Button
            variant="secondary"
            onClick={() => setCurrentStep((prev) => prev - 1)}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Atrás
          </Button>
        ) : (
          <div />
        )}
        {currentStep < 4 ? (
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!canProceed()}
          >
            Continuar
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!canProceed()}
          >
            Confirmar Cita
          </Button>
        )}
      </div>
    </div>
  )
}
