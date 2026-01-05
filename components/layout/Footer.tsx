import Link from "next/link";

export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900/10 dark:border-white/10">
      {/* optional contact anchor target */}
      <div id="contact" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight text-brand-dark dark:text-brand-ice">
                tavi<span className="text-brand-teal">.</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm text-slate-600 dark:text-white/60">
              Upload → Extract → Verify → Save. A minimal workflow for turning reports into clean,
              structured records.
            </p>
          </div>

          {/* Links */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="text-sm font-medium text-slate-700 dark:text-white/80">Product</div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-white/60">
                <li>
                  <Link className="transition hover:text-slate-900 dark:hover:text-white" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-slate-900 dark:hover:text-white" href="/#how-it-works">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-slate-900 dark:hover:text-white" href="/#features">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-slate-700 dark:text-white/80">Account</div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-white/60">
                <li>
                  <Link className="transition hover:text-slate-900 dark:hover:text-white" href="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-slate-900 dark:hover:text-white" href="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-slate-900 dark:hover:text-white" href="/#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-900/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between dark:border-white/10 dark:text-white/50">
          <div>© {year} tavi automata. All rights reserved.</div>

          <div className="flex flex-wrap items-center gap-3">
            <Link className="transition hover:text-slate-900 dark:hover:text-white/80" href="/about">
              About
            </Link>
            <span className="text-slate-400/70 dark:text-white/20">•</span>
            <Link className="transition hover:text-slate-900 dark:hover:text-white/80" href="/login">
              Login
            </Link>
            <span className="text-slate-400/70 dark:text-white/20">•</span>
            <Link className="transition hover:text-slate-900 dark:hover:text-white/80" href="/register">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
