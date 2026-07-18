import { Reveal } from "@/components/Reveal";

const STATS = [
  { n: "7+", label: "Years in business" },
  { n: "60+", label: "Brands launched" },
  { n: "40+", label: "Packaging systems" },
  { n: "2", label: "Humans, no account layers" },
];

export function Studio() {
  return (
    <section id="studio" className="bg-[#ece6d4] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="font-mono-u text-[11px] text-[#12291c]/60">The studio</p>
              <h2 className="font-serif-d mt-6 text-5xl leading-[1.02] tracking-tight md:text-6xl">
                Small studio, <em className="italic text-[#ff4d00]">senior-only</em> work.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-[#12291c]/80 md:text-lg">
                Ashbi is a two-person studio in Toronto. No account managers, no
                hand-offs, no juniors learning on your budget — you work directly
                with the people designing your brand.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#12291c]/80 md:text-lg">
                We specialize in CPG and DTC: products that live on shelves and in
                feeds. That focus means we obsess over the things that actually
                move units — shelf standout, pack architecture, photography that
                sells, and websites that convert.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <p className="font-serif-d text-5xl text-[#12291c] md:text-6xl">{s.n}</p>
                  <p className="font-mono-u mt-3 text-[10px] text-[#12291c]/60">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal mask delay={150}>
            <img
              src="https://www.ashbi.ca/wp-content/uploads/2024/06/AMSB7923-e1719368127233.jpg"
              alt="Inside the Ashbi studio"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
