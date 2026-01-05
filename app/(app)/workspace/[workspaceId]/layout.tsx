import type { ReactNode } from "react";
import Link from "next/link";

export default async function WorkspaceLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ workspaceId: string }>;
}) {
  const { workspaceId } = await params;

  const tabs = [
    { label: "Overview", href: `/workspace/${workspaceId}` },
    { label: "Records", href: `/workspace/${workspaceId}/records` },
    { label: "Upload", href: `/workspace/${workspaceId}/upload` },
    { label: "Extract", href: `/workspace/${workspaceId}/extract` },
    { label: "Excel Ops", href: `/workspace/${workspaceId}/excel-operations` },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">
          Workspace: <span className="text-brand-peach">{workspaceId}</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-white/60">
          Move through Upload ƒ+' Extract ƒ+' Verify ƒ+' Save.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="rounded-xl border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-900/10 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {t.label}
          </Link>
        ))}
      </div>

      <div>{children}</div>
    </div>
  );
}
