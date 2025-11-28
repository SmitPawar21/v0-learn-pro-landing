"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Users, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-100 rounded-3xl opacity-40 blur-2xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-slate-50 rounded-3xl opacity-30 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-10">
            {/* Status Badge */}
            <div className="inline-flex w-fit items-center gap-2 bg-slate-50 rounded-lg px-3 py-1.5 border border-slate-200">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">New cohort launching</span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
                Master skills that matter
              </h1>

              {/* Subheading */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Learn from industry experts, build real projects, and join thousands of professionals advancing their careers through structured learning pathways.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg h-12 px-8 font-semibold flex items-center gap-2"
              >
                Start Learning Free
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg h-12 px-8 font-semibold border-slate-300 hover:bg-slate-50 text-slate-900"
              >
                Explore Courses
              </Button>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Expert Mentors</p>
                  <p className="text-slate-600 text-xs">Learn from industry leaders</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Real Projects</p>
                  <p className="text-slate-600 text-xs">Build portfolio-ready work</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Job Ready</p>
                  <p className="text-slate-600 text-xs">Get hired faster</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Lifetime Access</p>
                  <p className="text-slate-600 text-xs">Learn at your own pace</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-700"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">5,000+ learners</p>
                <p className="text-xs text-slate-500">already enrolled</p>
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full min-h-96">
              {/* Main Card */}
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
                {/* Header Bar */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Learning Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900">8</div>
                      <p className="text-xs text-slate-500 mt-1">Active Courses</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-900">42</div>
                      <p className="text-xs text-slate-500 mt-1">Hours Learned</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">92%</div>
                      <p className="text-xs text-slate-500 mt-1">Completion</p>
                    </div>
                  </div>

                  {/* Progress Sections */}
                  <div className="space-y-4 border-t border-slate-200 pt-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-900">Web Development</span>
                        <span className="text-xs text-slate-500">75%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-900">UI Design</span>
                        <span className="text-xs text-slate-500">50%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-blue-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <button className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-lg font-medium transition-colors text-sm">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}