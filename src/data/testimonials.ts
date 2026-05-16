import type { Testimonial, FAQ } from "@/types"

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Johnson",
    location: "Toronto, Canadá",
    flag: "🇨🇦",
    treatment: "All-on-4 Superior",
    rating: 5,
    quote: "Me ahorré más de $18,000 CAD y recibí el mismo nivel de atención que en Toronto. El equipo de Ora Nova coordinó mi traslado desde el aeropuerto y mi estancia en un resort todo incluido mientras me recuperaba.",
    savings: 18500,
  },
  {
    id: "t2",
    name: "Michael Chen",
    location: "Nueva York, EE.UU.",
    flag: "🇺🇸",
    treatment: "Implantes + Coronas",
    rating: 5,
    quote: "Tres implantes en Nueva York me costaban $13,500. En Ora Nova pagué $4,200 e incluía el alojamiento. La calidad del trabajo es impecable — mi dentista en casa no podía creer que lo hubiera hecho en RD.",
    savings: 9300,
  },
  {
    id: "t3",
    name: "Ana Lucía Rodríguez",
    location: "Madrid, España",
    flag: "🇪🇸",
    treatment: "Carillas de Porcelana (8 unidades)",
    rating: 5,
    quote: "Siempre quise mejorar mi sonrisa pero los precios en Madrid eran prohibitivos. En Ora Nova me hicieron 8 carillas E-max por lo que costaban 2 en España. El diseño de sonrisa digital me permitió ver el resultado antes de empezar.",
    savings: 6400,
  },
  {
    id: "t4",
    name: "James & Patricia Williams",
    location: "Miami, EE.UU.",
    flag: "🇺🇸",
    treatment: "Limpieza + Blanqueamiento",
    rating: 4,
    quote: "Vinimos mi esposa y yo de vacaciones a Punta Cana y aprovechamos para hacernos una limpieza y blanqueamiento. Todo coordinado: mañana en la clínica, tarde en la playa.",
    savings: 800,
  },
]

export const faq: FAQ[] = [
  {
    question: "¿Cómo son los precios de Ora Nova comparados con EE.UU.?",
    answer: "En promedio, nuestros precios son 60-75% más bajos que en Estados Unidos para la misma calidad de materiales y procedimientos. Un implante que cuesta $4,500 USD en Nueva York, en Ora Nova es desde $1,195 USD.",
    category: "general",
  },
  {
    question: "¿Qué incluye el paquete de turismo dental?",
    answer: "Ofrecemos paquetes que pueden incluir: traslado aeropuerto-clínica, evaluación inicial, coordinación de citas, y recomendaciones de alojamiento. Algunos tratamientos complejos como All-on-4 incluyen estancia durante la fase quirúrgica.",
    category: "travel",
  },
  {
    question: "¿Cómo agenda una cita desde el extranjero?",
    answer: "Puedes agendar directamente desde nuestra web. Seleccionas el servicio, fecha deseada y horario. Te confirmamos en máximo 2 horas hábiles. También puedes contactarnos vía WhatsApp o chat en vivo.",
    category: "general",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencia bancaria internacional, tarjetas de crédito (Visa, Mastercard, Amex), y pagos en efectivo en USD o DOP. Ofrecemos descuentos del 5% por pago en efectivo y planes de financiamiento para tratamientos mayores a $3,000 USD.",
    category: "payment",
  },
  {
    question: "¿Cuánto tiempo debo quedarme en RD para un implante?",
    answer: "Para un implante simple, recomendamos quedarse 7-10 días. La cirugía se realiza el día 1-2, y al día 7-10 tienes la revisión post-operatoria antes de volar. Para All-on-4, recomendamos 14-21 días.",
    category: "travel",
  },
  {
    question: "¿Usan materiales de calidad internacional?",
    answer: "Sí. Trabajamos exclusivamente con marcas globales: implantes Straumann (Suiza) y Nobel Biocare (Suecia), porcelana E-max (Ivoclar, Liechtenstein), zirconio de grado médico, y sistemas CAD/CAM digitales de última generación.",
    category: "treatment",
  },
  {
    question: "¿Hay garantía en los tratamientos?",
    answer: "Sí. Todos nuestros tratamientos tienen garantía: implantes (10 años), coronas y carillas (5 años), blanqueamiento (1 año con retoque gratuito). Te damos un certificado de garantía internacional.",
    category: "treatment",
  },
  {
    question: "¿Hablan inglés en la clínica?",
    answer: "Sí. Todo nuestro equipo es bilingüe (español-inglés). La Dra. Gómez atendió pacientes en Nueva York durante 4 años. También podemos coordinar intérpretes para francés, portugués y alemán con 48 horas de anticipación.",
    category: "general",
  },
  {
    question: "¿Qué documentos necesito para venir desde EE.UU.?",
    answer: "Pasaporte vigente (mínimo 6 meses de validez). Los ciudadanos estadounidenses y canadienses no necesitan visa para estancias turísticas de hasta 30 días. La clínica te emite una carta de invitación médica si la necesitas.",
    category: "travel",
  },
  {
    question: "¿Cómo es el proceso de diseño de sonrisa digital?",
    answer: "Primero tomamos escaneos 3D intraorales y fotografías faciales. Con software de diseño de sonrisa (DSD), creamos una simulación digital del resultado. Ves cómo se verán tus nuevos dientes antes de iniciar cualquier tratamiento.",
    category: "treatment",
  },
]
