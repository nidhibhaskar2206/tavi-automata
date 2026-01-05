import { Card } from "@/components/ui/Card";

export default function RecordsPage() {
  return (
    <Card className="p-6">
      <div className="text-lg font-semibold">Records</div>
      <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
        This will be a table with filters + export.
      </p>
    </Card>
  );
}
