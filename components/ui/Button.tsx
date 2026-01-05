import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-brand-teal/60 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "primary"
      ? "bg-brand-teal text-brand-ice hover:brightness-110 shadow-glass"
      : "bg-transparent text-slate-700 hover:bg-slate-900/5 border border-slate-900/10 dark:text-brand-ice dark:hover:bg-white/10 dark:border-white/10";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
