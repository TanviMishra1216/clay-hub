import ScrollReveal from "./components/ScrollReveal";
import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,235,205,0.95)_0%,_rgba(250,244,232,0.98)_45%,_#f7efe4_100%)] text-[#8e1f5f]">
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-6rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,140,66,0.16),_transparent_60%)]" />
      <SiteHeader /> 
      <section className="w-full px-6 py-20 md:px-12 lg:px-20">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#9b3f70]">
          Student Resource Hub
        </p>

        <h2 className="font-display max-w-3xl text-5xl font-black leading-[0.9] tracking-[0.02em] text-[#8e1f5f] md:text-7xl">
          Learn, Build, Create! 
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#7a3552]">
          Welcome! The Clay Hub is a beginner-friendly website for students to explore hand-building,
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
    
      <div className="relative isolate overflow-hidden border-y border-[#c97b4d]/20 bg-[#faf1e4]">
       <div className="pointer-events-none absolute right-[-24rem] top-[-36rem] -z-10 h-[80rem] w-[80rem] rounded-full bg-[radial-gradient(circle,_rgba(255,235,205,0.95)_0%,_rgba(255,174,92,0.21)_30%,_rgba(255,205,148,0.12)_58%,_rgba(255,224,190,0.05)_78%,_transparent_60%)] blur-[100px]" />
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
          className="mx-auto max-w-6xl px-6 py-8"
        >
          <div className="rounded-2xl border border-[#c97b4d]/20 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur">
            <h2 className="font-display text-2xl font-black tracking-[0.02em] text-[#8e1f5f]">
              Quick Reference
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#7a3552]">
              Quick Reference guides are meant to be a fast access way of getting to a tutorial video.
            </p>
          </div>

          <div className="mt-20 rounded-2xl border border-[#c97b4d]/20 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur">
            <h2 className="font-display text-2xl font-black tracking-[0.02em] text-[#8e1f5f]">
              Tips
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-[#7a3552]">
              Here are some helpful tips for your clay projects!
            </p>
            <div className="mt-5 rounded-xl bg-[#fff5e8] p-5 text-[#8e1f5f]">
              <h3 className="font-display text-xl font-black">Example Tip</h3>
              <p className="mt-2 text-[#7a3552]">
                Always score and slip before attaching two pieces of clay together.
              </p>
            </div>
          </div>
        </section>
      </div>
     
      <div className="relative isolate overflow-hidden border-y border-[#c97b4d]/1 bg-[#faf1e4]">
       <div className="pointer-events-none absolute left-[-12rem] top-[-15rem] -z-10 h-[52rem] w-[52rem] rounded-full bg-[radial-gradient(circle,_rgba(255,140,66,0.34)_0%,_rgba(255,174,92,0.22)_32%,_rgba(255,205,148,0.12)_58%,_transparent_75%)]" />
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
            Made for Clay students.
          </div>
        </footer>
      </div>
    </main>
  );
}
