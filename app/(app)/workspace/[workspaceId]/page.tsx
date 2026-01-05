import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default async function WorkspacePage({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
  const { workspaceId } = await params;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="p-6">
        <div className="text-lg font-semibold">Quick Actions</div>
        <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-white/70">
          <Link
            className="block transition hover:text-slate-900 dark:hover:text-white"
            href={`/workspace/${workspaceId}/upload`}
          >
            ƒ+' Go to Upload
          </Link>
          <Link
            className="block transition hover:text-slate-900 dark:hover:text-white"
            href={`/workspace/${workspaceId}/extract`}
          >
            ƒ+' Go to Extract
          </Link>
          <Link
            className="block transition hover:text-slate-900 dark:hover:text-white"
            href={`/workspace/${workspaceId}/records`}
          >
            ƒ+' View Records
          </Link>
        </div>
      </Card>

      <Card className="p-6">
        <div className="text-lg font-semibold">Status</div>
        <p className="mt-2 text-sm text-slate-600 dark:text-white/70">
          You can later show job progress here (queued uploads, extraction complete, validation pending).
        </p>
      </Card>
    </div>
  );
}
