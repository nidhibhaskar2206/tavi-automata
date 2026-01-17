import React from "react";

type Props = {
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
};

export function DashboardHeader({ title, subtitle, actions }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-[var(--text-primary)]">{title}</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{subtitle}</p>
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  );
}
