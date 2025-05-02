"use client";

import { ReactNode, CSSProperties } from "react";

interface ResponsiveSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bgColor?: string;
  fullWidth?: boolean;
  maxWidth?: string;
  padding?: string;
  style?: CSSProperties;
}

export function ResponsiveSection({
  id,
  className = "",
  children,
  bgColor = "bg-white",
  fullWidth = false,
  maxWidth = "max-w-7xl",
  padding = "py-16 px-4 sm:px-6 lg:px-8",
  style,
}: ResponsiveSectionProps) {
  return (
    <section
      id={id}
      className={`${bgColor} w-full ${className}`}
      style={style}
    >
      <div
        className={`mx-auto ${padding} ${
          fullWidth ? "w-full" : maxWidth
        }`}
      >
        {children}
      </div>
    </section>
  );
} 