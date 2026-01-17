// components/workspace/WorkspaceStats.tsx
type Stats = {
  totalReports: number;
  completed: number;
  inProgress: number;
  pendingReview: number;
  lastUploadAt: string;
};

type Props = { stats: Stats };

export default function WorkspaceStats({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="group bg-[var(--brand-dark)]/70 rounded-2xl p-6 border border-[var(--brand-teal)]/30 hover:border-[var(--brand-teal)] shadow-glass transition-all">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-ice)]/60 mb-1">Total Reports</p>
        <p className="text-2xl font-bold bg-gradient-to-r from-[var(--brand-teal)] to-[var(--brand-sand)] bg-clip-text text-transparent">
          {stats.totalReports}
        </p>
      </div>

      <div className="group bg-[var(--brand-dark)]/70 rounded-2xl p-6 border border-[var(--brand-sand)]/30 hover:border-[var(--brand-sand)] shadow-glass transition-all">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-ice)]/60 mb-1">Completed</p>
        <p className="text-2xl font-bold text-[var(--brand-sand)]">{stats.completed}</p>
      </div>

      <div className="group bg-[var(--brand-dark)]/70 rounded-2xl p-6 border border-[var(--brand-peach)]/30 hover:border-[var(--brand-peach)] shadow-glass transition-all">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-ice)]/60 mb-1">In Progress</p>
        <p className="text-2xl font-bold text-[var(--brand-peach)]">{stats.inProgress}</p>
      </div>

      <div className="group bg-[var(--brand-dark)]/70 rounded-2xl p-6 border border-[var(--brand-teal)]/30 hover:border-[var(--brand-teal)] shadow-glass transition-all">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-ice)]/60 mb-1">Pending Review</p>
        <p className="text-2xl font-bold text-[var(--brand-teal)]">{stats.pendingReview}</p>
      </div>
    </div>
  );
}
