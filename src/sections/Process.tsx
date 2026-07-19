import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "A free intro call and deep-dive into your product, market and audience. We define what winning looks like before anything gets designed.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Strategy becomes identity, packaging and web — with weekly video updates and draft reviews through your client portal, so you're never guessing.",
  },
  {
    n: "03",
    title: "Deliver",
    desc: "Launch-ready files, print specs and a live site — plus the playbook to keep it consistent. Most engagements land in 4 to 8 weeks.",
  },
  {
    n: "04",
    title: "Grow",
    desc: "Brands aren't static. Our subscription keeps your design and development evolving month after month, without re-hiring.",
  },
];

export function Process() {
  const { openBooking } = useOverlay();
  return (
    <section className="bg-[#12291c] px-5 py-16 text-[#f5f1e6] md:px-10 md:py-28">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <h2 className="font-serif-d text-5xl leading-[0.95] md:text-7xl">
            How we <em className="italic text-[#ff4d00]">work</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-mono-u max-w-xs text-[10px] leading-relaxed text-[#f5f1e6]/60 md:text-[11px]">
            Four steps, refined over years — fast without the big-agency churn.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-px overflow-hidden border border-[#f5f1e6]/15 bg-[#f5f1e6]/15 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 90} className="group bg-[#12291c] p-7 transition-colors duration-500 hover:bg-[#1e3a2a] md:p-9">
            <p className="font-mono-u text-[11px] text-[#ff4d00]">{s.n}</p>
            <h3 className="font-serif-d mt-6 text-4xl leading-none md:mt-16 md:text-5xl">
              {s.title}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-[#f5f1e6]/65">{s.desc}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150}>
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[#f5f1e6]/15 pt-10 md:flex-row md:items-center">
          <p className="font-serif-d text-3xl leading-tight md:text-4xl">
            Step one costs <em className="italic text-[#ff4d00]">nothing</em>.
          </p>
          <button
            onClick={openBooking}
            className="font-mono-u rounded-full bg-[#f5f1e6] px-8 py-4 text-[11px] text-[#12291c] transition-colors hover:bg-[#ff4d00] hover:text-[#f5f1e6]"
          >
            Book a free intro call
          </button>
        </div>
      </Reveal>
    </section>
  );
}
