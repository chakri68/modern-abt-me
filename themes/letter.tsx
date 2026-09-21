import type { ReactNode } from "react";
import { education, jobs, links, person, projects, skills } from "@/lib/content";
import { ThemeSwitcher } from "@/components/theme-switcher";

const label = "font-dmmono text-xs uppercase tracking-[0.08em]";
const link = "underline decoration-1 underline-offset-4 hover:text-[#9A3412]";
const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

const P = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <a href={bySlug[slug].url} className={link}>{children}</a>
);

// A paragraph with its facts in the margin. On small screens the notes tuck in underneath.
function Para({ id, notes, children }: { id?: string; notes?: ReactNode; children: ReactNode }) {
  return (
    <div id={id} className="grid scroll-mt-8 gap-x-[72px] gap-y-4 lg:grid-cols-[minmax(0,760px)_minmax(0,1fr)]">
      <p>{children}</p>
      {notes && (
        <aside className="flex flex-col gap-3.5 self-start border-l border-[#CFC7B6] pl-5 font-dmmono text-xs leading-[1.7] text-[#5E574B] lg:mt-3">
          {notes}
        </aside>
      )}
    </div>
  );
}

const JobNote = ({ i }: { i: number }) => (
  <div>
    <span className="font-medium text-[#1E1B16]">{jobs[i].company}</span><br />
    {jobs[i].role}<br />
    {jobs[i].period} · {jobs[i].city}
  </div>
);

// N · Letter: the whole site, written out longhand.
export function LetterTheme() {
  return (
    <main className="min-h-screen bg-[#FBF7EE] font-spectral text-[#1E1B16]">
      <nav className={`${label} flex h-[76px] items-center justify-between gap-6 px-5 md:px-12 xl:px-[72px]`}>
        <a href="#top" className="py-4">chakri.me</a>
        <div className="flex items-center gap-6 lg:gap-9">
          <a href="#work" className="hidden py-4 hover:text-[#9A3412] md:block">Work</a>
          <a href="#projects" className="hidden py-4 hover:text-[#9A3412] md:block">Projects</a>
          <a href="#stack" className="hidden py-4 hover:text-[#9A3412] lg:block">Enclosures</a>
          <ThemeSwitcher label="Stationery" />
          <a href={links.mailto} className="hidden h-11 items-center bg-[#1E1B16] px-5 text-[#FBF7EE] transition-colors hover:bg-[#9A3412] sm:inline-flex">
            Write back
          </a>
        </div>
      </nav>

      <header id="top" className="mx-5 flex flex-col items-center gap-2.5 border-b border-[#1E1B16] pb-10 pt-14 text-center md:mx-12 xl:mx-[72px]">
        <p className="font-iserif text-[clamp(2.75rem,6vw,4rem)] leading-none tracking-[-0.01em]">
          {person.first} <i>{person.last}</i>
        </p>
        <p className="font-dmmono text-xs uppercase tracking-[0.14em] text-[#5E574B]">
          {person.role} · {person.location} · chakri.me
        </p>
      </header>

      <article className="flex flex-col gap-[30px] px-5 pt-14 text-[clamp(1.2rem,1.7vw,1.44rem)] leading-[1.7] md:px-12 lg:pt-[72px] xl:pl-[232px] xl:pr-[72px]">
        <h1 className="font-iserif text-[clamp(4rem,8vw,6.5rem)] italic leading-none tracking-[-0.02em]">
          Dear reader<span className="text-[#9A3412]">,</span>
        </h1>

        <Para>
          I&rsquo;m Chakradhar, a software engineer in Bengaluru. I care about clean interfaces, strong systems, and
          building things that feel good to use. Mostly I try to make software that stays out of the way and
          quietly does its job well, and stands out only when it needs to.
        </Para>

        <Para id="work" notes={<><JobNote i={0} /><JobNote i={1} /><JobNote i={2} /></>}>
          These days I&rsquo;m at <strong className="font-semibold">Even Healthcare</strong>, working on healthcare
          systems: AI-powered call automation, internal tooling, and performance-heavy frontend flows. The running
          theme is making complex internal tools less painful to use. Before that I was at{" "}
          <strong className="font-semibold">Zomato</strong>, first as an intern and then as an engineer, on delivery
          logistics: onboarding flows, ticketing systems, and pipelines that ingest GPS pings from delivery agents.
          TypeScript at the front, Go at the back, large data pipelines somewhere in between.
        </Para>

        <Para notes={<><JobNote i={3} /><JobNote i={4} /></>}>
          Earlier still, backend and infrastructure at <strong className="font-semibold">Shinpo Engineering</strong>,
          where I built and scaled a Strapi-based ERM and containerised services on AWS. And before that, a portal
          and dashboards that automate tax document processing for the UP Commercial Tax Department, built at{" "}
          <strong className="font-semibold">WCARL</strong> while I was studying at IIIT Lucknow.
        </Para>

        <Para
          id="projects"
          notes={projects.map((p) => (
            <div key={p.slug}>
              <span className="font-medium text-[#1E1B16]">{p.name}</span> {p.tech.join(", ")}
            </div>
          ))}
        >
          When I&rsquo;m not doing that, I build things to find out how they actually work.{" "}
          <P slug="life-sim">Life Sim</P> is Conway&rsquo;s Game of Life pushed way past the basics, with
          reaction-diffusion, an agent-based ecosystem, and whole universes that fit in a URL.{" "}
          <P slug="code-collab">CodeCollab</P> is a real-time collaborative IDE on CRDTs.{" "}
          <P slug="get-proctored">get-proctored.ai</P> started as a uni project and ended up actually being used by
          professors. There&rsquo;s also <P slug="node-utils">Node Utils</P>, my playground for low-level Node.js, and
          a <P slug="pixel-drawing-sim">Pixel Drawing Simulator</P> for watching Bresenham and flood-fill behave on
          a real machine instead of on paper.
        </Para>

        <Para
          notes={
            <div>
              <span className="font-medium text-[#1E1B16]">{education.school}</span><br />
              B.Tech, Computer Science &amp; AI<br />
              {education.period} · {education.cgpa} / 10 CGPA
            </div>
          }
        >
          Other things that are true: I&rsquo;m a Codeforces expert, I was a finalist at the India Science
          Festival&rsquo;s national hackathon, and I once built an autonomous drone that ended up in The Times of
          India.
        </Para>

        <Para>
          If you have an interesting problem, an interesting role, or just want to nerd out about technology and
          design,{" "}
          <a href={links.mailto} className="text-[#9A3412] underline decoration-1 underline-offset-4">write back</a>.
          I&rsquo;m open to interesting work, and I answer my email.
        </Para>

        <div className="flex flex-col gap-1 pt-4">
          <span>Yours,</span>
          <span className="font-iserif text-[clamp(4rem,7vw,5.5rem)] italic leading-none tracking-[-0.02em] text-[#9A3412]">
            {person.first}
          </span>
        </div>

        <p className="max-w-[760px] text-xl italic text-[#5E574B]">
          P.S. You can also browse my projects on a Game Boy. I have no defence.{" "}
          <a href={links.gameboy.url} className={link}>{links.gameboy.label}</a>
        </p>
      </article>

      <footer id="stack" className="mx-5 mt-[72px] flex flex-col gap-12 border-t border-[#1E1B16] pb-9 pt-10 md:mx-12 xl:mx-[72px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[72px] xl:pl-40">
          <div className="flex flex-col gap-2 lg:w-[360px] lg:shrink-0">
            <p className="font-dmmono text-xs uppercase tracking-[0.14em] text-[#5E574B]">Encl.</p>
            {[
              ["Resume", links.resume],
              ["The full catalogue", links.catalogue],
              ["GitHub", links.github],
              ["LinkedIn", links.linkedin],
            ].map(([k, l]) => {
              const { url, label: text } = l as { url: string; label: string };
              return (
                <a key={url} href={url} className="flex min-h-11 flex-wrap items-center justify-between gap-x-4 border-b border-[#CFC7B6] text-xl hover:text-[#9A3412]">
                  <span>{k as string}</span>
                  <span className="font-dmmono text-xs">{text} ↗</span>
                </a>
              );
            })}
          </div>
          <div id="contact" className="flex grow flex-col gap-2">
            <p className="font-dmmono text-xs uppercase tracking-[0.14em] text-[#5E574B]">Tools, for the record</p>
            <p className="text-[19px] leading-[1.7]">{skills.map((s) => `${s.items.join(", ")}.`).join(" ")}</p>
            <a
              href={links.mailto}
              className={`${label} mt-4 inline-flex min-h-14 items-center self-start break-all bg-[#9A3412] px-6 py-3 text-[13px] text-white transition-colors hover:bg-[#1E1B16] sm:px-8`}
            >
              Write back:&nbsp;<span className="normal-case tracking-normal">{links.email}</span>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 font-dmmono text-xs text-[#5E574B]">
          <span>chakri.me</span>
          <span>Sent from a static site. Postage was free.</span>
        </div>
      </footer>
    </main>
  );
}
