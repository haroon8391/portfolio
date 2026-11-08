"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-2 w-full rounded-xl border border-line bg-transparent px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-fg";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!key) {
      console.error("Contact form: NEXT_PUBLIC_WEB3FORMS_KEY is not set. Add it to .env.local and restart the dev server.");
      setErrorDetail("The form isn't configured yet.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    const data = new FormData(form);
    data.append("access_key", key);
    data.append("subject", `Portfolio message from ${data.get("name")}`);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("Contact form submit failed:", err);
      setErrorDetail(err instanceof Error && err.message ? err.message : "Network error.");
      setStatus("error");
    }
  }

  return (
    <Section id="contact" title="Let's talk">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            I am open to full-stack and AI engineering roles. Send a message, or reach me directly.
          </p>
          <a href={`mailto:${profile.email}`} className="mt-6 inline-block text-xl underline decoration-line underline-offset-4 transition-colors hover:decoration-accent">
            {profile.email}
          </a>
          <ul className="mt-6 flex gap-5 text-sm text-muted">
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">GitHub ↗</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">LinkedIn ↗</a></li>
            <li><a href={profile.resume} download className="hover:text-fg">Resume ↓</a></li>
          </ul>
        </Reveal>
        <Reveal delay={0.05}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot field for Web3Forms spam protection */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <label className="block text-sm">
              Name
              <input name="name" required autoComplete="name" className={inputClass} />
            </label>
            <label className="block text-sm">
              Email
              <input name="email" type="email" required autoComplete="email" className={inputClass} />
            </label>
            <label className="block text-sm">
              Message
              <textarea name="message" required rows={5} className={`${inputClass} resize-y`} />
            </label>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85 disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p role="status" className="text-sm text-muted">
                {status === "sent" && "Thanks! I'll get back to you soon."}
                {status === "error" && (
                  <>Couldn&apos;t send ({errorDetail}) Email me at <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.</>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
