import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,235,205,0.95)_0%,_rgba(250,244,232,0.98)_45%,_#f7efe4_100%)] text-[#8e1f5f]">
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-6rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,140,66,0.16),_transparent_70%)]" />
      <header className="relative overflow-hidden border-b border-dashed border-[#c97b4d]/40 bg-[#f7efe4]/80 backdrop-blur">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,_rgba(255,140,66,0.18),_transparent_70%)]" />
        <div className="mx-auto flex max-w-8xl items-center justify-between px-10 py-4">
          <h1 className="font-display text-xl font-black uppercase tracking-[0.2em] text-[#8e1f5f]">
            Clay Learning Hub
          </h1>
    
          <nav className="hidden gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9b3f70] md:flex">
            <a href="/learn" className="transition hover:text-[#8e1f5f]">
              Learn
            </a>
            <a href="/quick-reference" className="transition hover:text-[#8e1f5f]">
              Quick Reference
            </a>
            <a href="/project-ideas" className="transition hover:text-[#8e1f5f]">
              Project Ideas
            </a>
            <a href="/gallery" className="transition hover:text-[#8e1f5f]">
              Gallery
            </a>
            <a href="/faqs" className="transition hover:text-[#8e1f5f]">
              FAQs
            </a>
          </nav>
        </div>
      </header>
  
      <section className="w-full px-6 py-20 md:px-12 lg:px-20">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#9b3f70]">
          Student Resource Hub
        </p>

        <h2 className="font-display max-w-3xl text-5xl font-black leading-[0.9] tracking-[0.02em] text-[#8e1f5f] md:text-7xl">
          Learn, Build, Create! 
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#7a3552]">
          Welcome! The Clay Hub is a beginner-friendly website for Clay Club students to explore hand-building,
          wheel work, quick tutorials, project ideas, and helpful classroom resources.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
          href="/learn"
          className="group rounded-full bg-[#8e1f5f] px-6 py-3 text-center text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#731745]"
         >
          <span className="inline-block transition-transform group-hover:translate-y-1">
            Start Learning →
          </span>
          </a>

          <a
            href="/project-ideas"
            className="group rounded-full border border-[#8e1f5f]/30 px-6 py-3 text-center text-sm font-black uppercase tracking-[0.2em] text-[#8e1f5f] transition hover:bg-[#8e1f5f]/10"
          >
            <span className="inline-block transition-transform group-hover:-translate-y-1">
              Browse Project Ideas →
            </span>
          </a>
        </div>
      </section>
    
      <section className="w-full px-6 py-20 md:px-12 lg:px-20">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-black tracking-[0.02em] text-[#8e1f5f]">
            Choose Your Path
          </h2>
          <p className="mt-3 max-w-2xl text-[#7a3552]">
            Clay Club students may use different tools and processes, so the site is
            organized around two main learning paths.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal direction="left" delayMs={200}>
            <article className="rounded-2xl border border-[#c97b4d]/30 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur">
              <h3 className="font-display text-2xl font-black text-[#8e1f5f]">Hand-Building</h3>
              <p className="mt-3 leading-7 text-[#7a3552]">
                Learn pinch pots, coils, slabs, scoring and slipping, texture,
                carving, and sculptural clay techniques.
              </p>
            </article>
          </ScrollReveal>

  
          <ScrollReveal direction="right" delayMs={200}>
            <article className="rounded-2xl border border-[#c97b4d]/30 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur">
              <h3 className="font-display text-2xl font-black text-[#8e1f5f]">Potter&apos;s Wheel</h3>
              <p className="mt-3 leading-7 text-[#7a3552]">
                Learn centering, opening, pulling walls, trimming, shaping forms,
                and fixing common wheel-throwing problems.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="quick-reference"
        className="mx-auto max-w-6xl px-6 py-12"
      >
        <div className="rounded-2xl border border-[#c97b4d]/20 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur">
          <h2 className="font-display text-2xl font-black tracking-[0.02em] text-[#8e1f5f]">
            Quick Reference
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#7a3552]">
            Quick Reference guides are meant to be short reminders for students
            who already learned a skill and need a fast checklist while working.
          </p>

          <div className="mt-5 rounded-xl bg-[#fff5e8] p-5 text-[#8e1f5f]">
            <h3 className="font-display text-xl font-black">Example Tip</h3>
            <p className="mt-2 text-[#7a3552]">
              Always score and slip before attaching two pieces of clay together.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-3xl font-black tracking-[0.02em] text-[#8e1f5f]">
          Project Ideas
        </h2>
        <p className="mt-3 max-w-2xl text-[#7a3552]">
          This section will eventually include beginner projects, hand-building
          ideas, wheel projects, functional pieces, decorative work, and challenge
          prompts.
        </p>
      </section>

      <footer className="mt-12 border-t border-[#c97b4d]/20 bg-[#f7efe4]/70">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-[#7a3552]">
          Made for Clay students, by clay students.
        </div>
      </footer>
    </main>
  );
}