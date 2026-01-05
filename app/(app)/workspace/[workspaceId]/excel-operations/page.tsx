import { Card } from "@/components/ui/Card";

export default function ExcelOpsPage() {
  return (
    <Card className="p-6">
      <div className="text-lg font-semibold">Excel Operations</div>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-white/70">
        <li>Remove duplicates</li>
        <li>Merge datasets</li>
        <li>Export</li>
      </ul>
    </Card>
  );
}
