import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        centered && "mx-auto items-center text-center"
      )}
    >
      <h2
        className={cn(
          "font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl",
          light ? "text-secondary" : "text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed md:text-lg",
            centered && "mx-auto",
            light ? "text-secondary/70" : "text-primary/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
