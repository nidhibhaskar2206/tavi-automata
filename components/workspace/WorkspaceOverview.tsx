// components/workspace/WorkspaceOverview.tsx - Premium glassmorphism dashboard
'use client';

import { useState, useMemo, useTransition } from 'react';
import MemberFilter from './MemberFilter';
import ExcelToolbar from './ExcelToolbar';
import WorkspaceStats from './WorkspaceStats';
import ReportsTable from './ReportsTable';
import WorkspaceActions from './WorkspaceActions';

type Report = {
  id: string;
  name: string;
  memberId: string;
  status: 'Completed' | 'In Progress' | 'Pending Review';
  uploadedAt: string;
};

type Member = { id: string; name: string };
type Stats = {
  totalReports: number;
  completed: number;
  inProgress: number;
  pendingReview: number;
  lastUploadAt: string;
};

type Props = {
  workspaceId: string;
  initialReports: Report[];
  members: Member[];
  stats: Stats;
};

export default function WorkspaceOverview({
  workspaceId,
  initialReports,
  members,
  stats,
}: Props) {
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const filteredReports = useMemo(() => {
    if (!selectedMembers.length) return initialReports;
    return initialReports.filter(report => 
      selectedMembers.includes(report.memberId)
    );
  }, [initialReports, selectedMembers]);

  const handleFilterChange = (newMembers: string[]) => {
    startTransition(() => {
      setSelectedMembers(newMembers);
    });
  };

  const handleExport = () => {
    console.log('Export filtered reports:', filteredReports);
  };

  const handleDownloadFiltered = () => {
    console.log('Download filtered:', filteredReports);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[var(--brand-dark)]/95 via-[var(--brand-dark)]/80 to-transparent p-px">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--brand-teal)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--brand-sand)]/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--brand-peach)]/3 rounded-full blur-2xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Header Toolbar */}
        <div className="glass rounded-3xl p-8 border border-[var(--brand-teal)]/30 backdrop-blur-xl shadow-2xl shadow-[var(--brand-teal)]/10 hover:shadow-[var(--brand-teal)]/25 transition-all duration-500 hover:-translate-y-1">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1 min-w-0">
              <MemberFilter
                members={members}
                selectedMembers={selectedMembers}
                onChange={handleFilterChange}
              />
              <div className={`ml-2 px-4 py-2 rounded-xl bg-[var(--brand-teal)]/20 border border-[var(--brand-teal)]/40 text-sm font-bold text-[var(--brand-teal)] transition-all ${selectedMembers.length ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                {selectedMembers.length} member{selectedMembers.length !== 1 ? 's' : ''} filtered
              </div>
            </div>
            <ExcelToolbar onExport={handleExport} />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <WorkspaceStats stats={stats} />
        </div>

        {/* Reports Table */}
        <div className="animate-in fade-in-30 slide-in-from-bottom-4 duration-700">
          <ReportsTable reports={filteredReports} members={members} />
        </div>

        {/* Actions Bar */}
        <div className="animate-in fade-in-50 slide-in-from-bottom-8 duration-1000">
          <WorkspaceActions
            workspaceId={workspaceId}
            onDownloadFiltered={handleDownloadFiltered}
          />
        </div>
      </div>
    </div>
  );
}
