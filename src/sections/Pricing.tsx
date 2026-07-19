import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";

const PLANS = [
  {
    name: "Free project",
    price: "Free",
    per: "try us out",
    features: ["One small design or web task", "No commitment, just results", "Delivered in 1 week"],
  },
  {
    name: "Part-time creative support",
    price: "$1,999",
    per: "/ month · 40 hrs",
    features: [
      "40 hrs of design & development",
      "Monthly strategy check-ins",
      "Ideal for smaller, ongoing projects",
    ],
  },
  {
    name: "Full-time creative partnership",
    price: "$3,999",
    per: "/ month · 80 hrs",
    features: [
      "80 hrs of design & development",
      "Priority support, faster turnaround",
      "Best for larger, ongoing projects",
    ],
  },
];

export function Pricing() {
  const { openBooking } = useOverlay();
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t border-[#12291c]/15 px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <h2 className="font-serif-d text-5xl leading-[0.95] md:text-7xl">
            Plans for all <em className="italic text-[#ff4d00]">sizes</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-mono-u max-w-xs text-[10px] leading-relaxed text-[#12291c]/70 md:text-[11px]">
            Flexible, transparent pricing — scalable and affordable, with no surprises.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <ul className="border-t border-[#12291c]/20">
          {PLANS.map((p) => (
            <li
              key={p.name}
              className="grid gap-6 border-b border-[#12291c]/20 py-8 md:grid-cols-12 md:items-center md:py-10"
            >
              <h3 className="font-serif-d text-3xl leading-tight md:col-span-4 md:text-4xl">
                {p.name}
              </h3>
              <ul className="space-y-2 md:col-span-5">
                {p.features.map((f) => (
                  <li key={f} className="font-mono-u text-[10px] text-[#12291c]/70 md:text-[11px]">
                    — {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-end justify-between gap-4 md:col-span-3 md:flex-col md:items-end md:gap-2">
                <p className="font-serif-d text-4xl leading-none md:text-5xl">
                  {p.price}
                  <span className="font-mono-u ml-2 align-middle text-[10px] text-[#12291c]/60">
                    {p.per}
                  </span>
                </p>
                <button onClick={openBooking} className="link-underline font-mono-u text-[11px]">
                  Get started ↗
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={100}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#12291c]/70">
          Need it faster, or something more complex? We offer{" "}
          <strong className="font-semibold text-[#12291c]">custom packages</strong> for
          fast-track or intricate projects —{" "}
          <a href="#contact" className="link-underline">
            talk to us
          </a>{" "}
          for tailored pricing and timelines.
        </p>
      </Reveal>
    </section>
  );
}
