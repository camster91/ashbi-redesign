import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const FAQS = [
  {
    q: "How long does the branding process take?",
    a: "Typically 4 to 8 weeks, depending on scope and complexity. We always strive to accommodate your timeline and deliver high-quality work within the agreed deadline.",
  },
  {
    q: "What industries do you serve?",
    a: "We specialize in CPG and DTC — food & beverage, beauty, wellness, retail — and also work with technology, healthcare, fashion and more. Whatever your industry, we tailor the work to resonate with your audience.",
  },
  {
    q: "Will I have input throughout the process?",
    a: "Absolutely — collaboration is key. You'll get progress updates, drafts and revision rounds, plus weekly video updates through our client portal, so your vision is realized and expectations exceeded.",
  },
  {
    q: "What platforms do you build websites on?",
    a: "Shopify and WordPress with fully custom themes, plus headless solutions when performance demands it. Every site is designed to convert, not just to look good.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-20 grid gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-28"
    >
      <Reveal className="md:col-span-4">
        <h2 className="font-serif-d text-5xl leading-[0.95] md:text-6xl">
          Frequently asked{" "}
          <em className="italic text-[#ff4d00]">questions</em>
        </h2>
        <p className="mt-6 text-base text-[#12291c]/70">
          Can't find what you're looking for?{" "}
          <a href="#contact" className="link-underline">
            Get in touch
          </a>
          .
        </p>
      </Reveal>

      <Reveal delay={120} className="md:col-span-8">
        <ul className="border-t border-[#12291c]/20">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-[#12291c]/20">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-d text-2xl leading-tight md:text-3xl">{f.q}</span>
                  <span
                    className={`font-serif-d shrink-0 text-3xl text-[#ff4d00] transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="max-w-2xl overflow-hidden text-base leading-relaxed text-[#12291c]/75">
                    {f.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
