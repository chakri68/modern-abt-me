import { achievements, education, jobs, links, person, projects, skills } from "@/lib/content";
import { ThemeSwitcher } from "@/components/theme-switcher";

const wrap = "mx-5 md:mx-12 xl:mx-[72px]";
const head = "border-b border-[#C9C0AC] pb-3 text-center text-[15px] font-bold uppercase tracking-[0.18em]";
const entry = "text-[17px] leading-[1.65] hyphens-auto md:text-justify";

const FACTS = [
  ["Occupation", "Software engineer, full-stack"],
  ["Habitat", person.location],
  ["Currently", jobs[0].company],
  ["Education", `${education.school}, B.Tech, ${education.cgpa} / 10`],
  ["Specialises in", person.specialties],
];

// M · Encyclopaedia: the entry for REDDY, in volume R. Third person, no pronouns.
export function EncyclopaediaTheme() {
  return (
    <main className="min-h-screen bg-[#F5F0E4] font-caslont text-[#1C1A17]">
      <nav className={`${wrap} flex min-h-[68px] items-center justify-between gap-6 border-b-[3px] border-double border-[#1C1A17] text-sm uppercase tracking-[0.16em]`}>
        <a href="#top" className="py-3.5 font-bold">Reddy</a>
        <div className="flex items-center gap-6 lg:gap-8">
          <a href="#work" className="hidden py-3.5 hover:text-[#7A1F1F] md:block">Career</a>
          <a href="#projects" className="hidden py-3.5 hover:text-[#7A1F1F] md:block">Works</a>
          <a href="#stack" className="hidden py-3.5 hover:text-[#7A1F1F] lg:block">Instruments</a>
          <a href="#contact" className="hidden py-3.5 hover:text-[#7A1F1F] lg:block">Errata</a>
          <ThemeSwitcher label="Volume" />
        </div>
      </nav>

      <header id="top" className={`${wrap} flex flex-col gap-12 pb-14 pt-14 lg:flex-row lg:items-end lg:gap-[72px] lg:pt-[72px]`}>
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="font-caslond text-[clamp(4rem,10.5vw,9.5rem)] leading-[0.92] tracking-[-0.02em]">
            {person.last},<br />
            <span className="text-[#7A1F1F]">{person.first}</span>
          </h1>
          <p className="max-w-[800px] text-[clamp(1.15rem,1.6vw,1.375rem)] leading-[1.55]">
            <i>n.</i> (fl. 2021 — present), software engineer of {person.location}, noted for a preference for clean
            interfaces, strong systems, and things that feel good to use. Reddy holds that simplicity is the
            ultimate sophistication, and that software should stay out of the way and quietly do its job well,
            standing out only when it needs to.
          </p>
        </div>
        <dl className="border-y-2 border-[#1C1A17] text-base leading-[1.4] lg:w-[380px] lg:shrink-0">
          {FACTS.map(([k, v]) => (
            <div key={k} className="flex gap-4 border-b border-[#C9C0AC] py-2.5">
              <dt className="w-[120px] shrink-0 italic text-[#5A5347]">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
          <div className="flex gap-4 py-2.5">
            <dt className="w-[120px] shrink-0 italic text-[#5A5347]">Status</dt>
            <dd className="text-[#7A1F1F]">{person.openTo}</dd>
          </div>
        </dl>
      </header>

      <div className={`${wrap} grid gap-12 border-t border-[#1C1A17] pb-[72px] pt-12 lg:grid-cols-3`}>
        <section id="work" className="flex flex-col gap-[18px]">
          <h2 className={head}>I. Career</h2>
          {jobs.map((j) => (
            <p key={j.version} className={entry}>
              <strong>{j.company}</strong>{" "}
              <i className="text-[#5A5347]">({j.period}; {j.role}, {j.city}).</i> {j.notes}
            </p>
          ))}
        </section>

        <section id="projects" className="flex flex-col gap-[18px] border-[#C9C0AC] lg:border-x lg:px-12">
          <h2 className={head}>II. Works</h2>
          <p className={entry}>
            Reddy&rsquo;s minor works were produced outside working hours, chiefly to discover how a thing actually
            works. The principal examples follow.
          </p>
          {projects.map((p) => (
            <p key={p.slug} className={entry}>
              <a href={p.url} className="font-bold text-[#7A1F1F] underline decoration-[#C9C0AC] underline-offset-4 hover:decoration-[#7A1F1F]">{p.name}</a>{" "}
              <i className="text-[#5A5347]">({p.tech.join(", ")}).</i> {p.short}
            </p>
          ))}
        </section>

        <section id="stack" className="flex flex-col gap-[18px]">
          <h2 className={head}>III. Instruments</h2>
          <p className={entry}>
            {skills.map((s) => (
              <span key={s.title}>
                <strong>{s.title === "Tools" ? "Sundry" : s.title}.</strong> {s.items.join(", ")}.{" "}
              </span>
            ))}
          </p>
          <h2 className={`${head} mt-3`}>IV. Education &amp; Honours</h2>
          <p className={entry}>
            Educated at <strong>{education.school}</strong> ({education.degree}, {education.period}), finishing
            with a CGPA of <strong className="text-[#7A1F1F]">{education.cgpa}</strong> out of 10.{" "}
            {achievements[0].text} {achievements[1].text} Built an autonomous drone navigating by computer vision,
            which was featured in The Times of India, a rival publication.
          </p>
          <h2 className={`${head} mt-3`}>See also</h2>
          <ul className="text-[17px]">
            {[
              ["Catalogue, the", links.catalogue.label, links.catalogue.url],
              ["Resume (abridged ed.)", links.resume.label, links.resume.url],
              ["GitHub", links.github.label, links.github.url],
              ["LinkedIn", links.linkedin.label, links.linkedin.url],
              ["Works, on a Game Boy", links.gameboy.label, links.gameboy.url],
            ].map(([k, v, href]) => (
              <li key={k} className="border-b border-[#C9C0AC]">
                <a href={href} className="group flex min-h-11 flex-wrap items-center justify-between gap-x-4 py-1.5">
                  <span>
                    <span className="inline-block text-[#7A1F1F] transition-transform group-hover:translate-x-1">→</span>{" "}
                    <span className="text-[15px] uppercase tracking-[0.08em]">{k}</span>
                  </span>
                  <i className="text-[#5A5347]">{v}</i>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer id="contact" className="flex flex-col gap-12 bg-[#1C1A17] px-5 pb-9 pt-20 text-[#F5F0E4] md:px-12 xl:px-[72px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end lg:gap-[72px]">
          <div className="flex flex-col gap-[18px]">
            <p className="text-sm uppercase tracking-[0.18em]">Errata &amp; correspondence</p>
            <a href={links.mailto} className="font-caslond text-[clamp(3.4rem,9vw,8.25rem)] leading-[0.95] tracking-[-0.02em]">
              Write to the subject.
            </a>
          </div>
          <div className="flex flex-col gap-5 lg:w-[420px] lg:shrink-0 lg:pb-3.5">
            <p className="text-[19px] leading-[1.6] text-[#DCD4C2]">
              The subject is reliably happy to discuss new opportunities, interesting projects, or to simply nerd
              out about technology and design.
            </p>
            <a href={links.mailto} className="inline-flex min-h-[52px] items-center justify-center break-all border border-[#F5F0E4] px-4 text-[17px] transition-colors hover:bg-[#F5F0E4] hover:text-[#1C1A17]">
              {links.email}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 text-[15px] italic text-[#DCD4C2]">
          <span>chakri.me</span>
          <span>This entry is revised whenever the subject changes jobs.</span>
        </div>
      </footer>
    </main>
  );
}
