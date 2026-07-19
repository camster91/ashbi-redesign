import { usePosts } from "@/content/useContent";
import { Reveal } from "@/components/Reveal";

export function Journal() {
  const POSTS = usePosts();
  const [featured, ...rest] = POSTS;
  return (
    <section
      id="journal"
      className="scroll-mt-20 border-t border-[#12291c]/15 px-5 py-16 md:px-10 md:py-28"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <h2 className="font-serif-d text-5xl leading-[0.95] md:text-7xl">
            From the <em className="italic text-[#ff4d00]">journal</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="https://www.ashbi.ca/blog/"
            target="_blank"
            rel="noreferrer"
            className="link-underline font-mono-u text-[11px]"
          >
            All articles ↗
          </a>
        </Reveal>
      </div>

      <div className="grid gap-10 md:grid-cols-12">
        {/* Featured post */}
        <Reveal mask className="md:col-span-5">
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="overflow-hidden">
              <img
                src={featured.img}
                alt={featured.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <p className="font-mono-u mt-5 text-[10px] text-[#ff4d00] md:text-[11px]">
              {featured.category} — {featured.date}
            </p>
            <h3 className="font-serif-d mt-2 text-3xl leading-tight transition-colors group-hover:text-[#ff4d00] md:text-4xl">
              {featured.title}
            </h3>
            {featured.excerpt && (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#12291c]/70">
                {featured.excerpt}
              </p>
            )}
          </a>
        </Reveal>

        {/* Index list */}
        <Reveal delay={150} className="md:col-span-7">
          <ul className="border-t border-[#12291c]/20">
            {rest.map((post, i) => (
              <li key={post.url}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="svc-row group flex items-center gap-5 border-b border-[#12291c]/20 px-2 py-6 md:gap-8 md:px-4"
                >
                  <span className="svc-num font-mono-u w-8 shrink-0 text-[11px] text-[#12291c]/60">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="font-mono-u block text-[10px] text-[#12291c]/55 transition-colors group-hover:text-[#f5f1e6]/60">
                      {post.category} — {post.date}
                    </span>
                    <span className="font-serif-d mt-1 block text-xl leading-snug md:text-3xl">
                      {post.title}
                    </span>
                  </span>
                  <span className="svc-arrow font-serif-d shrink-0 text-2xl text-[#ff4d00] md:text-3xl">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
