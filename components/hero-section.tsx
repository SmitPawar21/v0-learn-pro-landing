"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">New bootcamp cohort launching</span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                Upskill with
                <span className="block">structured</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  learning pathways
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-muted-foreground sm:text-xl max-w-md">
                Learn job-ready skills with expert mentors, real projects, and guided learning journeys.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-border/40 hover:bg-muted bg-transparent"
              >
                Explore Courses
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col gap-3 pt-4">
              <p className="text-sm text-muted-foreground">Trusted by learners worldwide</p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">5,000+ learners already enrolled</span>
              </div>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full">
              {/* Main Dashboard Card */}
              <div className="rounded-2xl bg-card border border-border/40 p-6 shadow-2xl">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                    <div className="flex gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary/40" />
                      <div className="h-2 w-2 rounded-full bg-primary/40" />
                    </div>
                  </div>

                  {/* Content Blocks */}
                  <div className="space-y-3">
                    <div className="h-4 w-24 rounded-lg bg-primary/10" />
                    <div className="h-12 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20" />
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-muted">
                        <div className="h-full w-3/4 rounded-full bg-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">75%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-muted">
                        <div className="h-full w-1/2 rounded-full bg-secondary" />
                      </div>
                      <span className="text-xs text-muted-foreground">50%</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 border-t border-border/40 pt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">8</div>
                      <div className="text-xs text-muted-foreground">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-secondary">24</div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">92%</div>
                      <div className="text-xs text-muted-foreground">Progress</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -right-6 -bottom-6 rounded-xl bg-card border border-border/40 p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-foreground">Learning active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
