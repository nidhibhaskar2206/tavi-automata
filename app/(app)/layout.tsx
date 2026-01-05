import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-6 pt-24">{children}</main>
    </div>
  );
}
