export default function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full bg-card px-3 py-1 text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}
