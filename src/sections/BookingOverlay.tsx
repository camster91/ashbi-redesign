import { useState, type FormEvent } from "react";
import { OverlayShell } from "@/components/OverlayShell";

const SERVICES = [
  "Brand identity",
  "CPG & DTC packaging",
  "Web design & development",
  "Brand strategy",
  "Creative direction",
  "Design & dev subscription",
  "Not sure yet — help me decide",
];

const BUDGETS = ["Under $2k", "$2k – $5k", "$5k – $10k", "$10k+", "Monthly subscription"];

const inputCls =
  "w-full border-b border-[#f5f1e6]/25 bg-transparent py-3 text-base text-[#f5f1e6] placeholder:text-[#f5f1e6]/35 outline-none transition-colors focus:border-[#ff4d00]";

export function BookingOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <OverlayShell open={open} onClose={onClose} mode="panel" dark label="Book a free intro call">
      <div className="flex min-h-full flex-col px-6 py-6 md:px-10 md:py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <p className="font-mono-u flex items-center gap-2 text-[10px] text-[#ff4d00] md:text-[11px]">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#ff4d00]" />
            Booking Q3 2026
          </p>
          <button
            onClick={onClose}
            className="font-mono-u rounded-full border border-[#f5f1e6]/25 px-5 py-2 text-[11px] transition-colors hover:bg-[#f5f1e6] hover:text-[#12291c]"
          >
            Close ✕
          </button>
        </div>

        {sent ? (
          <div className="flex flex-1 flex-col items-start justify-center">
            <p className="font-serif-d text-6xl leading-none text-[#ff4d00]">✓</p>
            <h2 className="font-serif-d mt-6 text-4xl leading-tight md:text-5xl">
              Thanks — we'll be in touch within 24 hours.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-[#f5f1e6]/70">
              Bianca or Cameron will reply personally with a few times for your free intro
              call. Talk soon.
            </p>
            <button
              onClick={onClose}
              className="font-mono-u mt-10 rounded-full bg-[#f5f1e6] px-7 py-3.5 text-[11px] text-[#12291c] transition-colors hover:bg-[#ff4d00] hover:text-[#f5f1e6]"
            >
              Back to the site
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-serif-d mt-10 text-4xl leading-[1.02] md:text-6xl">
              Book your free <em className="italic text-[#ff4d00]">intro</em> call.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#f5f1e6]/65">
              30 minutes, no pressure. We'll talk about your product, your goals, and
              whether we're the right fit.
            </p>

            <form onSubmit={submit} className="mt-10 flex flex-1 flex-col gap-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono-u text-[10px] text-[#f5f1e6]/50">Your name *</span>
                  <input required type="text" placeholder="Jane Founder" className={inputCls} />
                </label>
                <label className="block">
                  <span className="font-mono-u text-[10px] text-[#f5f1e6]/50">Email *</span>
                  <input required type="email" placeholder="jane@brand.com" className={inputCls} />
                </label>
              </div>
              <label className="block">
                <span className="font-mono-u text-[10px] text-[#f5f1e6]/50">Company / brand</span>
                <input type="text" placeholder="Acme Snacks Co." className={inputCls} />
              </label>
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono-u text-[10px] text-[#f5f1e6]/50">What do you need?</span>
                  <select className={`${inputCls} cursor-pointer appearance-none`} defaultValue={SERVICES[0]}>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-[#12291c]">
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="font-mono-u text-[10px] text-[#f5f1e6]/50">Budget range</span>
                  <select className={`${inputCls} cursor-pointer appearance-none`} defaultValue={BUDGETS[1]}>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-[#12291c]">
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="font-mono-u text-[10px] text-[#f5f1e6]/50">
                  Tell us about the project
                </span>
                <textarea
                  rows={4}
                  placeholder="What are you launching, and when?"
                  className={`${inputCls} resize-none`}
                />
              </label>

              <div className="mt-auto pt-4">
                <button
                  type="submit"
                  className="font-mono-u w-full rounded-full bg-[#f5f1e6] py-4 text-[11px] text-[#12291c] transition-colors hover:bg-[#ff4d00] hover:text-[#f5f1e6]"
                >
                  Request my intro call
                </button>
                <p className="font-mono-u mt-4 text-center text-[10px] text-[#f5f1e6]/40">
                  Prefer email? hello@ashbi.ca — we reply within 24h
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </OverlayShell>
  );
}
