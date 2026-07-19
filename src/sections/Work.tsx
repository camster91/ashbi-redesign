import { type Project } from "@/content/projects";
import { useProjects } from "@/content/useContent";
import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";

function WorkBlock({
  p,
  index,
  fill = false,
}: {
  p: Project;
  index: number;
  fill?: boolean;
}) {
  const { openProject } = useOverlay();
  return (
    <button
      onClick={() => openProject(p.id)}
      className={`work-block group relative block w-full overflow-hidden bg-[#12291c] text-left ${
        fill ? "h-full" : ""
      }`}
      aria-label={`Open ${p.name} case study`}
    >
      <img
        src={p.img}
        alt={p.alt}
        loading="lazy"
        className={`work-img w-full object-cover ${
          fill ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[4/3] md:aspect-[16/10]"
        }`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12291c]/80 via-[#12291c]/25 to-transparent p-5 pt-20 md:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono-u mb-2 text-[10px] text-[#f5f1e6]/80">
              {String(index + 1).padStart(2, "0")} — {p.tags}
            </p>
            <h3 className="work-title font-serif-d text-4xl leading-none text-[#f5f1e6] md:text-6xl">
              {p.name}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono-u hidden text-[10px] text-[#f5f1e6]/70 md:inline">
              {p.year}
            </span>
            <span className="work-arrow font-serif-d text-4xl text-[#ff4d00] md:text-5xl">↗</span>
          </div>
        </div>
      </div>
    </button>
  );
}

export function Work() {
  const PROJECTS = useProjects();
  const P = (i: number) => PROJECTS[i];
  return (
    <section id="work" className="scroll-mt-20">
      <div className="flex flex-wrap items-end justify-between gap-4 px-5 py-14 md:px-10 md:py-20">
        <Reveal>
          <h2 className="font-serif-d text-5xl leading-[0.95] md:text-7xl">
            Selected <em className="italic text-[#ff4d00]">work</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-mono-u max-w-xs text-[10px] leading-relaxed text-[#12291c]/70 md:text-[11px]">
            {PROJECTS.length} case studies — click any project to open it right here, no
            page change.
          </p>
        </Reveal>
      </div>

      {/* Full bleed */}
      <Reveal mask>
        <WorkBlock p={P(0)} index={0} />
      </Reveal>

      {/* Asymmetric row 8:4 */}
      <div className="grid md:grid-cols-3">
        <Reveal mask className="md:col-span-2">
          <WorkBlock p={P(1)} index={1} />
        </Reveal>
        <Reveal delay={100} mask className="h-full md:col-span-1">
          <WorkBlock p={P(2)} index={2} fill />
        </Reveal>
      </div>

      {/* Full bleed */}
      <Reveal mask>
        <WorkBlock p={P(3)} index={3} />
      </Reveal>

      {/* Asymmetric row 4:8 */}
      <div className="grid md:grid-cols-3">
        <Reveal mask className="h-full md:col-span-1">
          <WorkBlock p={P(4)} index={4} fill />
        </Reveal>
        <Reveal delay={100} mask className="md:col-span-2">
          <WorkBlock p={P(5)} index={5} />
        </Reveal>
      </div>

      {/* Full bleed */}
      <Reveal mask>
        <WorkBlock p={P(6)} index={6} />
      </Reveal>

      {/* Asymmetric row 8:4 */}
      <div className="grid md:grid-cols-3">
        <Reveal mask className="md:col-span-2">
          <WorkBlock p={P(7)} index={7} />
        </Reveal>
        <Reveal delay={100} mask className="h-full md:col-span-1">
          <WorkBlock p={P(8)} index={8} fill />
        </Reveal>
      </div>

      {/* Client index */}
      <div className="px-5 py-12 md:px-10">
        <Reveal>
          <p className="font-mono-u mb-5 text-[10px] text-[#12291c]/60 md:text-[11px]">
            Trusted by founders &amp; teams at
          </p>
          <p className="font-serif-d text-2xl leading-snug text-[#12291c]/85 md:text-4xl">
            Adobe — SplashTown — Gemzy — CoCoFro — Shongani Skin — Clypse Beauty —
            Better&nbsp;Sour — Lille&nbsp;Nord — Flourishing&nbsp;Films
          </p>
        </Reveal>
      </div>
    </section>
  );
}
