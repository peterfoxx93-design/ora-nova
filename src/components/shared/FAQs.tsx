"use client"

import { useState } from "react"
import { faq } from "@/data/testimonials"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FAQ } from "@/types"

interface FAQsProps {
  filter?: FAQ["category"]
}

export function FAQs({ filter }: FAQsProps) {
  const [openId, setOpenId] = useState<number | null>(null)
  const items = filter ? faq.filter((item) => item.category === filter) : faq

  return (
    <div className="divide-y divide-[#E5E3DC] rounded-2xl border border-[#E5E3DC] bg-white">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpenId(openId === idx ? null : idx)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-primary hover:bg-[#F8F7F4] transition-colors"
          >
            <span>{item.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-gray-400 transition-transform duration-200",
                openId === idx && "rotate-180",
              )}
            />
          </button>
          {openId === idx && (
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}
