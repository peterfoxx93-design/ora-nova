export interface Service {
  id: string
  name: string
  nameEn?: string
  description: string
  descriptionEn?: string
  technicalDetail: string
  icon: string
  priceRD: number
  priceMX: number
  priceCO: number
  priceAR: number
  priceUS: number
  savingsPercent: number
  duration: string
  recovery: string
}

export interface CountryPrice {
  country: string
  code: string
  flag: string
  currency: string
  implante: number
  carilla: number
  endodoncia: number
  limpieza: number
  blanqueamiento: number
  allOn4: number
}

export interface TeamMember {
  name: string
  title: string
  titleEn?: string
  specialties: string[]
  education: string
  bio: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  flag: string
  treatment: string
  rating: number
  quote: string
  savings: number
}

export interface FAQ {
  question: string
  answer: string
  category: "general" | "treatment" | "travel" | "payment"
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  image: string
  date: string
  readTime: string
  featured: boolean
}

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp: number
}

export interface AppointmentRequest {
  service: string
  professional: string
  date: string
  time: string
  patientName: string
  email: string
  phone: string
  country: string
  notes?: string
  consent: boolean
}
