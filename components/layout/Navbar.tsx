"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initial = stored === "light" || stored === "dark" ? stored : systemPref;
    applyTheme(initial);
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const applyTheme = (nextTheme: "light" | "dark") => {
    const root = document.documentElement;
    root.dataset.theme = nextTheme;
    root.classList.toggle("dark", nextTheme === "dark");
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
    setTheme(nextTheme);
    setOpen(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("nuvo_token");
    setOpen(false);
    router.push("/login");
  };

  return (
    <nav className="fixed left-0 top-0 z-50 h-16 w-full border-b border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-semibold text-[var(--nav-text)]">
          TaviAutomata
        </Link>

        <ul className="m-12 flex list-none items-center w-6xl gap-3">
          {nav.map((item) => (
            <li key={item.href} className="block">
              <Link
                href={item.href}
                className="inline-flex items-center px-5 py-2 text-sm font-medium text-[var(--nav-muted)] transition hover:text-brand-teal"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-haspopup="menu"
            aria-expanded={open}
            aria-label="Open profile menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--nav-border)] bg-[var(--nav-icon-bg)] text-[var(--nav-text)] shadow-sm transition hover:border-brand-teal/60 hover:text-brand-teal"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21a8 8 0 0 0-16 0" />
              <circle cx="12" cy="8" r="4" />
            </svg>
          </button>

          {open && (
            <div
              role="menu"
              className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-slate-900/10 bg-white/95 py-2 text-sm text-slate-700 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-950/90 dark:text-white/80"
            >
              <Link
                role="menuitem"
                href="/profile"
                onClick={() => setOpen(false)}
                className="flex w-full items-center gap-2 px-4 py-2 transition hover:bg-slate-900/5 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
              >
                Profile
              </Link>
              <Link
                role="menuitem"
                href="/login"
                onClick={() => setOpen(false)}
                className="flex w-full items-center gap-2 px-4 py-2 transition hover:bg-slate-900/5 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
              >
                Sign in
              </Link>
              <button
                role="menuitem"
                type="button"
                onClick={handleSignOut}
                className="flex w-full items-center gap-2 px-4 py-2 text-left transition hover:bg-slate-900/5 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
              >
                Sign out
              </button>
              <button
                role="menuitem"
                type="button"
                onClick={toggleTheme}
                className="flex w-full items-center justify-between px-4 py-2 text-left transition hover:bg-slate-900/5 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <span>Theme</span>
                <span className="text-xs text-slate-500 dark:text-white/50">
                  {theme === "dark" ? "Dark" : "Light"}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
