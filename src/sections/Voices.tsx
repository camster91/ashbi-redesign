import { Reveal } from "@/components/Reveal";

const SMALL_QUOTES = [
  {
    quote:
      "I got a full rebrand and new website for my business and Ashbi Design exceeded every expectation.",
    who: "Kate T",
    company: "Tough Kitten Crafts",
  },
  {
    quote:
      "Cameron helped me get out of a stuck place on a new website. His creative and technical abilities were first class.",
    who: "Alan P",
    company: "Marketing Manager",
  },
  {
    quote:
      "Wonderful to work with, creative and knowledgeable! She went above and beyond — I would 1000% recommend.",
    who: "Brittany M",
    company: "Britany Helene Hair",
  },
];

export function Voices() {
  return (
    <section className="bg-[#12291c] px-5 py-16 text-[#f5f1e6] md:px-10 md:py-28">
      <Reveal>
        <p className="font-mono-u mb-8 text-[10px] text-[#ff4d00] md:text-[11px]">
          The wall of love
        </p>
      </Reveal>
      <Reveal delay={100}>
        <blockquote className="font-serif-d max-w-5xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          "We've worked with Ashbi for almost a year now, and honestly, we can't
          understand how we{" "}
          <em className="italic text-[#ff4d00]">survived</em> in the business world
          without them."
        </blockquote>
      </Reveal>
      <Reveal delay={180}>
        <p className="font-mono-u mt-6 text-[10px] text-[#f5f1e6]/60 md:text-[11px]">
          — Dereck S, SplashTown Water Parks
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden border border-[#f5f1e6]/15 bg-[#f5f1e6]/15 md:grid-cols-3">
        {SMALL_QUOTES.map((q, i) => (
          <Reveal key={q.who} delay={i * 100} className="bg-[#12291c] p-7 md:p-9">
            <p className="text-base leading-relaxed text-[#f5f1e6]/85">"{q.quote}"</p>
            <p className="font-mono-u mt-5 text-[10px] text-[#f5f1e6]/50">
              — {q.who}, {q.company}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
