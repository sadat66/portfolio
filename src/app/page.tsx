import { ArrowUpRight } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "[Company / Studio Placeholder]",
    period: "2024 - Present",
    summary: "Leading delivery of high-performance web platforms and product features.",
  },
  {
    role: "Full Stack Engineer",
    company: "[Company Placeholder]",
    period: "2022 - 2024",
    summary: "Built end-to-end applications with modern frontend and backend architecture.",
  },
  {
    role: "Junior Developer",
    company: "[Company Placeholder]",
    period: "2021 - 2022",
    summary: "Shipped reusable UI components and API integrations for internal products.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="bg-gradient" />
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-9">
        <header className="flex items-center justify-between gap-4 border-b border-[var(--surface-border)] pb-4">
          <p className="m-0 border-l-2 border-[var(--accent)] pl-3 text-xs font-semibold tracking-tight">
            Imteaz Sadat Hossain
          </p>
          <nav className="hidden gap-5 text-xs text-[var(--muted)] md:flex">
            <a
              href="#about"
              className="transition-colors hover:text-[var(--accent)]"
            >
              About
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Experience
            </a>
            <a
              href="#specializations"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Specializations
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Contact
            </a>
          </nav>
        </header>

        <section className="grid items-center gap-8 py-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative pl-5">
            <span
              aria-hidden
              className="absolute left-0 top-1 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/70 via-[var(--accent)]/25 to-transparent"
            />
            <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Creative / Full Stack Portfolio
            </p>
            <h1 className="mb-4 mt-2 bg-gradient-to-br from-[var(--foreground)] via-[var(--foreground)] to-[var(--accent)]/80 bg-clip-text text-[clamp(2.2rem,8vw,5.2rem)] font-[680] leading-[0.98] tracking-[-0.03em] text-transparent">
              Imteaz
              <br />
              Sadat Hossain.
            </h1>
            <p className="m-0 max-w-[38rem] leading-relaxed text-[var(--muted)]">
              Crafting reliable digital products that bridge user needs and business goals with
              clean architecture and modern execution.
            </p>
          </div>
          <div className="aspect-[4/5] rounded-sm border border-[var(--surface-border)] bg-[var(--accent-glow)] p-3 shadow-[0_20px_50px_-20px_color-mix(in_srgb,var(--accent)_35%,transparent)] ring-1 ring-[var(--accent)]/10">
            <div className="flex h-full w-full items-center justify-center rounded-sm border border-dashed border-[var(--accent)]/25 bg-[var(--surface)]/80 text-xs text-[var(--muted)]">
              Profile image placeholder
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-8 border-y border-[var(--surface-border)] py-12 md:grid-cols-[1fr_1.35fr]"
        >
          <div>
            <h2 className="mb-4 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
              The Builder&apos;s{" "}
              <span className="text-[var(--accent)]">Perspective</span>
            </h2>
          </div>
          <div>
            <p className="m-0 leading-relaxed">
              Design is not just visual polish; it is structure in motion. I focus on clarity,
              maintainability, and measurable outcomes while removing unnecessary complexity.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-[var(--surface-border)] bg-[var(--accent-soft)]/50 p-4">
                <h3 className="m-0 text-sm font-semibold text-[var(--accent)]">Philosophy</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  I believe software is as much about people as it is about bits. My workflow prioritizes high-fidelity 
                  technical documentation that translates smoothly between engineering and business stakeholders.
                </p>
              </article>
              <article className="rounded-lg border border-[var(--surface-border)] bg-[var(--accent-soft)]/50 p-4">
                <h3 className="m-0 text-sm font-semibold text-[var(--accent)]">Execution</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  Bridge-building is my core execution style. I navigate stakeholder meetings with confident, fluent 
                  English communication, ensuring technical complexity never obscures business objectives.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="py-12">
          <h2 className="mb-4 flex flex-wrap items-baseline gap-3 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
            Experience.
            <span className="h-px flex-1 min-w-[4rem] bg-gradient-to-r from-[var(--accent)]/50 to-transparent" />
          </h2>
          <div className="border-t border-[var(--surface-border)]">
            {EXPERIENCE.map((job) => (
              <article
                key={job.role}
                className="group border-b border-[var(--surface-border)] py-5 transition-colors hover:bg-[var(--accent-soft)]/40 md:-mx-3 md:rounded-lg md:px-3"
              >
                <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
                  <h3 className="m-0 transition-colors group-hover:text-[var(--accent)]">
                    {job.role}
                  </h3>
                  <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent-soft)]/60 px-2.5 py-0.5 text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                    {job.period}
                  </span>
                </div>
                <p className="mb-0 mt-1 text-sm text-[var(--muted)]">{job.company}</p>
                <p className="mb-0 mt-2 text-sm leading-relaxed">{job.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="specializations" className="border-t border-[var(--surface-border)] py-12">
          <h2 className="mb-6 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
            Specializations
          </h2>
          <div className="grid gap-3 text-sm md:grid-cols-3">
            {[
              "Technical / Business Documentation",
              "Web Application Architecture",
              "Stakeholder Management",
              "Business Process Mapping",
              "English Communication",
              "Full-Stack Development (Next.js)",
            ].map((label) => (
              <p
                key={label}
                className="m-0 rounded-md border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-2.5 text-[var(--muted)] shadow-sm transition-all hover:border-[var(--accent)]/35 hover:text-[var(--foreground)]"
              >
                {label}
              </p>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[var(--surface-border)] bg-[linear-gradient(180deg,var(--accent-soft)_0%,transparent_45%)] pb-10 pt-16"
        >
          <div className="text-center">
            <h2 className="m-0 text-[clamp(2rem,4.8vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Let&apos;s create something{" "}
              <span className="text-[var(--accent)]">permanent.</span>
            </h2>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8">
              <a
                href="mailto:imteazsadat3@gmail.com"
                className="text-[var(--muted)] underline decoration-[var(--accent)]/40 decoration-1 underline-offset-4 transition-colors hover:text-[var(--foreground)] hover:decoration-[var(--accent)]"
              >
                imteazsadat3@gmail.com
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1 font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
              >
                Download CV <ArrowUpRight size={14} className="text-[var(--accent)]" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
