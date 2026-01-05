import Link from "next/link";
import Glass from "./Glass";
import LandingSection from "./LandingSection";

const steps = [
  { n: "01", title: "Create a workspace", desc: "Start a workspace for a client or project to keep data isolated." },
  { n: "02", title: "Upload reports", desc: "Upload single or batch files and keep track of the queue." },
  { n: "03", title: "Extract fields", desc: "Extract text + image-derived values and review everything." },
  { n: "04", title: "Verify & save", desc: "Confirm correctness, then save directly into Records." },
];

export default function LandingHowItWorks() {
  return (
    <LandingSection
      title="How it works"
      subtitle="Simple, predictable, and directly mapped to your app screens."
      right={
        <Link
          href="/register"
          className="rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-900/10 transition dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
        >
          Start now
        </Link>
      }
    >
      <div className="grid gap-3">
        {steps.map((s) => (
          <Glass key={s.n} className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 shrink-0 text-brand-peach font-semibold">{s.n}</div>
              <div>
                <div className="text-base font-semibold text-slate-900 dark:text-white">{s.title}</div>
                <div className="mt-1 text-sm text-slate-600 dark:text-white/70">{s.desc}</div>
              </div>
            </div>
          </Glass>
        ))}
      </div>
    </LandingSection>
  );
}
