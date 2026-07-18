import { Reveal } from "@/components/Reveal";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Brand identities run 3–4 weeks, packaging systems 4–6 weeks, and websites 4–8 weeks depending on scope. Subscription requests turn around in 2–4 business days each.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes — most of our clients are founders launching their first retail product or DTC brand. The intro call is free precisely so we can scope something that fits your stage and budget.",
  },
  {
    q: "Who owns the work when it's done?",
    a: "You do. Final deliverables, source files, and IP transfer to you on final payment. We only ask for the right to show the work in our portfolio.",
  },
  {
    q: "Can you handle printing and production?",
    a: "We prepare print-ready files, manage dielines and colour, and liaise with your printer — or recommend ones we trust. We've shepherded dozens of packaging runs to shelf.",
  },
  {
    q: "What does the subscription include?",
    a: "Unlimited queued requests across brand, packaging, and web — one at a time, senior-only, delivered every 2–4 business days. Pause or cancel month to month.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-u text-[11px] text-[#12291c]/60">FAQ</p>
          <h2 className="font-serif-d mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight md:text-6xl">
            Before you <em className="italic text-[#ff4d00]">ask</em>.
          </h2>
        </Reveal>

        <div className="mt-14 max-w-4xl">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group border-b border-[#12291c]/15 py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-serif-d text-2xl leading-snug md:text-3xl">{f.q}</span>
                  <span className="font-serif-d shrink-0 text-3xl text-[#ff4d00] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#12291c]/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
