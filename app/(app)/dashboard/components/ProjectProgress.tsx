import { Card } from "@/components/ui/Card";

type Props = {
  progress: number;
};

export function ProjectProgress({ progress }: Props) {
  return (
    <Card className="p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="text-sm font-semibold text-[var(--text-primary)]">Project Progress</div>
      <div className="mt-4 flex items-center justify-center">
        <div
          className="relative flex h-40 w-40 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(#116466 0% ${progress}%, rgba(17, 100, 102, 0.15) ${progress}% 100%)`,
          }}
        >
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[var(--surface)] text-[var(--text-primary)]">
            <div className="text-3xl font-semibold">{progress}%</div>
            <div className="text-xs text-[var(--text-muted)]">Project ended</div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3 text-xs text-[var(--text-muted)]">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-brand-teal" />
          Completed
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-brand-sand" />
          In Progress
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-brand-peach" />
          Pending
        </span>
      </div>
    </Card>
  );
}
