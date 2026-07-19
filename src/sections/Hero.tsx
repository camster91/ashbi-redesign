import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { useOverlay } from "@/components/OverlayContext";

const HERO_IMG = "https://www.ashbi.ca/wp-content/uploads/2024/08/dispenser-bottle-mockup-04-1536x1024.png";

type Seg = { text: string; em?: boolean };
const HEADLINE: Seg[] = [
  { text: "CPG" },
  { text: "&" },
  { text: "DTC" },
  { text: "brands" },
  { text: "that" },
  { text: "dominate" },
  { text: "the" },
  { text: "shelf", em: true },
  { text: "and" },
  { text: "the" },
  { text: "screen.", em: true },
];

export function Hero() {
  const { openBooking } = useOverlay();

  return (
    <section id="top" className="pt-20 md:pt-24">
      <div className="px-5 md:px-10">
        {/* Kicker row */}
        <Reveal>
          <div className="font-mono-u flex flex-wrap items-center justify-between gap-3 border-b border-[#12291c]/15 pb-4 text-[10px] text-[#12291c]/70 md:text-[11px]">
            <span>CPG &amp; DTC Branding Agency</span>
            <span className="hidden md:inline">Packaging · Identity · Web</span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#ff4d00]" />
              Now booking — Q3 2026
            </span>
            <span>Toronto, Canada</span>
          </div>
        </Reveal>

        {/* Headline — word by word */}
        <h1
          className="font-serif-d mt-10 max-w-[16ch] text-[13.5vw] leading-[0.95] sm:text-[11vw] lg:text-[8.2vw]"
          aria-label="CPG & DTC brands that dominate the shelf and the screen."
        >
          {HEADLINE.map((w, i) => (
            <span key={i} className="hero-word" aria-hidden="true">
              <span
                style={{ "--d": `${120 + i * 65}ms` } as CSSProperties}
                className={w.em ? "italic text-[#ff4d00]" : ""}
              >
                {w.text}
              </span>
              {i < HEADLINE.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        {/* Sub + CTA row */}
        <Reveal delay={900}>
          <div className="mt-10 flex flex-col justify-between gap-8 pb-14 md:flex-row md:items-end">
            <p className="max-w-md text-base leading-relaxed text-[#12291c]/75 md:text-lg">
              A full-service creative agency crafting unforgettable brand identities,
              standout packaging and conversion-driven websites for physical products —
              from unboxing to checkout.
            </p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-5 md:shrink-0 md:pl-10">
              <button
                onClick={openBooking}
                className="font-mono-u whitespace-nowrap rounded-full bg-[#12291c] px-8 py-4 text-[11px] text-[#f5f1e6] transition-colors hover:bg-[#ff4d00]"
              >
                Book a free intro call
              </button>
              <a href="#work" className="link-underline font-mono-u whitespace-nowrap text-[11px]">
                Selected work ↓
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Hero image — full bleed with mask reveal + parallax drift */}
      <Reveal delay={500} mask>
        <figure className="relative overflow-hidden">
          <Parallax speed={-0.06} className="scale-[1.12]">
            <img
              src={HERO_IMG}
              alt="Shongani Skin gentle exfoliating face cleanser packaging with white peonies"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[21/9]"
              loading="eager"
            />
          </Parallax>
          <figcaption className="font-mono-u absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#12291c]/70 to-transparent px-5 pb-4 pt-16 text-[10px] text-[#f5f1e6] md:px-10 md:text-[11px]">
            <span>Shongani Skin — Brand identity &amp; packaging</span>
            <span className="hidden sm:inline">Latest from the studio ↓</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
