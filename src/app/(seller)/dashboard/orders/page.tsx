import { OrdersPageBody } from "@/client/components/organisms/dashboard/orders-page";
import { orderData } from "@/client/data/sample";

export default function OrdersPage() {
  return (
    <section className="py-2 md:p-4 lg:p-6 2xl:p-10">
      <OrdersPageBody orders={orderData} />
    </section>
  );
}
