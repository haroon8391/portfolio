import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import Tags from "./Tags";
import { projects } from "@/lib/data";

export default function Work() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.06}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line transition-colors hover:border-muted">
              <div className="relative aspect-[2/1] overflow-hidden bg-card">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="grid h-full place-items-center p-6 text-center text-xl font-semibold text-muted/50">
                    {p.title}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {p.company} · {p.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>
                <Tags items={p.stack} />
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    Visit site ↗
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
