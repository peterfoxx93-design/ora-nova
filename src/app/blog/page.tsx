"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { useState } from "react"
import { Hero } from "@/components/shared/Hero"
import { blogPosts, blogCategories } from "@/data/blog-posts"
import { cn } from "@/lib/utils"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory)
    : blogPosts

  const featured = filtered.filter((p) => p.featured)
  const regular = filtered.filter((p) => !p.featured)

  return (
    <>
      <Hero title="Blog & Recursos" subtitle="Guías, comparativas y todo lo que necesitas saber sobre turismo dental en RD." size="small" />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === null
                  ? "bg-primary text-white"
                  : "bg-[#E5E3DC] text-gray-600 hover:bg-accent/20",
              )}
            >
              Todos
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-[#E5E3DC] text-gray-600 hover:bg-accent/20",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {featured.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-[#E5E3DC] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                    <span className="text-4xl">{post.category === "Turismo Dental" ? "\u{1F30D}" : post.category === "Comparativas" ? "\u{1F4CA}" : post.category === "Estética" ? "\u2728" : post.category === "Implantes" ? "\u{1F9B7}" : "\u{1F4AD}"}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regular.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-[#E5E3DC] bg-white overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="text-3xl">{post.category === "Estética" ? "\u2728" : post.category === "Implantes" ? "\u{1F9B7}" : "\u{1F4D6}"}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-primary group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
