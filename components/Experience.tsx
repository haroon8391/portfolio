"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion, type MotionValue } from "framer-motion";
import Section from "./Section";
import Tags from "./Tags";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <Section id="experience" title="Experience">
      <ol ref={ref} className="relative space-y-12 pl-8 sm:pl-12">
        <span aria-hidden className="absolute bottom-0 left-[7px] top-0 w-0.5 rounded bg-line" />
        <motion.span
          aria-hidden
          style={{ scaleY: reduce ? 1 : fill, transformOrigin: "top" }}
          className="absolute bottom-0 left-[7px] top-0 w-0.5 rounded bg-accent"
        />
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <Dot progress={scrollYProgress} />
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-2xl border border-line p-6 sm:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold">
                  {job.role} <span className="text-muted">·</span>{" "}
                  <span className="text-accent">{job.company}</span>
                </h3>
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {job.start} — {job.end}
                </p>
              </div>
              <p className="mt-2 text-muted">{job.summary}</p>
              <ul className="mt-4 list-[circle] space-y-2 pl-5 marker:text-muted">
                {job.highlights.map((h) => (
                  <li key={h} className="pl-1 leading-relaxed">
                    {h}
                  </li>
                ))}
              </ul>
              <Tags items={job.stack} />
            </motion.div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

// Dot on the line; lights up once the scroll fill reaches it.
function Dot({ progress }: { progress: MotionValue<number> }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = ref.current;
      const list = el?.closest("ol");
      if (!el || !list) return;
      const rel =
        (el.getBoundingClientRect().top - list.getBoundingClientRect().top) / list.offsetHeight;
      setReached(progress.get() >= rel - 0.02);
    };
    check();
    return progress.on("change", check);
  }, [progress]);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`absolute -left-8 top-8 h-4 w-4 rounded-full border-2 transition-colors duration-300 sm:-left-12 ${
        reached || reduce ? "border-accent bg-accent" : "border-line bg-bg"
      }`}
    />
  );
}
