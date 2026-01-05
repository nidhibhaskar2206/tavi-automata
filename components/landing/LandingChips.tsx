import Glass from "./Glass";

const chips = [
  { title: "Workspace", desc: "Clean separation" },
  { title: "Verify-first", desc: "Human-in-loop" },
  { title: "Excel Ops", desc: "Export-ready" },
];

export default function LandingChips() {
  return (
    <div className="grid gap-3 pt-2 sm:grid-cols-3">
      {chips.map((c) => (
        <Glass key={c.title} className="p-4">
          <div className="text-sm font-semibold text-slate-900 dark:text-white">{c.title}</div>
          <div className="mt-1 text-xs text-slate-600 dark:text-white/60">{c.desc}</div>
        </Glass>
      ))}
    </div>
  );
}
