// app/workspace/[workspaceId]/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";
import { use } from "react";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ workspaceId: string }>;
};

const tabsFor = (workspaceId: string) => [
  { label: "Overview", href: `/workspace/${workspaceId}` },
  { label: "Records", href: `/workspace/${workspaceId}/records` },
  { label: "Upload", href: `/workspace/${workspaceId}/upload` },
  { label: "Extract", href: `/workspace/${workspaceId}/extract` },
  { label: "Excel Ops", href: `/workspace/${workspaceId}/excel-operations` },
];

export default function WorkspaceLayout(props: LayoutProps) {
  const { children, params } = props;
  const { workspaceId } = use(params);

  const tabs = tabsFor(workspaceId);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-dark)] text-[var(--brand-ice)]">
      <header className="border-b border-[var(--brand-ice)]/10 px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Workspace #{workspaceId}</h1>
          <p className="text-xs text-[var(--brand-ice)]/70">
            Move through Upload → Extract → Verify → Save
          </p>
        </div>

        <nav className="mt-4 flex gap-2">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={
                "rounded-full px-4 py-2 text-sm transition-colors " +
                "border border-transparent text-[var(--brand-ice)]/80 " +
                "hover:border-[var(--brand-teal)] hover:text-[var(--brand-ice)]"
              }
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1 px-8 py-6">{children}</main>
    </div>
  );
}
