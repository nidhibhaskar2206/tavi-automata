import Glass from "./Glass";
import LandingSection from "./LandingSection";

const faqs = [
  { q: "Do I have to verify extracted values?", a: "Yes — verification is central. Nothing is saved until reviewed." },
  { q: "Where does data live?", a: "Inside a workspace under Records, so each project stays separated." },
  { q: "Can I export the records?", a: "Yes — export is available from Records / Excel Operations." },
];

export default function LandingFAQ() {
  return (
    <LandingSection title="FAQ" subtitle="Quick answers to common questions.">
      <div className="grid gap-3">
        {faqs.map((f) => (
          <Glass key={f.q} className="p-5">
            <details className="group">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-800 dark:text-white/90">
                <div className="flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-slate-400 group-open:rotate-45 transition dark:text-white/50">+</span>
                </div>
              </summary>
              <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{f.a}</p>
            </details>
          </Glass>
        ))}
      </div>
    </LandingSection>
  );
}
