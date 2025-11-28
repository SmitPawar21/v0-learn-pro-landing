"use client"

import React, { useRef, useState, useEffect } from "react"
import { BookOpen, Users, Award, Code, ArrowUpRight } from "lucide-react"

// --- Data ---
const features = [
  {
    icon: Code,
    title: "Real-World Projects",
    description: "Build portfolio-grade systems designed with rigorous industry standards.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Direct access to engineering leads from Fortune 500 tech companies.",
  },
  {
    icon: BookOpen,
    title: "Curated Content",
    description: "High-definition technical deep-dives available on-demand, anywhere.",
  },
  {
    icon: Award,
    title: "Accreditation",
    description: "Earn verified credentials that validate your expertise to employers.",
  },
]

export default function FeaturesSection() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  // Handle Entrance Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Handle Mouse Movement for Spotlight Effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#1A2539] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-zinc-100 font-sans"
    >
      {/* Background Grid Pattern (Subtle Texture) */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header */}
        <div className={`max-w-3xl mb-20 transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Everything you need <br />
            <span className="text-zinc-500">to engineer your future.</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            A complete ecosystem of tools, resources, and mentorship designed to accelerate your trajectory from learner to leader.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {features.map((feature, index) => (
            <SpotlightCard 
              key={index} 
              feature={feature} 
              index={index} 
              mousePosition={mousePosition}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SpotlightCard({ feature, index, mousePosition, visible }) {
  const Icon = feature.icon
  
  // Calculate style for the spotlight gradient based on parent mouse position
  // We use the parent's coordinates so the light feels like a flashlight moving across the whole grid
  // rather than restarting at the edge of each card.
  
  // Note: To make this "perfect" per card relative to the grid, we usually pass the grid's ref coordinates.
  // Here, we simulate a global light source by passing the grid-relative coordinates down.

  return (
    <div 
      className={`
        group relative h-full rounded-xl border border-white/5 bg-zinc-900/40 p-6 
        transition-all duration-700 ease-out
        hover:border-white/10 hover:bg-black
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* The Glow Effect Layer */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
        aria-hidden="true"
      />
      
      {/* Another layer for border highlight specific logic if needed, but the above covers the "flashlight" feel */}

      <div className="relative h-full flex flex-col justify-between">
        <div>
          {/* Icon Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800/50 border border-white/5 group-hover:bg-zinc-800 transition-colors duration-300">
              <Icon className="h-6 w-6 text-zinc-300 group-hover:text-white transition-colors" />
            </div>
            
            {/* Subtle interactive element */}
            <ArrowUpRight className="h-5 w-5 text-zinc-700 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>

          {/* Text */}
          <h3 className="mb-3 text-lg font-medium text-zinc-100 tracking-tight">
            {feature.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Bottom decorative line that lights up */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-20 group-hover:via-white/20 group-hover:opacity-50 transition-all duration-500" />
      </div>
    </div>
  )
}