import { ArrowUpRight, Github, Linkedin, Mail, Music } from "lucide-react";

const BOOK_CALL_URL =
  "mailto:imteazsadat3@gmail.com?subject=Discovery%20Call%20Request%20-%20Custom%20RAG%20System&body=Hi%20Imteaz%2C%0A%0AI%20want%20to%20discuss%20a%20custom%20RAG-based%20chat%20system.%0A%0ACompany%3A%0AUse%20case%3A%0ATimeline%3A%0A";

const RAG_PACKAGES = [
  {
    name: "Validation Sprint",
    timeline: "1-2 weeks",
    engagement: "Fixed scope",
    outcomes: [
      "Use-case and data-source validation",
      "Retrieval and response quality baseline",
      "Architecture recommendation with implementation roadmap",
    ],
  },
  {
    name: "MVP Build",
    timeline: "3-6 weeks",
    engagement: "Build and launch",
    outcomes: [
      "Production-ready RAG chat assistant",
      "Data ingestion, chunking, embeddings, and retrieval pipeline",
      "Guardrails, monitoring, and launch support",
    ],
  },
  {
    name: "Scale & Optimize",
    timeline: "Ongoing",
    engagement: "Retainer",
    outcomes: [
      "Latency and accuracy optimization",
      "Evaluation workflows to reduce hallucination risk",
      "Feature iteration for team and customer adoption",
    ],
  },
];

const QUALIFICATION = {
  bestFit: [
    "Docs-heavy products with growing support load",
    "Teams with internal knowledge spread across tools",
    "Founders needing a fast, reliable AI assistant MVP",
  ],
  notFitYet: [
    "No usable data source or documentation",
    "Unclear user problem or no target workflow",
    "Need a generic chatbot without domain grounding",
  ],
};

const DELIVERY_PROCESS = [
  {
    title: "Discovery",
    description: "Define use case, target users, and success metrics for the assistant.",
  },
  {
    title: "Data Design",
    description: "Map sources, chunking strategy, and retrieval logic for domain context.",
  },
  {
    title: "RAG Build",
    description: "Implement ingestion, vector search, response flow, and safety controls.",
  },
  {
    title: "Launch & Iterate",
    description: "Ship MVP, track quality, and optimize with real usage data.",
  },
];

const FAQS = [
  {
    question: "How long does an MVP take?",
    answer:
      "Most MVPs ship in 3-6 weeks, depending on data readiness and integration scope.",
  },
  {
    question: "Can you use our existing stack?",
    answer:
      "Yes. I can integrate with common startup stacks and adapt to your current backend, auth, and data setup.",
  },
  {
    question: "How do you handle hallucinations and evaluation?",
    answer:
      "I use grounded retrieval, prompt guardrails, and evaluation checks against expected answers to improve reliability over time.",
  },
];

const WEEKLY_LINKEDIN_CADENCE = [
  "One founder pain-point post (problem and business impact)",
  "One implementation insight post (architecture or optimization lesson)",
  "One mini case-study post with a CTA to book a discovery call",
];

const FUNNEL_METRICS = [
  "Landing visitors",
  "CTA clicks",
  "Discovery calls booked",
  "Qualified leads",
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Corexlab",
    period: "2023 – 2026",
    location: "Dhaka, Bangladesh",
    points: [
      "Acted as a technical bridge between clients and engineering teams, leading requirement discussions, demos, and delivery alignment.",
      "Translated business requirements into scalable system designs and implementation plans.",
      "Built and shipped modular, production-grade applications using MERN and Next.js.",
      "Led agile execution cycles to deliver mission-critical features on time while maintaining system scalability.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Grimoire | Personal Project",
    description:
      "Built a RAG-based AI chat system for game lore, narratives, and gameplay queries with a full pipeline for ingestion, chunking, embeddings, vector search, and grounded LLM response generation.",
    liveUrl: "https://gamelore.vercel.app",
    githubUrl: "https://github.com/sadat66/gamelore",
  },
  {
    title: "BuildReady | Full-Stack Developer",
    description:
      "Developed a structured digital tendering system where homeowners can publish projects and contractors can submit paid proposals. Implemented a digital signature engine with hand-drawn signatures and automated PDF contracts for bilateral execution and archival.",
  },
  {
    title: "iLeap | Full-Stack Developer",
    description:
      "Architected a multi-role RBAC system for Volunteers, Organizations, and Mentors. Built real-time 1:1 messaging and advanced filtering and discovery to improve opportunity matching.",
  },
];

const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Prisma ORM"],
  },
  {
    category: "Tools & Strengths",
    items: ["Git", "Vercel", "MVP Architecture", "Stakeholder Management", "Requirement Engineering"],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="bg-gradient" />
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-9">
        <header className="flex items-center justify-between gap-4 border-b border-[var(--surface-border)] pb-4">
          <p className="m-0 border-l-2 border-[var(--accent)] pl-3 text-xs font-semibold tracking-tight uppercase">
            IMTEAZ SADAT
          </p>
          <nav className="hidden gap-5 text-xs text-[var(--muted)] md:flex lg:gap-8">
            <a href="#experience" className="transition-colors hover:text-[var(--accent)]">Experience</a>
            <a href="#projects" className="transition-colors hover:text-[var(--accent)]">Projects</a>
            <a href="#skills" className="transition-colors hover:text-[var(--accent)]">Skills</a>
            <a href="#contact" className="transition-colors hover:text-[var(--accent)]">Contact</a>
            <a 
              href="https://music.youtube.com/playlist?list=PLPDuaJTLxFK7p-P2wMaw_RrDh9v4Ql58F&si=vuAhownij6rKVOn2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 transition-colors hover:text-[var(--accent)]"
            >
              <Music size={14} className="text-[var(--accent)]" />
              sadat&apos;s playlist
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
              Custom RAG Systems for Startup Teams
            </p>
            <h1 className="mb-4 mt-2 bg-gradient-to-br from-[var(--foreground)] via-[var(--foreground)] to-[var(--accent)]/80 bg-clip-text text-[clamp(2.2rem,8vw,4.2rem)] font-[680] leading-[0.98] tracking-[-0.03em] text-transparent">
              Imteaz
              <br />
              Sadat.
            </h1>
            <p className="m-0 max-w-[38rem] leading-relaxed text-[var(--muted)]">
              I help startup and SMB founders build custom RAG-based chat systems grounded in their own product and business data. From architecture to launch, I deliver reliable assistants that reduce support load and improve knowledge access.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={BOOK_CALL_URL}
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Book a Discovery Call <ArrowUpRight size={14} />
              </a>
              <a
                href="mailto:imteazsadat3@gmail.com?subject=Custom%20RAG%20Project%20Inquiry"
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--surface-border)] px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--foreground)]"
              >
                Email project details <Mail size={14} />
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="https://github.com/sadat66" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/isadat" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:imteazsadat3@gmail.com" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative aspect-square w-48 overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--accent-glow)] p-1 shadow-lg ring-1 ring-[var(--accent)]/10">
              <img 
                src="/dp/myface.jpeg" 
                alt="Imteaz Sadat" 
                className="h-full w-full rounded-xl object-cover"
              />
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
                <p className="mb-0 mt-1 font-semibold text-[var(--accent)]">{job.company} • {job.location}</p>
                <ul className="mb-0 mt-3 list-disc pl-5 text-sm leading-relaxed text-[var(--muted)]">
                  {job.points.map((point, i) => (
                    <li key={i} className="mb-2">{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="rag-services" className="py-12 border-t border-[var(--surface-border)]">
          <h2 className="mb-2 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
            RAG Services
          </h2>
          <p className="mb-8 max-w-[44rem] text-sm leading-relaxed text-[var(--muted)]">
            Productized engagement options for teams that need a domain-specific assistant built fast and shipped with production quality.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {RAG_PACKAGES.map((pkg) => (
              <article key={pkg.name} className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
                <h3 className="m-0 text-base font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                  {pkg.timeline} • {pkg.engagement}
                </p>
                <ul className="mb-0 mt-4 list-disc pl-5 text-sm leading-relaxed text-[var(--muted)]">
                  {pkg.outcomes.map((item) => (
                    <li key={item} className="mb-2">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
              <h3 className="m-0 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Best Fit</h3>
              <ul className="mb-0 mt-3 list-disc pl-5 text-sm leading-relaxed text-[var(--muted)]">
                {QUALIFICATION.bestFit.map((item) => (
                  <li key={item} className="mb-2">{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
              <h3 className="m-0 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Not a Fit Yet</h3>
              <ul className="mb-0 mt-3 list-disc pl-5 text-sm leading-relaxed text-[var(--muted)]">
                {QUALIFICATION.notFitYet.map((item) => (
                  <li key={item} className="mb-2">{item}</li>
                ))}
              </ul>
            </article>
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
                {"liveUrl" in project && (
                  <div className="mt-5 flex items-center gap-4 text-sm">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                      >
                        Live Demo <ArrowUpRight size={14} />
                      </a>
                    )}
                    {"githubUrl" in project && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        GitHub <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="case-study" className="py-12 border-t border-[var(--surface-border)]">
          <h2 className="mb-6 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
            Grimoire Case Study
          </h2>
          <article className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-6">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">Problem</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Game lore and gameplay knowledge were fragmented across long-form docs and hard to query quickly.
            </p>
            <p className="m-0 mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">Solution</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Built an end-to-end RAG pipeline: ingestion, chunking, embeddings, vector retrieval, and grounded LLM response generation with admin controls for updates.
            </p>
            <p className="m-0 mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">Outcome</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              Users received faster, context-aware answers while system maintainers gained better control over data quality and assistant behavior.
            </p>
          </article>
        </section>

        <section id="process" className="py-12 border-t border-[var(--surface-border)]">
          <h2 className="mb-6 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
            How I Work
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {DELIVERY_PROCESS.map((step) => (
              <article key={step.title} className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
                <h3 className="m-0 text-base font-semibold">{step.title}</h3>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="py-12 border-t border-[var(--surface-border)]">
          <h2 className="mb-6 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
            FAQ
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {FAQS.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
                <h3 className="m-0 text-sm font-semibold">{faq.question}</h3>
                <p className="mb-0 mt-3 text-sm leading-relaxed text-[var(--muted)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="growth" className="py-12 border-t border-[var(--surface-border)]">
          <h2 className="mb-6 text-[clamp(1.35rem,3vw,1.8rem)] font-semibold tracking-[-0.02em]">
            Marketing Cadence & Metrics
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
              <h3 className="m-0 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Weekly LinkedIn Cadence</h3>
              <ul className="mb-0 mt-3 list-disc pl-5 text-sm leading-relaxed text-[var(--muted)]">
                {WEEKLY_LINKEDIN_CADENCE.map((item) => (
                  <li key={item} className="mb-2">{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
              <h3 className="m-0 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Funnel Tracking</h3>
              <ul className="mb-0 mt-3 list-disc pl-5 text-sm leading-relaxed text-[var(--muted)]">
                {FUNNEL_METRICS.map((item) => (
                  <li key={item} className="mb-2">{item}</li>
                ))}
              </ul>
              <p className="mb-0 mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Run one headline and CTA experiment every 2 weeks, then keep the version that improves call-booking quality.
              </p>
            </article>
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
              <p className="mt-2 text-lg text-[var(--foreground)] font-medium">B.Sc. Computer Science, North South University</p>
            </div>
            <div className="text-left md:text-right">
              <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent-soft)]/60 px-3 py-1 text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                2017 – 2022
              </span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-[var(--accent)] mb-1">Interests</p>
              <p className="text-sm text-[var(--muted)]">LLM applications, RAG architecture, specialized AI systems</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-[var(--accent)] mb-1">Playlist</p>
              <a 
                href="https://music.youtube.com/playlist?list=PLPDuaJTLxFK7p-P2wMaw_RrDh9v4Ql58F&si=vuAhownij6rKVOn2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Music size={14} className="text-[var(--accent)]" />
                <span>On YouTube Music</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-[var(--accent)] mb-1">Location</p>
              <p className="text-sm text-[var(--muted)]">Dhaka, Bangladesh</p>
            </div>
          </div>
        </section>

        <footer id="contact" className="border-t border-[var(--surface-border)] bg-[linear-gradient(180deg,var(--accent-soft)_0%,transparent_45%)] pb-10 pt-16">
          <div className="text-center">
            <h2 className="m-0 text-[clamp(2rem,4.8vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Let&apos;s create something{" "}
              <span className="text-[var(--accent)]">permanent.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[42rem] text-sm leading-relaxed text-[var(--muted)]">
              Need a personalized RAG-based chat system for your product or domain? I can help design and build it end-to-end.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-6 text-sm sm:flex-row sm:gap-10">
              <a href="mailto:imteazsadat3@gmail.com" className="text-[var(--muted)] underline decoration-[var(--accent)]/40 decoration-1 underline-offset-4 transition-colors hover:text-[var(--foreground)] hover:decoration-[var(--accent)]">
                imteazsadat3@gmail.com
              </a>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/isadat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]">
                  LinkedIn <ArrowUpRight size={14} className="text-[var(--accent)]" />
                </a>
                <a href="https://github.com/sadat66" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]">
                  GitHub <ArrowUpRight size={14} className="text-[var(--accent)]" />
                </a>
              </div>
            </div>
            <p className="mt-12 text-[10px] uppercase tracking-widest text-[var(--muted)] opacity-50">
              © 2026 Imteaz Sadat
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
