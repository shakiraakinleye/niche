import { SignUpForm } from "@/components/organisms/auth/sign-up-form";

export default async function SignupPage() {
  return (
    <section className="grid min-h-screen">
      <div className="w-full">
        <h1 className="mb-4 pr-6 font-display text-2xxl font-semibold leading-10 tracking-tight015 text-dark-100 lg:leading-12 2xl:text-4xxl 2xl:leading-13">
          Start using Niche
        </h1>
        <SignUpForm />
      </div>
    </section>
  );
}
