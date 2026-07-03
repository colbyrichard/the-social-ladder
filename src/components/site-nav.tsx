"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Wordmark } from "./wordmark";
import { Button } from "./button";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Clients" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="text-ink">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact">Start a project</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          {open ? <X size={18} /> : <List size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink-muted hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" className="mt-6 w-full">
            Start a project
          </Button>
        </div>
      )}
    </header>
  );
}
