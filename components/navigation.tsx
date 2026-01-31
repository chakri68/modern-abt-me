"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      
      // Find active section
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <Link
          href="#"
          className="font-sans text-sm font-medium tracking-widest text-foreground transition-colors hover:text-accent"
        >
          CDR
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-sans text-xs tracking-widest uppercase transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-accent" />
              )}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="border border-foreground/20 px-4 py-2 font-sans text-xs tracking-widest uppercase text-foreground transition-all hover:border-accent hover:text-accent"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
