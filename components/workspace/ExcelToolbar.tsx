// components/workspace/ExcelToolbar.tsx
import { Button } from '../ui/Button';

type Props = {
  onExport: () => void;
};

export default function ExcelToolbar({ onExport }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button 
        variant="primary" 
        className="!bg-[var(--brand-teal)] hover:!brightness-110 !text-[var(--brand-ice)] shadow-glass px-6 py-2.5"
        onClick={onExport}
      >
        Export to Excel
      </Button>
      <Button 
        variant="ghost"
        className="!border-[var(--brand-peach)] !text-[var(--brand-peach)] hover:!bg-[var(--brand-peach)]/10 px-6 py-2.5 shadow-glass"
      >
        Import Excel
      </Button>
      <Button variant="ghost" className="!text-[var(--brand-ice)] hover:!bg-white/5 px-6 py-2.5 shadow-glass">
        Clear Filters
      </Button>
      <Button variant="ghost" className="!text-[var(--brand-ice)] hover:!bg-white/5 px-6 py-2.5 shadow-glass">
        Download Template
      </Button>
    </div>
  );
}
