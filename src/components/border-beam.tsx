import type { ReactNode } from "react";

export function BorderBeam({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`border-beam rounded-card ${className}`}>{children}</div>;
}
