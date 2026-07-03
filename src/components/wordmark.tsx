export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-display font-semibold tracking-tight ${className}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="1.5" y="12.5" width="4" height="8" rx="1" fill="var(--color-accent)" />
        <rect x="9" y="7.5" width="4" height="13" rx="1" fill="var(--color-accent)" />
        <rect x="16.5" y="1.5" width="4" height="19" rx="1" fill="var(--color-accent)" />
      </svg>
      The Social Ladder
    </span>
  );
}
