import { Card } from "@/components/ui/Card";

type Stat = {
  label: string;
  value: string;
  note: string;
  tone: string;
};

type Props = {
  stats: Stat[];
};

export function StatsGrid({ stats }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="group relative overflow-hidden p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div
            className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-br ${stat.tone} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          />
          <div className="relative z-10 space-y-2">
            <div className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
              {stat.label}
            </div>
            <div className="text-2xl font-semibold text-[var(--text-primary)]">{stat.value}</div>
            <div className="text-xs text-[var(--text-muted)]">{stat.note}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
