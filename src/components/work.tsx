import Image from "next/image";
import { BorderBeam } from "./border-beam";

const CASE_STUDIES = [
  {
    client: "Loamworks",
    seed: "loamworks-garden-products",
    metric: "+286%",
    metricLabel: "engagement lift, 7 months",
    body: "Rebuilt the content calendar around planting seasons and a creator bench, instead of a generic posting schedule.",
    featured: true,
  },
  {
    client: "Verge Outfitters",
    seed: "verge-outfitters-apparel",
    metric: "3.2x",
    metricLabel: "paid social ROAS",
    body: "Moved spend out of broad prospecting into three tested UGC concepts.",
  },
  {
    client: "Solstice Coffee",
    seed: "solstice-coffee-roastery",
    metric: "4.1x",
    metricLabel: "organic reach growth",
    body: "Swapped polished studio content for creator-shot short-form video.",
  },
];

export function Work() {
  return (
    <section id="work" className="border-b border-line py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-display text-sm italic tracking-wide text-accent">Results</span>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          Work that changed the number that mattered.
        </h2>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:max-w-7xl">
        {CASE_STUDIES.map((study) => {
          const card = (
            <article className="h-full overflow-hidden rounded-card border border-line bg-surface">
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
                <p className="mt-3 font-mono text-3xl font-medium text-accent">
                  {study.metric}
                  <span className="ml-2 font-body text-sm font-normal text-ink-muted">
                    {study.metricLabel}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{study.body}</p>
              </div>
            </article>
          );
          return (
            <div key={study.client} className="w-[82vw] shrink-0 snap-start sm:w-[380px]">
              {study.featured ? <BorderBeam className="h-full">{card}</BorderBeam> : card}
            </div>
          );
        })}
        <div className="w-px shrink-0 lg:hidden" aria-hidden="true" />
      </div>
    </section>
  );
}
