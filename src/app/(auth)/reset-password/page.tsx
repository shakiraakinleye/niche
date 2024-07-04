import { ResetPasswordForm } from "@/client/components/organisms/auth/reset-password-form";

export default async function ResetPasswordPage() {
  return (
    <section className="grid min-h-screen">
      <div className="w-full">
        <h1 className="mb-4 pr-6 font-display text-2xxl font-semibold leading-10 tracking-tight text-dark-100 lg:leading-12 2xl:text-4xxl 2xl:leading-13">
          Reset your password
        </h1>
        <ResetPasswordForm />
      </div>
    </section>
  );
}
