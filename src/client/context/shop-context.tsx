"use client";

import React, { createContext, useReducer } from "react";

import { shopProfile } from "../data/sample";
//todo - fetch shopProfile
import { ShopType } from "../types/shop";

type DispatchAction = {
  type: string;
  newProp?: any;
};

export type ShopContextType = {
  shop: ShopType;
  setProfileAsComplete: () => void;
  enableShop: () => void;
  disableShop: () => void;
  editShopName: (shopname: string) => void;
  editAbout: (aboutShop: string) => void;
  changeImage: (image: any) => void;
};

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

const shopReducer = (shop: ShopType, action: DispatchAction) => {
  switch (action.type) {
    case "complete_profile":
      return { ...shop, isProfileComplete: true };
      break;

    case "disable_shop":
      return { ...shop, isLive: false };
      break;

    case "enable_shop":
      return { ...shop, isLive: true };
      break;

    case "edit_shopname":
      return { ...shop, shopName: action.newProp };
      break;

    case "edit_about_shop":
      return { ...shop, aboutShop: action.newProp };
      break;

    case "change_image":
      return { ...shop, image: action.newProp };
      break;

    default:
      return shop;
  }
};

export const ShopContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shop, shopDispatch] = useReducer(shopReducer, shopProfile);

  const setProfileAsComplete = () => {
    shopDispatch({
      type: "complete_profile",
    });
  };

  const enableShop = () => {
    shopDispatch({
      type: "enable_shop",
    });
  };

  const disableShop = () => {
    shopDispatch({
      type: "disable_shop",
    });
  };

  const editShopName = (shopname: string) => {
    shopDispatch({
      type: "edit_shopname",
      newProp: shopname,
    });
  };

  const editAbout = (aboutShop: string) => {
    shopDispatch({
      type: "edit_about_shop",
      newProp: aboutShop,
    });
  };

  const changeImage = (image: any) => {
    shopDispatch({
      type: "change_image",
      newProp: image,
    });
  };

  return (
    <ShopContext.Provider
      value={{
        shop,
        setProfileAsComplete,
        enableShop,
        disableShop,
        editShopName,
        editAbout,
        changeImage,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
