import { Button } from "@/components/ui/Button";
import { DashboardHeader } from "./components/DashboardHeader";
import { StatsGrid } from "./components/StatsGrid";
import { ProjectList } from "./components/ProjectList";
import { ProjectProgress } from "./components/ProjectProgress";
import { TeamCollaboration } from "./components/TeamCollaboration";

const stats = [
  {
    label: "Total Projects",
    value: "24",
    note: "Up 8% from last month",
    tone: "from-brand-teal/90 via-brand-teal/40 to-brand-ice/80",
  },
  {
    label: "Ended Projects",
    value: "10",
    note: "Mostly on schedule",
    tone: "from-brand-sand/85 via-brand-sand/35 to-brand-peach/75",
  },
  {
    label: "Running Projects",
    value: "12",
    note: "3 critical milestones",
    tone: "from-brand-ice/90 via-brand-ice/40 to-brand-sand/80",
  },
  {
    label: "Pending Project",
    value: "2",
    note: "Waiting on approvals",
    tone: "from-brand-peach/90 via-brand-peach/40 to-brand-teal/80",
  },
];

const projectTasks = [
  {
    title: "Develop API Endpoints",
    workspaceId: "api-endpoints",
    due: "Nov 26, 2024",
    status: "Complete",
    tone: "bg-brand-teal/15 text-brand-ice",
  },
  {
    title: "Onboarding Flow",
    workspaceId: "onboarding-flow",
    due: "Nov 28, 2024",
    status: "In Progress",
    tone: "bg-brand-sand/30 text-brand-peach",
  },
  {
    title: "Build Dashboard",
    workspaceId: "build-dashboard",
    due: "Nov 30, 2024",
    status: "In Progress",
    tone: "bg-brand-sand/30 text-brand-peach",
  },
  {
    title: "Optimize Page Load",
    workspaceId: "optimize-page-load",
    due: "Dec 5, 2024",
    status: "In Progress",
    tone: "bg-brand-sand/30 text-brand-peach",
  },
];

const team = [
  { name: "Alexandra Deff", role: "GitHub repository updates", status: "Complete" },
  { name: "Edwin Adenike", role: "User authentication system", status: "In Progress" },
  { name: "Isaac Oluwatemiloun", role: "Search and filters", status: "In Progress" },
  { name: "David Oschodi", role: "Responsive homepage layout", status: "In Progress" },
];

export default function DashboardPage() {
  const projectProgress = 41;

  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Dashboard"
        subtitle="Plan, prioritize, and keep your project pipeline moving."
        actions={
          <>
            <Button className="shadow-lg shadow-brand-teal/20">+ Add Project</Button>
       
          </>
        }
      />

      <StatsGrid stats={stats} />

      <div className="grid gap-4 lg:grid-cols-12">
        <ProjectList tasks={projectTasks} />
        <div className="space-y-4 lg:col-span-4">
          <ProjectProgress progress={projectProgress} />
          <TeamCollaboration team={team} />
        </div>
      </div>
    </div>
  );
}
