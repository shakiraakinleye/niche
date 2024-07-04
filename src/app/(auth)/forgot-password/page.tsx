import { ForgotPasswordForm } from "@/client/components/organisms/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <section className="grid min-h-screen">
      <div className="w-full">
        <h1 className="mb-4 pr-6 font-display text-2xxl font-bold leading-10 tracking-tight015 text-dark-100 lg:leading-12 2xl:text-4xxl 2xl:leading-13">
          Password Recovery
        </h1>
        <ForgotPasswordForm />
      </div>
    </section>
  );
}
