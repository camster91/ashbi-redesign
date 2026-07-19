import { Reveal } from "@/components/Reveal";

const PEOPLE = [
  {
    name: "Bianca A",
    role: "Creative Director",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/08/AMSB7813-683x1024.jpg",
    alt: "Bianca seated in the studio holding an Ashbi publication",
    bio: "Brand strategist through storytelling and art — marketing major, art minor, interior design addict, and mother of two little kiddies who are her world.",
  },
  {
    name: "Cameron A",
    role: "CEO",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/08/AMSB7781-e1723940696172.jpg",
    alt: "Cameron standing in the studio",
    bio: "Runs everything behind the scenes — an SEO and digital marketing specialist with 10+ years in IT. Dedicated father, book reader, and gadget collector.",
  },
];

export function Team() {
  return (
    <section className="grid gap-10 border-t border-[#12291c]/15 px-5 py-16 md:grid-cols-12 md:px-10 md:py-28">
      {/* Left: heading + duo photo */}
      <div className="md:col-span-5">
        <Reveal>
          <p className="font-mono-u mb-4 text-[10px] text-[#ff4d00] md:text-[11px]">
            The team
          </p>
          <h2 className="font-serif-d text-5xl leading-[0.95] md:text-6xl">
            Two people. <br />
            Zero <em className="italic text-[#ff4d00]">bloat</em>.
          </h2>
        </Reveal>
        <Reveal delay={150} mask className="mt-10 hidden md:block">
          <img
            src="https://www.ashbi.ca/wp-content/uploads/2024/06/AMSB7923-e1719368127233-768x768.jpg"
            alt="Bianca and Cameron working together in the Ashbi studio"
            className="aspect-square w-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>

      {/* Right: person cards */}
      <div className="flex flex-col gap-10 md:col-span-7 md:pl-8">
        <Reveal delay={100}>
          <p className="max-w-xl text-base leading-relaxed text-[#12291c]/75 md:text-lg">
            No account managers, no hand-offs, no layers. The people you meet on the intro
            call are the people doing the work — a family-run studio, proud of it.
          </p>
        </Reveal>
        {PEOPLE.map((person, i) => (
          <Reveal key={person.name} delay={i * 120}>
            <div className="group flex flex-col gap-6 border-t border-[#12291c]/20 pt-8 sm:flex-row">
              <div className="w-40 shrink-0 overflow-hidden">
                <img
                  src={person.img}
                  alt={person.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div>
                <p className="font-mono-u text-[10px] text-[#ff4d00] md:text-[11px]">
                  {person.role}
                </p>
                <h3 className="font-serif-d mt-1 text-4xl leading-none md:text-5xl">
                  {person.name}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[#12291c]/70">
                  {person.bio}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal delay={200}>
          <p className="font-mono-u border-t border-[#12291c]/20 pt-6 text-[10px] leading-relaxed text-[#12291c]/55 md:text-[11px]">
            Proudly family owned &amp; operated — studios in Toronto, Calgary &amp;
            Vancouver.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
