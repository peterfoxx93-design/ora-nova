interface PageHeroProps {
  title: string
  subtitle?: string
  size?: "small" | "medium"
}

export function PageHero({ title, subtitle, size = "small" }: PageHeroProps) {
  return (
    <section
      className={`gradient-hero flex items-center ${
        size === "medium" ? "min-h-[40vh] py-20" : "py-16 md:py-20"
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-heading text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-secondary/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
