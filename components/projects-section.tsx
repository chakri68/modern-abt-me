"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useStagger } from "@/hooks/use-stagger";

const projects = [
  {
    name: "Node Utils",
    description:
      "A personal playground for low-level Node.js - worker-thread abstractions for real multithreading, geohashes, semaphores, and other things I built because I was curious how they actually work.",
    url: "https://github.com/chakri68/systems-node",
    tech: ["TypeScript", "Node.js"],
    number: "01",
  },
  {
    name: "CodeCollab",
    description:
      "A real-time collaborative IDE I built to see how far I could push live editing - powered by Next.js, WebSockets, and OT, with 20+ users syncing without stepping on each other.",
    url: "https://github.com/chakri68/codeCollab",
    tech: ["Next.js", "WebRTC", "JavaScript"],
    number: "02",
  },
  {
    name: "get-proctored.ai",
    description:
      "An AI-powered exam proctoring system using TensorFlow and MediaPipe - reduced false positives by ~30% with smarter rules and real-time face/eye tracking. Started as a uni project, ended up actually being used by professors.",
    url: "https://github.com/chakri68/get-proctered-public",
    tech: ["Python", "TensorFlow", "MediaPipe"],
    number: "03",
  },
  {
    name: "Pixel Drawing Simulator",
    description:
      "An interactive canvas tool for exploring pixel-level algorithms like Bresenham, flood-fill, and more. Built this so I could actually see how they behave on a real machine, not just on paper.",
    url: "https://github.com/chakri68/pixel-drawing-sim",
    tech: ["TypeScript", "Canvas", "Webpack"],
    number: "04",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="projects"
      className="relative px-6 py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div
          className={`mb-16 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-accent">
            03
          </span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Projects
          </span>
        </div>

        {/* Section title */}
        <div
          className={`mb-20 max-w-2xl transition-all delay-200 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="font-sans text-2xl font-medium leading-tight tracking-tight text-foreground lg:text-4xl text-balance w-max">
            Some things I’ve <span className="text-accent">built.</span> <br />
            Some problems I’ve enjoyed{" "}
            <span className="text-accent">overthinking.</span>
          </h2>
        </div>

        {/* Projects grid - asymmetric layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:border-accent/50 lg:p-12 ${
                index % 3 === 0 ? "lg:col-span-2" : ""
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: shouldStagger
                  ? `${300 + index * 100}ms`
                  : "unset",
              }}
            >
              {/* Project number */}
              <span className="absolute right-8 top-8 font-mono text-6xl font-bold text-border transition-colors group-hover:text-accent/20 lg:text-8xl duration-500">
                {project.number}
              </span>

              <div className="relative z-10">
                {/* Tech stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="mb-4 font-sans text-2xl font-medium text-foreground transition-colors group-hover:text-accent lg:text-3xl duration-500">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="max-w-lg font-sans text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Arrow */}
                <div className="mt-8 flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground transition-colors group-hover:text-accent duration-500">
                  View Project
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More projects link */}
        <div
          className={`mt-16 text-center transition-all delay-700 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="https://github.com/chakri68?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 font-mono text-xs tracking-widest text-foreground uppercase transition-all hover:border-accent hover:text-accent"
          >
            See everything on GitHub
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
          className={`pointer-events-none absolute bottom-12 right-6 transition-all delay-700 duration-1000 lg:right-12 ${
            isVisible ? "translate-y-0 opacity-[0.03]" : "translate-y-20 opacity-0"
          }`}
        >
          <span className="font-sans text-[20vw] font-bold tracking-tighter text-foreground">
            Build
          </span>
        </div> */}
      </div>
    </section>
  );
}
