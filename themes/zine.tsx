import { achievements, education, jobs, links, person, projects, skills } from "@/lib/content";
import { ThemeSwitcher } from "@/components/theme-switcher";

const caps = "text-[15px] font-bold uppercase tracking-[0.04em]";
const wrap = "px-5 md:px-12 xl:px-[72px]";
const rule = "border-[#2438B8]";

// L · Riso zine: two inks, slightly out of register, no metaphors.
export function ZineTheme() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#F3EDE0] font-courier text-[#16206B]">
      <nav className={`${wrap} ${caps} flex min-h-[68px] items-center justify-between gap-6 border-b-[3px] ${rule}`}>
        <a href="#top" className="py-3.5">chakri.me</a>
        <div className="flex items-center gap-6 lg:gap-9">
          <a href="#work" className="hidden py-3.5 hover:text-[#C2311D] md:block">Jobs</a>
          <a href="#projects" className="hidden py-3.5 hover:text-[#C2311D] md:block">Things I made</a>
          <a href="#stack" className="hidden py-3.5 hover:text-[#C2311D] lg:block">Tools</a>
          <a href="#contact" className="hidden py-3.5 hover:text-[#C2311D] lg:block">Write me</a>
          <ThemeSwitcher label="Issue" />
        </div>
      </nav>

      <header id="top" className={`relative overflow-hidden border-b-[3px] ${rule}`}>
        <div className="absolute right-[4%] top-[70px] aspect-square w-[min(560px,70vw)] rounded-full bg-[#F0563F] mix-blend-multiply" />
        <div className="absolute bottom-[60px] right-0 h-[min(380px,40vw)] w-[min(460px,50vw)] bg-[radial-gradient(#2438B8_32%,transparent_34%)] bg-[length:14px_14px] mix-blend-multiply" />
        <div className={`${wrap} relative flex flex-col gap-10 pb-14 pt-12 md:gap-16`}>
          <div className={`${caps} flex flex-wrap gap-3`}>
            <span className={`border-[3px] ${rule} px-3 py-1.5`}>Issue 05</span>
            <span className={`border-[3px] ${rule} px-3 py-1.5`}>The {jobs[0].company} issue</span>
            <span className={`border-[3px] ${rule} bg-[#2438B8] px-3 py-1.5 text-[#F3EDE0]`}>Free. Take one.</span>
          </div>
          <div className="relative font-rozha text-[clamp(4rem,14.5vw,13.4rem)] leading-[0.9] tracking-[-0.02em]">
            <div aria-hidden="true" className="absolute left-[0.04em] top-[0.04em] text-[#F0563F]">
              {person.first}<br />{person.last}
            </div>
            <h1 className="relative text-[#2438B8] mix-blend-multiply">
              {person.first}<br />{person.last}
            </h1>
          </div>
          <div className="flex max-w-[620px] flex-col gap-4">
            <p className="text-[21px] leading-normal">
              A small zine about one software engineer. Clean interfaces, strong systems, and things that feel
              good to use. Printed in two colours because that is all it needs.
            </p>
            <p className={caps}>{person.location} / {person.openTo}</p>
          </div>
        </div>
      </header>

      <section id="work" className={`${wrap} flex flex-col gap-6 border-b-[3px] ${rule} pb-20 pt-16 lg:pb-24 lg:pt-20`}>
        <div className="flex flex-wrap items-end justify-between gap-3 pb-3">
          <h2 className="font-rozha text-[clamp(5rem,10vw,8rem)] leading-[0.9] text-[#2438B8]">Jobs</h2>
          <p className="text-[17px] italic">newest on top, like a good log file</p>
        </div>
        {jobs.map((j, i) => (
          <article
            key={j.version}
            className={`flex flex-col border-[3px] ${rule} transition-[box-shadow,transform] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0_#F0563F] sm:flex-row ${j.current ? "bg-[#FBF7EE]" : ""}`}
          >
            <div className={`flex shrink-0 items-center justify-center border-[#2438B8] py-3 font-rozha text-[clamp(4rem,8vw,6rem)] leading-none text-[#F0563F] max-sm:border-b-[3px] sm:w-[170px] sm:border-r-[3px]`}>
              {String(jobs.length - i).padStart(2, "0")}
            </div>
            <div className="flex grow flex-col gap-2.5 px-6 py-6 md:px-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-rozha text-[clamp(2rem,4vw,2.75rem)] leading-none text-[#2438B8]">{j.company}</h3>
                <p className={caps}>{j.period}</p>
              </div>
              <p className="text-base font-bold">{j.role} / {j.city}</p>
              <p className="text-[17px] leading-[1.55]">{j.notes}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="projects" className={`${wrap} flex flex-col gap-9 bg-[#2438B8] pb-20 pt-16 text-[#F3EDE0] lg:pb-24 lg:pt-[88px]`}>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-rozha text-[clamp(3.6rem,10vw,8rem)] leading-[0.9]">Things I made</h2>
          <a href={links.repos} className={`${caps} py-3.5 hover:underline`}>All repositories ↗</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.slug}
              href={p.url}
              className="flex min-h-[340px] flex-col gap-3 bg-[#F3EDE0] px-[26px] pb-[26px] pt-6 text-[#16206B] transition-[box-shadow,transform] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#F0563F]"
            >
              <p className="flex items-baseline justify-between">
                <span className="font-rozha text-[64px] leading-[0.9] text-[#F0563F]">{i + 1}</span>
                <span className="text-xl font-bold">↗</span>
              </p>
              <h3 className="font-rozha text-[38px] leading-none">{p.name}</h3>
              <p className="grow text-base leading-normal">{p.short}</p>
              <p className="border-t-[3px] border-[#16206B] pt-2.5 text-sm font-bold uppercase tracking-[0.03em]">{p.tech.join(" / ")}</p>
            </a>
          ))}
          <a
            href={links.catalogue.url}
            className="flex min-h-[340px] flex-col gap-3 bg-[#F0563F] px-[26px] pb-[26px] pt-6 text-[#10184F] transition-[box-shadow,transform] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#F3EDE0]"
          >
            <p className="flex items-baseline justify-between">
              <span className="font-rozha text-[64px] leading-[0.9]">+</span>
              <span className="text-xl font-bold">↗</span>
            </p>
            <h3 className="font-rozha text-[38px] leading-none">Everything else</h3>
            <p className="grow text-lg font-bold leading-normal">The full catalogue lives on its own site.</p>
            <p className="border-t-[3px] border-[#10184F] pt-2.5 text-sm font-bold uppercase tracking-[0.03em]">{links.catalogue.label}</p>
          </a>
        </div>
      </section>

      <section id="stack" className={`${wrap} grid gap-16 border-b-[3px] ${rule} pb-20 pt-16 lg:grid-cols-2 lg:gap-[72px] lg:pb-24 lg:pt-[88px]`}>
        <div className="flex flex-col gap-6">
          <h2 className="font-rozha text-[clamp(4rem,8vw,6rem)] leading-[0.9] text-[#2438B8]">Tools</h2>
          <dl className="text-lg leading-normal">
            {skills.map((s) => (
              <div key={s.title} className={`flex flex-col gap-1 border-t-[3px] ${rule} py-3.5 last:border-b-[3px] sm:flex-row sm:gap-6`}>
                <dt className="shrink-0 pt-0.5 text-[15px] font-bold uppercase sm:w-[130px]">{s.title}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-rozha text-[clamp(4rem,8vw,6rem)] leading-[0.9] text-[#2438B8]">School</h2>
          <div className="flex flex-wrap items-center gap-7">
            <p className="flex size-[190px] shrink-0 flex-col items-center justify-center rounded-full bg-[#F0563F] mix-blend-multiply">
              <span className="font-rozha text-[68px] leading-none">{education.cgpa}</span>
              <span className="text-sm font-bold">/ 10 CGPA</span>
            </p>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-rozha text-[44px] leading-none text-[#2438B8]">{education.school}</h3>
              <p className="text-[17px] leading-normal">{education.degree}, {education.period}</p>
            </div>
          </div>
          <ul className="text-[17px] leading-normal">
            {achievements.map((a) => (
              <li key={a.title} className={`border-t-[3px] ${rule} py-3 last:border-b-[3px]`}>
                <strong>{a.title}:</strong> {a.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer id="contact" className={`${wrap} relative flex flex-col gap-14 overflow-hidden pb-9 pt-16 lg:pt-[88px]`}>
        <div className="absolute left-[26%] top-10 aspect-square w-[min(420px,60vw)] rounded-full bg-[#F0563F] mix-blend-multiply" />
        <div className="relative flex flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-[72px]">
          <div className="flex flex-col gap-[18px]">
            <a href={links.mailto} className="font-rozha text-[clamp(4.5rem,13vw,11.9rem)] leading-[0.88] tracking-[-0.02em] text-[#2438B8] mix-blend-multiply">
              Write me.
            </a>
            <p className="max-w-[560px] text-[19px] leading-normal">
              New opportunities, interesting projects, or just nerding out about technology and design. Letters
              answered in the order they confuse me.
            </p>
          </div>
          <ul className="text-base font-bold lg:w-[420px] lg:shrink-0">
            {[
              ["EMAIL", links.email, links.mailto],
              ["GITHUB", `${links.github.label} ↗`, links.github.url],
              ["LINKEDIN", `${links.linkedin.label} ↗`, links.linkedin.url],
              ["RESUME", `${links.resume.label} ↗`, links.resume.url],
              ["PROJECTS ON A GAME BOY", "↗", links.gameboy.url],
            ].map(([k, v, href]) => (
              <li key={k} className={`border-t-[3px] ${rule} last:border-b-[3px]`}>
                <a href={href} className="flex min-h-12 flex-wrap items-center justify-between gap-x-4 py-2 hover:text-[#C2311D]">
                  <span>{k}</span>
                  <span className="break-all">{v}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex flex-wrap justify-between gap-2 text-sm font-bold uppercase tracking-[0.04em]">
          <span>chakri.me</span>
          <span>Photocopy freely. Held together with two staples and vibes.</span>
        </div>
      </footer>
    </main>
  );
}
