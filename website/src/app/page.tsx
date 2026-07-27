export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">Clay Club Learning Hub</h1>

          <nav className="hidden gap-6 text-sm font-medium text-stone-700 md:flex">
            <a href="#learn" className="hover:text-stone-950">
              Learn
            </a>
            <a href="#quick-reference" className="hover:text-stone-950">
              Quick Reference
            </a>
            <a href="#projects" className="hover:text-stone-950">
              Project Ideas
            </a>
            <a href="#gallery" className="hover:text-stone-950">
              Gallery
            </a>
            <a href="#faqs" className="hover:text-stone-950">
              FAQs
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-700">
          Student Resource Hub
        </p>

        <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Learn, Build, Glaze, Create
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
          A beginner-friendly website for Clay Club students to explore hand-building,
          wheel work, quick tutorials, project ideas, and helpful classroom resources.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#learn"
            className="rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-stone-700"
          >
            Start Learning
          </a>

          <a
            href="#projects"
            className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-semibold text-stone-800 hover:bg-white"
          >
            Browse Project Ideas
          </a>
        </div>
      </section>

      <section id="learn" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Choose Your Path</h2>
          <p className="mt-3 max-w-2xl text-stone-700">
            Clay Club students may use different tools and processes, so the site is
            organized around two main learning paths.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">Hand-Building</h3>
            <p className="mt-3 leading-7 text-stone-700">
              Learn pinch pots, coils, slabs, scoring and slipping, texture,
              carving, and sculptural clay techniques.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold">Potter&apos;s Wheel</h3>
            <p className="mt-3 leading-7 text-stone-700">
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
        <div className="rounded-2xl bg-orange-100 p-6">
          <h2 className="text-2xl font-bold">Quick Reference</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-800">
            Quick Reference guides are meant to be short reminders for students
            who already learned a skill and need a fast checklist while working.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <h3 className="font-semibold">Example Tip</h3>
            <p className="mt-2 text-stone-700">
              Always score and slip before attaching two pieces of clay together.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Project Ideas</h2>
        <p className="mt-3 max-w-2xl text-stone-700">
          This section will eventually include beginner projects, hand-building
          ideas, wheel projects, functional pieces, decorative work, and challenge
          prompts.
        </p>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Student Gallery</h2>
        <p className="mt-3 max-w-2xl text-stone-700">
          The gallery can later showcase student work and provide inspiration,
          once photos and teacher approval are available.
        </p>
      </section>

      <section id="faqs" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">FAQs</h2>
        <p className="mt-3 max-w-2xl text-stone-700">
          This section will answer common questions about clay, drying, glazing,
          firing, projects, and classroom expectations.
        </p>
      </section>

      <footer className="mt-12 border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-stone-600">
          Made for future Clay Club students.
        </div>
      </footer>
    </main>
  );
}