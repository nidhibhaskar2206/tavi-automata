"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { routes } from "@/lib/routes";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || routes.dashboard();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Login</h1>
      <p className="text-sm text-slate-600 dark:text-white/60">Access your dashboard and workspaces.</p>

      <div className="space-y-3">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button
          className="w-full"
          onClick={() => {
            localStorage.setItem("nuvo_token", "demo-token");
            router.push(next);
          }}
        >
          Sign In
        </Button>
      </div>

      <div className="flex justify-between text-sm text-slate-600 dark:text-white/60">
        <Link
          href={routes.forgotPassword()}
          className="transition hover:text-slate-900 dark:hover:text-white"
        >
          Forgot password?
        </Link>
        <Link
          href={routes.register()}
          className="transition hover:text-slate-900 dark:hover:text-white"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}
