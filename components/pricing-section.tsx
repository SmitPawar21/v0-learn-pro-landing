"use client"

import React, { useState } from "react"
import { Check, ArrowRight, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for exploring learning paths and building basics.",
    features: [
      "Access to 3 introductory courses",
      "Community forum access",
      "Basic project templates",
      "Monthly newsletter"
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro Master",
    price: "₹999",
    period: "/month",
    description: "The complete toolkit to accelerate your engineering career.",
    features: [
      "Unlimited access to all courses",
      "Weekly live mentorship sessions",
      "Industry-recognized certification",
      "Portfolio code reviews",
      "Priority 24/7 support",
      "Exclusive discord community",
      "Job placement assistance"
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
]

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="relative px-6 py-24 sm:py-32 overflow-hidden bg-white text-[#1A2539]">
      
      {/* Background Decor - Subtle Grid */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#1A253908_1px,transparent_1px),linear-gradient(to_bottom,#1A253908_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-[#1A2539]">
            Simple, transparent investment.
          </h2>
          <p className="text-lg text-[#1A2539]/60 leading-relaxed">
            Choose the plan that aligns with your ambition. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const isHovered = hoveredIndex === index
            const isPro = plan.highlighted

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group rounded-3xl transition-all duration-500 ease-out"
              >
                {/* --- PRO CARD EFFECTS --- */}
                {isPro && (
                  <>
                    {/* Golden Glow Behind */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-amber-200/40 via-amber-100/10 to-transparent blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />
                    
                    {/* Gradient Border Ring */}
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-amber-400 via-yellow-300 to-transparent opacity-100" />
                  </>
                )}

                {/* --- CARD SURFACE --- */}
                <div 
                  className={`
                    relative h-full p-8 sm:p-10 rounded-3xl bg-white border transition-all duration-300
                    flex flex-col justify-between
                    ${isPro 
                      ? 'border-transparent shadow-xl shadow-amber-900/5' 
                      : `border-slate-200 hover:border-[#1A2539]/20 shadow-sm hover:shadow-lg hover:shadow-[#1A2539]/5`
                    }
                  `}
                >
                  <div>
                    {/* Badge for Pro */}
                    {isPro && (
                      <div className="absolute top-0 right-0 -mt-3 mr-6">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/30">
                          <Sparkles className="w-3 h-3 fill-white" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-8">
                      <h3 className={`text-xl font-bold mb-2 ${isPro ? 'text-amber-600' : 'text-[#1A2539]'}`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-[#1A2539] tracking-tight">{plan.price}</span>
                        <span className="text-[#1A2539]/50 font-medium">{plan.period}</span>
                      </div>
                      <p className="mt-4 text-[#1A2539]/70 text-sm leading-relaxed min-h-[40px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features Divider */}
                    <div className={`h-px w-full mb-8 ${isPro ? 'bg-amber-100' : 'bg-slate-100'}`} />

                    {/* Features List */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`
                            flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5
                            ${isPro ? 'bg-amber-100 text-amber-600' : 'bg-[#1A2539]/5 text-[#1A2539]'}
                          `}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-sm font-medium text-[#1A2539]/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`
                      w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300
                      flex items-center justify-center gap-2 group-hover:gap-3
                      ${isPro 
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:brightness-105' 
                        : 'bg-white border-2 border-[#1A2539]/10 text-[#1A2539] hover:border-[#1A2539] hover:bg-[#1A2539] hover:text-white'
                      }
                    `}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Support Link */}
        <div className="mt-16 text-center">
          <p className="text-[#1A2539]/60">
            Need a custom enterprise plan?{' '}
            <a href="#" className="font-bold text-[#1A2539] border-b border-[#1A2539]/20 hover:border-[#1A2539] transition-colors pb-0.5">
              Contact Sales
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}