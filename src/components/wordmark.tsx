export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display font-semibold tracking-tight ${className}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect width="22" height="22" rx="6" fill="var(--color-accent)" />
        <path d="M6.5 6H16V8.4H9V10.6H14.7V13H9V16H6.5V6Z" fill="var(--color-accent-ink)" />
      </svg>
      Fielding
    </span>
  );
}
