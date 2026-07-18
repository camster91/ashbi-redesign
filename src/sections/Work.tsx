import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";
import { PROJECTS } from "@/content/projects";

export function Work() {
  const { openProject } = useOverlay();

  return (
    <section id="work" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-u text-[11px] text-[#12291c]/60">Selected work — 2019 → 2026</p>
          <h2 className="font-serif-d mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Proof, not <em className="italic text-[#ff4d00]">promises</em>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 120} className={i % 2 === 1 ? "md:mt-20" : ""}>
              <button
                onClick={() => openProject(p.id)}
                className="work-block group block w-full text-left"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="work-img aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono-u text-[10px] text-[#12291c]/55">
                      {p.category} · {p.year}
                    </p>
                    <h3 className="work-title font-serif-d mt-2 text-3xl leading-none md:text-4xl">
                      {p.title}
                    </h3>
                  </div>
                  <span className="work-arrow font-serif-d mt-1 text-3xl text-[#ff4d00]">↗</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
