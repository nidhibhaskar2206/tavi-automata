"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/lib/routes";

export function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("nuvo_token");
    if (!token) {
      router.replace(`${routes.login()}?next=${encodeURIComponent(pathname)}`);
      return;
    }
    setReady(true);
  }, [router, pathname]);

  if (!ready) return <div className="p-6 text-slate-600 dark:text-white/70">Checking session…</div>;
  return <>{children}</>;
}
