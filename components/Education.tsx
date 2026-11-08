import Section from "./Section";
import Reveal from "./Reveal";
import { certifications, education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education & certifications">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted">Education</h3>
          <p className="mt-4 text-xl font-medium">{education.degree}</p>
          <p className="mt-1 text-muted">{education.school}</p>
          <p className="mt-1 text-sm text-muted">
            {education.period} · CGPA {education.cgpa}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted">Certifications</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((c) => (
              <li key={c.name}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 border-b border-line pb-3"
                >
                  <span className="transition-colors group-hover:text-accent">{c.name}</span>
                  <span className="shrink-0 text-sm text-muted">{c.issuer} ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
