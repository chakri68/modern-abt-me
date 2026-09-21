import { achievements, education, jobs, links, person, projects, skills } from "@/lib/content";
import { ThemeSwitcher } from "@/components/theme-switcher";

const caps = "text-[15px] uppercase tracking-[0.24em] text-[#5A5043]";
const wrap = "px-5 md:px-12 xl:px-[72px]";
const ROMAN = ["I", "II", "III", "IV", "V", "VI"];
const ORDINAL = ["first", "second", "third", "fourth", "fifth"];

const Leader = () => <span aria-hidden="true" className="grow border-b-2 border-dotted border-[#8A7E6C]" />;

// H · Paperback: three bands, a preface, and chapters.
export function PaperbackTheme() {
  return (
    <main className="min-h-screen bg-[#F1E8D3] font-garamond text-[#211C16]">
      <header>
        <div className={`${wrap} flex min-h-[200px] flex-col justify-between bg-[#1E4D40] pb-7 text-[#F1E8D3]`}>
          <nav className="flex min-h-[72px] items-center justify-between gap-6 text-[15px] uppercase tracking-[0.14em]">
            <a href="#cover" className="py-3.5">chakri.me</a>
            <div className="flex items-center gap-6 lg:gap-10">
              <a href="#work" className="hidden py-3.5 hover:underline md:block">Work</a>
              <a href="#projects" className="hidden py-3.5 hover:underline md:block">Short stories</a>
              <a href="#stack" className="hidden py-3.5 hover:underline lg:block">Appendix</a>
              <a href="#contact" className="hidden py-3.5 hover:underline lg:block">Correspondence</a>
              <ThemeSwitcher label="Edition" />
            </div>
          </nav>
          <p className="text-center text-[17px] uppercase tracking-[0.3em]">A chakri.me original</p>
        </div>

        <div id="cover" className={`${wrap} flex min-h-[420px] flex-col items-center justify-center gap-5 py-16 text-center md:min-h-[500px]`}>
          <p className="text-[17px] uppercase tracking-[0.3em] text-[#5A5043]">{person.role}</p>
          <h1 className="font-cormorant text-[clamp(4rem,12.2vw,11rem)] font-semibold leading-[0.92] tracking-[-0.02em]">
            {person.name}
          </h1>
          <p className="font-cormorant text-[clamp(1.6rem,3vw,2.6rem)] font-medium italic leading-[1.1] text-[#1E4D40]">
            told in five jobs and several side projects
          </p>
        </div>

        <div className={`${wrap} flex min-h-[120px] flex-wrap items-center justify-between gap-4 bg-[#1E4D40] py-6 text-[17px] uppercase tracking-[0.2em] text-[#F1E8D3] md:min-h-[160px]`}>
          <span className="max-sm:hidden">Unabridged</span>
          <a href="#preface" className="inline-flex h-[52px] items-center border border-[#F1E8D3] px-8 transition-colors hover:bg-[#F1E8D3] hover:text-[#1E4D40]">
            Begin reading
          </a>
          <span>{person.location}</span>
        </div>
      </header>

      <section id="preface" className={`${wrap} flex flex-col gap-14 border-b border-[#211C16] py-20 lg:flex-row lg:gap-24 lg:py-[104px]`}>
        <div className="flex flex-1 flex-col gap-6">
          <h2 className={caps}>Preface</h2>
          <div className="text-[23px] leading-[1.6]">
            <p className="mb-[18px]">
              <span className="float-left pr-3.5 pt-2 font-cormorant text-[118px] font-semibold leading-[0.74] text-[#1E4D40]">I</span>
              {person.about[0].slice(1)}
            </p>
            <p className="mb-[18px]">{person.about[1]}</p>
            <p className="italic text-[#5A5043]">
              Specialising in full-stack development, system design, and user experience. {person.openTo}.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-[520px] lg:shrink-0">
          <h2 className={caps}>Contents</h2>
          <div className="font-cormorant text-[clamp(1.4rem,2.4vw,1.875rem)] font-medium">
            {[
              ["Chapter One: Work", "#work", "2"],
              ["Chapter Two: Short Stories", "#projects", "3"],
              ["Appendix A: Glossary", "#stack", "4"],
              ["Appendix B: About the Author", "#stack", "4"],
              ["Correspondence", "#contact", "5"],
            ].map(([t, href, n]) => (
              <a key={t} href={href} className="flex min-h-[52px] items-baseline gap-3 hover:text-[#6E1F24]">
                <span>{t}</span>
                <Leader />
                <span>{n}</span>
              </a>
            ))}
            <a href={links.catalogue.url} className="flex min-h-[52px] items-baseline gap-3 italic text-[#1E4D40] hover:text-[#6E1F24]">
              <span>The complete works</span>
              <Leader />
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="work" className={`${wrap} flex flex-col items-center border-b border-[#211C16] py-20 lg:py-[104px]`}>
        <p className={caps}>Chapter One</p>
        <h2 className="mb-2 mt-3 font-cormorant text-[clamp(4.5rem,9vw,7rem)] font-medium italic leading-none">Work</h2>
        <p className="pb-12 text-center text-[22px] italic text-[#5A5043]">
          in which our protagonist discovers the hobby comes with a salary
        </p>
        <ol className="w-full max-w-[1040px]">
          {jobs.map((j, i) => (
            <li key={j.version} className="flex flex-col gap-3 border-t border-[#C9BDA3] py-[30px] md:flex-row md:gap-10">
              <span className="shrink-0 font-cormorant text-[64px] font-semibold leading-[0.9] text-[#1E4D40] md:w-[110px]">{ROMAN[i]}</span>
              <div className="flex grow flex-col gap-2">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <h3 className="font-cormorant text-[42px] font-semibold leading-none">{j.company}</h3>
                  <p className="text-[15px] uppercase tracking-[0.14em] text-[#5A5043]">{j.period}</p>
                </div>
                <p className="text-xl italic text-[#5A5043]">{j.role}, {j.city}</p>
                <p className="text-[21px] leading-[1.55]">{j.notes}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="projects" className={`${wrap} flex flex-col items-center border-b border-[#211C16] py-20 lg:py-[104px]`}>
        <p className={caps}>Chapter Two</p>
        <h2 className="mb-2 mt-3 text-center font-cormorant text-[clamp(4rem,9vw,7rem)] font-medium italic leading-none">Short Stories</h2>
        <p className="pb-12 text-center text-[22px] italic text-[#5A5043]">
          side projects, each begun with the words &ldquo;I wonder how that actually works&rdquo;
        </p>
        <div className="grid w-full gap-x-[72px] lg:grid-cols-2">
          {projects.map((p, i) => (
            <a key={p.slug} href={p.url} className="group flex flex-col gap-2.5 border-t border-[#C9BDA3] pb-[34px] pt-[30px]">
              <p className="flex flex-wrap items-baseline justify-between gap-x-4 text-[15px] uppercase tracking-[0.14em] text-[#5A5043]">
                <span>Story the {ORDINAL[i]}</span>
                <span>{p.tech.join(", ")}</span>
              </p>
              <h3 className="font-cormorant text-5xl font-semibold leading-none transition-colors group-hover:text-[#1E4D40]">{p.name}</h3>
              <p className="text-xl leading-[1.55]">{p.short}</p>
            </a>
          ))}
          <a href={links.catalogue.url} className="group flex flex-col gap-2.5 border-t border-[#C9BDA3] pb-[34px] pt-[30px]">
            <p className="flex items-baseline justify-between text-[15px] uppercase tracking-[0.14em] text-[#5A5043]">
              <span>Further reading</span>
              <span>{links.catalogue.label}</span>
            </p>
            <h3 className="font-cormorant text-5xl font-semibold leading-none text-[#1E4D40]">The complete works ↗</h3>
            <p className="text-xl leading-[1.55]">Everything else, catalogued. Some of it finished.</p>
          </a>
        </div>
      </section>

      <section id="stack" className={`${wrap} grid gap-16 py-20 lg:grid-cols-2 lg:gap-24 lg:py-[104px]`}>
        <div className="flex flex-col gap-5">
          <p className={caps}>Appendix A</p>
          <h2 className="font-cormorant text-[64px] font-medium italic leading-none">Glossary</h2>
          <dl className="text-xl leading-normal">
            {skills.map((s) => (
              <div key={s.title} className="border-t border-[#C9BDA3] py-3.5 last:border-b">
                <dt className="inline font-medium italic">{s.title.toLowerCase()}, n. </dt>
                <dd className="inline">{s.items.join(", ")}.</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-5">
          <p className={caps}>Appendix B</p>
          <h2 className="font-cormorant text-[64px] font-medium italic leading-none">About the Author</h2>
          <p className="text-xl leading-[1.6]">
            The author studied Computer Science &amp; Artificial Intelligence at{" "}
            <strong className="font-medium">{education.school}</strong> (B.Tech, {education.period}), leaving with a
            CGPA of <span className="font-cormorant text-3xl font-semibold text-[#1E4D40]">{education.cgpa}</span> out of 10.
          </p>
          <ul className="text-xl leading-normal">
            {achievements.map((a) => (
              <li key={a.title} className="border-t border-[#C9BDA3] py-3.5 last:border-b">{a.text}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer id="contact" className={`${wrap} flex flex-col gap-14 bg-[#1E4D40] pb-10 pt-20 text-[#F1E8D3] lg:pt-24`}>
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-[72px]">
          <div className="flex flex-col gap-[18px]">
            <p className="text-[15px] uppercase tracking-[0.24em]">Correspondence</p>
            <a href={links.mailto} className="font-cormorant text-[clamp(4rem,10vw,9.25rem)] font-medium italic leading-[0.92] tracking-[-0.02em]">
              Write to<br />the author.
            </a>
            <p className="max-w-[560px] text-[22px] leading-[1.55]">{person.contactBlurb}</p>
          </div>
          <ul className="text-xl lg:w-[440px] lg:shrink-0">
            {[
              ["Email", links.email, links.mailto],
              ["GitHub", `${links.github.label} ↗`, links.github.url],
              ["LinkedIn", `${links.linkedin.label} ↗`, links.linkedin.url],
              ["The abridged edition", `${links.resume.label} ↗`, links.resume.url],
              ["Projects, as a Game Boy", `${links.gameboy.label} ↗`, links.gameboy.url],
            ].map(([k, v, href]) => (
              <li key={k} className="border-t border-[#F1E8D3] last:border-b">
                <a href={href} className="flex min-h-[52px] flex-wrap items-center justify-between gap-x-4 py-2 hover:opacity-80">
                  <i>{k}</i>
                  <span>{v}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-between gap-2 text-base italic">
          <span>chakri.me</span>
          <span>Set in Cormorant Garamond and EB Garamond. No trees were harmed. Several builds were.</span>
        </div>
      </footer>
    </main>
  );
}
