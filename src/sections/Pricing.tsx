import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";

const PLANS = [
  {
    name: "Brand identity",
    price: "from $2,500",
    unit: "CAD · one-time",
    features: ["Logo & identity system", "Typography & colour", "Mini brand guidelines", "Launch asset pack"],
    featured: false,
  },
  {
    name: "Packaging",
    price: "from $4,000",
    unit: "CAD · one-time",
    features: ["Pack architecture & design", "Print-ready dielines", "Mockups & art direction", "Printer hand-off support"],
    featured: true,
  },
  {
    name: "Subscription",
    price: "$3,000",
    unit: "CAD · per month",
    features: ["Unlimited design & dev requests", "Senior-only, 2–4 day turnarounds", "Pause or cancel anytime", "Slack access to the studio"],
    featured: false,
  },
];

export function Pricing() {
  const { openBooking } = useOverlay();

  return (
    <section id="pricing" className="bg-[#ece6d4] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-u text-[11px] text-[#12291c]/60">Pricing</p>
          <h2 className="font-serif-d mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight md:text-6xl">
            Straightforward <em className="italic text-[#ff4d00]">numbers</em>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#12291c]/75">
            No hourly billing, no scope creep. Every engagement starts with a
            free intro call and a fixed quote.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div
                className={`flex h-full flex-col rounded-2xl p-8 md:p-10 ${
                  p.featured
                    ? "bg-[#12291c] text-[#f5f1e6]"
                    : "border border-[#12291c]/15 bg-[#f5f1e6]"
                }`}
              >
                <p className="font-mono-u text-[11px] opacity-70">{p.name}</p>
                <p className="font-serif-d mt-6 text-4xl md:text-5xl">{p.price}</p>
                <p className="font-mono-u mt-2 text-[10px] opacity-55">{p.unit}</p>
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="text-[#ff4d00]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openBooking}
                  className={`font-mono-u mt-10 rounded-full py-4 text-[11px] transition-colors ${
                    p.featured
                      ? "bg-[#ff4d00] text-[#f5f1e6] hover:bg-[#f5f1e6] hover:text-[#12291c]"
                      : "bg-[#12291c] text-[#f5f1e6] hover:bg-[#ff4d00]"
                  }`}
                >
                  Start with an intro call
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
