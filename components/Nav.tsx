import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

// Absolute "/#id" hrefs so the links also work from the /blog page.
const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {profile.shortName}
          <span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
