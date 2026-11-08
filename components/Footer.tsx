import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <ul className="flex gap-5">
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">GitHub</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">LinkedIn</a></li>
          <li><a href={`mailto:${profile.email}`} className="hover:text-fg">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
