import { achievements, education, jobs, links, person, projects, skills, type Change } from "@/lib/content";
import { ThemeSwitcher } from "@/components/theme-switcher";

const mono = "font-jbmono text-[13px]";
const wrap = "px-5 md:px-12 xl:px-[72px]";

const KIND_COLOR: Record<Change["kind"], string> = {
  Added: "text-[#1F6B45]",
  Changed: "text-[#8A5A00]",
  Improved: "text-[#2B3FE0]",
  Fixed: "text-[#B02A14]",
  Init: "text-[#5B574F]",
};

type Release = {
  version: string;
  year: string;
  period: string;
  title: string;
  subtitle: string;
  changes: Change[];
  latest?: boolean;
};

// New employer, major bump. New title, minor. School is the initial commit.
const releases: Release[] = [
  ...jobs.map((j) => ({
    version: j.version,
    year: j.period.match(/\d{4}/)![0],
    period: `${j.period} · ${j.city}`,
    title: j.company,
    subtitle: j.role,
    changes: j.changes,
    latest: j.current,
  })),
  {
    version: "0.1.0",
    year: "2021",
    period: `${education.period} · Lucknow`,
    title: education.school,
    subtitle: `${education.degree}, ${education.cgpa} / 10 CGPA`,
    changes: [
      { kind: "Init", text: "Initial commit." },
      ...achievements.map((a) => ({ kind: "Added" as const, text: a.text })),
    ],
  },
];

const anchor = (v: string) => `v${v.replaceAll(".", "-")}`;

// K · Release notes: a person, semantically versioned.
export function ChangelogTheme() {
  const latest = releases[0];
  return (
    <main className="min-h-screen bg-[#F2EFE9] font-newsreader text-[#171717]">
      <nav className={`${wrap} ${mono} flex h-[76px] items-center justify-between gap-6 border-b border-[#171717]`}>
        <a href="#top" className="py-3.5 font-medium">chakri.me</a>
        <div className="flex items-center gap-6 lg:gap-9">
          <a href="#work" className="hidden py-3.5 hover:text-[#2B3FE0] md:block">releases</a>
          <a href="#projects" className="hidden py-3.5 hover:text-[#2B3FE0] md:block">branches</a>
          <a href="#stack" className="hidden py-3.5 hover:text-[#2B3FE0] lg:block">dependencies</a>
          <a href="#contact" className="hidden py-3.5 hover:text-[#2B3FE0] lg:block">contributing</a>
          <ThemeSwitcher label="--theme" />
          <a href={links.catalogue.url} className="hidden h-11 items-center bg-[#2B3FE0] px-[18px] font-medium text-white transition-colors hover:bg-[#171717] sm:inline-flex">
            catalogue ↗
          </a>
        </div>
      </nav>

      <header id="top" className={`${wrap} flex flex-col justify-between gap-10 border-b border-[#171717] py-16 lg:flex-row lg:items-end lg:gap-[72px] lg:pb-20 lg:pt-[88px]`}>
        <div className="flex flex-col gap-5">
          <p className={`${mono} flex flex-wrap items-center gap-3`}>
            <span className="inline-flex h-7 items-center bg-[#2B3FE0] px-2.5 text-white">latest</span>
            <span>v{latest.version} · {latest.title} · {latest.period.split(" —")[0]}</span>
          </p>
          <h1 className="text-[clamp(3.5rem,10vw,10.5rem)] font-medium leading-[0.88] tracking-[-0.04em]">
            {person.first} {person.last},<br />
            <i className="text-[#2B3FE0]">release notes</i>
          </h1>
        </div>
        <p className="text-[21px] leading-normal text-[#3D3A35] lg:mb-3.5 lg:w-[400px] lg:shrink-0">
          A software engineer, versioned. Clean interfaces, strong systems, things that feel good to use. Follows
          semantic versioning: new employer, major bump. New title, minor.
        </p>
      </header>

      <section id="work" className={`${wrap} flex flex-col gap-12 border-b border-[#171717] py-16 lg:flex-row lg:gap-[72px] lg:py-20`}>
        <aside className={`${mono} lg:w-[260px] lg:shrink-0`}>
          <div className="lg:sticky lg:top-8">
            <p className="pb-3 text-[#5B574F]">all releases</p>
            {releases.map((r) => (
              <a
                key={r.version}
                href={`#${anchor(r.version)}`}
                className={`flex min-h-11 items-center justify-between border-t border-[#C8C2B6] hover:text-[#2B3FE0] ${r.latest ? "text-[#2B3FE0]" : ""}`}
              >
                <span>v{r.version}</span>
                <span>{r.year}</span>
              </a>
            ))}
          </div>
        </aside>
        <div className="flex grow flex-col">
          {releases.map((r) => (
            <article
              key={r.version}
              id={anchor(r.version)}
              className="mb-14 flex scroll-mt-8 flex-col gap-6 border-b border-[#C8C2B6] pb-14 last:mb-0 last:border-b-0 last:pb-0 xl:flex-row xl:gap-12"
            >
              <div className="flex flex-col gap-2.5 xl:w-[300px] xl:shrink-0">
                <p className={`flex items-baseline gap-1.5 ${r.latest ? "text-[#2B3FE0]" : ""}`}>
                  <span className="font-jbmono text-[22px] font-medium">v</span>
                  <span className="text-[92px] font-medium leading-[0.85] tracking-[-0.04em]">{r.version}</span>
                </p>
                <p className={`${mono} text-[#5B574F]`}>{r.period}</p>
              </div>
              <div className="flex grow flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[40px] font-medium leading-[1.05] tracking-[-0.02em]">{r.title}</h3>
                  <p className="text-[19px] italic text-[#3D3A35]">{r.subtitle}</p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {r.changes.map((c) => (
                    <li key={c.text} className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline">
                      <span className={`w-[92px] shrink-0 font-jbmono text-xs font-medium ${KIND_COLOR[c.kind]}`}>{c.kind}</span>
                      <span className="text-[19px] leading-normal">{c.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className={`${wrap} bg-[#171717] py-16 text-[#F2EFE9] lg:py-20`}>
        <div className="flex flex-col justify-between gap-4 pb-10 md:flex-row md:items-end">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.92] tracking-[-0.035em]">
            Experimental <i>branches</i>
          </h2>
          <a href={links.repos} className={`${mono} py-3.5 hover:text-[#AEB8FF]`}>git branch --all ↗</a>
        </div>
        {projects.map((p) => (
          <a
            key={p.slug}
            href={p.url}
            className="group flex flex-col gap-3 border-t border-[#45423C] py-[26px] last:border-b lg:flex-row lg:items-baseline lg:gap-10"
          >
            <span className="font-jbmono text-sm text-[#AEB8FF] lg:w-[300px] lg:shrink-0">experiment/{p.slug}</span>
            <span className="text-[44px] font-medium leading-none tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-2 lg:w-[340px] lg:shrink-0">
              {p.name}
            </span>
            <span className="text-lg leading-[1.55] text-[#D6D1C6] lg:flex-1">{p.short}</span>
          </a>
        ))}
      </section>

      <section id="stack" className={`${wrap} flex flex-col gap-10 border-b border-[#171717] py-16 lg:flex-row lg:gap-[72px] lg:py-20`}>
        <div className="flex flex-col gap-3.5 lg:w-[400px] lg:shrink-0">
          <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.03em]">Depen&shy;dencies</h2>
          <p className="text-[19px] italic leading-normal text-[#3D3A35]">All pinned loosely. Happy to add more.</p>
        </div>
        <dl className="grow text-[19px] leading-normal">
          {skills.map((s, i) => (
            <div key={s.title} className={`flex flex-col gap-1 border-t py-4 last:border-b sm:flex-row sm:gap-6 ${i === 0 ? "border-[#171717]" : "border-[#C8C2B6]"} last:border-b-[#C8C2B6]`}>
              <dt className={`${mono} shrink-0 pt-1 text-[#5B574F] sm:w-[150px]`}>
                {s.title === "Tools" ? "devDependencies" : s.title.toLowerCase()}
              </dt>
              <dd>{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer id="contact" className={`${wrap} flex flex-col gap-14 bg-[#2B3FE0] pb-9 pt-16 text-white lg:pt-[88px]`}>
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-[72px]">
          <div className="flex flex-col gap-[18px]">
            <p className={mono}>CONTRIBUTING.md</p>
            <a href={links.mailto} className="text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.88] tracking-[-0.04em]">
              Issues <i>welcome.</i>
            </a>
            <p className="max-w-[560px] text-[21px] leading-normal">
              New opportunities, interesting projects, or just nerding out about technology and design. Pull
              requests on my opinions are also accepted.
            </p>
          </div>
          <ul className={`${mono} lg:w-[400px] lg:shrink-0`}>
            {[
              ["email", links.email, links.mailto],
              ["github", `${links.github.label} ↗`, links.github.url],
              ["linkedin", `${links.linkedin.label} ↗`, links.linkedin.url],
              ["resume", `${links.resume.label} ↗`, links.resume.url],
              ["branches, on a game boy", `${links.gameboy.label} ↗`, links.gameboy.url],
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
        <div className={`${mono} flex flex-wrap justify-between gap-2`}>
          <span>chakri.me</span>
          <span>No breaking changes planned. Several unplanned.</span>
        </div>
      </footer>
    </main>
  );
}
