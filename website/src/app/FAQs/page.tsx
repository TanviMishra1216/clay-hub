import PageShell from "../components/PageShell";

export default function FAQsPage() {
  return (
    <PageShell eyebrow="FAQs" title="Frequently Asked Questions">
      <div className="mt-20 rounded-2xl border border-[#c97b4d]/20 bg-[#fffaf2]/80 p-6 shadow-[0_8px_24px_rgba(141,58,89,0.08)]">
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
    </PageShell>
  );
}
