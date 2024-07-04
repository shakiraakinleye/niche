import Link from "next/link";

import { ProductImages } from "@/client/components/molecules/product/product-images";
import { ProductInfo } from "@/client/components/molecules/product/product-info";
import { SuggestedProducts } from "@/client/components/molecules/product/suggested-products";
import { ShopAvatarNameCard } from "@/client/components/molecules/shop/shop-avatar-name-card";
import { productMap, shopProfile } from "@/client/data/sample";

export default function Product() {
  const productsArray = Array.from(productMap.values());
  const product = productsArray[0];

  const { id, name, image1, shop } = product;
  const images = [image1, image1, image1, image1];
  // todo - fix this - get all images from productData

  return (
    <section className="w-full bg-white py-24 md:py-28 lg:py-32 xl:py-36 2xl:py-40">
      <div className="w-full max-w-screen-xl space-y-20 px-6 md:space-y-32 xl:mx-auto xl:px-12 2xl:space-y-40 2xl:px-16">
        <div className="flex flex-col items-start gap-4 md:grid md:grid-cols-2 md:gap-12 2xl:gap-16">
          <div className="mb-6 md:hidden">
            <Link href={`/shop/${shop.toLowerCase()}`}>
              <ShopAvatarNameCard
                shopProfile={shopProfile}
                showGreeting={false}
              />
            </Link>
          </div>

          <ProductImages images={images} productName={name} />

          <div className="md:space-y-6 2xl:space-y-8">
            <div className="hidden md:block">
              <Link href={`/shop/${shop.toLowerCase()}`}>
                <ShopAvatarNameCard
                  shopProfile={shopProfile}
                  showGreeting={false}
                />
              </Link>
            </div>
            <ProductInfo product={product} />
          </div>
        </div>

        <SuggestedProducts />
        {/* <ProductSuggestion products={suggestedProducts} /> */}
      </div>
    </section>
  );
}

// todo - no product found dsiplay
