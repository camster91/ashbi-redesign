import { useProjects } from "@/content/useContent";
import { OverlayShell } from "@/components/OverlayShell";
import { useOverlay } from "@/components/OverlayContext";

type Props = {
  projectId: string | null;
  onClose: () => void;
  onNavigate: (id: string) => void;
};

export function CaseStudyOverlay({ projectId, onClose, onNavigate }: Props) {
  const { openBooking } = useOverlay();
  const PROJECTS = useProjects();
  const p = projectId ? PROJECTS.find((x) => x.id === projectId) ?? null : null;
  const next = p ? PROJECTS[(PROJECTS.findIndex((x) => x.id === p.id) + 1) % PROJECTS.length] : null;

  return (
    <OverlayShell open={!!p} onClose={onClose} mode="sheet" label={p ? `${p.name} case study` : "Case study"}>
      {p && (
        <article>
          {/* Top bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#12291c]/15 bg-[#f5f1e6]/90 px-5 py-3 backdrop-blur-md md:px-10 md:py-4">
            <p className="font-mono-u text-[10px] text-[#12291c]/70 md:text-[11px]">
              Case study — {p.client}
            </p>
            <button
              onClick={onClose}
              className="font-mono-u rounded-full border border-[#12291c]/25 px-5 py-2 text-[11px] transition-colors hover:bg-[#12291c] hover:text-[#f5f1e6]"
            >
              Close ✕
            </button>
          </div>

          {/* Header */}
          <header className="px-5 pb-10 pt-12 md:px-10 md:pt-20">
            <p className="font-mono-u mb-4 text-[10px] text-[#ff4d00] md:text-[11px]">
              {p.sector} — {p.year}
            </p>
            <h1 className="font-serif-d max-w-[14ch] text-[13vw] leading-[0.95] sm:text-[9vw] lg:text-[7vw]">
              {p.name}
            </h1>
            <p className="font-mono-u mt-6 text-[10px] text-[#12291c]/70 md:text-[11px]">
              {p.services.join(" · ")}
            </p>
          </header>

          {/* Hero image */}
          <img
            src={p.gallery[0]?.src ?? p.img}
            alt={p.gallery[0]?.alt ?? p.alt}
            className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
          />

          {/* Meta + overview */}
          <div className="grid gap-10 px-5 py-14 md:grid-cols-12 md:px-10 md:py-24">
            <div className="md:col-span-3">
              <p className="font-mono-u mb-3 text-[10px] text-[#ff4d00] md:text-[11px]">Deliverables</p>
              <ul className="space-y-2">
                {p.deliverables.map((d) => (
                  <li key={d} className="font-mono-u text-[10px] text-[#12291c]/70 md:text-[11px]">
                    — {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 md:col-start-5">
              <p className="font-serif-d text-3xl leading-[1.15] md:text-[2.6rem] md:leading-[1.12]">
                {p.overview}
              </p>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-[#12291c]/75">
                {p.approach}
              </p>
            </div>
          </div>

          {/* Outcomes band */}
          <div className="grid bg-[#12291c] text-[#f5f1e6] sm:grid-cols-3">
            {p.outcomes.map((o, i) => (
              <div
                key={o.label}
                className={`border-[#f5f1e6]/15 px-6 py-10 md:px-10 ${i > 0 ? "border-t sm:border-l sm:border-t-0" : ""}`}
              >
                <p className="font-serif-d text-5xl leading-none">{o.value}</p>
                <p className="font-mono-u mt-3 text-[10px] leading-relaxed text-[#f5f1e6]/65">
                  {o.label}
                </p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          {p.gallery.length > 1 && (
            <div className="grid gap-px bg-[#12291c]/10 md:grid-cols-2">
              {p.gallery.slice(1).map((g) => (
                <img
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover ${g.half ? "aspect-[4/3]" : "aspect-[4/3] md:col-span-2 md:aspect-[21/9]"}`}
                />
              ))}
            </div>
          )}

          {/* Next project */}
          {next && (
            <button
              onClick={() => onNavigate(next.id)}
              className="group block w-full border-t border-[#12291c]/15 px-5 py-14 text-left transition-colors hover:bg-[#12291c] hover:text-[#f5f1e6] md:px-10 md:py-20"
            >
              <p className="font-mono-u mb-4 text-[10px] text-[#ff4d00] md:text-[11px]">
                Next case study
              </p>
              <p className="font-serif-d flex items-center justify-between gap-6 text-5xl leading-none md:text-8xl">
                {next.name}
                <span className="text-[#ff4d00] transition-transform duration-500 group-hover:translate-x-3">
                  →
                </span>
              </p>
            </button>
          )}

          {/* CTA */}
          <div className="flex flex-col items-center gap-5 px-5 py-16 text-center md:py-24">
            <p className="font-serif-d text-4xl md:text-6xl">
              Want results like <em className="italic text-[#ff4d00]">this</em>?
            </p>
            <button
              onClick={openBooking}
              className="font-mono-u rounded-full bg-[#12291c] px-8 py-4 text-[11px] text-[#f5f1e6] transition-colors hover:bg-[#ff4d00]"
            >
              Book a free intro call
            </button>
          </div>
        </article>
      )}
    </OverlayShell>
  );
}
