"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FEATURES = [
  {
    title: "Signal Extraction",
    description: "Pull structured data from noisy documents with consistent checks.",
  },
  {
    title: "Workflow Orchestration",
    description: "Chain verification steps with transparent, auditable outcomes.",
  },
  {
    title: "Human-in-the-Loop",
    description: "Review edge cases quickly without losing automation speed.",
  },
  {
    title: "Living Records",
    description: "Keep datasets current with incremental validation and updates.",
  },
];

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section id="features" className="bg-transparent py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
            Automations built to feel deliberate.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((item, index) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-strong)] px-6 pb-10 pt-8 text-[var(--text-primary)] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 84%, 65% 100%, 0 92%)",
              }}
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-[var(--brand-teal)]" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                {item.description}
              </p>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,203,154,0.12),transparent_60%)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
