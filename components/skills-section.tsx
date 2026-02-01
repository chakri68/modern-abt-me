"use client";

import { useStagger } from "@/hooks/use-stagger";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Go", "TypeScript", "JavaScript", "Python", "Java", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "SvelteKit"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST", "GraphQL", "gRPC", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "GCP", "CI/CD", "Figma", "Kafka"],
  },
];

export function SkillsSection() {
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
      id="skills"
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
            04
          </span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Skills
          </span>
        </div>

        {/* Two column layout */}
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left - Large text */}
          <div
            className={`lg:col-span-5 transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="font-sans text-3xl font-medium leading-tight tracking-tight text-foreground lg:text-5xl text-balance">
              Technologies I work with
            </h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
              They say tools don’t make the craftsman — but I still enjoy
              collecting good ones. Always learning new tech, while staying
              dangerously deep in TypeScript.
            </p>
          </div>

          {/* Right - Skills grid */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-12 sm:grid-cols-2">
              {skillCategories.map((category, catIndex) => (
                <div
                  key={category.title}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: shouldStagger
                      ? `${300 + catIndex * 100}ms`
                      : "unset",
                  }}
                >
                  <h3 className="mb-4 font-mono text-[10px] tracking-widest text-accent uppercase">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skill}
                        className="group flex items-center gap-3 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                        style={{
                          transitionDelay: shouldStagger
                            ? `${400 + catIndex * 100 + skillIndex * 50}ms`
                            : "",
                        }}
                      >
                        <span className="h-px w-4 bg-border transition-all group-hover:w-6 group-hover:bg-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div
          className={`pointer-events-none absolute bottom-0 right-0 overflow-hidden transition-all delay-500 duration-1000 ${
            isVisible ? "opacity-[0.02]" : "opacity-0"
          }`}
        >
          <div className="translate-x-1/4 translate-y-1/4 font-sans text-[30vw] font-bold tracking-tighter text-foreground">
            {"</>"}
          </div>
        </div>
      </div>
    </section>
  );
}
