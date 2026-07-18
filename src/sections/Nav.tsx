import { useEffect, useState } from "react";
import { useOverlay } from "@/components/OverlayContext";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Journal", href: "#journal" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const { openBooking } = useOverlay();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 140);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`nav-shell fixed inset-x-0 top-0 z-50 border-b border-[#12291c]/10 bg-[#f5f1e6]/90 backdrop-blur-md ${
        hidden ? "nav-hidden" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="font-serif-d text-2xl leading-none tracking-tight md:text-3xl">
          Ashbi<span className="text-[#ff4d00]">.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-mono-u text-[11px] text-[#12291c]/80 hover:text-[#12291c]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openBooking}
            className="font-mono-u rounded-full bg-[#12291c] px-5 py-2.5 text-[11px] text-[#f5f1e6] transition-colors hover:bg-[#ff4d00]"
          >
            Book a call
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="font-mono-u rounded-full border border-[#12291c]/25 px-4 py-2.5 text-[11px] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#12291c]/10 bg-[#f5f1e6] px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif-d text-3xl"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
