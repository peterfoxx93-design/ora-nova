import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8">
        <div className="text-[10rem] font-heading font-bold text-accent/20 select-none">404</div>
        <Search className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-accent" />
      </div>
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary">Página No Encontrada</h1>
      <p className="mt-3 text-gray-500 max-w-md">
        La página que buscas no existe o ha sido movida. Pero tu sonrisa perfecta sigue esperándote.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-white font-semibold hover:bg-accent/90 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al Inicio
      </Link>
    </div>
  )
}
