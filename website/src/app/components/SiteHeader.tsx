"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Learn", href: "/learn" },
  { label: "Quick Reference", href: "/quick-reference" },
  { label: "Project Ideas", href: "/project-ideas" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-[100] overflow-hidden border-b border-dashed border-[#c97b4d]/40 bg-[#f7efe4]/80 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,_rgba(255,140,66,0.18),_transparent_70%)]" />

      <div className="relative flex w-full items-center justify-between px-6 py-4 md:px-10">
        <h1 className="font-display text-lg font-black uppercase tracking-[0.2em] text-[#8e1f5f] md:text-xl">
          <Link href="/" className="hover:text-[#8e1f5f]">
            Clay Learning Hub
          </Link>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9b3f70] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-[#8e1f5f]/10 hover:text-[#8e1f5f]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full border border-[#8e1f5f]/30 px-4 py-2 text-sm font-black uppercase tracking-[0.15em] text-[#8e1f5f] md:hidden"
        >
          Menu
        </button>
      </div>

      {/* Dark overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-[#8e1f5f]/25 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-72 border-l border-[#c97b4d]/30 bg-[#fffaf2] p-6 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-display text-lg font-black uppercase tracking-[0.2em] text-[#8e1f5f]">
            Menu
          </p>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-[#8e1f5f]/30 px-3 py-1 text-sm font-black text-[#8e1f5f]"
          >
            ✕
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-4 text-sm font-black uppercase tracking-[0.18em] text-[#9b3f70]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-[#c97b4d]/20 bg-[#f7efe4] px-4 py-4 transition hover:bg-[#8e1f5f] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
}