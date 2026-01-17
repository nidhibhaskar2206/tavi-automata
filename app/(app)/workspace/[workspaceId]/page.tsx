// app/workspace/[workspaceId]/page.tsx
import { use } from "react";
import WorkspaceOverview from "@/components/workspace/WorkspaceOverview";

type PageProps = {
  params: Promise<{ workspaceId: string }>;
};

const mockMembers = [
  { id: "m1", name: "Alice" },
  { id: "m2", name: "Bob" },
  { id: "m3", name: "Charlie" },
];

const mockReports = [
  {
    id: "r1",
    name: "Q1 Sales Report",
    memberId: "m1",
    status: "Completed",
    uploadedAt: "2025-11-01T10:00:00Z",
  },
  {
    id: "r2",
    name: "Q2 Sales Draft",
    memberId: "m2",
    status: "In Progress",
    uploadedAt: "2025-11-05T12:30:00Z",
  },
  {
    id: "r3",
    name: "Compliance Checklist",
    memberId: "m3",
    status: "Pending Review",
    uploadedAt: "2025-11-10T09:15:00Z",
  },
];

const mockStats = {
  totalReports: mockReports.length,
  completed: 1,
  inProgress: 1,
  pendingReview: 1,
  lastUploadAt: "2025-11-10T09:15:00Z",
};

export default function WorkspacePage(props: PageProps) {
  const { params } = props;
  const { workspaceId } = use(params);

  return (
    <WorkspaceOverview
      workspaceId={workspaceId}
      initialReports={mockReports}
      members={mockMembers}
      stats={mockStats}
    />
  );
}
