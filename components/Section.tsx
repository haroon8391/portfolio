import Reveal from "./Reveal";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-20 sm:py-28">
      <Reveal>
        <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
