import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Corexlab",
    period: "January 2023 – May 2026",
    summary: "Developed web applications using React.js, Next.js, Node.js, and MongoDB. Designed and implemented complex business logic and scalable features. Optimized system architecture for better performance. Collaborated with stakeholders to translate business needs into technical solutions.",
  },
];

const PROJECTS = [
  {
    title: "iLeap – Volunteer Management Platform",
    description: "Multi-role platform with real-time messaging and event management. Defined architecture and user flows, translating product ideas into technical execution.",
  },
  {
    title: "Tax Management & Financial Analysis System",
    description: "Integrated Open Banking APIs for transaction classification logic. Built scalable backend for financial data processing and tax reporting.",
  },
  {
    title: "BuildReady System",
    description: "Construction workflow platform implementing core CRUD operations and business logic for project lifecycle with focus on clean UI design.",
  },
];

const SKILLS = [
  {
    category: "Product & Business",
    items: ["Requirement Analysis (SRS, BRD, WBS)", "MVP Planning", "Feature Prioritization", "User Journey Mapping", "Stakeholder Communication"],
  },
  {
    category: "Development",
    items: ["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "REST API Design", "Tailwind CSS"],
  },
  {
    category: "Testing & QA",
    items: ["Test Case Design", "Manual Testing", "API Testing (Postman)", "Performance Testing (JMeter)", "Basic Automation (Cypress, Selenium)"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git & GitHub", "JIRA", "CI/CD Basics", "Agile / Scrum Methodology"],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="bg-gradient" />
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-9">
        <header className="flex items-center justify-between gap-4 border-b border-[var(--surface-border)] pb-4">
          <p className="m-0 border-l-2 border-[var(--accent)] pl-3 text-xs font-semibold tracking-tight uppercase">
            IMTEAZ SADAT HOSSAIN
          </p>
          <nav className="hidden gap-5 text-xs text-[var(--muted)] md:flex">
            <a href="#about" className="transition-colors hover:text-[var(--accent)]">About</a>
            <a href="#experience" className="transition-colors hover:text-[var(--accent)]">Experience</a>
            <a href="#projects" className="transition-colors hover:text-[var(--accent)]">Projects</a>
            <a href="#skills" className="transition-colors hover:text-[var(--accent)]">Skills</a>
            <a href="#contact" className="transition-colors hover:text-[var(--accent)]">Contact</a>
          </nav>
        </header>

        <section className="grid items-center gap-8 py-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative pl-5">
            <span
              aria-hidden
              className="absolute left-0 top-1 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/70 via-[var(--accent)]/25 to-transparent"
            />
            <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Product-Oriented Full Stack Engineer
            </p>
            <h1 className="mb-4 mt-2 bg-gradient-to-br from-[var(--foreground)] via-[var(--foreground)] to-[var(--accent)]/80 bg-clip-text text-[clamp(2.2rem,8vw,4.8rem)] font-[680] leading-[0.98] tracking-[-0.03em] text-transparent">
              Imteaz
              <br />
              Sadat Hossain.
            </h1>
            <p className="m-0 max-w-[38rem] leading-relaxed text-[var(--muted)]">
              Expertise in translating business requirements into scalable digital solutions. 
              Bridging the gap between engineering and business with a <strong>QA-driven approach</strong>.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://github.com/sadat66" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/imteaz-sadat-3987701b2" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:imteazsadat3@gmail.com" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-sm border border-[var(--surface-border)] bg-[var(--accent-glow)] p-3 shadow-[0_20px_50px_-20px_color-mix(in_srgb,var(--accent)_35%,transparent)] ring-1 ring-[var(--accent)]/10">
            <div className="flex h-full w-full items-center justify-center rounded-sm border border-dashed border-[var(--accent)]/25 bg-[var(--surface)]/80 text-xs text-[var(--muted)]">
              Profile image placeholder
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 border-y border-[var(--surface-border)] py-12 md:grid-cols-[1fr_1.35fr]">
          <div>
            <h2 className="mb-4 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
              The Product{" "}
              <span className="text-[var(--accent)]">Mindset</span>
            </h2>
          </div>
          <div>
            <p className="m-0 leading-relaxed text-[var(--muted)]">
              Experienced in end-to-end product delivery, from requirements gathering to deployment. 
              I specialize in system design, business logic implementation, and writing test cases 
              to ensure product reliability and high impact.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-[var(--surface-border)] bg-[var(--accent-soft)]/50 p-4">
                <h3 className="m-0 text-sm font-semibold text-[var(--accent)]">Execution</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  My workflow prioritizes high-fidelity technical documentation (SRS, BRD) that translates 
                  smoothly between engineering and business stakeholders.
                </p>
              </article>
              <article className="rounded-lg border border-[var(--surface-border)] bg-[var(--accent-soft)]/50 p-4">
                <h3 className="m-0 text-sm font-semibold text-[var(--accent)]">Reliability</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  QA-driven approach to building high-impact platforms. I focus on comprehensive testing 
                  strategies to ensure every release meets the highest quality standards.
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
              <article key={job.company} className="group border-b border-[var(--surface-border)] py-6 transition-colors hover:bg-[var(--accent-soft)]/40 md:-mx-3 md:rounded-lg md:px-3">
                <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
                  <h3 className="m-0 text-lg font-medium transition-colors group-hover:text-[var(--accent)]">
                    {job.role}
                  </h3>
                  <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent-soft)]/60 px-2.5 py-0.5 text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                    {job.period}
                  </span>
                </div>
                <p className="mb-0 mt-1 font-semibold text-[var(--accent)]">{job.company}</p>
                <p className="mb-0 mt-3 text-sm leading-relaxed text-[var(--muted)]">{job.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className="mb-6 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <article key={project.title} className="flex flex-col justify-between rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 shadow-sm transition-all hover:border-[var(--accent)]/40 hover:shadow-md">
                <div>
                  <h3 className="text-base font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-12 border-t border-[var(--surface-border)]">
          <h2 className="mb-8 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
            Core Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)] mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-md border border-[var(--surface-border)] bg-[var(--surface)] text-[13px] text-[var(--muted)] hover:border-[var(--accent)]/30 hover:text-[var(--foreground)] transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="py-12 border-t border-[var(--surface-border)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">Education</h2>
              <p className="mt-2 text-lg text-[var(--foreground)] font-medium">Bachelor of Science in Computer Science & Engineering</p>
            </div>
            <div className="text-left md:text-right">
              <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent-soft)]/60 px-3 py-1 text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                Graduated: 2022
              </span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-[var(--accent)] mb-1">Languages</p>
              <p className="text-sm text-[var(--muted)]">English (Professional)<br/>Bangla (Native)</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-[var(--accent)] mb-1">Interests</p>
              <p className="text-sm text-[var(--muted)]">SaaS, Fintech, Automation</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-[var(--accent)] mb-1">Strengths</p>
              <p className="text-sm text-[var(--muted)]">Product Alignment, QA Mindset</p>
            </div>
          </div>
        </section>

        <footer id="contact" className="border-t border-[var(--surface-border)] bg-[linear-gradient(180deg,var(--accent-soft)_0%,transparent_45%)] pb-10 pt-16">
          <div className="text-center">
            <h2 className="m-0 text-[clamp(2rem,4.8vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Let&apos;s create something{" "}
              <span className="text-[var(--accent)]">permanent.</span>
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-6 text-sm sm:flex-row sm:gap-10">
              <a href="mailto:imteazsadat3@gmail.com" className="text-[var(--muted)] underline decoration-[var(--accent)]/40 decoration-1 underline-offset-4 transition-colors hover:text-[var(--foreground)] hover:decoration-[var(--accent)]">
                imteazsadat3@gmail.com
              </a>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/imteaz-sadat-3987701b2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]">
                  LinkedIn <ArrowUpRight size={14} className="text-[var(--accent)]" />
                </a>
                <a href="https://github.com/sadat66" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]">
                  GitHub <ArrowUpRight size={14} className="text-[var(--accent)]" />
                </a>
              </div>
            </div>
            <p className="mt-12 text-[10px] uppercase tracking-widest text-[var(--muted)] opacity-50">
              © 2026 Dhaka, Bangladesh
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
