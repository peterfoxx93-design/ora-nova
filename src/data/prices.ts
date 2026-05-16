/**
 * Datos de precios del informe Gemini:
 * "Análisis Prospectivo de la Industria Odontológica en Latinoamérica para 2026"
 *
 * Fuentes citadas en el informe original (ver referencias al final del documento).
 * Precios en USD para 2026.
 */

import type { CountryPrice } from "@/types"

export const countryPrices: CountryPrice[] = [
  {
    country: "República Dominicana",
    code: "RD",
    flag: "🇩🇴",
    currency: "DOP",
    implante: 1295,
    carilla: 395,
    endodoncia: 450,
    limpieza: 90,
    blanqueamiento: 300,
    allOn4: 9500,
  },
  {
    country: "México",
    code: "MX",
    flag: "🇲🇽",
    currency: "MXN",
    implante: 1100,
    carilla: 450,
    endodoncia: 280,
    limpieza: 50,
    blanqueamiento: 220,
    allOn4: 10000,
  },
  {
    country: "Colombia",
    code: "CO",
    flag: "🇨🇴",
    currency: "COP",
    implante: 1500,
    carilla: 500,
    endodoncia: 300,
    limpieza: 60,
    blanqueamiento: 170,
    allOn4: 9000,
  },
  {
    country: "Argentina",
    code: "AR",
    flag: "🇦🇷",
    currency: "ARS",
    implante: 900,
    carilla: 1000,
    endodoncia: 200,
    limpieza: 80,
    blanqueamiento: 280,
    allOn4: 5500,
  },
  {
    country: "Estados Unidos",
    code: "US",
    flag: "🇺🇸",
    currency: "USD",
    implante: 4500,
    carilla: 1800,
    endodoncia: 1400,
    limpieza: 300,
    blanqueamiento: 800,
    allOn4: 28000,
  },
  {
    country: "Canadá",
    code: "CA",
    flag: "🇨🇦",
    currency: "CAD",
    implante: 5000,
    carilla: 2000,
    endodoncia: 1600,
    limpieza: 350,
    blanqueamiento: 900,
    allOn4: 32000,
  },
]

export const treatmentLabels: Record<string, string> = {
  implante: "Implante + Corona",
  carilla: "Carilla de Porcelana",
  endodoncia: "Endodoncia (Conducto)",
  limpieza: "Limpieza Profesional",
  blanqueamiento: "Blanqueamiento",
  allOn4: "All-on-4 (Arcada)",
}

export const comparativeSummary = {
  rdVsMexico: {
    title: "RD vs México",
    advantage: "Hospitalidad y experiencia integral",
    rdStrength: "Paquetes turísticos + odontológicos, ambiente más relajado y seguro",
    mxStrength: "Mayor volumen, precios ligeramente menores en básicos",
  },
  rdVsColombia: {
    title: "RD vs Colombia",
    advantage: "Proximidad a EE.UU. y Europa",
    rdStrength: "Vuelos más cortos desde costa este, sin cambio de huso horario",
    coStrength: "Líder en estética dental, más reconocimiento internacional",
  },
  rdVsArgentina: {
    title: "RD vs Argentina",
    advantage: "Estabilidad económica",
    rdStrength: "Precios estables en USD, sin inflación mensual",
    arStrength: "Precios más bajos en dólares por devaluación",
  },
}

export const rdAdvantages = [
  {
    icon: "map-pin",
    title: "Ubicación Estratégica",
    description: "A 2-3 horas de vuelo desde Miami, Nueva York y Toronto. Sin cambio significativo de huso horario.",
  },
  {
    icon: "shield-check",
    title: "Estabilidad de Precios",
    description: "Todos los precios en USD. Sin inflación mensual ni variaciones cambiarias como en Argentina.",
  },
  {
    icon: "umbrella",
    title: "Experiencia Todo Incluido",
    description: "Clínicas que ofrecen paquetes con traslados, alojamiento y recuperación en entornos paradisíacos.",
  },
  {
    icon: "award",
    title: "Estándares Internacionales",
    description: "Odontólogos con formación en EE.UU. y Europa. Tecnología CAD/CAM, CBCT y microscopía quirúrgica.",
  },
]
