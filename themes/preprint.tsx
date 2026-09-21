import { achievements, education, jobs, links, person, projects, skills } from "@/lib/content";
import { ThemeSwitcher } from "@/components/theme-switcher";

const wrap = "px-5 md:px-12 xl:px-[72px]";
const body = "text-lg leading-[1.6] hyphens-auto md:text-justify";
const h2 = "text-[28px] font-bold";

// J · Preprint: not peer reviewed, the peers were busy.
export function PreprintTheme() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] font-stix text-[#1B1A17]">
      <nav className={`${wrap} flex min-h-16 items-center justify-between gap-6 border-b border-[#1B1A17] text-[15px]`}>
        <i className="max-md:hidden">chakri.me preprint · not peer reviewed, the peers were busy</i>
        <i className="md:hidden">chakri.me preprint</i>
        <div className="flex items-center gap-6 lg:gap-8">
          <a href="#work" className="hidden py-3 hover:text-[#8C1D18] lg:block">§2 Experience</a>
          <a href="#projects" className="hidden py-3 hover:text-[#8C1D18] lg:block">§3 Selected work</a>
          <a href="#contact" className="hidden py-3 hover:text-[#8C1D18] xl:block">References</a>
          <ThemeSwitcher label="Typeset as" />
          <a href={links.resume.url} className="hidden h-11 items-center border border-[#1B1A17] px-[18px] transition-colors hover:bg-[#1B1A17] hover:text-[#FAF7F0] sm:inline-flex">
            PDF ↗
          </a>
        </div>
      </nav>

      <header className={`${wrap} mx-auto flex max-w-[1264px] flex-col items-center gap-[22px] pb-12 pt-16 text-center md:pt-[88px]`}>
        <h1 className="text-[clamp(2.8rem,7vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.02em]">
          On Building Software That Stays Out of the Way
        </h1>
        <p className="text-[34px] leading-[1.2]">
          {person.name}
          <sup className="text-lg text-[#8C1D18]">1</sup>
        </p>
        <p className="text-[17px] leading-[1.6] text-[#4A463E]">
          <sup>1</sup> {jobs[0].company}, {person.location}. Previously {jobs[1].company}. Correspondence:{" "}
          <a href={links.mailto} className="text-[#8C1D18] hover:underline">{links.email}</a>
        </p>
      </header>

      <section className={`${wrap} mx-auto flex max-w-[1024px] flex-col gap-3.5 pb-14`}>
        <p className="text-[19px] leading-[1.6] hyphens-auto md:text-justify">
          <strong>Abstract.</strong> {person.about.join(" ")} This document surveys five deployments of that idea in
          industry, five more at home, and the tools involved.
        </p>
        <p className="text-[17px] leading-[1.6] text-[#4A463E]">
          <strong className="text-[#1B1A17]">Keywords:</strong> full-stack development, system design, user
          experience, open to interesting work
        </p>
      </section>

      <div className={`${wrap} grid gap-14 border-t border-[#1B1A17] pb-14 pt-12 lg:grid-cols-2`}>
        <section id="work" className="flex flex-col gap-[22px]">
          <h2 className={h2}>2&ensp;Experience</h2>
          <p className={body}>
            Section 1 was the abstract. It did not need a second paragraph. Prior work is listed in reverse
            chronological order, following the convention of every resume since the invention of the resume.
          </p>
          {jobs.map((j, i) => (
            <article key={j.version} className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[22px] font-bold">2.{i + 1}&ensp;{j.company}</h3>
                <p className="font-jbmono text-[13px] text-[#4A463E]">{j.period}</p>
              </div>
              <p className="text-[17px] italic text-[#4A463E]">{j.role}, {j.city}</p>
              <p className={body}>{j.notes}</p>
            </article>
          ))}
        </section>
        <section id="projects" className="flex flex-col gap-[22px]">
          <h2 className={h2}>3&ensp;Selected Work</h2>
          <p className={body}>
            The following were built outside working hours, mostly to find out how something actually works. A
            complete survey is available in the catalogue{" "}
            <a href={links.catalogue.url} className="text-[#8C1D18] hover:underline">[6]</a>.
          </p>
          {projects.map((p, i) => (
            <article key={p.slug} className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[22px] font-bold">
                  3.{i + 1}&ensp;{p.name}{" "}
                  <a href={p.url} className="font-normal text-[#8C1D18] hover:underline">[{i + 1}]</a>
                </h3>
                <p className="font-jbmono text-[13px] text-[#4A463E]">{p.tech.join(", ")}</p>
              </div>
              <p className={body}>{p.description}</p>
            </article>
          ))}
        </section>
      </div>

      <div className={`${wrap} grid gap-14 border-t border-[#1B1A17] pb-14 pt-12 lg:grid-cols-2`}>
        <section id="stack" className="flex flex-col gap-[18px]">
          <h2 className={h2}>4&ensp;Methods</h2>
          <table className="w-full border-y-2 border-[#1B1A17] text-left text-lg leading-normal">
            <thead>
              <tr className="border-b border-[#1B1A17]">
                <th className="w-[150px] py-2.5 pr-6 font-bold max-sm:w-[110px]">Layer</th>
                <th className="py-2.5 font-bold">Instruments</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s) => (
                <tr key={s.title}>
                  <td className="py-2.5 pr-6 align-top italic">{s.title}</td>
                  <td className="py-2.5">{s.items.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base leading-normal text-[#4A463E]">
            <strong className="text-[#1B1A17]">Table 1.</strong> Instruments used across Sections 2 and 3. No
            significance testing was performed. Some of them are just nice.
          </p>
        </section>
        <section className="flex flex-col gap-[18px]">
          <h2 className={h2}>5&ensp;Background</h2>
          <p className={body}>
            The author holds a {education.degree} from {education.school} ({education.period}), with a CGPA of{" "}
            <strong className="text-[#8C1D18]">{education.cgpa} / 10</strong>. Related results:
          </p>
          <ol className="flex flex-col gap-2.5 text-lg leading-[1.55]">
            {achievements.map((a, i) => (
              <li key={a.title} className="flex gap-3.5">
                <i className="shrink-0">({"abc"[i]})</i>
                <span>{a.text}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <footer id="contact" className={`${wrap} flex flex-col gap-10 bg-[#1B1A17] pb-9 pt-16 text-[#FAF7F0]`}>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[72px]">
          <div className="flex flex-1 flex-col gap-[18px]">
            <h2 className={h2}>Correspondence</h2>
            <a href={links.mailto} className="text-[clamp(3.4rem,8vw,6rem)] font-bold leading-[0.98] tracking-[-0.025em]">
              Comments <i className="font-normal">welcome.</i>
            </a>
            <p className="max-w-[560px] text-[19px] leading-[1.6] text-[#D8D2C4]">{person.contactBlurb}</p>
          </div>
          <div className="flex flex-col gap-1 lg:w-[520px] lg:shrink-0">
            <h2 className={`${h2} mb-2.5`}>References</h2>
            {[
              ["[1–5]", "Reddy, C. Source code.", "github.com/chakri68 ↗", links.github.url],
              ["[6]", "Reddy, C. The catalogue.", `${links.catalogue.label} ↗`, links.catalogue.url],
              ["[7]", "Reddy, C. Curriculum vitae.", `${links.resume.label} ↗`, links.resume.url],
              ["[8]", "Reddy, C. Professional network.", "linkedin ↗", links.linkedin.url],
              ["[9]", "Reddy, C. Refs. 1–5, as a Game Boy.", `${links.gameboy.label} ↗`, links.gameboy.url],
            ].map(([n, t, v, href]) => (
              <a key={n} href={href} className="flex min-h-11 flex-wrap items-center gap-x-3.5 border-t border-[#4A463E] py-2 text-[17px] hover:text-[#E8A9A3]">
                <span className="w-[42px] shrink-0 font-jbmono text-[13px] text-[#E8A9A3]">{n}</span>
                <span className="grow">{t}</span>
                <span className="font-jbmono text-[13px] text-[#D8D2C4]">{v}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 text-[15px] italic text-[#D8D2C4]">
          <span>chakri.me</span>
          <span>Conflicts of interest: the author is the subject.</span>
        </div>
      </footer>
    </main>
  );
}
