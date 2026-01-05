import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Forgot password</h1>
      <p className="text-sm text-slate-600 dark:text-white/60">
        Enter your email to reset your password.
      </p>
      <div className="space-y-3">
        <Input placeholder="Email" type="email" />
        <Button className="w-full">Send reset link</Button>
      </div>
    </div>
  );
}
