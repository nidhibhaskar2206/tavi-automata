export default function LandingSection({
  title,
  subtitle,
  right,
  children,
}: {
  title?: string;
  subtitle?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      {(title || subtitle || right) && (
        <div className="flex items-end justify-between gap-4">
          <div>
            {title && (
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-sm text-slate-600 max-w-2xl dark:text-white/70">
                {subtitle}
              </p>
            )}
          </div>
          {right && <div className="hidden md:block">{right}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
