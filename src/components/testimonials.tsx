const QUOTES = [
  {
    quote:
      "The Social Ladder rebuilt our lifecycle program in six weeks and it just works now. I stopped worrying about email.",
    name: "Dana Ferris",
    role: "Founder, Loamworks",
  },
  {
    quote:
      "They talk like operators, not vendors. Every recommendation had a number attached to it.",
    name: "Priya Nandakumar",
    role: "CMO, Verge Outfitters",
  },
  {
    quote:
      "Our checkout finally matches how good the coffee is. That page alone paid for the retainer.",
    name: "Owen Marsh",
    role: "Owner, Solstice Coffee",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-line py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">Client notes</span>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          What clients notice first.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {QUOTES.map((item) => (
            <figure key={item.name} className="flex flex-col justify-between bg-surface p-8">
              <blockquote className="font-display text-lg leading-snug text-ink">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-ink-muted">
                <span className="font-medium text-ink">{item.name}</span>
                <span className="block">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
