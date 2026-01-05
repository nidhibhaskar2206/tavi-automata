import Glass from "./Glass";
import LandingSection from "./LandingSection";

const features = [
  { title: "Upload Queue", desc: "Batch uploads with clear status and progress." },
  { title: "Extraction Review", desc: "Edit fields before saving. No surprises." },
  { title: "Records View", desc: "Search, filter, export, and keep a clean history." },
  { title: "Excel Operations", desc: "Merge datasets, dedupe rows, export clean sheets." },
];

export default function LandingFeatures() {
  return (
    <LandingSection title="Features" subtitle="Minimal UI that stays out of the way — designed for shipping fast.">
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <Glass key={f.title} className="p-6">
            <div className="text-lg font-semibold text-slate-900 dark:text-white">{f.title}</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-white/70">{f.desc}</p>
          </Glass>
        ))}
      </div>
    </LandingSection>
  );
}
