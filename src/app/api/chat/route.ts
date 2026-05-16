import { NextResponse } from "next/server"
import { faq } from "@/data/testimonials"

// Chat memory — simple in-memory store with TTL (30 min)
// En producción: usar Redis o similar. Sin almacenamiento PII.
const sessions = new Map<
  string,
  {
    messages: Array<{ role: string; content: string }>
    lastActive: number
    preferences?: Record<string, string>
  }
>()

const TTL_MS = 30 * 60 * 1000 // 30 minutos

// Cleanup old sessions every 100 requests
let requestCount = 0
function cleanupSessions() {
  const now = Date.now()
  for (const [id, session] of sessions) {
    if (now - session.lastActive > TTL_MS) {
      sessions.delete(id)
    }
  }
}

function generateSessionId(): string {
  return Math.random().toString(36).substring(2, 15)
}

interface ChatRequest {
  message: string
  sessionId?: string
}

function findBestResponse(message: string): string {
  const lower = message.toLowerCase()

  // Saludo
  if (
    lower.includes("hola") ||
    lower.includes("buenas") ||
    lower.includes("hey") ||
    lower.includes("hi")
  ) {
    return "¡Hola! 👋 Soy el asistente de Ora Nova. Puedo ayudarte con información sobre nuestros tratamientos, precios, o agendar una cita. ¿En qué puedo ayudarte?"
  }

  // Precios / cuánto cuesta
  if (
    lower.includes("precio") ||
    lower.includes("cuánto cuesta") ||
    lower.includes("costo") ||
    lower.includes("price") ||
    lower.includes("cost")
  ) {
    return getPriceResponse(lower)
  }

  // Comparativa con otros países
  if (
    lower.includes("méxico") ||
    lower.includes("colombia") ||
    lower.includes("argentina") ||
    lower.includes("ee.uu") ||
    lower.includes("usa") ||
    lower.includes("canadá") ||
    lower.includes("vs") ||
    lower.includes("compar")
  ) {
    return "Nuestros precios son altamente competitivos. Por ejemplo, un implante + corona cuesta desde $1,195 USD en RD, mientras que en EE.UU. cuesta $4,500 USD (ahorro del 73%). En México desde $1,100 USD, en Colombia desde $1,500 USD. Te recomiendo visitar nuestra página de Comparativa para ver la tabla completa: oranova.com/comparativa"
  }

  // Implantes
  if (lower.includes("implante") || lower.includes("implant")) {
    return getFAQResponse("implante")
  }

  // Carillas
  if (
    lower.includes("carilla") ||
    lower.includes("veneer") ||
    lower.includes("porcelana")
  ) {
    return getFAQResponse("carilla")
  }

  // Agendar cita
  if (
    lower.includes("agendar") ||
    lower.includes("cita") ||
    lower.includes("reservar") ||
    lower.includes("appointment") ||
    lower.includes("book")
  ) {
    return "¡Claro! Puedes agendar tu cita directamente en nuestra web: oranova.com/reserva. El proceso toma solo 2 minutos. Seleccionas el tratamiento, tu profesional preferido, fecha y hora. Si necesitas ayuda con algún paso, dime."
  }

  // Turismo / viaje desde otro país
  if (
    lower.includes("viajar") ||
    lower.includes("vuelo") ||
    lower.includes("turismo") ||
    lower.includes("travel") ||
    lower.includes("hotel") ||
    lower.includes("alojamiento")
  ) {
    return getFAQResponse("viaje")
  }

  // Garantía
  if (lower.includes("garantía") || lower.includes("warranty")) {
    return getFAQResponse("garantía")
  }

  // Horario / ubicación
  if (
    lower.includes("horario") ||
    lower.includes("ubicación") ||
    lower.includes("dónde están") ||
    lower.includes("dirección")
  ) {
    return "Estamos ubicados en Santo Domingo, República Dominicana. Nuestro horario es lunes a viernes de 8:00 AM a 6:00 PM, y sábados de 9:00 AM a 2:00 PM. Para visitantes internacionales, coordinamos horarios especiales según tu vuelo."
  }

  // Pago / financiamiento
  if (
    lower.includes("pago") ||
    lower.includes("tarjeta") ||
    lower.includes("financi") ||
    lower.includes("payment") ||
    lower.includes("transferencia")
  ) {
    return getFAQResponse("pago")
  }

  // Default
  return getDefaultResponse()
}

function getPriceResponse(lower: string): string {
  if (lower.includes("implante")) {
    return "Un implante completo (tornillo + corona) en Ora Nova cuesta desde $1,195 USD. En comparación, en EE.UU. cuesta $4,500 USD — un ahorro del 73%. Incluye garantía de 10 años."
  }
  if (lower.includes("carilla") || lower.includes("porcelana")) {
    return "Las carillas de porcelana E-max en Ora Nova cuestan $395 USD por unidad. En EE.UU. cuestan $1,800 USD por unidad. Ahorras hasta un 78%."
  }
  if (lower.includes("limpieza")) {
    return "Limpieza profesional desde $90 USD ($300 USD en EE.UU.). Incluye ultrasonido, pulido coronario y aplicación de flúor."
  }
  if (lower.includes("endodoncia") || lower.includes("conducto")) {
    return "Endodoncia desde $450 USD ($1,400 USD en EE.UU.). Realizada bajo microscopio quirúrgico para máxima precisión."
  }
  return "Nuestros precios son 60-75% más bajos que en EE.UU. Todos los precios están publicados en oranova.com/servicios. ¿Qué tratamiento te interesa?"
}

function getFAQResponse(keyword: string): string {
  const matched = faq.find(
    (f) =>
      f.answer.toLowerCase().includes(keyword) ||
      f.question.toLowerCase().includes(keyword)
  )
  if (matched) return matched.answer

  // Respuestas específicas por keyword
  const answers: Record<string, string> = {
    implante:
      "Un implante dental reemplaza la raíz del diente perdido con un tornillo de titanio. En Ora Nova usamos implantes Straumann (Suiza) y Nobel Biocare (Suecia). Precio desde $1,195 USD con garantía de 10 años. La cirugía dura 1-2 horas y la recuperación 7-10 días.",
    carilla:
      "Las carillas de porcelana E-max son láminas ultradelgadas que se adhieren a la superficie frontal del diente. En Ora Nova cuestan $395 USD por unidad. El proceso toma 2-3 sesiones y el resultado dura 15-20 años.",
    viaje:
      "Para pacientes internacionales, recomendamos: 1) Agenda tu cita online, 2) Te coordinamos traslado aeropuerto-clínica, 3) Para tratamientos de implantes,建议 quedarse 7-10 días; para All-on-4, 14-21 días. Podemos recomendarte alojamiento según tu presupuesto.",
    "garantía":
      "Todos nuestros tratamientos tienen garantía: implantes (10 años), coronas y carillas (5 años), blanqueamiento (1 año con retoque gratuito). Te damos un certificado de garantía internacional.",
    pago:
      "Aceptamos: transferencia bancaria internacional, tarjetas de crédito (Visa, Mastercard, Amex), y efectivo en USD o DOP. Descuento del 5% por pago en efectivo. Financiamiento disponible para tratamientos mayores a $3,000 USD.",
  }

  for (const [key, value] of Object.entries(answers)) {
    if (keyword.includes(key)) return value
  }

  return getDefaultResponse()
}

function getDefaultResponse(): string {
  return "Gracias por tu consulta. Puedo ayudarte con:\n\n" +
    "💰 **Precios** de tratamientos\n" +
    "📊 **Comparativas** RD vs otros países\n" +
    "✈️ **Turismo dental** (viajes, alojamiento)\n" +
    "📅 **Agendar una cita**\n" +
    "🔧 **Información técnica** de procedimientos\n\n" +
    "¿Sobre qué tema te gustaría saber más?"
}

export async function POST(request: Request) {
  try {
    const body: ChatRequest = await request.json()
    const { message, sessionId } = body

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Mensaje requerido" },
        { status: 400 }
      )
    }

    const id = sessionId || generateSessionId()

    // Get or create session
    if (!sessions.has(id)) {
      sessions.set(id, { messages: [], lastActive: Date.now() })
    }

    const session = sessions.get(id)!
    session.lastActive = Date.now()
    session.messages.push({ role: "user", content: message })

    // Get response
    const response = findBestResponse(message)
    session.messages.push({ role: "assistant", content: response })

    // Periodic cleanup
    requestCount++
    if (requestCount % 100 === 0) {
      cleanupSessions()
    }

    return NextResponse.json({
      response,
      sessionId: id,
      timestamp: Date.now(),
    })
  } catch (error) {
    console.error("[Chat Error]", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
