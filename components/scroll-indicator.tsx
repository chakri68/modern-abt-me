"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || "hero");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe hero section (the first section without an id)
    const heroSection = document.querySelector("section:first-of-type");
    if (heroSection && !heroSection.id) {
      heroSection.id = "hero";
    }

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col items-end gap-4 rounded-full bg-background/80 backdrop-blur-md border border-border/50 px-3 py-4 shadow-lg">
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group relative flex items-center cursor-pointer"
              aria-label={`Scroll to ${label}`}
            >
              {/* Tooltip label - shows on hover */}
              <span
                className={`absolute right-full mr-3 whitespace-nowrap font-mono text-[9px] tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  isActive ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>

              {/* Line indicator - horizontal */}
              <span
                className={`block h-px transition-all duration-500 ease-out ${
                  isActive
                    ? "w-5 bg-accent"
                    : "w-2.5 bg-muted-foreground/40 group-hover:w-4 group-hover:bg-muted-foreground"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
