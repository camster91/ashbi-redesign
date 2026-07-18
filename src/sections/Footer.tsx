import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";

export function Footer() {
  const { openBooking } = useOverlay();

  return (
    <footer className="bg-[#12291c] px-5 pt-20 pb-10 text-[#f5f1e6] md:px-10 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-u text-[11px] text-[#f5f1e6]/50">Next step</p>
          <h2 className="font-serif-d mt-6 max-w-4xl text-[12vw] leading-[0.98] tracking-tight sm:text-7xl md:text-8xl">
            Let's make something worth{" "}
            <em className="italic text-[#ff4d00]">picking up</em>.
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-12 flex flex-wrap items-center gap-4">
          <button
            onClick={openBooking}
            className="font-mono-u rounded-full bg-[#ff4d00] px-7 py-4 text-[11px] text-[#f5f1e6] transition-colors hover:bg-[#f5f1e6] hover:text-[#12291c]"
          >
            Book a free intro call
          </button>
          <a
            href="mailto:hello@ashbi.ca"
            className="link-underline font-mono-u px-1 py-4 text-[11px]"
          >
            hello@ashbi.ca
          </a>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-[#f5f1e6]/15 pt-10 md:grid-cols-3">
          <div>
            <p className="font-serif-d text-2xl">
              Ashbi<span className="text-[#ff4d00]">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#f5f1e6]/60">
              Branding & packaging studio for CPG and DTC brands. Toronto, Canada.
            </p>
          </div>
          <div className="font-mono-u text-[11px] leading-loose text-[#f5f1e6]/70">
            <p className="text-[#f5f1e6]/40">Explore</p>
            <a href="#work" className="block hover:text-[#ff4d00]">Work</a>
            <a href="#services" className="block hover:text-[#ff4d00]">Services</a>
            <a href="#journal" className="block hover:text-[#ff4d00]">Journal</a>
            <a href="#pricing" className="block hover:text-[#ff4d00]">Pricing</a>
          </div>
          <div className="font-mono-u text-[11px] leading-loose text-[#f5f1e6]/70">
            <p className="text-[#f5f1e6]/40">Elsewhere</p>
            <a href="https://www.ashbi.ca" target="_blank" rel="noreferrer" className="block hover:text-[#ff4d00]">
              ashbi.ca ↗
            </a>
            <a href="https://www.instagram.com/ashbidesign" target="_blank" rel="noreferrer" className="block hover:text-[#ff4d00]">
              Instagram ↗
            </a>
            <a href="https://www.linkedin.com/company/ashbi-design" target="_blank" rel="noreferrer" className="block hover:text-[#ff4d00]">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="font-mono-u mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#f5f1e6]/15 pt-8 text-[10px] text-[#f5f1e6]/40">
          <p>© {new Date().getFullYear()} Ashbi Design. All rights reserved.</p>
          <p>Made in Toronto 🇨🇦</p>
        </div>
      </div>
    </footer>
  );
}
