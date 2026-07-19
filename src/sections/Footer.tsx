import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";

export function Footer() {
  const { openBooking } = useOverlay();
  return (
    <footer id="contact" className="scroll-mt-20 bg-[#12291c] text-[#f5f1e6]">
      {/* CTA */}
      <div className="border-t border-[#f5f1e6]/10 px-5 pb-20 pt-16 md:px-10 md:pt-28">
        <Reveal>
          <p className="font-mono-u mb-6 flex items-center gap-2 text-[10px] text-[#ff4d00] md:text-[11px]">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#ff4d00]" />
            Ready when you are — booking Q3 2026
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif-d max-w-[14ch] text-[13vw] leading-[0.95] sm:text-[10vw] lg:text-[7.5vw]">
            Let's tell your{" "}
            <em className="italic text-[#ff4d00]">story</em>.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <a
              href="mailto:hello@ashbi.ca"
              className="link-underline font-serif-d inline-block text-3xl sm:text-4xl md:text-6xl"
            >
              hello@ashbi.ca
            </a>
            <button
              onClick={openBooking}
              className="font-mono-u w-fit rounded-full bg-[#f5f1e6] px-8 py-4 text-[11px] text-[#12291c] transition-colors hover:bg-[#ff4d00] hover:text-[#f5f1e6]"
            >
              Book a free intro call
            </button>
          </div>
        </Reveal>
      </div>

      {/* Link columns */}
      <div className="grid gap-10 border-t border-[#f5f1e6]/15 px-5 py-12 text-sm sm:grid-cols-3 md:px-10">
        <div>
          <p className="font-mono-u mb-4 text-[10px] text-[#f5f1e6]/50">Studio</p>
          <p className="leading-relaxed text-[#f5f1e6]/75">
            Ashbi Design — CPG &amp; DTC branding agency.
            <br />
            Toronto, Canada. Family owned &amp; operated.
          </p>
        </div>
        <div>
          <p className="font-mono-u mb-4 text-[10px] text-[#f5f1e6]/50">Navigate</p>
          <ul className="space-y-2 text-[#f5f1e6]/75">
            <li><a href="#work" className="transition-colors hover:text-[#ff4d00]">Selected work</a></li>
            <li><a href="#services" className="transition-colors hover:text-[#ff4d00]">Services</a></li>
            <li><a href="#pricing" className="transition-colors hover:text-[#ff4d00]">Pricing</a></li>
            <li><a href="#faq" className="transition-colors hover:text-[#ff4d00]">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="font-mono-u mb-4 text-[10px] text-[#f5f1e6]/50">Elsewhere</p>
          <ul className="space-y-2 text-[#f5f1e6]/75">
            <li><a href="https://www.instagram.com" className="transition-colors hover:text-[#ff4d00]">Instagram ↗</a></li>
            <li><a href="https://x.com/ashbistudio" className="transition-colors hover:text-[#ff4d00]">X / Twitter ↗</a></li>
            <li><a href="https://www.youtube.com/@ashbidesign" className="transition-colors hover:text-[#ff4d00]">YouTube ↗</a></li>
            <li><a href="https://www.ashbi.ca" className="transition-colors hover:text-[#ff4d00]">Current site ↗</a></li>
          </ul>
        </div>
      </div>

      {/* Giant wordmark — real studio logo */}
      <div className="overflow-hidden px-6 py-10 md:px-16" aria-hidden="true">
        <img
          src="https://www.ashbi.ca/wp-content/uploads/2024/06/Group-3.png"
          alt=""
          className="mx-auto w-full max-w-5xl opacity-15 invert"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#f5f1e6]/15 px-5 py-5 md:px-10">
        <p className="font-mono-u text-[10px] text-[#f5f1e6]/45">
          © 2026 Ashbi Design — Redesign concept
        </p>
        <p className="font-mono-u text-[10px] text-[#f5f1e6]/45">
          Brands that dominate the shelf &amp; the screen
        </p>
      </div>
    </footer>
  );
}
