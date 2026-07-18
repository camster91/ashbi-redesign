import { Reveal } from "@/components/Reveal";
import { useOverlay } from "@/components/OverlayContext";

const TEAM = [
  {
    name: "Cameron Ashley",
    role: "Founder · Design & Development",
    bio: "Brand designer and developer. Leads identity, packaging, and every line of code that ships.",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/06/AMSB7980.jpg",
  },
  {
    name: "Bianca",
    role: "Strategy & Client Partnerships",
    bio: "Runs discovery, positioning, and the client experience — the voice you'll hear on your intro call.",
    img: "https://www.ashbi.ca/wp-content/uploads/2024/08/AMSB7781-e1723940696172.jpg",
  },
];

export function Team() {
  const { openBooking } = useOverlay();

  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-u text-[11px] text-[#12291c]/60">Who you'll work with</p>
          <h2 className="font-serif-d mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight md:text-6xl">
            The whole team, <em className="italic text-[#ff4d00]">in the room</em>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 130}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={m.img}
                  alt={m.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <p className="font-mono-u mt-6 text-[10px] text-[#12291c]/55">{m.role}</p>
              <h3 className="font-serif-d mt-2 text-3xl md:text-4xl">{m.name}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-[#12291c]/75">{m.bio}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14">
          <button
            onClick={openBooking}
            className="font-mono-u rounded-full border border-[#12291c] px-7 py-4 text-[11px] transition-colors hover:bg-[#12291c] hover:text-[#f5f1e6]"
          >
            Meet us on a free intro call →
          </button>
        </Reveal>
      </div>
    </section>
  );
}
