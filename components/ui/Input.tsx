import React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-brand-teal/60 dark:border-white/10 dark:bg-white/5 dark:text-brand-ice dark:placeholder:text-white/40 ${props.className ?? ""}`}
    />
  );
}
