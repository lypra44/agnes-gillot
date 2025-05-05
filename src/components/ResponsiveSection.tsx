"use client";

import { ReactNode, CSSProperties } from "react";

export interface ResponsiveSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  role?: string;
  style?: CSSProperties;
}

export const ResponsiveSection = ({
  id,
  children,
  className = "",
  ariaLabel,
  role,
  style,
}: ResponsiveSectionProps) => {
  return (
    <div
      id={id}
      className={`py-10 md:py-14 lg:py-16 ${className}`}
      aria-label={ariaLabel}
      role={role}
      style={style}
    >
      {children}
    </div>
  );
};
