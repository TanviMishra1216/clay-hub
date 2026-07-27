export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#ff4fa3,_#ff1f7a_45%,_#c70056_100%)] text-white">
      <header className="border-b border-pink-300/70 bg-pink-900/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="font-display text-xl font-black uppercase tracking-[0.2em] text-white">
            Clay Learning Hub
          </h1>

          <nav className="hidden gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-pink-50 md:flex">
            <a href="/learn" className="transition hover:text-white">
              Learn
            </a>
            <a href="#quick-reference" className="transition hover:text-white">
              Quick Reference
            </a>
            <a href="#projects" className="transition hover:text-white">
              Project Ideas
            </a>
            <a href="#gallery" className="transition hover:text-white">
              Gallery
            </a>
            <a href="#faqs" className="transition hover:text-white">
              FAQs
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-pink-100">
          Student Resource Hub
        </p>

        <h2 className="font-display max-w-3xl text-5xl font-black leading-[0.9] tracking-[0.02em] text-white md:text-7xl">
          Learn, Build, Create! 
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-50">
          A beginner-friendly website for Clay Club students to explore hand-building,
          wheel work, quick tutorials, project ideas, and helpful classroom resources.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/learn"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-black uppercase tracking-[0.2em] text-pink-700 transition hover:bg-pink-100"
          >
            Start Learning
          </a>

          <a
            href="#projects"
            className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
          >
            Browse Project Ideas
          </a>
        </div>
      </section>

      <section id="learn" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-black tracking-[0.02em] text-white">
            Choose Your Path
          </h2>
          <p className="mt-3 max-w-2xl text-pink-50">
            Clay Club students may use different tools and processes, so the site is
            organized around two main learning paths.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/30 bg-white/10 p-6 shadow-sm backdrop-blur">
            <h3 className="font-display text-2xl font-black text-white">Hand-Building</h3>
            <p className="mt-3 leading-7 text-pink-50">
              Learn pinch pots, coils, slabs, scoring and slipping, texture,
              carving, and sculptural clay techniques.
            </p>
          </article>

          <article className="rounded-2xl border border-white/30 bg-white/10 p-6 shadow-sm backdrop-blur">
            <h3 className="font-display text-2xl font-black text-white">Potter&apos;s Wheel</h3>
            <p className="mt-3 leading-7 text-pink-50">
              Learn centering, opening, pulling walls, trimming, shaping forms,
              and fixing common wheel-throwing problems.
            </p>
          </article>
        </div>
      </section>

      <section
        id="quick-reference"
        className="mx-auto max-w-6xl px-6 py-12"
      >
        <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">
          <h2 className="font-display text-2xl font-black tracking-[0.02em] text-white">
            Quick Reference
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-pink-50">
            Quick Reference guides are meant to be short reminders for students
            who already learned a skill and need a fast checklist while working.
          </p>

          <div className="mt-5 rounded-xl bg-white/90 p-5 text-pink-900">
            <h3 className="font-display text-xl font-black">Example Tip</h3>
            <p className="mt-2 text-pink-900/80">
              Always score and slip before attaching two pieces of clay together.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-3xl font-black tracking-[0.02em] text-white">
          Project Ideas
        </h2>
        <p className="mt-3 max-w-2xl text-pink-50">
          This section will eventually include beginner projects, hand-building
          ideas, wheel projects, functional pieces, decorative work, and challenge
          prompts.
        </p>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-3xl font-black tracking-[0.02em] text-white">
          Student Gallery
        </h2>
        <p className="mt-3 max-w-2xl text-pink-50">
          The gallery can later showcase student work and provide inspiration,
          once photos and teacher approval are available.
        </p>
      </section>

      <section id="faqs" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-3xl font-black tracking-[0.02em] text-white">
          FAQs
        </h2>
        <p className="mt-3 max-w-2xl text-pink-50">
          This section will answer common questions about clay, drying, glazing,
          firing, projects, and classroom expectations.
        </p>
      </section>

      <footer className="mt-12 border-t border-white/20 bg-pink-950/20">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-pink-50">
          Made for future Clay Club students.
        </div>
      </footer>
    </main>
  );
}