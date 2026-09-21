"use client";

import { LifeGrid } from "@/components/life-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { links, person } from "@/lib/content";

const label = "font-dmmono text-xs uppercase tracking-[0.06em]";
const COLORS = { newborn: "#6B2416", survivor: "#2B2521", line: "#1B1815" };

// The front-page photo is a live Game of Life. Newspapers should try it.
export function NightHero() {
  return (
    <LifeGrid
      colors={COLORS}
      className="relative flex min-h-[640px] flex-col overflow-hidden border-b border-[#F1EADD] md:min-h-[760px]"
    >
      {({ gen, pop, reseed }) => (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,16,14,0.8)_0%,rgba(18,16,14,0.35)_45%,rgba(18,16,14,0.92)_100%)]" />

          <div className={`${label} relative mx-5 flex min-h-14 items-center justify-between gap-4 border-b border-[#F1EADD] md:mx-12 xl:mx-[72px]`}>
            <ThemeSwitcher label="Edition" align="start" />
            <span className="hidden lg:block">
              {person.role} · {person.location}
            </span>
            <span className="text-right text-[#E8553A]">{person.openTo}</span>
          </div>

          <div className="relative flex grow flex-col items-center justify-center gap-6 px-5 py-12 text-center md:px-12">
            <h1 className="font-iserif text-[clamp(4rem,12.8vw,11.5rem)] leading-[0.92] tracking-[-0.035em]">
              {person.first} <i>{person.last}</i>
            </h1>
            <div className="h-0 w-full max-w-[1296px] border-b-4 border-double border-[#F1EADD]" />
            <p className="font-iserif text-[clamp(1.5rem,3vw,2.375rem)] italic tracking-[-0.01em] text-[#E8553A]">
              All the software that&rsquo;s fit to ship.
            </p>
          </div>

          <div className="relative mx-5 flex flex-col md:mx-12 xl:mx-[72px]">
            <div className="flex flex-col gap-4 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <p className="text-sm leading-normal text-[#CFC6B6]">
                <i className="font-iserif text-[17px] text-[#F1EADD]">Pictured:</i> Conway&rsquo;s Game of Life,
                rule B3/S23. Generation <span className="tabular-nums">{gen}</span>, population{" "}
                <span className="tabular-nums">{pop}</span>. Live, unedited.
              </p>
              <button
                type="button"
                onClick={reseed}
                className={`${label} h-11 shrink-0 cursor-pointer self-start border border-[#F1EADD] bg-[#12100E] px-[18px] transition-colors hover:bg-[#F1EADD] hover:text-[#12100E] sm:self-auto`}
              >
                Reseed the universe
              </button>
            </div>
            <nav className={`${label} flex min-h-14 flex-wrap items-center justify-center gap-x-8 gap-y-1 border-t border-[#F1EADD] lg:gap-x-11`}>
              <a href="#about" className="py-4 hover:text-[#E8553A]">About</a>
              <a href="#work" className="py-4 hover:text-[#E8553A]">Dispatches</a>
              <a href="#projects" className="py-4 hover:text-[#E8553A]">Projects</a>
              <a href="#stack" className="py-4 hover:text-[#E8553A]">Notices</a>
              <a href="#contact" className="py-4 hover:text-[#E8553A]">Letters</a>
              <a href={links.catalogue.url} className="py-4 text-[#E8553A]">The catalogue ↗</a>
            </nav>
          </div>
        </>
      )}
    </LifeGrid>
  );
}
