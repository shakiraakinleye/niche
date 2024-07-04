import Link from "next/link";

export const BrandTextLogo = () => {
  return (
    <Link
      href="/home"
      className="inline-flex items-center font-display text-xl font-semibold leading-6 text-dark-200"
    >
      <p>Niche</p>
    </Link>
  );
};
