import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { openBooking } = useOverlay();

  // Hide on scroll down, reveal on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 400 && y > lastY.current && !open);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`nav-shell fixed inset-x-0 top-0 z-50 border-b border-[#12291c]/15 bg-[#f5f1e6]/90 backdrop-blur-md ${
        hidden ? "nav-hidden" : ""
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3 md:px-10">
        <a href="#top" aria-label="Ashbi Design — home">
          <img src="https://www.ashbi.ca/wp-content/uploads/2024/06/Group-3.png" alt="Ashbi Design" className="h-8 w-auto md:h-10" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono-u text-[11px] text-[#12291c]/80 transition-colors hover:text-[#ff4d00]"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={openBooking}
            className="font-mono-u rounded-full bg-[#12291c] px-5 py-2.5 text-[11px] text-[#f5f1e6] transition-colors hover:bg-[#ff4d00]"
          >
            Start a project
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="font-mono-u text-[11px] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#12291c]/15 px-5 py-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif-d py-2 text-3xl"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
            className="font-mono-u mt-3 rounded-full bg-[#12291c] px-5 py-3 text-[11px] text-[#f5f1e6]"
          >
            Start a project
          </button>
        </nav>
      )}
    </header>
  );
}
