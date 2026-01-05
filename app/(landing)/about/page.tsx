export default function AboutPage() {
  return (
    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-8 backdrop-blur-md shadow-glass dark:border-white/10 dark:bg-white/5">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="mt-3 text-slate-600 dark:text-white/70">
        This app follows a simple workflow: upload reports, extract fields, verify the results, and
        save to records — then apply Excel-style operations to clean and export data.
      </p>
    </div>
  );
}
