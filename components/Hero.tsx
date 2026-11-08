import Image from "next/image";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="grid items-center gap-12 py-16 sm:py-28 md:grid-cols-[1fr_auto]">
      <div>
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-2xl font-medium text-accent sm:text-3xl">{profile.role}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              Get in touch
            </a>
            <a
              href={profile.resume}
              download
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg"
            >
              Download resume ↓
            </a>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.1} className="justify-self-start md:justify-self-end">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-line bg-card sm:h-48 sm:w-48">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            priority
            className="object-cover"
            sizes="192px"
          />
        </div>
      </Reveal>
    </section>
  );
}
