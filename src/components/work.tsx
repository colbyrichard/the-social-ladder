import Image from "next/image";

const CASE_STUDIES = [
  {
    client: "Loamworks",
    seed: "loamworks-garden-products",
    metric: "38.4%",
    metricLabel: "repeat-purchase rate",
    body: "Rebuilt lifecycle flows around planting seasons instead of a generic 30-day drip.",
  },
  {
    client: "Verge Outfitters",
    seed: "verge-outfitters-apparel",
    metric: "3.2x",
    metricLabel: "paid social ROAS",
    body: "Moved spend out of broad prospecting into three tested creative concepts.",
  },
  {
    client: "Solstice Coffee",
    seed: "solstice-coffee-roastery",
    metric: "-22%",
    metricLabel: "cost per acquisition",
    body: "New landing flow cut the friction between the ad click and checkout.",
  },
];

export function Work() {
  return (
    <section id="work" className="border-b border-line py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Work that changed the number that mattered.
        </h2>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:max-w-7xl">
        {CASE_STUDIES.map((study) => (
          <article
            key={study.client}
            className="w-[82vw] shrink-0 snap-start overflow-hidden rounded-card border border-line bg-surface sm:w-[380px]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={`https://picsum.photos/seed/${study.seed}/760/570`}
                alt={`Editorial photography for the ${study.client} case study`}
                fill
                sizes="380px"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-ink-muted">{study.client}</p>
              <p className="mt-3 font-display text-3xl font-semibold text-accent">
                {study.metric}
                <span className="ml-2 font-body text-sm font-normal text-ink-muted">
                  {study.metricLabel}
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{study.body}</p>
            </div>
          </article>
        ))}
        <div className="w-px shrink-0 lg:hidden" aria-hidden="true" />
      </div>
    </section>
  );
}
