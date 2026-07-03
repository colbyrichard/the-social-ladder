"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import {
  MagnifyingGlass,
  Compass,
  Wrench,
  ChartLineUp,
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    icon: MagnifyingGlass,
    title: "Discovery",
    body: "We audit what's running today: channels, creative, lifecycle, the site. No deck, just findings.",
  },
  {
    icon: Compass,
    title: "Strategy",
    body: "A twelve-month plan with three priorities, not thirty. Every line ties to a number you track.",
  },
  {
    icon: Wrench,
    title: "Build",
    body: "Campaigns, flows, and pages go live in weekly sprints. You see work before it ships, not after.",
  },
  {
    icon: ChartLineUp,
    title: "Compound",
    body: "Monthly reviews cut what's not working and double down on what is. The plan keeps moving.",
  },
];

export function Process() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrapRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [reduce]);

  if (reduce) {
    return (
      <section id="process" className="border-b border-line py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">How it runs</span>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            A plan you can see before you sign anything.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {STEPS.map((step) => (
              <div key={step.title} className="rounded-card border border-line bg-surface p-8">
                <step.icon size={28} weight="duotone" className="text-accent" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="process" ref={wrapRef} className="relative border-b border-line">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <h2 className="max-w-lg font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          A plan you can see before you sign anything.
        </h2>
      </div>

      {STEPS.map((step, i) => (
        <div
          key={step.title}
          className="process-card sticky top-0 flex min-h-[100dvh] items-center justify-center px-6"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-8 rounded-card border border-line bg-surface p-10 md:flex-row md:items-center md:p-16">
            <span className="font-display text-6xl font-bold text-accent md:text-8xl">
              0{i + 1}
            </span>
            <div>
              <step.icon size={32} weight="duotone" className="text-accent" />
              <h3 className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
