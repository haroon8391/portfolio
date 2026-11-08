import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Tags from "@/components/Tags";
import { blogPosts, blogTopics, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description: "Writing on building AI products, backend engineering, automation and career lessons.",
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Notes on building software and AI products, written from my day-to-day work.
          </p>
        </Reveal>

        {blogPosts.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.url} delay={(i % 3) * 0.06}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-line p-6 transition-colors hover:border-muted"
                >
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">
                    {post.date} · {post.platform}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{post.summary}</p>
                  <Tags items={post.tags} />
                  <span className="mt-5 text-sm font-medium text-accent">Read post ↗</span>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            <Reveal delay={0.05}>
              <div className="mt-14 rounded-2xl border border-dashed border-line p-8 sm:p-12">
                <p className="text-xl font-semibold">First posts coming soon</p>
                <p className="mt-2 max-w-xl text-muted">
                  I&apos;m getting started with writing. In the meantime, you can follow what I&apos;m building on{" "}
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-fg underline underline-offset-4">
                    LinkedIn
                  </a>{" "}
                  and{" "}
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-fg underline underline-offset-4">
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-6 mt-16 font-mono text-xs uppercase tracking-wide text-muted">
                What I&apos;ll be writing about
              </h2>
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {blogTopics.map((t) => (
                  <li key={t.title} className="rounded-2xl border border-line p-6">
                    <h3 className="font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
