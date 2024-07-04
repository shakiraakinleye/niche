import accessoriesImage from "../../public/accessories-category-image.png";
import bagsImage from "../../public/bags-category-image.png";
import mensImage from "../../public/mens-category-image.png";
import productImage from "../../public/product-image.png";
import womensImage from "../../public/womens-category-image.png";
import { BuyerOrdersType } from "../types/order";
import { ShopsType } from "../types/shop";

export const products = [
  {
    id: "tyah-838",
    name: "White Fleur Pocket Logo T-Shirt",
    description:
      "The adidas sneakers is comfortable, cushioned sole and a breathable upper that keeps your feet cool and dry.",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "women",
    subcategory: "tops",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    size: ["38", "39", "40"],
    color: ["Blue", "Black", "Red"],
    shop: "KiraBoutique",
  },
  {
    id: "6738-jdhbg",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "women",
    subcategory: "bottoms",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    size: ["38", "39", "40"],
    color: ["Blue", "Black", "Red"],
    shop: "KiraBoutique",
  },
  {
    id: "0613",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "accessories",
    subcategory: "footwear",
    condition: "new with tag",
    image1: bagsImage,
    enabled: true,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
  {
    id: "3239",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "women",
    condition: "new with tag",
    image1: bagsImage,
    enabled: false,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
  {
    id: "oyd-ihdg",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    size: ["38", "39", "40"],
    color: ["Blue", "Black", "Red"],
    shop: "KiraBoutique",
  },
  {
    id: "4fjkjk-jadgyu",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: false,
    size: ["38", "39", "40"],
    color: ["Blue", "Black", "Red"],
    shop: "KiraBoutique",
  },
  {
    id: "sy-78934",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "men",
    condition: "new with tag",
    image1: productImage,
    enabled: false,
    size: ["40"],
    shop: "KiraBoutique",
  },
  {
    id: "posuos-8927gdj",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    size: ["40"],
    shop: "KiraBoutique",
  },
  {
    id: "09934-hsuud",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    shop: "KiraBoutique",
  },
  {
    id: "posduu-7762",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "women",
    condition: "new with tag",
    image1: productImage,
    enabled: false,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
  {
    id: "0357379",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "kids",
    condition: "new with tag",
    image1: bagsImage,
    enabled: true,
    shop: "KiraBoutique",
  },
  {
    id: "00679",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "accessories",
    condition: "new with tag",
    image1: bagsImage,
    enabled: false,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
  {
    id: "86103",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "kids",
    condition: "new with tag",
    image1: bagsImage,
    enabled: true,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
  {
    id: "tyah-83988",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "accessories",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    size: ["38", "39", "40"],
    color: ["Blue", "Black", "Red"],
    shop: "KiraBoutique",
  },
  {
    id: "670838-jdhbg",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    size: ["38", "39", "40"],
    color: ["Blue", "Black", "Red"],
    shop: "KiraBoutique",
  },
  {
    id: "061533",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "kids",
    condition: "new with tag",
    image1: bagsImage,
    enabled: true,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
  {
    id: "08539",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "kids",
    condition: "new with tag",
    image1: bagsImage,
    enabled: false,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
  {
    id: "oyd-764dg",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    size: ["38", "39", "40"],
    color: ["Blue", "Black", "Red"],
    shop: "KiraBoutique",
  },
  {
    id: "4fj0866k-jadgyu",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: false,
    size: ["38", "39", "40"],
    color: ["Blue", "Black", "Red"],
    shop: "KiraBoutique",
  },
  {
    id: "sy0086934",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: false,
    size: ["40"],
    shop: "KiraBoutique",
  },
  {
    id: "po642",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    size: ["40"],
    shop: "KiraBoutique",
  },
  {
    id: "jtre34567uud",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: true,
    shop: "KiraBoutique",
  },
  {
    id: "00065762",
    name: "White Fleur Pocket Logo T-Shirt",
    description: "High quality",
    price: 20000,
    quantity: 25,
    brand: "Asos",
    category: "kids",
    condition: "new with tag",
    image1: productImage,
    enabled: false,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
  {
    id: "0009887",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "kids",
    condition: "new with tag",
    image1: bagsImage,
    enabled: true,
    shop: "KiraBoutique",
  },
  {
    id: "0964129",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "kids",
    condition: "new with tag",
    image1: bagsImage,
    enabled: false,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
  {
    id: "0098645",
    name: "leather tote bag",
    description: "Faux leather",
    price: 12000,
    quantity: 16,
    brand: "Zara",
    category: "kids",
    condition: "new with tag",
    image1: bagsImage,
    enabled: true,
    color: ["Brown"],
    shop: "KiraBoutique",
  },
];

export const productMap = new Map();
products.forEach((prod) => {
  productMap.set(prod.id, prod);
});

export const reviews = [
  {
    id: "jfgsh0936",
    reviewerName: "Rita James",
    reviewContent:
      "I recently had the opportunity to shop at this store and I was impressed by the wide range of stylish and fashionable clothing they have. I was able to find something for every occasion. I would definitely recommend this store for anyone looking for nice clothes.",
  },
  {
    id: "gheu7822",
    reviewerName: "Daniel Okpara",
    reviewContent:
      "I recently had the opportunity to shop at this store and I was impressed by the wide range of stylish and fashionable clothing they have. I was able to find something for every occasion. I would definitely recommend this store for anyone looking for nice clothes.",
  },
  {
    id: "7836sk83",
    reviewerName: "Alice Habib",
    reviewContent:
      "I recently had the opportunity to shop at this store and I was impressed by the wide range of stylish and fashionable clothing they have. I was able to find something for every occasion. I would definitely recommend this store for anyone looking for nice clothes.",
  },
];

export const sellerDashboardNotifications = [
  {
    id: "tyd876f",
    category: "orders",
    title: "New Order",
    content:
      "You have a new order from John Smith for a blue shirt. Please ship the item within 3 business days and update the order status accordingly.",
    href: "#",
    date: "2024-05-28T20:52:19",
  },
  {
    id: "9876rgjk",
    category: "payouts",
    title: "Payment",
    content:
      "Congratulations! You have received payment for the order from John Smith for a blue shirt. Please ship the item within 3 business days and update the order status accordingly.",
    href: "#",
    date: "2024-05-28T16:40",
  },
  {
    id: "02-18kdj",
    category: "products",
    title: "Product",
    content:
      "The inventory for your black Airforce sneakers is running low. Please restock as soon as possible to avoid stock-outs.",
    href: "#",
    date: "2024-06-03T04:13:56",
  },
];

export const dashboardSummary = new Map();
dashboardSummary
  .set("orders", {
    title: "orders",
    value: 1234,
    valueDifference: 25,
    valueIncrease: true,
  })
  .set("sales", {
    title: "sales",
    value: 500000,
    valueDifference: 6,
    valueIncrease: true,
  })
  .set("new visitors", {
    title: "new visitors",
    value: 752,
    valueDifference: 2,
    valueIncrease: false,
  })
  .set("total sales", {
    title: "total sales",
    value: 250000,
  })
  .set("account balance", {
    title: "account balance",
    value: 72000,
  });

// todo - move? or refactor?
export const emptyDataMap = new Map();
emptyDataMap
  .set("orders", {
    title: "orders",
    value: 0,
  })
  .set("sales", {
    title: "sales",
    value: 0,
  })
  .set("new visitors", {
    title: "new visitors",
    value: 0,
  })
  .set("total sales", {
    title: "total sales",
    value: 0,
  })
  .set("account balance", {
    title: "account balance",
    value: 0,
  });

export const orderData = new Map();
orderData
  .set(34566, {
    id: 34566,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: womensImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: true,
    totalPrice: 12000,
  })
  .set(34565, {
    id: 34565,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: accessoriesImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: true,
    totalPrice: 12000,
  })
  .set(34564, {
    id: 34564,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: false,
    totalPrice: 12000,
  })
  .set(34563, {
    id: 34563,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: true,
    totalPrice: 12000,
  })
  .set(34562, {
    id: 34562,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: bagsImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: false,
    totalPrice: 12000,
  })
  .set(34561, {
    id: 34561,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: false,
    totalPrice: 12000,
  })
  .set(34560, {
    id: 34560,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: true,
    totalPrice: 12000,
  })
  .set(34559, {
    id: 34559,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: true,
    totalPrice: 12000,
  })
  .set(34558, {
    id: 34558,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: true,
    totalPrice: 12000,
  })
  .set(34557, {
    id: 34557,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: true,
    totalPrice: 12000,
  })
  .set(34556, {
    id: 34556,
    date: "2022-07-10T18:45:56",
    customer: {
      name: "Diana Diablo",
      address: {
        street: "16, Alhaji Lawal Street",
        lga: "Moshalashi",
        state: "Lagos State",
      },
      email: "example@gmail.com",
      phoneNumber: "+234 6789 0987 789",
    },
    items: [
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "39" },
          { title: "color", value: "black" },
        ],
        quantity: 2,
        price: 23000,
      },
    ],
    fulfilled: true,
    totalPrice: 12000,
  });

export const payoutData = [
  {
    id: 54,
    date: "2022-07-03T04:13:56",
    fulfilled: true,
    price: 12000,
  },
  {
    id: 55,
    date: "2022-07-03T04:13:56",
    fulfilled: true,
    price: 12000,
  },
  {
    id: 56,
    date: "2022-07-03T04:13:56",
    fulfilled: true,
    price: 12000,
  },
  {
    id: 57,
    date: "2022-07-03T04:13:56",
    fulfilled: false,
    price: 57499.99,
  },
  {
    id: 58,
    date: "2022-07-03T04:13:56",
    fulfilled: true,
    price: 12000,
  },
  {
    id: 59,
    date: "2022-07-03T04:13:56",
    fulfilled: false,
    price: 12000,
  },
  {
    id: 60,
    date: "2022-07-03T04:13:56",
    fulfilled: false,
    price: 25890.7,
  },
  {
    id: 61,
    date: "2022-07-03T04:13:56",
    fulfilled: true,
    price: 12000,
  },
  {
    id: 62,
    date: "2022-07-03T04:13:56",
    fulfilled: true,
    price: 12000,
  },
  {
    id: 63,
    date: "2022-07-03T04:13:56",
    fulfilled: true,
    price: 12000,
  },
  {
    id: 64,
    date: "2022-07-03T04:13:56",
    fulfilled: false,
    price: 11999.99,
  },
  {
    id: 65,
    date: "2022-07-03T04:13:56",
    fulfilled: true,
    price: 12000,
  },
  {
    id: 66,
    date: "2022-07-03T04:13:56",
    fulfilled: true,
    price: 12000,
  },
].reverse();

export const bankOptions = ["Access", "GTB", "Kuda", "UBA"];

export const salesReport = [
  {
    date: "Jan 23",
    sales: 45000,
  },
  {
    date: "Feb 23",
    sales: 55000,
  },
  {
    date: "Mar 23",
    sales: 70000,
  },
  {
    date: "Apr 23",
    sales: 65000,
  },
  {
    date: "May 23",
    sales: 74000,
  },
  {
    date: "Jun 23",
    sales: 70000,
  },
  {
    date: "Jul 23",
    sales: 80000,
  },
  {
    date: "Aug 23",
    sales: 76000,
  },
  {
    date: "Sep 23",
    sales: 83000,
  },
  {
    date: "Oct 23",
    sales: 92000,
  },
  {
    date: "Nov 23",
    sales: 89000,
  },
  {
    date: "Dec 23",
    sales: 94000,
  },
];

export const salesByCategory = [
  {
    category: "Women",
    sales: 980000,
  },
  {
    category: "Men",
    sales: 456700,
  },
  {
    category: "Kids",
    sales: 390808,
  },
  {
    category: "Accesories",
    sales: 240970,
  },
  {
    category: "Bags",
    sales: 198308,
  },
  {
    category: "Shoes",
    sales: 201398,
  },
];

export const shops: ShopsType = {
  kiraboutique: {
    id: "shop-0001",
    isLive: false,
    isProfileComplete: false,
    image: womensImage,
    shopName: "KiraBoutique",
    aboutShop:
      "Our fashion store offers a wide range of trendy and high-quality clothing for men and women. From everyday essentials to statement pieces.",
  },
  zara: {
    id: "shop-0002",
    isLive: false,
    isProfileComplete: false,
    image: mensImage,
    shopName: "Zara",
    aboutShop: "Elegant styling for all men",
  },
  anythingpretty: {
    id: "shop-0003",
    isLive: false,
    isProfileComplete: false,
    image: accessoriesImage,
    shopName: "AnythingPretty",
    aboutShop: "We specialise in aestheic and pretty jewellry",
  },
  auxmoines: {
    id: "shop-0004",
    isLive: false,
    isProfileComplete: false,
    image: bagsImage,
    shopName: "AuxMoines",
    aboutShop: "Leather works at its finest",
  },
  mayscloset: {
    id: "shop-0005",
    isLive: false,
    isProfileComplete: false,
    image: womensImage,
    shopName: "MaysCloset",
    aboutShop: "Slay for less",
  },
  beautystore: {
    id: "shop-0006",
    isLive: false,
    isProfileComplete: false,
    image: accessoriesImage,
    shopName: "BeautyStore",
    aboutShop: "Beauty ",
  },
};

// example for seller dashoard and shop display
export const shopProfile = {
  id: "shop-1230",
  isLive: false,
  isProfileComplete: false,
  image: womensImage,
  shopName: "KiraBoutique",
  aboutShop:
    "Our fashion store offers a wide range of trendy and high-quality clothing for men and women. From everyday essentials to statement pieces.",
};

export const buyerOrders: BuyerOrdersType = {
  "34566": {
    id: "34566",
    date: "2024-06-02T18:45:56",
    items: [
      {
        productName: "Zara Halter Top",
        image: womensImage,
        variants: [
          { title: "size", value: "M" },
          { title: "color", value: "black" },
        ],
        quantity: 1,
        price: 13000,
        totalPrice: 13000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "38" },
          { title: "color", value: "black" },
        ],
        quantity: 1,
        price: 23000,
        totalPrice: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "40" },
          { title: "color", value: "black" },
        ],
        quantity: 1,
        price: 23000,
        totalPrice: 23000,
      },
    ],
    fulfilled: true,
    paymentInformation: {
      "total items price": 59000,
      tax: 1400,
      "delivery fee": 2500,
      "total order price": 62900,
    },
    shippingInformation: {
      address: {
        address1: "3 Celestial Street",
        address2: "Isolo Road, Command",
        city: "Abule egba",
        state: "Lagos",
      },
      delivered: true,
      shippingDates: {
        shipped: "2024-06-03T04:13:52",
        projectedDelivery: "2024-06-05T04:13:50",
        delivered: "2024-06-05T04:13:50",
      },
    },
  },
  "34567": {
    id: "34567",
    date: "2024-06-02T18:45:56",
    items: [
      {
        productName: "Zara Halter Top",
        image: womensImage,
        variants: [
          { title: "size", value: "M" },
          { title: "color", value: "black" },
        ],
        quantity: 1,
        price: 13000,
        totalPrice: 13000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "38" },
          { title: "color", value: "black" },
        ],
        quantity: 1,
        price: 23000,
        totalPrice: 23000,
      },
      {
        productName: "Black Airforce Sneakers",
        image: productImage,
        variants: [
          { title: "size", value: "40" },
          { title: "color", value: "black" },
        ],
        quantity: 1,
        price: 23000,
        totalPrice: 23000,
      },
    ],
    fulfilled: false,
    paymentInformation: {
      "total items price": 59000,
      tax: 1400,
      "delivery fee": 2500,
      "total order price": 62900,
    },
    shippingInformation: {
      address: {
        address1: "3 Celestial Street",
        address2: "Isolo Road, Command",
        city: "Abule egba",
        state: "Lagos",
      },
      delivered: false,
      shippingDates: {
        shipped: "2024-06-03T04:13:50",
        projectedDelivery: "2024-06-05T04:13:50",
        // delivered: undefined,
        // will show  when order is delivered
      },
    },
  },
};

export const buyerNotifications = [
  {
    id: "962-skdj",
    date: "2024-06-02T18:45:56",
    title: "Order confirmed!",
    subtitle:
      "Your order #9360 has been confirmed and is expected to be delivered between 20-Aug-2024 and 24-Aug-2024. Thank you for shopping on Niche!",
  },
  {
    id: "924-skdj",
    date: "2024-06-02T18:45:56",
    title: "Order shipped!",
    subtitle:
      "Your order #34567 has been dispatched and is on track for delivery between June 16th and June 17th, 2024. ",
  },
  {
    id: "962-tgshkk",
    date: "2024406-02T18:45:56",
    title: "Order delivered!",
    subtitle:
      "Your order #34567 has been successfully delivered. Thank you for shopping on Niche!",
  },
];
