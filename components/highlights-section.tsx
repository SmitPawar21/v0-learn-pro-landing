"use client"

import { TrendingUp, Users, Star } from "lucide-react"

export default function HighlightsSection() {
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
    <section className="relative px-6 py-20 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-8 text-center transition-all hover:border-primary/20 hover:bg-card"
              >
                <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Testimonials Banner */}
        <div className="rounded-3xl border border-border/40 bg-gradient-to-r from-primary/5 to-secondary/5 p-12 text-center">
          <h3 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
            Trusted by learners and companies worldwide
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of learners who have transformed their careers and landed jobs at top tech companies. Our
            comprehensive curriculum and expert mentorship have proven results.
          </p>
        </div>
      </div>
    </section>
  )
}
