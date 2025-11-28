"use client"

import React from "react"
import { Linkedin, Twitter, Github, Globe } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Enterprise", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Legal", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Contact", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#1A2539] text-white border-t border-white/10 overflow-hidden">
      
      {/* Background Pattern - Subtle Grid */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 relative z-10">
        <div className="grid gap-12 lg:grid-cols-4 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:pr-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/10 shadow-inner">
                <span className="text-sm font-bold text-white">LP</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">LearnPro</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Engineered for excellence. We provide the structured learning pathways required to master modern technology stacks.
            </p>
            
            {/* Socials */}
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin, Globe].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-slate-400 hover:bg-white hover:text-[#1A2539] transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase opacity-90">Product</h4>
              <ul className="space-y-4">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase opacity-90">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase opacity-90">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2025 LearnPro Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}