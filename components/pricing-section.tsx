"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for exploring learning paths",
    features: ["Limited course previews", "Community access", "Basic learning paths", "Limited project access"],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    description: "Everything you need to master your skills",
    features: [
      "Full course access",
      "Expert mentorship sessions",
      "Industry-recognized certificates",
      "Unlimited projects",
      "Priority support",
      "Exclusive community",
      "Job placement assistance",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative px-6 py-20 sm:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-foreground">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. Start free and upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border transition-all ${
                plan.highlighted
                  ? "border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10 shadow-2xl shadow-primary/20 scale-105 md:scale-100"
                  : "border-border/40 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              } p-8 sm:p-10`}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-8 rounded-full font-semibold ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>

              {/* Features List */}
              <div className="space-y-4 border-t border-border/40 pt-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Hint */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Have questions?{" "}
            <button className="text-primary font-semibold hover:underline">Contact our sales team</button>
          </p>
        </div>
      </div>
    </section>
  )
}
