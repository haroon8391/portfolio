import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.03}>
            <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-10">
              <dt className="font-mono text-xs uppercase tracking-wide text-muted sm:pt-1">{s.group}</dt>
              <dd className="leading-relaxed">{s.items.join(" · ")}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
