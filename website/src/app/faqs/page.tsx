import PageShell from "../components/PageShell";
import ScrollReveal from "../components/ScrollReveal";

export default function FAQsPage() {
  return (
    <PageShell eyebrow="FAQs" title="Frequently Asked Questions">
      <section className="w-full px-10 py-8 md:px-12 lg:px-20">
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ScrollReveal direction = "left" delayMs = {0}>
            <article className="rounded-2xl border border-[#c97b4d]/30 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur">
            
              <h3 className="font-display text-xl font-black text-[#8e1f5f]">
                How do I attach two pieces of clay?
              </h3>

              <p className="mt-3 leading-7 text-[#7a3552]">
                Always score both surfaces, add slip, press the pieces together,
                and smooth the seam so the attachment is secure.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal direction = "right" delayMs = {0}>
            <article className="rounded-2xl border border-[#c97b4d]/30 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur">
            <h3 className="font-display text-xl font-black text-[#8e1f5f]">
              What should I do if my clay is too dry?
            </h3>

            <p className="mt-3 leading-7 text-[#7a3552]">
              Ask before adding too much water. Depending on the stage, you may
              need to lightly dampen it, wrap it, or adjust your project plan.
            </p>
            </article>
          </ScrollReveal>

          <ScrollReveal direction = "left" delayMs = {200}>
            <article className="rounded-2xl border border-[#c97b4d]/30 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur">
            <h3 className="font-display text-xl font-black text-[#8e1f5f]">
              When can I glaze my piece?
            </h3>

            <p className="mt-3 leading-7 text-[#7a3552]">
              Pieces usually need to be fully dry and bisque fired before
              glazing. Your teacher will let you know when it is ready.
            </p>
            </article>
        </ScrollReveal>
        
          <ScrollReveal direction = "right" delayMs = {200}>
            <article className="rounded-2xl border border-[#c97b4d]/30 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)] backdrop-blur">
            <h3 className="font-display text-xl font-black text-[#8e1f5f]">
              What if I do not know what to make?
            </h3>

            <p className="mt-3 leading-7 text-[#7a3552]">
              Start with the Project Ideas page for beginner-friendly prompts,
              inspiration, and possible challenge projects.
            </p>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
} 