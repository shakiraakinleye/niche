"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { LinkButton } from "@/client/components/atoms/link-button";

export default function UnsupportedLocation() {
  const searchParams = useSearchParams();
  const currentPathname = usePathname();
  const nextPathname = "/sell-on-niche/select-service";

  const current = new URLSearchParams(Array.from(searchParams.entries()));
  current.delete("backUrl");
  current.set("backUrl", currentPathname);
  const path = current.toString();
  const query = path ? `?${path}` : "";
  const changeLocationHref = `${nextPathname}${query}`;

  return (
    <section className="min-h-screen w-full space-y-20">
      <div className="flex flex-col gap-y-4">
        <h1 className="font-display text-xl font-semibold leading-8 tracking-tight lg:text-2xl lg:leading-10">
          Sorry, we currently support sellers in Lagos, Nigeria only
        </h1>
        <div className="flex flex-col gap-y-4 font-default text-sm leading-5 text-gray-3600 2xl:text-base 2xl:leading-6">
          <p>
            Thank you for your interest in joining us as a seller. Currently, we
            are focused on serving sellers located in Lagos, Nigeria. We
            appreciate your understanding.
          </p>
          <p>
            We are actively working on expanding our services to cover more
            locations, including yours. We will reach out to you as soon as
            Niche becomes available in your area.
          </p>
          <p>
            In the meantime, We encourage you to join our social media handles
            to stay informed about our future expansions. Follow us on Instagram
            at <span className="font-bold">@niche</span> for the latest updates
            on our services and when we expand to new locations.
          </p>
          <p>
            For any further questions or assistance,{" "}
            <span className="font-bold">please</span> reach out to our support
            team email with support@niche.com.
          </p>
          <p>
            <span className="font-bold">Thank you</span> for considering Niche,
            and we look forward to serving you in the future when we expand to
            your location.
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-2/3 flex-col gap-6 md:grid md:w-full md:grid-cols-2 md:gap-4">
        <LinkButton
          href={changeLocationHref}
          variant="beigeOutline"
          className="lg-px-4.5 px-3 py-2 2xl:py-2.5"
        >
          <span className="font-default text-sm font-medium leading-5 text-gray-3700 2xl:text-base 2xl:leading-6">
            Change location
          </span>
        </LinkButton>

        <LinkButton
          href="/products/women"
          variant="primaryFilled"
          className="lg-px-4.5 px-3 py-2 2xl:py-2.5"
        >
          <span className="font-default text-sm font-medium leading-5 text-white group-hover:text-primary-100 2xl:text-base 2xl:leading-6">
            Continue shopping
          </span>
        </LinkButton>
      </div>
    </section>
  );
}
