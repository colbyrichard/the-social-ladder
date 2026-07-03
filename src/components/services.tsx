import {
  TrendUp,
  Megaphone,
  UsersThree,
  ChartLineUp,
  Browser,
} from "@phosphor-icons/react/dist/ssr";

export function Services() {
  return (
    <section id="services" className="border-b border-line py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-display text-sm italic tracking-wide text-accent">Capabilities</span>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          Five disciplines, one accountable team.
        </h2>

        <div className="bento-services mt-10">
          <div className="cell-a relative flex flex-col justify-between overflow-hidden bg-surface p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
              aria-hidden="true"
            />
            <TrendUp size={36} weight="duotone" className="relative text-accent" />
            <div className="relative">
              <h3 className="font-display text-2xl font-medium text-ink">Social strategy &amp; content systems</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
                A posting system built on what your audience actually engages with, not a content calendar template.
              </p>
            </div>
          </div>

          <div className="cell-b flex flex-col justify-between bg-gradient-to-br from-accent to-accent-dim p-6">
            <Megaphone size={28} weight="duotone" className="text-accent-ink" />
            <div>
              <h3 className="font-display text-lg font-medium text-accent-ink">Paid social</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-accent-ink">
                Meta, TikTok, and X spend run against a real payback target.
              </p>
            </div>
          </div>

          <div className="cell-c flex flex-col justify-between bg-surface p-6">
            <UsersThree size={28} weight="duotone" className="text-accent" />
            <div>
              <h3 className="font-display text-lg font-medium text-ink">Creator &amp; UGC</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                A vetted creator bench that ships hooks weekly, not one campaign a quarter.
              </p>
            </div>
          </div>

          <div className="cell-d flex flex-col justify-between bg-surface p-6">
            <ChartLineUp size={28} weight="duotone" className="text-accent" />
            <div>
              <h3 className="font-display text-lg font-medium text-ink">Analytics &amp; reporting</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                One dashboard, updated weekly, tied to revenue instead of vanity reach.
              </p>
            </div>
          </div>

          <div className="cell-e flex flex-col justify-between bg-surface p-6">
            <Browser size={28} weight="duotone" className="text-accent" />
            <div>
              <h3 className="font-display text-lg font-medium text-ink">Web &amp; conversion</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                Landing pages built for traffic that arrives mid-scroll, not mid-research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
