import Glass from "./Glass";

export default function LandingPreview() {
  return (
    <Glass className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium text-slate-900 dark:text-white">Preview</div>
          <div className="mt-1 text-xs text-slate-600 dark:text-white/60">
            A clean workflow UI aligned to your wireframe
          </div>
        </div>
        <div className="text-xs text-slate-500 dark:text-white/50">v0</div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 dark:border-white/10 dark:bg-black/20">
          <div className="flex items-center justify-between text-xs text-slate-600 dark:text-white/60">
            <span>Workspace</span>
            <span className="text-brand-sand">alpha</span>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
            {["Records", "Upload", "Extract", "Excel"].map((t, i) => (
              <div
                key={t}
                className={[
                  "rounded-lg px-2 py-2 text-center border border-slate-900/10 dark:border-white/10",
                  i === 1
                    ? "bg-brand-teal/15 text-brand-dark dark:text-brand-ice"
                    : "bg-slate-900/5 text-slate-600 dark:bg-white/5 dark:text-white/70",
                ].join(" ")}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-900/10 bg-slate-900/5 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="text-xs text-slate-600 dark:text-white/60">Verify</div>
          <div className="mt-2 text-sm text-slate-700 dark:text-white/75">
            Review extracted fields and confirm image-derived values before saving.
          </div>
          <div className="mt-4 rounded-xl bg-brand-teal px-4 py-2 text-center text-sm font-medium text-brand-ice">
            Save to Records
          </div>
        </div>
      </div>
    </Glass>
  );
}
