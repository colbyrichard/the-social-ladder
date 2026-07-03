import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-input px-6 py-3 text-sm font-medium transition-transform duration-300 ease-out active:scale-[0.98] active:translate-y-[1px]";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-ink hover:bg-accent-dim"
      : "border border-line-strong text-ink hover:border-accent hover:text-accent";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
