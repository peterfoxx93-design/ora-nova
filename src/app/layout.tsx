import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SavingsBanner } from "@/components/shared/SavingsBanner"
import { ChatWidget } from "@/components/chatbot/ChatWidget"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: {
    default: "Ora Nova | Turismo Dental en República Dominicana",
    template: "%s | Ora Nova",
  },
  description:
    "Odontología de clase mundial en República Dominicana. Precios transparentes, datos comparativos, resultados excepcionales. Ahorra hasta 70% vs EE.UU.",
  keywords: [
    "turismo dental República Dominicana",
    "implantes dentales RD",
    "odontología Santo Domingo",
    "carillas de porcelana",
    "precios dentales RD",
    "dental tourism Dominican Republic",
  ],
  openGraph: {
    type: "website",
    locale: "es_DO",
    siteName: "Ora Nova",
    title: "Ora Nova — Odontología de Clase Mundial en RD",
    description: "Precios transparentes, datos reales, resultados excepcionales.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#F8F7F4] text-[#111827] font-body antialiased">
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>

        <Navbar />
        <SavingsBanner />

        <main id="main-content">{children}</main>

        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
