"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "./button";
import { BorderBeam } from "./border-beam";

const BARS = [
  { label: "M1", h: 22 },
  { label: "M2", h: 34 },
  { label: "M3", h: 30 },
  { label: "M4", h: 48 },
  { label: "M5", h: 44 },
  { label: "M6", h: 68 },
  { label: "M7", h: 86 },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="font-display text-sm italic tracking-wide text-accent">
            A social-first studio
          </span>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.12] tracking-tight text-ink md:text-6xl">
            Marketing with a little{" "}
            <em className="italic text-accent">romance</em>.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            The Social Ladder is a strategy and social-marketing studio for
            founder-led brands. We make attention feel personal, then turn it
            into a channel you can count on.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact">Start a project</Button>
            <Button href="#work" variant="ghost">
              See our work
              <ArrowUpRight size={16} className="ml-1.5" weight="bold" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative lg:col-span-5"
        >
          <BorderBeam className="overflow-hidden bg-surface">
            <div className="flex flex-col gap-6 p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  Client engagement rate
                </span>
                <span className="flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              </div>

              <div className="flex h-32 items-stretch gap-2.5">
                {BARS.map((bar, i) => (
                  <div key={bar.label} className="flex h-full flex-1 items-end">
                    <motion.div
                      initial={reduce ? false : { height: 0 }}
                      animate={{ height: `${bar.h}%` }}
                      transition={{
                        duration: 0.9,
                        delay: reduce ? 0 : 0.4 + i * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ height: reduce ? `${bar.h}%` : undefined }}
                      className={`w-full rounded-[3px] ${
                        i === BARS.length - 1 ? "bg-accent" : "bg-ink-faint/35"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="-mt-4 flex gap-2.5">
                {BARS.map((bar) => (
                  <span
                    key={bar.label}
                    className="flex-1 text-center font-mono text-[10px] text-ink-faint"
                  >
                    {bar.label}
                  </span>
                ))}
              </div>

              <div className="flex items-end justify-between border-t border-line pt-5">
                <div>
                  <p className="font-mono text-3xl font-medium text-ink">+286%</p>
                  <p className="mt-1 text-xs text-ink-muted">7-month engagement lift</p>
                </div>
                <p className="font-mono text-xs text-ink-faint">Loamworks — TikTok &amp; IG</p>
              </div>
            </div>
          </BorderBeam>
        </motion.div>
      </div>
    </section>
  );
}
