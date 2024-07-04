import { LinkButton } from "../../atoms/link-button";

export const StartShoppingBanner = () => {
  return (
    <section className="flex items-center justify-center bg-start-selling-banner-bg py-18 md:py-24 lg:py-32 xl:py-40 2xl:py-45">
      <div className="flex w-fit flex-col items-center gap-5 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-15">
        <h3 className="font-display text-xl font-bold leading-12 tracking-tight015 text-white md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xxl">
          Need great stuff?
        </h3>

        <LinkButton
          href="/products/women"
          variant="beigeOutline"
          borderRadius="large"
          size="wider"
        >
          <span className="z-10 font-default text-sm font-medium capitalize leading-14 text-beige-400 group-hover:text-tertiary-100 md:text-base xl:text-lg">
            Start shopping
          </span>
        </LinkButton>
      </div>
    </section>
  );
};
