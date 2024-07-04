import { LinkButton } from "@/client/components/atoms/link-button";
import { HomeShopCard } from "@/client/components/molecules/shop/shop-card";
import { shops } from "@/client/data/sample";

export const ShopsSection = () => {
  const shopsArray = Object.values(shops);
  return (
    <section className="bg-gray-1200 ">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-center gap-y-6 px-4.5 py-16 md:px-6 md:py-18 lg:gap-y-8 lg:px-8 lg:py-20 xl:px-12 xl:py-24 2xl:gap-y-10 2xl:px-16 2xl:py-28">
        <div className="flex w-full items-center justify-between ">
          <h2 className="font-display text-xl font-bold leading-10 tracking-tight01 text-dark-200 lg:text-2xl 2xl:text-2xxl">
            Shops you&apos;ll love
          </h2>
          <LinkButton
            href="/shops"
            variant="primaryMobileFilledLgOutline"
            size="wider"
            borderRadius="large"
            className="shrink-0 px-5 font-default text-xs leading-8 text-white hover:text-primary-100 active:text-primary-100 md:px-10 md:text-md md:leading-14 lg:text-primary-100 lg:hover:text-white lg:active:text-white"
          >
            See all shops
          </LinkButton>
        </div>

        <div className="grid w-full grid-cols-2 items-start gap-5 md:grid-cols-3 lg:gap-x-15 lg:gap-y-12 xl:gap-x-20 xl:gap-y-15 2xl:gap-x-24 2xl:gap-y-18">
          {shopsArray
            .slice(0, 6)
            .slice(0, 6)
            .map((shop) => {
              return <HomeShopCard key={shop.id} shop={shop} />;
            })}
        </div>
      </div>
    </section>
  );
};

// fix - fetch a definite number of shops
