export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#ff4fa3,_#ff1f7a_45%,_#c70056_100%)] text-white">
      <header className="border-b border-pink-300/70 bg-pink-900/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-display text-xl font-black uppercase tracking-[0.2em] text-white">
            Clay Learning Hub
          </a>

          <nav className="hidden gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-pink-50 md:flex">
            <a href="/learn" className="transition hover:text-white">
              Learn
            </a>
            <a href="/quick-reference" className="transition hover:text-white">
              Quick Reference
            </a>
            <a href="/projects" className="transition hover:text-white">
              Project Ideas
            </a>
            <a href="/gallery" className="transition hover:text-white">
              Gallery
            </a>
            <a href="/faqs" className="transition hover:text-white">
              FAQs
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-pink-100">
          Learn
        </p>
        <h1 className="font-display text-4xl font-black tracking-[0.02em] text-white md:text-5xl">
          Learn the Basics of Clay
        </h1>
        <p className="mt-6 text-lg leading-8 text-pink-50">
          Explore Clay Club resources for hand-building, potter&apos;s wheel,
          glazing, firing, and quick references.
        </p>
      </section>
    </main>
  );
}