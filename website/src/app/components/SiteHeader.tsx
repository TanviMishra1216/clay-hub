"use client";

import { useState } from "react";

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
    <header className="relative z-50 overflow-hidden border-b border-dashed border-[#c97b4d]/40 bg-[#f7efe4]/80 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,_rgba(255,140,66,0.18),_transparent_70%)]" />

      <div className="relative flex w-full items-center justify-between px-6 py-4 md:px-10">
        <h1 className="font-display text-lg font-black uppercase tracking-[0.2em] text-[#8e1f5f] md:text-xl">
          Clay Learning Hub
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

    </header>
  );
}