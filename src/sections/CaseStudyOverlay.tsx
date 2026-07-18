import { OverlayShell } from "@/components/OverlayShell";
import { useOverlay } from "@/components/OverlayContext";
import { PROJECTS, type Project } from "@/content/projects";

type Props = {
  projectId: string | null;
  onClose: () => void;
  onNavigate: (id: string) => void;
};

export function CaseStudyOverlay({ projectId, onClose, onNavigate }: Props) {
  const { openBooking } = useOverlay();
  const project: Project | undefined = PROJECTS.find((p) => p.id === projectId);
  const next: Project | undefined = project
    ? PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length]
    : undefined;

  return (
    <OverlayShell open={projectId !== null} onClose={onClose} mode="sheet" dark label="Case study">
      {project && (
        <div className="min-h-full">
          {/* Top bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#f5f1e6]/10 bg-[#12291c]/90 px-6 py-5 backdrop-blur-md md:px-12">
            <p className="font-mono-u text-[10px] text-[#f5f1e6]/60 md:text-[11px]">
              Case study — {project.category}
            </p>
            <button
              onClick={onClose}
              className="font-mono-u rounded-full border border-[#f5f1e6]/25 px-5 py-2 text-[11px] transition-colors hover:bg-[#f5f1e6] hover:text-[#12291c]"
            >
              Close ✕
            </button>
          </div>

          <div className="px-6 py-12 md:px-12 md:py-16">
            <h2 className="font-serif-d max-w-5xl text-6xl leading-[0.98] tracking-tight md:text-8xl">
              {project.title}
            </h2>

            {/* Meta grid */}
            <div className="font-mono-u mt-10 grid gap-6 border-t border-[#f5f1e6]/15 pt-8 text-[11px] sm:grid-cols-3">
              <div>
                <p className="text-[#ff4d00]">Client</p>
                <p className="mt-2 text-[#f5f1e6]/80">{project.client}</p>
              </div>
              <div>
                <p className="text-[#ff4d00]">Year</p>
                <p className="mt-2 text-[#f5f1e6]/80">{project.year}</p>
              </div>
              <div>
                <p className="text-[#ff4d00]">Scope</p>
                <p className="mt-2 text-[#f5f1e6]/80">{project.scope.join(" · ")}</p>
              </div>
            </div>

            <img
              src={project.img}
              alt={project.title}
              className="mt-12 aspect-[16/9] w-full rounded-2xl object-cover"
            />

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <div>
                <p className="font-mono-u text-[11px] text-[#ff4d00]">The brief</p>
                <p className="mt-4 text-lg leading-relaxed text-[#f5f1e6]/85">{project.summary}</p>
              </div>
              <div>
                <p className="font-mono-u text-[11px] text-[#ff4d00]">The outcome</p>
                <p className="mt-4 text-lg leading-relaxed text-[#f5f1e6]/85">{project.outcome}</p>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {project.gallery.map((g, i) => (
                <img
                  key={i}
                  src={g}
                  alt={`${project.title} — ${i + 1}`}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Footer actions */}
            <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-[#f5f1e6]/15 pt-10 md:flex-row md:items-center">
              <button
                onClick={() => {
                  onClose();
                  openBooking();
                }}
                className="font-mono-u rounded-full bg-[#ff4d00] px-7 py-4 text-[11px] text-[#f5f1e6] transition-colors hover:bg-[#f5f1e6] hover:text-[#12291c]"
              >
                Start your project →
              </button>
              {next && (
                <button
                  onClick={() => onNavigate(next.id)}
                  className="group text-left"
                >
                  <span className="font-mono-u text-[10px] text-[#f5f1e6]/50">Next project</span>
                  <span className="font-serif-d mt-1 block text-4xl transition-colors group-hover:text-[#ff4d00] md:text-5xl">
                    {next.title} →
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </OverlayShell>
  );
}
