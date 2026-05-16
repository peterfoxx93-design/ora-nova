import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog-posts"
import { PriceComparison } from "@/components/sections/PriceComparison"
import { CTASection } from "@/components/shared/CTASection"
import { ChevronRight, CalendarDays, Clock } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Artículo no encontrado" }
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <div className="bg-[#F8F7F4] border-b border-[#E5E3DC]">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8">
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-3">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary">{post.title}</h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
            <p className="mt-4 text-lg text-gray-600">{post.description}</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 text-center mb-8">
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">Contenido en Desarrollo</h2>
              <p className="text-gray-600">
                Este artículo se encuentra en fase de redacción. Pronto tendremos contenido detallado disponible.
                Mientras tanto, consulta nuestra comparativa de precios actualizada.
              </p>
            </div>
          </div>
        </div>
      </article>

      <PriceComparison />
      <CTASection />
    </>
  )
}
