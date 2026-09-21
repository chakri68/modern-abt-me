import { achievements, education, jobs, links, person, projects, skills } from "@/lib/content";
import { NightHero } from "./night-hero";

const label = "font-dmmono text-xs uppercase tracking-[0.06em]";
const wrap = "mx-5 md:mx-12 xl:mx-[72px]";

// D · Night edition: the broadsheet, after dark.
export function NightTheme() {
  const [lead, ...rest] = projects;
  return (
    <main className="min-h-screen bg-[#12100E] font-isans text-[#F1EADD]">
      <NightHero />

      <section id="about" className={`${wrap} flex flex-col gap-12 border-b border-[#F1EADD] py-14 lg:flex-row lg:gap-14`}>
        <div className="flex flex-1 flex-col gap-6">
          <p className={`${label} text-[#E8553A]`}>About the engineer</p>
          <h2 className="font-iserif text-[clamp(2.8rem,6vw,5rem)] leading-[0.98] tracking-[-0.025em]">
            Local engineer insists software should <i className="text-[#E8553A]">stay out of the way</i> and
            quietly do its job
          </h2>
          <div className="gap-10 text-[17px] leading-[1.6] text-[#CFC6B6] md:columns-2">
            {person.about.map((p) => (
              <p key={p} className="mb-3.5 break-inside-avoid">{p}</p>
            ))}
          </div>
        </div>
        <aside className="flex flex-col gap-8 border-[#F1EADD] lg:w-[380px] lg:shrink-0 lg:border-l lg:pl-10">
          <div>
            <p className={`${label} pb-3`}>In this edition</p>
            {[
              ["Dispatches from work", "#work"],
              ["Projects, built out of curiosity", "#projects"],
              ["Notices: stack and schooling", "#stack"],
              ["Letters to the engineer", "#contact"],
            ].map(([t, href], i) => (
              <a
                key={href}
                href={href}
                className={`flex min-h-11 items-baseline justify-between gap-4 border-t pt-2.5 hover:text-[#E8553A] ${i === 0 ? "border-[#F1EADD]" : "border-[#3A342D]"} ${i === 3 ? "border-b border-b-[#3A342D]" : ""}`}
              >
                <span className="font-iserif text-[26px]">{t}</span>
                <span className="font-dmmono text-xs">{String(i + 2).padStart(2, "0")}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 bg-[#E8553A] p-6 text-[#0D0B0A]">
            <p className={label}>Specialising in</p>
            <p className="font-iserif text-[30px] leading-[1.1]">{person.specialties}</p>
          </div>
        </aside>
      </section>

      <section id="work" className={`${wrap} flex flex-col gap-7 border-b border-[#F1EADD] pb-14 pt-12`}>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-iserif text-[52px] tracking-[-0.02em]">Dispatches</h2>
          <p className={`${label} text-[#A69C8C]`}>Employment, most recent first</p>
        </div>
        <ol className="grid gap-y-8 md:grid-cols-2 xl:grid-cols-5">
          {jobs.map((j, i) => (
            <li key={j.version} className={`flex flex-col gap-2.5 border-[#3A342D] md:px-6 xl:border-l xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0 ${i % 2 ? "md:max-xl:border-l" : "md:max-xl:pl-0"}`}>
              <p className={`font-dmmono text-xs ${j.current ? "text-[#E8553A]" : "text-[#A69C8C]"}`}>{j.period}</p>
              <h3 className="font-iserif text-[30px] leading-[1.05]">{j.company}</h3>
              <p className="text-[13px] font-semibold">{j.role}, {j.city}</p>
              <p className="text-sm leading-[1.55] text-[#CFC6B6]">{j.notes}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="projects" className={`${wrap} flex flex-col gap-7 border-b border-[#F1EADD] pb-14 pt-12`}>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-iserif text-[52px] tracking-[-0.02em]">Projects</h2>
          <a href={links.repos} className={`${label} py-3.5 hover:text-[#E8553A]`}>All repositories ↗</a>
        </div>
        <div className="flex flex-col gap-10 xl:flex-row">
          <a href={lead.url} className="group flex flex-col gap-[18px] bg-[#F1EADD] p-7 text-[#12100E] md:p-9 xl:w-[520px] xl:shrink-0">
            <p className={`${label} text-[#8A2410]`}>Front page · No. 01</p>
            <h3 className="font-iserif text-[clamp(4rem,8vw,6rem)] leading-[0.9] tracking-[-0.03em]">
              Life <i>Sim</i>
            </h3>
            <p className="grow text-[17px] leading-[1.6] text-[#3A342D]">{lead.description}</p>
            <p className="flex justify-between gap-4 font-dmmono text-xs text-[#3A342D]">
              <span>{lead.tech.join(" / ")}</span>
              <span className="transition-transform group-hover:translate-x-1">Read on ↗</span>
            </p>
          </a>
          <div className="grid grow border-t border-[#F1EADD] md:grid-cols-2">
            {rest.map((p, i) => (
              <a
                key={p.slug}
                href={p.url}
                className={`group flex flex-col gap-2.5 border-[#3A342D] py-6 max-md:border-b ${i % 2 ? "md:border-l md:pl-7" : "md:pr-7"} ${i < 2 ? "md:border-b" : ""}`}
              >
                <p className="font-dmmono text-xs text-[#A69C8C]">
                  No. {String(i + 2).padStart(2, "0")} · {p.tech.slice(0, 2).join(" / ")}
                </p>
                <h3 className="font-iserif text-4xl leading-none transition-colors group-hover:text-[#E8553A]">{p.name}</h3>
                <p className="text-[15px] leading-[1.55] text-[#CFC6B6]">{p.short}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className={`${wrap} grid gap-14 pb-14 pt-12 lg:grid-cols-2`}>
        <div className="flex flex-col gap-6">
          <h2 className="font-iserif text-[52px] tracking-[-0.02em]">Notices</h2>
          <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.title} className="flex flex-col gap-2 border-t border-[#F1EADD] pt-3.5">
                <dt className={`${label} text-[#A69C8C]`}>{s.title}</dt>
                <dd className="text-base leading-[1.55]">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-5 border-[#F1EADD] lg:border-l lg:pl-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <p className="font-dmmono text-xs text-[#A69C8C]">{education.period}</p>
              <h3 className="font-iserif text-[44px] leading-none">{education.school}</h3>
              <p className="text-[15px] text-[#CFC6B6]">{education.degree}</p>
            </div>
            <p className="flex items-baseline gap-2">
              <span className="font-iserif text-[84px] leading-[0.9] text-[#E8553A]">{education.cgpa}</span>
              <span className="font-dmmono text-xs text-[#A69C8C]">/ 10 CGPA</span>
            </p>
          </div>
          <ul className="text-[15px] leading-[1.55] text-[#CFC6B6]">
            {achievements.map((a, i) => (
              <li key={a.title} className={`border-t py-3 last:border-b ${i === 0 ? "border-[#F1EADD]" : "border-[#3A342D]"} last:border-b-[#3A342D]`}>
                <strong className="font-semibold text-[#F1EADD]">{a.title}.</strong> {a.text}
                {i === 2 && " It is a newspaper with rather better circulation than this one."}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer id="contact" className="flex flex-col gap-12 bg-[#F1EADD] px-5 pb-9 pt-[72px] text-[#12100E] md:px-12 xl:px-[72px]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-[72px]">
          <div className="flex flex-col gap-5">
            <p className={`${label} text-[#8A2410]`}>Letters to the engineer</p>
            <a href={links.mailto} className="font-iserif text-[clamp(4.5rem,10vw,8rem)] leading-[0.92] tracking-[-0.03em]">
              Write <i>in.</i>
            </a>
            <p className="max-w-[540px] text-lg leading-[1.6] text-[#3A342D]">{person.contactBlurb}</p>
          </div>
          <ul className="font-dmmono text-[13px] lg:w-[400px] lg:shrink-0">
            {[
              ["Email", links.email, links.mailto],
              ["GitHub", `${links.github.label} ↗`, links.github.url],
              ["LinkedIn", `${links.linkedin.label} ↗`, links.linkedin.url],
              ["Resume", `${links.resume.label} ↗`, links.resume.url],
              ["Supplement: projects, as a Game Boy", "↗", links.gameboy.url],
            ].map(([k, v, href]) => (
              <li key={k} className="border-t border-[#C9C0B0] last:border-b">
                <a href={href} className="flex min-h-12 flex-wrap items-center justify-between gap-x-4 py-2 hover:text-[#8A2410]">
                  <span className="text-[#3A342D]">{k}</span>
                  <span>{v}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-between gap-2 font-dmmono text-xs text-[#3A342D]">
          <span>chakri.me</span>
          <span>Printed on recycled pixels.</span>
        </div>
      </footer>
    </main>
  );
}
