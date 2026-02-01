"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-12 pt-32 lg:px-12 snap-center snap-always">
      {/* Large typographic name */}
      <div className="relative z-10 flex-1">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Software Engineer
          </p>
        </div>

        {/* Giant Name Typography */}
        <div className="relative mt-8 lg:mt-16">
          <h1
            className={`font-sans text-[clamp(3rem,15vw,12rem)] font-bold leading-[0.85] tracking-tighter text-foreground transition-all delay-200 duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <span className="block">Chakradhar</span>
            <span className="block text-accent">Reddy</span>
          </h1>

          {/* Decorative line */}
          <div
            className={`absolute -right-6 top-1/2 hidden h-px w-48 -translate-y-1/2 bg-border transition-all delay-500 duration-1000 lg:block ${
              mounted ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Subtitle positioned asymmetrically */}
        <div
          className={`mt-12 max-w-md lg:ml-auto lg:mr-24 lg:mt-0 lg:max-w-sm transition-all delay-700 duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            Building elegant, scalable applications at the intersection of
            design and engineering. Crafting digital experiences that matter.
          </p>
        </div>
      </div>

      {/* Bottom info strip */}
      <div
        className={`flex flex-col justify-between gap-8 border-t border-border pt-8 lg:flex-row lg:items-end transition-all delay-1000 duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Based in
          </span>
          <span className="font-sans text-sm text-foreground">India</span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Scroll to explore
          </span>
          <div className="flex items-center gap-2 justify-center">
            <ChevronDown className="w-5 h-5 text-primary animate-bounce relative top-2" />
          </div>
        </div>

        <div className="flex flex-col gap-1 lg:text-right">
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Open to
          </span>
          <span className="font-sans text-sm text-foreground">
            interesting work
          </span>
        </div>
      </div>

      {/* Background decorative element */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.02]">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-sans text-[40vw] font-bold leading-none text-foreground">
          C
        </div>
      </div>
    </section>
  );
}
