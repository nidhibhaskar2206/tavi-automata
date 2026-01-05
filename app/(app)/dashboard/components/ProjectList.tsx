import Link from "next/link";
import { Card } from "@/components/ui/Card";

type ProjectTask = {
  title: string;
  workspaceId: string;
  due: string;
  status: string;
  tone: string;
};

type Props = {
  tasks: ProjectTask[];
};

export function ProjectList({ tasks }: Props) {
  return (
    <Card className="p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:col-span-8">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-[var(--text-primary)]">Project</div>
        <button
          className="rounded-full border border-brand-teal/25 bg-brand-teal/5 px-3 py-1 text-xs text-brand-teal transition hover:border-brand-teal/50 hover:bg-brand-teal/15"
          type="button"
        >
          + New
        </button>
      </div>
      <div className="mt-4 max-h-96 space-y-3 overflow-auto pr-1">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="relative flex items-start justify-between gap-3 rounded-2xl border border-white/5 bg-[var(--surface-strong)] p-4 transition hover:border-brand-ice/40 hover:shadow-md"
          >
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)]">{task.title}</div>
              <div className="text-xs text-[var(--text-muted)]">Due date: {task.due}</div>
            </div>
            <div className="flex flex-col items-end gap-2 pr-9">
              <span className={`rounded-full px-2 py-1 text-xs ${task.tone}`}>
                {task.status}
              </span>
            </div>
            <Link
              className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-teal/25 bg-brand-teal/5 text-brand-teal transition hover:border-brand-teal/50 hover:bg-brand-teal/15"
              href={`/workspace/${task.workspaceId}`}
              aria-label="Open workspace"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5"
                fill="currentColor"
              >
                <path d="M6.5 5.5a1 1 0 0 1 1-1H14a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V7.914l-6.293 6.293a1 1 0 0 1-1.414-1.414L11.586 6.5H7.5a1 1 0 0 1-1-1Z" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </Card>
  );
}
