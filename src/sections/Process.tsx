import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    name: "Discover",
    desc: "A working session about your product, market, and goals. We audit what exists and find the gap your brand can own.",
  },
  {
    n: "02",
    name: "Define",
    desc: "Positioning, naming, and messaging. Strategy on a page — agreed before a single pixel is placed.",
  },
  {
    n: "03",
    name: "Design",
    desc: "Identity, packaging, and web — presented in context, on shelf and on screen, with two structured revision rounds.",
  },
  {
    n: "04",
    name: "Deliver",
    desc: "Production-ready files, guidelines, and a launched site. We stay through print runs and go-live day.",
  },
];

export function Process() {
  return (
    <section className="bg-[#12291c] px-5 py-20 text-[#f5f1e6] md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-u text-[11px] text-[#f5f1e6]/50">How it works</p>
          <h2 className="font-serif-d mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight md:text-6xl">
            A process with <em className="italic text-[#ff4d00]">no surprises</em>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-[#f5f1e6]/15 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="bg-[#12291c]">
              <div className="flex h-full flex-col p-8 md:p-10">
                <p className="font-mono-u text-[11px] text-[#ff4d00]">{s.n}</p>
                <h3 className="font-serif-d mt-6 text-3xl md:text-4xl">{s.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#f5f1e6]/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
