import {
  User2,
  Building2,
  LineChart,
  PieChart,
  LayoutDashboard,
  Layers,
} from "lucide-react";

import buyImage from "@/public/buy-callout-image.png";
import buyerHeroImage from "@/public/home-hero-image.png";
import managedServiceImage from "@/public/managed-service-image.jpg";
import userDashboardImage from "@/public/niche_seller_dashboard.png";
import selfServiceImage from "@/public/self-service-image.jpg";
import sellImage from "@/public/sell-callout-image.png";
import sellerHeroImage from "@/public/seller-hero-image.png";
import avatarImage1 from "@/public/support-avatar-1.jpg";
import avatarImage2 from "@/public/support-avatar-2.jpg";
import avatarImage3 from "@/public/support-avatar-3.jpg";

export const SellerHomePageCopy = {
  heroSection: {
    image: sellerHeroImage,
    heading: "Make more money selling your brand.",
    subheading:
      "Niche is a specialised marketplace that helps you make more money from selling your brand while buying what you love.",
  },
  whoCanUseNiche: {
    business: {
      heading: "Business owners",
      subheading:
        "Ready to take your business online? With our user-friendly Shop creation, you can do it all on your own. And if you ever need assistance, our team would glady take the load off you.",
      icon: Building2,
    },
    shoppers: {
      heading: "Shoppers",
      subheading:
        "Buy items you love from numerous brands on one platform. Pay only one delivery fee. Buy items you love from numerous brands on one platform.",
      icon: User2,
    },
  },
  whatNicheOffers: {
    selfService: {
      title: "Self service",
      heading: "How it works",
      listItems: [
        "We provide E-commerce tools that give you the platform, visibility, and lead generation you need to take full control of your shop, managing listings and order independently, start/scale your business and make more money.",
        "List & update your products, manage your shop and package order for delivery yourself",
        "Commision is 15%",
        "Start your shop with at least one item.",
      ],
      image: selfServiceImage,
    },
    managedService: {
      title: "Managed service",
      heading: "How it works",
      listItems: [
        "We provide E-commerce tools that give you the platform, visibility, and lead generation you need to take full control of your shop, managing listings and order independently, start/scale your business and make more money.",
        "List & update your products, manage your shop and package order for delivery yourself",
        "Commision is 15%",
        "Start your shop with at least one item.",
      ],
      image: managedServiceImage,
    },
  },
  chooseNicheSection: [
    {
      heading: "onboarding",
      description:
        "Sign-up is free, we only make money once you do. Marketing + promotional tools that drive traffic and a large customer base",
      icon: LayoutDashboard,
    },
    {
      heading: "sales",
      description: "Accept payment, track sales and inventory easily",
      icon: LineChart,
    },
    {
      heading: "product",
      description:
        "Own your unique web address without paying for a custom domain. Build trust and credibility",
      icon: Layers,
    },
    {
      heading: "analytics",
      description:
        "Manage your business anywhere as long as you have a digital device",
      icon: PieChart,
    },
  ],
  gettingStartedSection: {
    heading: "Getting Started",
    subheading:
      "Owning a shop is Easy! All you have to do is follow 4 easy steps",
    listItems: [
      {
        heading: "Tell us about you",
        description:
          "Lorem ipsum dolor sit amet consectetur. Vestibulum consectetur cras non ut pharetra nulla consequat.",
      },
      {
        heading: "Tell us about your shop",
        description:
          "Lorem ipsum dolor sit amet consectetur. Vestibulum consectetur cras non ut pharetra nulla consequat.",
      },
      {
        heading: "Enter payout details",
        description:
          "Lorem ipsum dolor sit amet consectetur. Vestibulum consectetur cras non ut pharetra nulla consequat.",
      },
      {
        heading: "Build your shop",
        description:
          "Lorem ipsum dolor sit amet consectetur. Vestibulum consectetur cras non ut pharetra nulla consequat.",
      },
    ],
    image: userDashboardImage,
  },
  getStartedBanner: {
    heading: "Let's get started",
    subheading:
      "Create an account and instantly start accepting payments, selling your beautiful products online and building financial tools.",
  },
};

export const sellerFaqs = [
  {
    title: "What is Niche",
    description:
      "We take a commission of 14% once a sale has been made. This includes transaction and payment processing fee",
  },
  {
    title: "Commission policy",
    description:
      "We take a commission of 14% once a sale has been made. This includes transaction and payment processing fee",
  },
  {
    title: "Payment policy",
    description:
      "We take a commission of 14% once a sale has been made. This includes transaction and payment processing fee",
  },
  {
    title: "How to become a seller",
    description:
      "We take a commission of 14% once a sale has been made. This includes transaction and payment processing fee",
  },
  {
    title: "Product listing",
    description:
      "We take a commission of 14% once a sale has been made. This includes transaction and payment processing fee",
  },
];

export const supportAvatars = [
  { src: avatarImage3, alt: "support" },
  { src: avatarImage1, alt: "support" },
  { src: avatarImage2, alt: "support" },
];

export const BuyerHomePageCopy = {
  heroSection: {
    heading: {
      normal: "Hundreds of shops to choose from - and they are all only one",
      italicised: "Niche",
    },
    subheading:
      "Buy from as many shops as you want and pay just one delivery fee",
    image: buyerHeroImage,
  },
  CTASectionCopy: [
    {
      image: buyImage,
      heading: "Buy great stuff",
      description:
        "Start selling your items on Niche by creating a seller's account and uploading your items.",
      href: "/products/women",
      buttonText: "Shop Now",
    },
    {
      image: sellImage,
      heading: "Sell great stuff",
      description:
        "Start selling your items on Niche by creating a seller's account and uploading your items.",
      href: "/sell-on-niche",
      buttonText: "Start Selling",
    },
  ],
};
