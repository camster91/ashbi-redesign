import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Brand identity",
    desc: "Logos, systems and stories that set you apart and connect with your audience.",
  },
  {
    n: "02",
    title: "CPG & DTC packaging",
    desc: "Shelf-stopping packaging that reflects your brand's story and moves units.",
  },
  {
    n: "03",
    title: "Web design & development",
    desc: "Stunning, user-friendly sites on Shopify, WordPress or headless — built to convert.",
  },
  {
    n: "04",
    title: "Brand strategy",
    desc: "Positioning that sets your brand up for growth and long-term success.",
  },
  {
    n: "05",
    title: "Creative direction",
    desc: "Visual and strategic direction for maximum impact across every touchpoint.",
  },
  {
    n: "06",
    title: "Design & dev subscription",
    desc: "Ongoing support that keeps your brand evolving effortlessly, month after month.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 px-5 py-16 md:px-10 md:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <h2 className="font-serif-d text-5xl leading-[0.95] md:text-7xl">
            What we <em className="italic text-[#ff4d00]">do</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-mono-u max-w-xs text-[10px] leading-relaxed text-[#12291c]/70 md:text-[11px]">
            Six services, one team — from first sketch to launch day and beyond.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <ul className="border-t border-[#12291c]/20">
          {SERVICES.map((s) => (
            <li key={s.n}>
              <a
                href="#contact"
                className="svc-row group flex items-center gap-5 border-b border-[#12291c]/20 px-2 py-6 md:gap-10 md:px-4 md:py-9"
              >
                <span className="svc-num font-mono-u w-10 shrink-0 text-[11px] text-[#12291c]/60 transition-colors">
                  {s.n}
                </span>
                <h3 className="font-serif-d flex-1 text-3xl leading-none sm:text-4xl md:text-6xl">
                  {s.title}
                </h3>
                <p className="hidden max-w-xs text-sm leading-relaxed opacity-60 lg:block">
                  {s.desc}
                </p>
                <span className="svc-arrow font-serif-d shrink-0 text-3xl text-[#ff4d00] md:text-4xl">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
