import React from "react";

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] backdrop-blur-md shadow-glass ${className}`}
      {...props}
    />
  );
}
