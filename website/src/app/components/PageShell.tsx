import Link from "next/link";
import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#ff4fa3,_#ff1f7a_45%,_#c70056_100%)] text-white">
      <header className="border-b border-pink-300/70 bg-pink-900/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-display text-xl font-black uppercase tracking-[0.2em] text-white"
          >
            Clay Learning Hub
          </Link>

          <nav className="hidden gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-pink-50 md:flex">
            <Link href="/learn" className="transition hover:text-white">
              Learn
            </Link>
            <Link href="/quick-reference" className="transition hover:text-white">
              Quick Reference
            </Link>
            <Link href="/project-ideas" className="transition hover:text-white">
              Project Ideas
            </Link>
            <Link href="/gallery" className="transition hover:text-white">
              Gallery
            </Link>
            <Link href="/faqs" className="transition hover:text-white">
              FAQs
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-pink-100">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl font-black tracking-[0.02em] text-white md:text-5xl">
          {title}
        </h1>
        {children}
      </section>
    </main>
  );
}
