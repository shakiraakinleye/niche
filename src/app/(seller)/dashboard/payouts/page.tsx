import { PayoutsPageBody } from "@/client/components/organisms/dashboard/payouts-page";
import { payoutData } from "@/client/data/sample";

export default function PayoutsPage() {
  return (
    <section className=" py-2 md:p-4 lg:p-6 2xl:p-10">
      <PayoutsPageBody totalBalance={110182044} payouts={payoutData} />
    </section>
  );
}
