"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen px-6 py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div
          className={`mb-16 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-accent">
            01
          </span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            About
          </span>
        </div>

        {/* Content grid */}
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Large statement */}
          <div
            className={`lg:col-span-7 transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="font-sans text-3xl font-medium leading-tight tracking-tight text-foreground lg:text-5xl text-balance">
              I craft <span className="text-accent">digital experiences</span>{" "}
              that blend thoughtful design with robust engineering.
            </h2>
          </div>

          {/* Details column */}
          <div
            className={`flex flex-col gap-8 lg:col-span-4 lg:col-start-9 transition-all delay-500 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              I’m a software engineer who cares about clean interfaces, strong
              systems, and building things that feel good to use. I believe
              simplicity is the ultimate sophistication.
            </p>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              From backend engineering to user experience, I try to create
              software that stays out of the way and quietly does its job well —
              but stands out when it needs to.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Specializing in
              </span>
              <p className="font-sans text-sm text-foreground">
                Full-Stack Development, System Design, User Experience
              </p>
            </div>
          </div>
        </div>

        {/* Decorative large text */}
        <div
          className={`pointer-events-none absolute bottom-12 left-6 transition-all delay-700 duration-1000 lg:left-12 ${
            isVisible
              ? "translate-y-0 opacity-[0.03]"
              : "translate-y-20 opacity-0"
          }`}
        >
          <span className="font-sans text-[20vw] font-bold tracking-tighter text-foreground">
            About
          </span>
        </div>
      </div>
    </section>
  );
}
