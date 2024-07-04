import { LoginForm } from "@/components/organisms/auth/log-in-form";

export default async function LogInPage() {
  return (
    <section className="grid min-h-screen">
      <div className="w-full">
        <h1 className="mb-4 pr-6 font-display text-2xxl font-semibold leading-10 tracking-tight015 text-dark-100 lg:leading-12 2xl:text-4xxl 2xl:leading-13">
          We&apos;ve missed you
        </h1>
        <LoginForm />
      </div>
    </section>
  );
}
