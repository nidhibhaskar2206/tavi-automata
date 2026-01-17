// components/workspace/ReportsTable.tsx
type Report = {
  id: string;
  name: string;
  memberId: string;
  status: 'Completed' | 'In Progress' | 'Pending Review';
  uploadedAt: string;
};

type Member = { id: string; name: string };

type Props = {
  reports: Report[];
  members: Member[];
};

const statusStyles: Record<string, { bg: string; text: string }> = {
  Completed: { bg: 'var(--brand-sand)', text: 'var(--brand-dark)' },
  'In Progress': { bg: 'var(--brand-peach)', text: 'var(--brand-dark)' },
  'Pending Review': { bg: 'var(--brand-teal)', text: 'var(--brand-ice)' },
};

export default function ReportsTable({ reports, members }: Props) {
  const getMemberName = (memberId: string) => members.find(m => m.id === memberId)?.name || 'Unknown';

  return (
    <div className="bg-[var(--brand-dark)]/70 rounded-2xl border-2 border-[var(--brand-teal)]/20 shadow-glass overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--brand-dark)]/80 backdrop-blur-sm">
              <th className="px-6 py-5 text-left text-sm font-bold text-[var(--brand-ice)] tracking-wide uppercase border-b border-[var(--brand-teal)]/20">
                Report Name
              </th>
              <th className="px-6 py-5 text-left text-sm font-bold text-[var(--brand-ice)] tracking-wide uppercase border-b border-[var(--brand-teal)]/20">
                Member
              </th>
              <th className="px-6 py-5 text-left text-sm font-bold text-[var(--brand-ice)] tracking-wide uppercase border-b border-[var(--brand-teal)]/20">
                Status
              </th>
              <th className="px-6 py-5 text-left text-sm font-bold text-[var(--brand-ice)] tracking-wide uppercase border-b border-[var(--brand-teal)]/20">
                Uploaded At
              </th>
              <th className="px-6 py-5 text-left text-sm font-bold text-[var(--brand-ice)] tracking-wide uppercase border-b border-[var(--brand-teal)]/20">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--brand-teal)]/10">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-[var(--brand-teal)]/10 transition-colors">
                <td className="px-6 py-5 font-semibold text-[var(--brand-ice)]">{report.name}</td>
                <td className="px-6 py-5 text-sm text-[var(--brand-ice)]/80 font-medium">
                  {getMemberName(report.memberId)}
                </td>
                <td className="px-6 py-5">
                  <span 
                    className={`px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1 shadow-md`}
                    style={{
                      backgroundColor: statusStyles[report.status].bg,
                      color: statusStyles[report.status].text,
                    }}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-sm text-[var(--brand-ice)]/70">
                  {new Date(report.uploadedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </td>
                <td className="px-6 py-5">
                  <button className="text-sm text-[var(--brand-teal)] font-medium hover:underline transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
