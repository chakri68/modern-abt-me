"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const experiences = [
  {
    company: "Siemens EDA",
    title: "R&D Software Engineer",
    period: "Jul 2024 — Present",
    location: "Bengaluru, India",
    achievements: [
      "Developing scalable software solutions for electronic design automation",
      "Collaborating with cross-functional teams to deliver high-quality products",
      "Implementing best practices in software engineering and code quality",
    ],
  },
  {
    company: "IIIT Hyderabad",
    title: "Software Developer",
    period: "Aug 2023 — Apr 2024",
    location: "Hyderabad, India",
    achievements: [
      "Built and maintained VLABS virtual labs platform serving 1M+ students",
      "Developed reusable UI components using React and TypeScript",
      "Optimized performance and improved user experience metrics",
    ],
  },
  {
    company: "Piramal Finance",
    title: "Software Engineering Intern",
    period: "May 2023 — Jul 2023",
    location: "Mumbai, India",
    achievements: [
      "Developed internal tools improving operational efficiency by 40%",
      "Built RESTful APIs and integrated third-party services",
      "Participated in agile development cycles and code reviews",
    ],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-card px-6 py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div
          className={`mb-16 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-accent">
            02
          </span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Experience
          </span>
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`group border-t border-border transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid py-8 lg:grid-cols-12 lg:py-12">
                {/* Company & Period */}
                <div className="mb-4 lg:col-span-3 lg:mb-0">
                  <h3 className="font-sans text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                    {exp.company}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Title & Location */}
                <div className="mb-4 lg:col-span-3 lg:mb-0">
                  <p className="font-sans text-sm text-foreground">
                    {exp.title}
                  </p>
                  <p className="mt-1 font-mono text-[10px] tracking-widest text-muted-foreground">
                    {exp.location}
                  </p>
                </div>

                {/* Achievements */}
                <div
                  className={`lg:col-span-6 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "translate-x-0 opacity-100"
                      : "lg:translate-x-4 lg:opacity-70"
                  }`}
                >
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex gap-3 font-sans text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Final border */}
          <div className="border-t border-border" />
        </div>

        {/* CTA */}
        <div
          className={`mt-12 transition-all delay-700 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="https://linkedin.com/in/chakradhar-reddy-d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-accent"
          >
            View full experience on LinkedIn
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </Link>
        </div>

        {/* Decorative large text */}
        {/* <div
          className={`pointer-events-none absolute bottom-12 left-6 transition-all delay-700 duration-1000 lg:left-12 ${
            isVisible ? "translate-y-0 opacity-[0.03]" : "translate-y-20 opacity-0"
          }`}
        >
          <span className="font-sans text-[20vw] font-bold tracking-tighter text-foreground">
            Work
          </span>
        </div> */}
      </div>
    </section>
  );
}
