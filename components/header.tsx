"use client"

import { Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`
        sticky top-0 z-50 w-full transition-all duration-300 border-b
        ${scrolled 
          ? "bg-[#1A2539]/90 backdrop-blur-md border-[#1A2539]" 
          : "bg-[#1A2539] border-transparent"
        }
      `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#1A2539] shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-sm font-extrabold tracking-tighter">LP</span>
          </div>
          <span className="hidden font-bold text-white text-lg tracking-tight sm:inline group-hover:opacity-90 transition-opacity">
            LearnPro
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {["Features", "Pricing", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="group relative px-5 py-2.5 rounded-full bg-white text-[#1A2539] text-sm font-bold shadow-lg shadow-white/5 hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 overflow-hidden">
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`
          md:hidden fixed inset-x-0 top-[73px] bg-[#1A2539] border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <a 
            href="#features" 
            className="text-lg font-medium text-slate-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="text-lg font-medium text-slate-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium text-slate-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          
          <div className="h-px bg-white/10 my-2" />
          
          <div className="flex flex-col gap-4">
            <button className="w-full py-3 text-center text-slate-300 hover:text-white font-medium">
              Sign In
            </button>
            <button className="w-full py-3 rounded-xl bg-white text-[#1A2539] font-bold shadow-lg hover:bg-slate-100 transition-colors">
              Start Free
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}