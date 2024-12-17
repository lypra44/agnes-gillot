import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Container({ className, children, style }: ContainerProps) {
  return (
    <div
      className={` ${
        className ? className : ""
      }`}
      style={style}>
      {children}
    </div>
  );
}

