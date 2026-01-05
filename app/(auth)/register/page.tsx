"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { routes } from "@/lib/routes";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Register</h1>
      <p className="text-sm text-slate-600 dark:text-white/60">
        Create an account to start building workspaces.
      </p>

      <div className="space-y-3">
        <Input placeholder="Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button
          className="w-full"
          onClick={() => {
            localStorage.setItem("nuvo_token", "demo-token");
            router.push(routes.dashboard());
          }}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
}
