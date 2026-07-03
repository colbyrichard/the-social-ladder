"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "./button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
            The marketing partner for brands that outgrew guesswork.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            The Social Ladder runs strategy, brand, and growth marketing for
            founder-led companies ready to scale past word of mouth.
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-line">
            <Image
              src="https://picsum.photos/seed/social-ladder-studio-desk/900/1125"
              alt="Still life photography used as the brand's editorial visual style"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-card bg-accent md:block" />
        </motion.div>
      </div>
    </section>
  );
}
