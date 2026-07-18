import { type CSSProperties } from "react";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";

function Words({ text, base = 0, className = "" }: { text: string; base?: number; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="hero-word">
          <span style={{ "--d": `${base + i * 70}ms` } as CSSProperties}>{w}&nbsp;</span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const { openBooking } = useOverlay();

  return (
    <section id="top" className="relative overflow-hidden px-5 pt-36 pb-16 md:px-10 md:pt-44 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono-u text-[11px] text-[#12291c]/60">
          <Words text="Branding & packaging studio — Toronto" base={100} />
        </p>

        <h1 className="font-serif-d mt-8 max-w-5xl text-[13.5vw] leading-[0.98] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <Words text="We build brands" base={250} />
          <br />
          <Words text="people pick" base={550} className="italic text-[#ff4d00]" />
          <Words text="up." base={800} />
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <Reveal delay={950} className="max-w-md">
            <p className="text-base leading-relaxed text-[#12291c]/75 md:text-lg">
              Ashbi is a branding and packaging studio for CPG and DTC founders.
              Identity, packaging, and web — designed to move product, not just
              win awards.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={openBooking}
                className="font-mono-u rounded-full bg-[#12291c] px-7 py-4 text-[11px] text-[#f5f1e6] transition-colors hover:bg-[#ff4d00]"
              >
                Book a free intro call
              </button>
              <a
                href="#work"
                className="link-underline font-mono-u px-1 py-4 text-[11px] text-[#12291c]"
              >
                See the work ↓
              </a>
            </div>
          </Reveal>

          <Reveal delay={1100} className="font-mono-u text-[10px] leading-loose text-[#12291c]/55">
            <p>Est. 2019 — 60+ brands launched</p>
            <p>CPG · DTC · Beauty · Food & bev</p>
          </Reveal>
        </div>

        <Reveal delay={400} mask className="mt-14 md:mt-20">
          <Parallax speed={0.07}>
            <img
              src="https://www.ashbi.ca/wp-content/uploads/2024/10/Smokey_Story-21.jpg"
              alt="Ashbi studio packaging and campaign work"
              className="h-[46vh] w-full rounded-2xl object-cover md:h-[64vh]"
              loading="eager"
            />
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
