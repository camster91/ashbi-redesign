import { Reveal } from "@/components/Reveal";

const QUOTES = [
  {
    q: "Ashbi took our product from farmers'-market homemade to grocery-shelf ready. The packaging does the selling for us now.",
    by: "Founder, food & beverage brand",
  },
  {
    q: "Working with the actual designers — not an account layer — made every decision faster and better. Worth every dollar.",
    by: "Co-founder, DTC skincare startup",
  },
  {
    q: "The subscription is our secret weapon. Senior design and dev on tap without hiring in-house.",
    by: "Marketing lead, CPG company",
  },
];

export function Voices() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-u text-[11px] text-[#12291c]/60">Client voices</p>
          <h2 className="font-serif-d mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight md:text-6xl">
            Word gets <em className="italic text-[#ff4d00]">around</em>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((v, i) => (
            <Reveal key={i} delay={i * 110}>
              <figure className="flex h-full flex-col rounded-2xl border border-[#12291c]/15 p-8 md:p-10">
                <span className="font-serif-d text-5xl leading-none text-[#ff4d00]">"</span>
                <blockquote className="font-serif-d mt-4 flex-1 text-2xl leading-snug">
                  {v.q}
                </blockquote>
                <figcaption className="font-mono-u mt-8 text-[10px] text-[#12291c]/55">
                  {v.by}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
