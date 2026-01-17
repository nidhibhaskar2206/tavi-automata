import Link from 'next/link';
import { Button } from '../ui/Button';

type Props = {
  workspaceId: string;
  onDownloadFiltered: () => void;
};

export default function WorkspaceActions({ workspaceId, onDownloadFiltered }: Props) {
  return (
    <div className="bg-[var(--brand-dark)]/70 rounded-2xl p-6 border border-[var(--brand-teal)]/20 shadow-glass">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-[var(--brand-ice)]">Workspace Actions</h3>
        <div className="flex gap-4">
          <Button 
            variant="primary"
            className="!bg-[var(--brand-teal)] hover:!brightness-110 !text-[var(--brand-ice)] shadow-glass px-8 py-3 text-base"
          >
            <Link href={`/workspace/${workspaceId}/upload`}>
              Upload Reports
            </Link>
          </Button>
          <Button 
            variant="ghost"
            className="!border-[var(--brand-sand)] !text-[var(--brand-sand)] hover:!bg-[var(--brand-sand)]/10 shadow-glass px-8 py-3 text-base"
            onClick={onDownloadFiltered}
          >
            Download Filtered Table
          </Button>
        </div>
      </div>
    </div>
  );
}
