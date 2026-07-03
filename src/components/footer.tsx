import { Wordmark } from "./wordmark";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Clients" },
];

export function Footer() {
  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Wordmark className="text-ink" />
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            A small studio in Austin, TX, running social-first marketing for
            founder-led brands.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-8">
          <div>
            <p className="text-sm font-medium text-ink">Site</p>
            <ul className="mt-4 flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-muted hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Contact</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="mailto:hello@thesocialladder.co" className="text-sm text-ink-muted hover:text-ink">
                  hello@thesocialladder.co
                </a>
              </li>
              <li>
                <a href="tel:+15125550142" className="text-sm text-ink-muted hover:text-ink">
                  (512) 555-0142
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-6">
        <div className="border-t border-line pt-6 text-xs text-ink-faint">
          © 2026 The Social Ladder
        </div>
      </div>
    </footer>
  );
}
