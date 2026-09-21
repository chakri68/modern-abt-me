import { achievements, education, jobs, links, person, projects, skills } from "@/lib/content";
import { ThemeSwitcher } from "@/components/theme-switcher";

const label = "font-dmmono text-xs uppercase tracking-[0.06em]";
const wrap = "px-5 md:px-12 xl:px-[72px]";

// F · Quarterly: the day edition. Magazine typography, no metaphor.
export function QuarterlyTheme() {
  return (
    <main className="min-h-screen bg-[#F4EFE6] font-isans text-[#1A1714]">
      <nav className={`${wrap} flex h-[76px] items-center justify-between border-b border-[#1A1714]`}>
        <a href="#top" className="font-iserif text-[28px] tracking-[-0.01em]">
          {person.first} <i>{person.last}</i>
        </a>
        <div className={`${label} flex items-center gap-6 lg:gap-10`}>
          <a href="#work" className="hidden py-4 hover:text-[#B02A14] md:block">Work</a>
          <a href="#projects" className="hidden py-4 hover:text-[#B02A14] md:block">Projects</a>
          <a href="#stack" className="hidden py-4 hover:text-[#B02A14] lg:block">Stack</a>
          <a href="#contact" className="hidden py-4 hover:text-[#B02A14] lg:block">Contact</a>
          <ThemeSwitcher label="Edition" />
          <a
            href={links.catalogue.url}
            className="hidden h-11 items-center bg-[#1A1714] px-5 text-[#F4EFE6] transition-colors hover:bg-[#B02A14] sm:inline-flex"
          >
            Catalogue ↗
          </a>
        </div>
      </nav>

      <header id="top" className={`${wrap} flex flex-col gap-8 border-b border-[#1A1714] py-14 md:gap-12 md:py-[72px]`}>
        <p className={`${label} text-[#B02A14]`}>
          {person.role} · {person.location}
        </p>
        <h1 className="font-iserif text-[clamp(3.6rem,12.2vw,10.75rem)] leading-[0.9] tracking-[-0.035em]">
          Software that <i className="text-[#B02A14]">stays out</i> of the way.
        </h1>
        <div className="flex flex-col justify-between gap-10 border-t border-[#1A1714] pt-8 lg:flex-row lg:items-end lg:gap-[72px]">
          <p className="max-w-[620px] text-[19px] leading-[1.6] text-[#3A342D]">
            I care about clean interfaces, strong systems, and things that feel good to use. From backend
            engineering to user experience, the goal is software that quietly does its job well, and stands
            out only when it needs to.
          </p>
          <dl className={`${label} flex flex-wrap gap-x-14 gap-y-6`}>
            {[
              ["Now", jobs[0].company],
              ["Before", jobs[1].company],
              ["Open to", "Interesting work"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1.5">
                <dt className="text-[#5C5348]">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section id="work" className={`${wrap} flex flex-col gap-10 border-b border-[#1A1714] py-16 lg:flex-row lg:gap-[72px] lg:py-20`}>
        <div className="flex shrink-0 flex-col gap-3 lg:w-[320px]">
          <h2 className="font-iserif text-[clamp(4rem,8vw,6rem)] italic leading-[0.9] tracking-[-0.03em]">Work</h2>
          <p className={`${label} text-[#5C5348]`}>2022 — present</p>
        </div>
        <ol className="flex grow flex-col">
          {jobs.map((j, i) => (
            <li
              key={j.version}
              className={`flex flex-col gap-3 border-t py-6 md:flex-row md:gap-10 ${i === 0 ? "border-[#1A1714]" : "border-[#C9C0B0]"} ${i === jobs.length - 1 ? "border-b border-b-[#C9C0B0]" : ""}`}
            >
              <div className="flex shrink-0 flex-col gap-1.5 md:w-[320px]">
                <h3 className="font-iserif text-[34px] leading-none">{j.company}</h3>
                <p className="text-[13px] font-semibold">{j.role}</p>
                <p className={`font-dmmono text-xs ${j.current ? "text-[#B02A14]" : "text-[#5C5348]"}`}>
                  {j.period} · {j.city}
                </p>
              </div>
              <p className="text-base leading-[1.6] text-[#3A342D]">{j.notes}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="projects" className={`${wrap} bg-[#1A1714] py-16 text-[#F4EFE6] lg:py-20`}>
        <div className="flex flex-col justify-between gap-4 pb-10 md:flex-row md:items-end">
          <h2 className="font-iserif text-[clamp(3.2rem,8vw,6rem)] leading-[0.9] tracking-[-0.03em]">
            Built out of <i>curiosity</i>
          </h2>
          <a href={links.repos} className={`${label} py-3.5 hover:text-[#E9B9A9]`}>All repositories ↗</a>
        </div>
        {projects.map((p, i) => (
          <a
            key={p.slug}
            href={p.url}
            className={`group flex flex-col gap-3 border-t py-7 lg:flex-row lg:items-baseline lg:gap-10 ${i === 0 ? "border-[#F4EFE6]" : "border-[#4A433B]"} ${i === projects.length - 1 ? "border-b border-b-[#4A433B]" : ""}`}
          >
            <span className="font-dmmono text-[13px] text-[#E9B9A9] lg:w-12 lg:shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-iserif text-[clamp(2.6rem,5vw,3.75rem)] leading-[0.98] tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-2 group-hover:italic lg:w-[400px] lg:shrink-0">
              {p.name}
            </span>
            <span className="text-base leading-[1.6] text-[#DDD5C8] lg:flex-1">{p.short}</span>
            <span className="font-dmmono text-xs leading-[1.6] text-[#DDD5C8] lg:w-[190px] lg:shrink-0 lg:text-right">
              {p.tech.join(" / ")} ↗
            </span>
          </a>
        ))}
      </section>

      <section id="stack" className={`${wrap} grid gap-16 border-b border-[#1A1714] py-16 lg:grid-cols-2 lg:gap-[72px] lg:py-20`}>
        <div className="flex flex-col gap-7">
          <h2 className="font-iserif text-[64px] italic leading-[0.95] tracking-[-0.02em]">Stack</h2>
          <dl className="text-base leading-normal">
            {skills.map((s, i) => (
              <div
                key={s.title}
                className={`flex flex-col gap-1 border-t py-3.5 sm:flex-row sm:gap-6 ${i === 0 ? "border-[#1A1714]" : "border-[#C9C0B0]"} ${i === skills.length - 1 ? "border-b border-b-[#C9C0B0]" : ""}`}
              >
                <dt className={`${label} shrink-0 pt-[3px] text-[#5C5348] sm:w-[130px]`}>{s.title}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-7">
          <h2 className="font-iserif text-[64px] italic leading-[0.95] tracking-[-0.02em]">Schooling</h2>
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-[#1A1714] pt-3.5">
            <div className="flex flex-col gap-1.5">
              <p className="font-dmmono text-xs text-[#5C5348]">{education.period}</p>
              <h3 className="font-iserif text-[40px] leading-none">{education.school}</h3>
              <p className="text-[15px] text-[#3A342D]">{education.degree}</p>
            </div>
            <p className="flex items-baseline gap-2">
              <span className="font-iserif text-[84px] leading-[0.9] text-[#B02A14]">{education.cgpa}</span>
              <span className="font-dmmono text-xs text-[#5C5348]">/ 10 CGPA</span>
            </p>
          </div>
          <ul className="text-[15px] leading-[1.55] text-[#3A342D]">
            {achievements.map((a) => (
              <li key={a.title} className="border-t border-[#C9C0B0] py-3 last:border-b">
                <strong className="font-semibold text-[#1A1714]">{a.title}.</strong> {a.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer id="contact" className={`${wrap} flex flex-col gap-14 bg-[#B02A14] pb-9 pt-16 text-white lg:pt-[88px]`}>
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-[72px]">
          <div className="flex flex-col gap-5">
            <a href={links.mailto} className="font-iserif text-[clamp(4.5rem,12vw,10.5rem)] leading-[0.88] tracking-[-0.035em]">
              Say <i>hello.</i>
            </a>
            <p className="max-w-[540px] text-lg leading-[1.6]">{person.contactBlurb}</p>
          </div>
          <ul className="font-dmmono text-[13px] lg:w-[400px] lg:shrink-0">
            {[
              ["Email", links.email, links.mailto],
              ["GitHub", `${links.github.label} ↗`, links.github.url],
              ["LinkedIn", `${links.linkedin.label} ↗`, links.linkedin.url],
              ["Resume", `${links.resume.label} ↗`, links.resume.url],
              ["Projects, but a Game Boy", `${links.gameboy.label} ↗`, links.gameboy.url],
            ].map(([k, v, href]) => (
              <li key={k} className="border-t border-white last:border-b">
                <a href={href} className="flex min-h-12 flex-wrap items-center justify-between gap-x-4 py-2 hover:opacity-80">
                  <span>{k}</span>
                  <span>{v}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-between gap-2 font-dmmono text-xs">
          <span>chakri.me</span>
          <span>Set in Instrument Serif. Held together with tape and vibes.</span>
        </div>
      </footer>
    </main>
  );
}
