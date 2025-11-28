"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Engineer @ Google",
    avatar: "👩‍💻",
    content:
      "LearnPro completely transformed my coding skills. The real-world projects gave me practical experience I couldn't get anywhere else.",
    rating: 5,
  },
  {
    name: "Alex Patel",
    role: "Full Stack Developer @ Meta",
    avatar: "👨‍💼",
    content:
      "The mentorship program was invaluable. My mentor helped me navigate technical interviews and landing my dream job.",
    rating: 5,
  },
  {
    name: "Jordan Kim",
    role: "Product Designer @ Apple",
    avatar: "👩‍🎨",
    content:
      "Structured learning paths make it so easy to stay motivated and track progress. Highly recommend for career changers!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative px-6 py-20 sm:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-foreground">Hear from our learners</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real success stories from professionals who've transformed their careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border/40 bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20"
            >
              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-foreground leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
