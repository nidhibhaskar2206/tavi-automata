import Link from "next/link";
import Glass from "./Glass";

export default function LandingFinalCTA() {
  return (
    <section>
      <Glass className="p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Ready to build your first workspace?
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
              Start with Upload + Extract, then wire Verify & Save into Records.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/register"
              className="rounded-xl bg-brand-teal px-5 py-2.5 text-sm font-medium text-brand-ice hover:brightness-110 transition"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-slate-900/10 bg-slate-900/5 px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-900/10 transition dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
            >
              Login
            </Link>
          </div>
        </div>
      </Glass>
    </section>
  );
}
