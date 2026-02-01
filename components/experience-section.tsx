"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useStagger } from "@/hooks/use-stagger";

const experiences = [
  {
    company: "Even Healthcare",
    title: "Software Development Engineer",
    period: "Nov 2025 — Present",
    location: "Bengaluru, India",
    achievements: [
      "Working on healthcare systems - from AI-powered call automation to internal tooling and performance-heavy frontend flows and generally trying to make complex internal tools less painful to use.",
    ],
  },
  {
    company: "Zomato",
    title: "Software Development Engineer",
    period: "Jul 2025 — Oct 2025",
    location: "Gurugram, India",
    achievements: [
      "Worked on delivery logistics and internal tooling —-automating onboarding flows, ticketing systems, and large-scale operational pipelines (like GPS pings ingestion from delivery agents).",
    ],
  },
  {
    company: "Zomato",
    title: "Software Engineering Intern",
    period: "Jan 2025 — Jun 2025",
    location: "Gurugram, India",
    achievements: [
      "Interned on core engineering systems - frontend refactors in TypeScript, high-throughput backend services in Go, and large data pipelines.",
    ],
  },
  {
    company: "Shinpo Engineering Pvt. Ltd.",
    title: "Backend Developer Intern",
    period: "Dec 2023 — Apr 2024",
    location: "Remote, Singapore",
    achievements: [
      "Backend and infra work - building and scaling a Strapi-based ERM, containerizing services on AWS, and tuning performance across APIs and frontend systems.",
    ],
  },
  {
    company: "WCARL — IIIT Lucknow",
    title: "Full-Stack Web Developer Intern",
    period: "Oct 2022 — Mar 2023",
    location: "Lucknow, India",
    achievements: [
      "Built and maintained a web portal and dashboards for automating and monitoring tax docs processing for UP Commercial Tax Dept., using Next.js, MSSQL, and automated PDF ingestion workflows.",
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

  const shouldStagger = useStagger(isVisible, 500);

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
              key={index}
              className={`group border-t border-border transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: shouldStagger
                  ? `${200 + index * 100}ms`
                  : "unset",
              }}
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
            Professional me is on LinkedIn - say hi
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
