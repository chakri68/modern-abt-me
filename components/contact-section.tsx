"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useStagger } from "@/hooks/use-stagger";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/chakri68",
    label: "chakri68",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/chakradhar-reddy-d",
    label: "chakradhar-reddy-d",
  },
  {
    name: "Email",
    url: "mailto:chakridevireddy69@gmail.com",
    label: "chakridevireddy69@gmail.com",
  },
];

export function ContactSection() {
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
      id="contact"
      className="relative bg-card px-6 py-32 lg:px-12 snap-center snap-always"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div
          className={`mb-16 flex items-center gap-4 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <span className="font-mono text-xs tracking-widest text-accent">
            06
          </span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Contact
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left - CTA */}
          <div
            className={`lg:col-span-7 transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="font-sans text-4xl font-medium leading-tight tracking-tight text-foreground lg:text-6xl text-balance">
              {"Let's build"}
              <br />
              <span className="text-accent">something great</span>
              <br />
              together.
            </h2>

            <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
              I’m always happy to talk about new opportunities, interesting
              projects, or just nerd out about technology and design.
            </p>

            <div className="flex flex-col w-max">
              <Link
                href="mailto:chakridevireddy69@gmail.com"
                className="mt-8 inline-flex items-center gap-3 border border-accent bg-accent px-12 py-4 w-full font-sans text-sm font-medium tracking-wide text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
              >
                Get in Touch
                <svg
                  className="h-4 w-4"
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
              </Link>

              <div
                className={`mt-4 transition-all delay-700 duration-700 w-full ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <Link
                  href="https://chakri68.github.io/resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 font-mono text-xs tracking-widest text-foreground uppercase transition-all hover:border-accent hover:text-accent justify-center w-full"
                >
                  See my resume
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
            </div>
          </div>

          {/* Right - Links */}
          <div
            className={`lg:col-span-4 lg:col-start-9 transition-all delay-400 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h3 className="mb-6 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Find me online
            </h3>

            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.url.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`group flex items-center justify-between border-b border-border pb-4 transition-all duration-500 ${
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
                  <div>
                    <span className="font-sans text-lg font-medium text-foreground transition-colors group-hover:text-accent">
                      {link.name}
                    </span>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {link.label}
                    </p>
                  </div>
                  <svg
                    className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent"
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
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-32 grid grid-rows-3 items-center justify-between gap-4 border-t border-border pt-8 lg:grid-cols-3 lg:grid-rows-none transition-all delay-700 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            © 2026 Chakradhar Reddy Devireddy
          </p>

          <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase text-left lg:text-center">
            Crafted with care
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase transition-colors hover:text-accent text-right lg:justify-end"
          >
            Back to top
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
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>

        {/* Decorative large text */}
        {/* <div
          className={`pointer-events-none absolute bottom-32 right-6 transition-all delay-700 duration-1000 lg:right-12 ${
            isVisible
              ? "translate-y-0 opacity-[0.03]"
              : "translate-y-20 opacity-0"
          }`}
        >
          <span className="font-sans text-[20vw] font-bold tracking-tighter text-foreground">
            Hello
          </span>
        </div> */}
      </div>
    </section>
  );
}
