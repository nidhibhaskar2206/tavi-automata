import Link from "next/link";
import LandingChips from "./LandingChips";

export default function LandingHero() {
  return (
    <div className="space-y-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70">
        <span className="h-2 w-2 rounded-full bg-brand-teal" />
        Workflow-first document automation
      </div>

      <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl">
        Turn reports into{" "}
        <span className="bg-gradient-to-r from-brand-teal via-brand-sand to-brand-peach bg-clip-text text-transparent">
          clean structured records
        </span>
        .
      </h1>

      <p className="max-w-xl text-base text-slate-600 dark:text-white/70">
        A workspace-driven flow to upload documents, extract fields (including values from images),
        verify everything, and save confidently ƒ?" with Excel-style operations for cleanup and export.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/register"
          className="rounded-xl bg-brand-teal px-6 py-3 text-sm font-semibold text-brand-ice shadow-glass transition hover:brightness-110"
        >
          Get Started
        </Link>

        <Link
          href="/login"
          className="rounded-xl border border-slate-900/10 bg-slate-900/5 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
        >
          Login
        </Link>

        <Link
          href="/about"
          className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
        >
          Learn more ƒ+' →
        </Link>
      </div>

      <LandingChips />
    </div>
  );
}
