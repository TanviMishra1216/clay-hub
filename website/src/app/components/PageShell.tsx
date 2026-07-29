import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";

type PageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,235,205,0.95)_0%,_rgba(250,244,232,0.98)_45%,_#f7efe4_100%)] text-[#8e1f5f]">
      <SiteHeader />

      <section className="relative z-10 w-full px-6 pt-20 pb-10 md:px-12 lg:px-20">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#9b3f70]">
          {eyebrow}
        </p>

        <h1 className="font-display max-w-4xl text-5xl font-black leading-[0.9] tracking-[0.02em] text-[#8e1f5f] md:text-7xl">
          {title}
        </h1>
      </section>

      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}