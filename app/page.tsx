"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HighlightsSection from "@/components/highlights-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
