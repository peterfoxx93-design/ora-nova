import { Hero } from "@/components/sections/Hero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { PriceComparison } from "@/components/sections/PriceComparison"
import { StatsBar } from "@/components/sections/StatsBar"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTASection } from "@/components/sections/CTASection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PriceComparison />
      <StatsBar />
      <Testimonials />
      <CTASection />
    </>
  )
}
