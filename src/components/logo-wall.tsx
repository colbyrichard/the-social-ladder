const CLIENTS = [
  { name: "Loamworks", mark: "LW" },
  { name: "Verge Outfitters", mark: "VO" },
  { name: "Petal & Pine", mark: "P&P" },
  { name: "Solstice Coffee", mark: "SC" },
  { name: "Harlow Studio", mark: "HS" },
];

function ClientMark({ name, mark }: { name: string; mark: string }) {
  return (
    <div className="flex items-center gap-2.5 text-ink-faint transition-colors hover:text-ink-muted" title={name}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="font-display text-sm font-semibold tracking-wide">{mark}</span>
      <span className="sr-only">{name}</span>
    </div>
  );
}

export function LogoWall() {
  return (
    <section className="border-b border-line py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-ink-faint">
          Trusted by founder-led brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {CLIENTS.map((client) => (
            <ClientMark key={client.name} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
