"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "motion/react"

interface Stat {
  value: number
  suffix: string
  prefix: string
  decimals?: number
  label: string
}

const stats: Stat[] = [
  { value: 2500, suffix: "+", prefix: "$", label: "Ahorro Promedio" },
  { value: 15000, suffix: "+", prefix: "", label: "Pacientes Atendidos" },
  { value: 98.7, suffix: "%", prefix: "", decimals: 1, label: "Tasa de Éxito" },
  { value: 12, suffix: "+", prefix: "", label: "Años de Experiencia" },
]

function CountUp({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // ms
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = Math.min(currentStep / steps, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const currentValue = eased * stat.value
      setCount(currentValue)

      if (currentStep >= steps) {
        setCount(stat.value)
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isVisible, stat.value])

  const displayValue = count.toFixed(stat.decimals ?? 0)

  return (
    <span className="text-4xl font-bold text-white sm:text-5xl">
      {stat.prefix}
      {displayValue}
      {stat.suffix}
    </span>
  )
}

export function StatsBar() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#0A1628] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="flex items-baseline justify-center gap-1">
                <CountUp stat={stat} isVisible={isVisible} />
              </div>
              <p className="mt-2 text-sm font-medium tracking-wide text-[#9CA3AF] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
