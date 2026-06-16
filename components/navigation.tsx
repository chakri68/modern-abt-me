"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

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
  const [menuOpen, setMenuOpen] = useState(false)

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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled || menuOpen ? "bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <Link
          href="#"
          onClick={() => setMenuOpen(false)}
          className="font-sans text-sm font-medium tracking-widest text-foreground transition-colors hover:text-accent"
        >
          CDR
        </Link>

        {/* Desktop nav */}
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
          className="hidden border border-foreground/20 px-4 py-2 font-sans text-xs tracking-widest uppercase text-foreground transition-all hover:border-accent hover:text-accent md:inline-block"
        >
          Contact
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-6 w-6 items-center justify-center text-foreground transition-colors hover:text-accent md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-border bg-background/95 backdrop-blur-md transition-all duration-500 ease-out md:hidden ${
          menuOpen ? "max-h-[80vh] border-b opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-baseline gap-4 font-sans text-sm tracking-widest uppercase transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="font-mono text-[10px] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center border border-foreground/20 px-4 py-3 font-sans text-xs tracking-widest uppercase text-foreground transition-all hover:border-accent hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
