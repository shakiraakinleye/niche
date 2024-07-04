import { Box, User, Mail } from "lucide-react";

export const supportLinks = [
  { title: "Seller's Guide", href: "#" },
  { title: "FAQ", href: "#" },
  { title: "Contact Us", href: "#" },
];

export const dashboardRoutes = [
  { title: "dashboard", href: "/dashboard" },
  { title: "products", href: "/dashboard/products" },
  { title: "orders", href: "/dashboard/orders" },
  { title: "payouts", href: "/dashboard/payouts" },
  { title: "settings", href: "/dashboard/settings" },
];

export const gettingStartedRoute = {
  title: "getting started",
  href: "/dashboard/getting-started",
};

export const accountPages = [
  { title: "my account", icon: User, href: "/account/profile" },
  { title: "orders", icon: Box, href: "/account/orders" },
  { title: "inbox", icon: Mail, href: "/account/inbox" },
];

export const settingsPages = ["profile", "password", "storefront", "payouts"];

export const footerNavigation = [
  {
    title: "About",
    subitems: [
      {
        title: "Niche",
        href: "/",
      },
      {
        title: "Policies",
        href: "#",
      },
    ],
  },
  {
    title: "Shop",
    subitems: [
      {
        title: "Women",
        href: "/products/women",
      },
      {
        title: "Men",
        href: "/products/men",
      },
      {
        title: "Accessories",
        href: "/products/accessories",
      },
      {
        title: "Kids",
        href: "/products/kids",
      },
      {
        title: "Sale",
        href: "#",
      },
    ],
  },
  {
    title: "Sell",
    subitems: [
      {
        title: "Start Selling",
        href: "/sell-on-niche",
      },
      {
        title: "Seller support",
        href: "#",
      },
      {
        title: "Dispute resolution",
        href: "#",
      },
    ],
  },
  {
    title: "Socials",
    subitems: [
      {
        title: "Instagram",
        href: "#",
      },
      {
        title: "Twitter",
        href: "#",
      },
      {
        title: "Tik Tok",
        href: "#",
      },
    ],
  },
  {
    title: "Help",
    subitems: [
      {
        title: "Help center",
        href: "#",
      },
      {
        title: "Privacy settings",
        href: "#",
      },
      {
        title: "Customer support",
        href: "#",
      },
      {
        title: "Return policies",
        href: "#",
      },
      {
        title: "FAQs",
        href: "#",
      },
      {
        title: "Shipping",
        href: "#",
      },
    ],
  },
];
