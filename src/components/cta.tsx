import { Button } from "./button";
import { BorderBeam } from "./border-beam";

export function Cta() {
  return (
    <section id="contact" className="border-b border-line py-28">
      <div className="mx-auto max-w-3xl px-6">
        <BorderBeam className="bg-surface">
          <div className="px-8 py-16 text-center md:px-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Let&apos;s talk growth
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              Ready to stop guessing what&apos;s working?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted">
              Tell us where growth has stalled. We&apos;ll reply within one
              business day with next steps, not a sales call.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="mailto:hello@thesocialladder.co">Start a project</Button>
            </div>
          </div>
        </BorderBeam>
      </div>
    </section>
  );
}
