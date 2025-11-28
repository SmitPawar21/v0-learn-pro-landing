"use client"

import { TrendingUp, Users, Star } from "lucide-react"
import { useState } from "react"

export default function HighlightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "Learners Trained",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Course Completion Rate",
    },
    {
      icon: Star,
      number: "#1",
      label: "Bootcamp Platform",
    },
  ]

  return (
    <section className="relative px-6 py-20 sm:py-32 overflow-hidden bg-white">
      {/* Styles for animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const isHovered = index === hoveredIndex

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Animated Background Glow (Behind Card) */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                  isHovered ? 'opacity-100 translate-y-2' : 'opacity-0 translate-y-0'
                }`}>
                  <div className="absolute inset-0 rounded-2xl bg-[#1A2539] blur-xl opacity-20" />
                </div>

                {/* Card Surface */}
                <div className={`relative h-full rounded-2xl bg-white border p-8 text-center transition-all duration-300 ${
                  isHovered 
                    ? 'border-[#1A2539]/20 -translate-y-1' 
                    : 'border-slate-100 shadow-sm translate-y-0'
                }`}>
                  {/* Icon Container */}
                  <div className={`h-14 w-14 rounded-xl mx-auto mb-6 flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? 'bg-[#1A2539] text-white shadow-lg shadow-[#1A2539]/30 scale-110'
                      : 'bg-[#1A2539]/5 text-[#1A2539]'
                  }`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl sm:text-5xl font-bold mb-3 text-[#1A2539]">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <p className="text-[#1A2539]/70 font-medium">{stat.label}</p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1.5 rounded-b-2xl transition-all duration-500 bg-[#1A2539] ${
                    isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials Banner - Uses the dark color for background */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1A2539]/20">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[#1A2539]" />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/5" />
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>

          {/* Content */}
          <div className="relative p-8 sm:p-12 text-center">
            <h3 className="mb-6 text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Trusted by learners and companies worldwide
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-lg mb-10">
              Join thousands of learners who have transformed their careers. Our comprehensive curriculum and expert mentorship have proven results.
            </p>

            {/* Stats Line */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/60 text-sm mt-1 uppercase tracking-wider font-semibold">Courses</div>
              </div>
              
              <div className="hidden sm:block w-px bg-white/10" />
              
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-white/60 text-sm mt-1 uppercase tracking-wider font-semibold">Mentors</div>
              </div>
              
              <div className="hidden sm:block w-px bg-white/10" />
              
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/60 text-sm mt-1 uppercase tracking-wider font-semibold">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}