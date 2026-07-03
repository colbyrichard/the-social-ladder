import { Button } from "./button";

export function Cta() {
  return (
    <section id="contact" className="border-b border-line py-28 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          Ready to stop guessing what&apos;s working?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted">
          Tell us where growth has stalled. We&apos;ll reply within one business
          day with next steps, not a sales call.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="mailto:hello@thesocialladder.co">Start a project</Button>
        </div>
      </div>
    </section>
  );
}
