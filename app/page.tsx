"use client"
import { useEffect, useState } from "react"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HighlightsSection from "@/components/highlights-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function Home() {
  // State to trigger the CSS fade transition
  const [isFading, setIsFading] = useState(false)
  // State to completely remove the video from the DOM after fading
  const [isIntroComplete, setIsIntroComplete] = useState(false)

  useEffect(() => {
    // 1. Start the fade-out effect slightly before the video ends (e.g., at 2.5s) 
    // or exactly when it ends (3s). Let's do 2.5s for a smoother overlap.
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 2500) 

    // 2. Wait for the fade duration (e.g., 1s) to finish, then remove video from DOM
    const removeTimer = setTimeout(() => {
      setIsIntroComplete(true)
    }, 3500) // 2.5s start + 1s transition duration

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <main className="min-h-screen w-full bg-background relative">
      
      {/* VIDEO OVERLAY 
        Rendered conditionally based on isIntroComplete.
        If it's not complete, it sits on top (z-50).
      */}
      {!isIntroComplete && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
            isFading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <video
            src="/intro.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* MAIN CONTENT 
        This is rendered immediately so it's ready when the video fades.
      */}
      <div className={!isIntroComplete ? "h-screen overflow-hidden" : ""}>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HighlightsSection />
        <TestimonialsSection />
        <PricingSection />
        <Footer />
      </div>
    </main>
  )
}