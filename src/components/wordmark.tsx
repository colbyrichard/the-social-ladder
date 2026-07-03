export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display font-semibold tracking-tight ${className}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect width="22" height="22" rx="6" fill="var(--color-accent)" />
        <path
          d="M7 4.5V17.5M15 4.5V17.5M7 7.5H15M7 11H15M7 14.5H15"
          stroke="var(--color-accent-ink)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      The Social Ladder
    </span>
  );
}
