"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    const selectId =
      id || label?.toLowerCase().replace(/\s+/g, "-") || "select"

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-secondary/80"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              "flex h-12 w-full appearance-none rounded-xl border border-white/10 bg-primary-light/50 px-4 py-3 pr-10 text-sm text-secondary transition-colors focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px]",
              "aria-[invalid=true]:border-error/50 aria-[invalid=true]:focus-visible:border-error aria-[invalid=true]:focus-visible:ring-error/30",
              className
            )}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? `${selectId}-error` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-secondary/40" />
        </div>
        {error && (
          <p
            id={`${selectId}-error`}
            className="text-xs text-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
