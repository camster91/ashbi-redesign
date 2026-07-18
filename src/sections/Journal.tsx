import { Reveal } from "@/components/Reveal";
import { POSTS } from "@/content/posts";

export function Journal() {
  return (
    <section id="journal" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-u text-[11px] text-[#12291c]/60">The journal</p>
          <h2 className="font-serif-d mt-6 max-w-3xl text-5xl leading-[1.02] tracking-tight md:text-6xl">
            Notes from the <em className="italic text-[#ff4d00]">studio</em>.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-[#12291c]/15">
          {POSTS.map((post, i) => (
            <Reveal key={post.url} delay={i * 60}>
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline gap-6 border-b border-[#12291c]/15 py-7 md:gap-10 md:py-8"
              >
                <span className="font-mono-u shrink-0 text-[10px] text-[#12291c]/45">
                  {post.date}
                </span>
                <span className="flex-1">
                  <span className="font-serif-d block text-2xl leading-snug transition-colors group-hover:text-[#ff4d00] md:text-3xl">
                    {post.title}
                  </span>
                  {post.excerpt && (
                    <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-[#12291c]/65">
                      {post.excerpt}
                    </span>
                  )}
                </span>
                <span className="font-mono-u hidden shrink-0 text-[10px] text-[#12291c]/55 sm:block">
                  {post.category}
                </span>
                <span className="font-serif-d text-2xl text-[#12291c]/35 transition-all group-hover:translate-x-1 group-hover:text-[#ff4d00]">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
