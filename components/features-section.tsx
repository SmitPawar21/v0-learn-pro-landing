"use client"

import { BookOpen, Users, Award, Code } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Real-World Projects",
    description: "Build portfolio-grade projects designed with industry standards.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn directly from professionals working in top tech companies.",
  },
  {
    icon: BookOpen,
    title: "Recorded Sessions",
    description: "Access high-quality recorded content anytime, anywhere.",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Earn industry-recognized certificates upon course completion.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative px-6 py-20 sm:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-foreground">Everything you need to succeed</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and resources designed to accelerate your learning journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
