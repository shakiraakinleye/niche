import RootLayout from "../(marketing)/layout";

export default async function ShoppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayout>{children}</RootLayout>;
}
