"use client";

import { useStagger } from "@/hooks/use-stagger";
import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    title: "Science India Fest",
    description:
      "Finalist in national-level hackathon organized by Government of India as India Science Festival",
  },
  {
    title: "Competitive Programming",
    description: "Codeforces expert with 1600+ rating.",
  },
  {
    title: "Drone Navigation Project",
    description:
      "Autonomous drone navigation using computer vision for obstacle detection. Featured in The Times of India",
  },
];

export function EducationSection() {
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

  const shouldStagger = useStagger(isVisible, 500);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative px-6 py-32 lg:px-12 snap-center snap-always"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div
          className={`mb-16 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-accent">
            05
          </span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Education & Achievements
          </span>
        </div>

        {/* Content */}
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Education */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative border-l border-border pl-8">
              {/* Timeline dot */}
              <div className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-accent" />

              <div className="mb-2">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  2020 — 2024
                </span>
              </div>

              <h3 className="font-sans text-2xl font-medium text-foreground lg:text-3xl">
                IIIT Lucknow
              </h3>

              <p className="mt-2 font-sans text-lg text-muted-foreground">
                B.Tech in Computer Science & Artificial Intelligence
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-sans text-4xl font-bold text-accent">
                  9.21
                </span>
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  / 10 CGPA
                </span>
              </div>

              <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
                Focused on web dev, design, algorithms and data structures.
                Active member of the GDSC and technical fest organizing
                committee.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div
            className={`transition-all delay-400 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h3 className="mb-8 font-mono text-[10px] tracking-widest text-accent uppercase">
              Notable Achievements
            </h3>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className={`group transition-all duration-500 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: shouldStagger
                      ? `${500 + index * 100}ms`
                      : "unset",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-sans text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                        {achievement.title}
                      </h4>
                      <p className="mt-1 font-sans text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative large text */}
        {/* <div
          className={`pointer-events-none absolute bottom-12 left-6 transition-all delay-700 duration-1000 lg:left-12 ${
            isVisible ? "translate-y-0 opacity-[0.03]" : "translate-y-20 opacity-0"
          }`}
        >
          <span className="font-sans text-[20vw] font-bold tracking-tighter text-foreground">
            Learn
          </span>
        </div> */}
      </div>
    </section>
  );
}
