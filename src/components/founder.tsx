export function Founder() {
  return (
    <section className="border-b border-line bg-surface py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 lg:order-1">
          <h2 className="max-w-md font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            Every account, run by someone who&apos;s done it in-house.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
            Megan Voss spent seven years leading growth at two DTC brands
            before starting The Social Ladder. She&apos;s still the one on
            your calls.
          </p>
        </div>

        <div className="relative order-first mx-auto flex aspect-[3/4] w-48 items-center justify-center overflow-hidden rounded-card border border-line bg-canvas sm:w-56 lg:order-2 lg:col-span-5 lg:mx-0 lg:w-full lg:max-w-xs lg:justify-self-end">
          <div
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
            aria-hidden="true"
          />
          <span className="relative font-display text-6xl font-bold text-ink sm:text-7xl">
            MV
          </span>
        </div>
      </div>
    </section>
  );
}
