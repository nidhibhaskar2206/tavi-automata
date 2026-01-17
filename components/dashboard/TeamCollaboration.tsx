import { Card } from "@/components/ui/Card";

type TeamMember = {
  name: string;
  role: string;
  status: "Complete" | "In Progress";
};

type Props = {
  team: TeamMember[];
};

const statusStyles: Record<TeamMember["status"], string> = {
  Complete: "bg-brand-teal/20 text-brand-ice",
  "In Progress": "bg-brand-sand/30 text-brand-peach",
};

export function TeamCollaboration({ team }: Props) {
  return (
    <Card className="p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-[var(--text-primary)]">
          Team Collaboration
        </div>
        <button
          className="rounded-full border border-brand-sand/30 bg-brand-sand/10 px-3 py-1 text-xs text-brand-peach transition hover:border-brand-sand/60 hover:bg-brand-sand/20"
          type="button"
        >
          + Add Member
        </button>
      </div>
      <div className="mt-4 space-y-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex items-start justify-between gap-3 rounded-2xl border border-white/5 bg-[var(--surface-strong)] p-4 transition hover:-translate-y-0.5 hover:border-brand-ice/40 hover:shadow-md"
          >
            <div>
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                {member.name}
              </div>
              <div className="text-xs text-[var(--text-muted)]">{member.role}</div>
            </div>
            <span className={`rounded-full px-2 py-1 text-xs ${statusStyles[member.status]}`}>
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
