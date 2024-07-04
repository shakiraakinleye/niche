export type VariantType = {
  title: string;
  value: string;
};

export type OrderItem = {
  productName: string;
  image: any;
  variants?: VariantType[];
  quantity: number;
  price: number;
  totalPrice: number;
};

export type OrderDataType = {
  id: string;
  date: string;
  items: OrderItem[];
  fulfilled: boolean;
  paymentInformation: {
    "total items price": number;
    tax?: number;
    "delivery fee": number;
    "total order price": number;
  };
  shippingInformation: {
    address: {
      address1: string;
      address2: string;
      city: string;
      state: string;
    };
    delivered: boolean;
    shippingDates: {
      shipped: string;
      projectedDelivery: string;
      delivered?: string;
    };
  };
};

export type BuyerOrdersType = {
  [key: string]: OrderDataType;
};

export type ShopOrderDataType = {
  id: number;
  date: string;
  customer: {
    name: string;
    address: {
      street: string;
      lga: string;
      state: string;
    };
    email: string;
    phoneNumber: string | number;
  };
  items: OrderItem[];
  fulfilled: boolean;
  totalPrice: number;
};
