import { ProductsPageContent } from "@/client/components/organisms/dashboard/products-page";
import { productMap } from "@/client/data/sample";

export default function ProductsPage() {
  return (
    <section className=" py-2 md:p-4 lg:p-6 2xl:p-10">
      <ProductsPageContent products={productMap} />
    </section>
  );
}
