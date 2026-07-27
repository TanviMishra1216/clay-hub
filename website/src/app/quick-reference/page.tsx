export default function QuickReferencePage() {
  return (
    <main className="min-h-screen bg-pink-200 text-stone-900">
      <header className="border-b border-pink-400 bg-pink-100/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-display text-xl font-black uppercase tracking-[0.2em] text-stone-900">
            Clay Learning Hub
          </a>

          <nav className="hidden gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-stone-700 md:flex">
            <a href="/learn" className="transition hover:text-stone-950">
              Learn
            </a>
            <a href="/quick-reference" className="transition hover:text-stone-950">
              Quick Reference
            </a>
            <a href="/projects" className="transition hover:text-stone-950">
              Project Ideas
            </a>
            <a href="/gallery" className="transition hover:text-stone-950">
              Gallery
            </a>
            <a href="/faqs" className="transition hover:text-stone-950">
              FAQs
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-orange-700">
          Quick Reference
        </p>
        <h1 className="font-display text-4xl font-black tracking-[0.02em] text-stone-950 md:text-5xl">
          Resources for all students
        </h1>
        <p className="mt-6 text-lg leading-8 text-stone-700">
          Explore our resource library for hand-building, potter&apos;s wheel,
          glazing, and firing.
        </p>
      </section>
    </main>
  );
}