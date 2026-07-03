import {
  Target,
  Megaphone,
  ChatCircleText,
  EnvelopeSimple,
  Browser,
} from "@phosphor-icons/react/dist/ssr";

export function Services() {
  return (
    <section id="services" className="border-b border-line py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Five disciplines, one accountable team.
        </h2>

        <div className="bento-services mt-12">
          <div className="cell-a relative flex flex-col justify-between overflow-hidden rounded-card border border-line bg-surface-2 p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
              aria-hidden="true"
            />
            <Target size={36} weight="duotone" className="relative text-accent" />
            <div className="relative">
              <h3 className="font-display text-2xl font-semibold text-ink">Brand & positioning</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
                A story your category hasn&apos;t heard, backed by research that holds up in a boardroom.
              </p>
            </div>
          </div>

          <div className="cell-b flex flex-col justify-between rounded-card border border-line bg-gradient-to-br from-accent to-accent-dim p-6">
            <Megaphone size={28} weight="duotone" className="text-accent-ink" />
            <div>
              <h3 className="font-display text-lg font-semibold text-accent-ink">Performance marketing</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-accent-ink">
                Paid social and search, run against a real payback target.
              </p>
            </div>
          </div>

          <div className="cell-c flex flex-col justify-between rounded-card border border-line bg-surface-2 p-6">
            <ChatCircleText size={28} weight="duotone" className="text-accent" />
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">Content & social</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                Editorial calendars and creative that sound like your team, not a template.
              </p>
            </div>
          </div>

          <div className="cell-d flex flex-col justify-between rounded-card border border-line bg-surface-2 p-6">
            <EnvelopeSimple size={28} weight="duotone" className="text-accent" />
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">Lifecycle & email</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                Flows and segmentation that turn a list into a second revenue line.
              </p>
            </div>
          </div>

          <div className="cell-e flex flex-col justify-between rounded-card border border-line bg-surface-2 p-6">
            <Browser size={28} weight="duotone" className="text-accent" />
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">Web & conversion</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                Landing pages and site flows built around how people actually decide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
