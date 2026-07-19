import { Reveal } from "@/components/Reveal";

const STATS = [
  { value: "4–8 wks", label: "Typical brand sprint — speed without cutting corners" },
  { value: "02 leads", label: "You work directly with Bianca & Cameron — no account managers" },
  { value: "09+ niches", label: "Beauty, food & beverage, wellness, retail and more" },
  { value: "100%", label: "Tailored — we don't believe in one-size-fits-all" },
];

export function Studio() {
  return (
    <section id="studio" className="scroll-mt-20">
      {/* Manifesto — asymmetric editorial split */}
      <div className="grid gap-10 border-t border-[#12291c]/15 px-5 py-16 md:grid-cols-12 md:px-10 md:py-28">
        <Reveal className="md:col-span-7">
          <p className="font-serif-d text-3xl leading-[1.15] sm:text-4xl lg:text-[3.4rem] lg:leading-[1.08]">
            We're a small Toronto studio crafting brands that are as{" "}
            <em className="italic text-[#ff4d00]">cool</em> as the people behind them —
            bridging the gap between physical{" "}
            <em className="italic text-[#ff4d00]">unboxing</em> and digital{" "}
            <em className="italic text-[#ff4d00]">conversion</em>.
          </p>
        </Reveal>
        <Reveal delay={150} className="md:col-span-4 md:col-start-9">
          <p className="font-mono-u mb-4 text-[10px] text-[#ff4d00] md:text-[11px]">The studio</p>
          <p className="text-base leading-relaxed text-[#12291c]/75">
            Ashbi is a family-run collective of designers who left big-agency life behind —
            frustrated by inefficiency and a lack of client focus. Our size is our strength:
            senior hands on every project, quicker turnarounds, and none of the corporate
            bloat.
          </p>
          <a href="#contact" className="link-underline font-mono-u mt-6 inline-block text-[11px]">
            Meet the team ↗
          </a>
        </Reveal>
      </div>

      {/* Stats band */}
      <div className="bg-[#12291c] text-[#f5f1e6]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 90}
              className={`border-[#f5f1e6]/15 px-6 py-10 md:px-10 md:py-14 ${
                i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
              } ${i === 2 ? "sm:border-t lg:border-t-0" : ""} ${i === 3 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <p className="font-serif-d text-5xl leading-none md:text-6xl">{s.value}</p>
              <p className="font-mono-u mt-4 text-[10px] leading-relaxed text-[#f5f1e6]/65 md:text-[11px]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
