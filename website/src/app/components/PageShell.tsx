import Link from "next/link";
import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,235,205,0.95)_0%,_rgba(250,244,232,0.98)_45%,_#f7efe4_100%)] text-[#8e1f5f]">
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-6rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,140,66,0.16),_transparent_70%)]" />
      <header className="relative overflow-hidden border-b border-dashed border-[#c97b4d]/40 bg-[#f7efe4]/80 backdrop-blur">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,_rgba(255,140,66,0.18),_transparent_70%)]" />
        <div className="mx-auto flex max-w-8xl items-center justify-between px-10 py-4">
          <Link
            href="/"
            className="font-display text-xl font-black uppercase tracking-[0.2em] text-[#8e1f5f]"
          >
            Clay Learning Hub
          </Link>

          <nav className="hidden gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9b3f70] md:flex">
            <Link href="/learn" className="transition hover:text-[#8e1f5f]">
              Learn
            </Link>
            <Link href="/quick-reference" className="transition hover:text-[#8e1f5f]">
              Quick Reference
            </Link>
            <Link href="/project-ideas" className="transition hover:text-[#8e1f5f]">
              Project Ideas
            </Link>
            <Link href="/gallery" className="transition hover:text-[#8e1f5f]">
              Gallery
            </Link>
            <Link href="/faqs" className="transition hover:text-[#8e1f5f]">
              FAQs
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[2rem] border border-[#c97b4d]/25 bg-[#fffaf2]/90 p-8 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#9b3f70]">
            {eyebrow}
          </p>

          <h1 className="font-display text-4xl font-black tracking-[0.02em] text-[#8e1f5f] md:text-6xl">
            {title}
          </h1>

          <div className="mt-8 text-[#7a3552]">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
