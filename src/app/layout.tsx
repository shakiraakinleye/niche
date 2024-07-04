import "./globals.css";
import "./customs.css";
import { CartProvider } from "@/client/components/molecules/cart/cart-context";
import { ShopContextProvider } from "@/client/context/shop-context";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShopContextProvider>
        <CartProvider>{children}</CartProvider>
      </ShopContextProvider>
    </>
  );
}
// NOTE: if this layout is removed -- enable customs.css in nested layouts
