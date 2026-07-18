import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";

const SERVICES = [
  { n: "01", name: "Brand identity", desc: "Logos, type systems, colour, guidelines — the whole world." },
  { n: "02", name: "CPG & DTC packaging", desc: "Shelf-ready pack systems built to be picked up." },
  { n: "03", name: "Web design & development", desc: "Marketing sites and e-commerce that convert." },
  { n: "04", name: "Brand strategy", desc: "Positioning, naming, and messaging before the pixels." },
  { n: "05", name: "Creative direction", desc: "Campaigns, photography direction, launch assets." },
  { n: "06", name: "Design & dev subscription", desc: "Senior design and code on tap, month to month." },
];

export function Services() {
  const { openBooking } = useOverlay();

  return (
    <section id="services" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-u text-[11px] text-[#12291c]/60">What we do</p>
          <h2 className="font-serif-d mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight md:text-6xl">
            Everything a brand needs to <em className="italic text-[#ff4d00]">launch</em>.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-[#12291c]/15">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <button
                onClick={openBooking}
                className="svc-row flex w-full items-center gap-6 border-b border-[#12291c]/15 px-2 py-7 text-left md:gap-10 md:px-6 md:py-9"
              >
                <span className="svc-num font-mono-u text-[11px] text-[#12291c]/45">{s.n}</span>
                <span className="font-serif-d flex-1 text-3xl leading-none md:text-5xl">{s.name}</span>
                <span className="hidden max-w-xs text-sm leading-relaxed opacity-70 md:block">
                  {s.desc}
                </span>
                <span className="svc-arrow font-serif-d text-3xl text-[#ff4d00]">↗</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
