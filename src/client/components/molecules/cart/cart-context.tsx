"use client";

import React, { createContext, useReducer, useEffect, useState } from "react";

import { CartItemType } from "@/client/types/cart";
import { ProductType } from "@/client/types/product";

const cartReducer = (cart: any, action: any) => {
  // const cartReducer = (cart: Map<string, CartItemType>, action: any) => {
  const item: CartItemType = action.item;
  const existingProduct = cart.has(item.id);

  switch (action.type) {
    case "add_to_cart":
      if (existingProduct) {
        const cartItem = cart.get(item.id);
        const updatedCartItem = {
          ...cartItem,
          quantity: item.quantity,
          color: item.color,
        };
        // fill up the possible changes
        return cart.set(item.id, updatedCartItem);
      } else {
        return cart.set(item.id, item);
      }
      break;

    case "remove_from_cart":
      cart.delete(item.id);
      return cart;
      break;

    case "clear_cart":
      return cart.clear();
      // or should it be return new Map(cart)
      break;

    case "update_cart_item":
      if (existingProduct) {
        const cartItem = cart.get(item.id);
        const updatedCartItem = {
          ...cartItem,
          quantity: item.quantity,
          color: item.color,
        };
        return cart.set(item.id, updatedCartItem);
      } else {
        return cart;
      }
      break;

    default:
      return cart;
  }
};

export type CartContextType = {
  cart: Map<string, CartItemType>;
  addToCart: (cartItem: CartItemType) => void;
  removeFromCart: (cartItem: CartItemType) => void;
  updateCartItem: (cartItem: CartItemType) => void;
  increaseCartItemQuantity: (cartItem: CartItemType) => void;
  decreaseCartItemQuantity: (cartItem: CartItemType) => void;
  // changeCartItemVariant: (cartItem: CartItemType) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const initialCart = new Map();
  const cartStorageKey = "niche-cart";

  const [storedCart, setStoredCart] = useState(initialCart);
  console.log("storedCart", storedCart);
  const [cart, cartDispatch] = useReducer(cartReducer, initialCart);
  // change initialcart to storedcart for usereducer only

  // console.log("cart: ", cart)
  // console.log("storedCart: ", storedCart)

  useEffect(() => {
    const cartStore = localStorage.getItem(cartStorageKey);
    if (cartStore) {
      const storedCartItems = JSON.parse(cartStore);
      // const storedCartItems = new Map(JSON.parse(cartItems));
      setStoredCart(storedCartItems);
    }
  }, []);

  const updateCartStorage = (cart: Map<string, CartItemType>) => {
    setStoredCart(cart);
    localStorage.setItem(
      cartStorageKey,
      JSON.stringify(Array.from(cart.entries()))
    );
    // localStorage.setItem(cartStorageKey, JSON.stringify(Array.from(storedCart.entries())))  };
  };

  useEffect(() => {
    updateCartStorage(cart);
  });

  const addToCart = (cartItem: CartItemType) => {
    cartDispatch({
      type: "add_to_cart",
      item: cartItem,
    });
  };

  const removeFromCart = (cartItem: CartItemType) => {
    cartDispatch({
      type: "remove_from_cart",
      item: cartItem,
    });
  };

  const updateCartItem = (cartItem: CartItemType) => {
    cartDispatch({
      type: "update_cart_item",
      item: cartItem,
    });
  };

  const increaseCartItemQuantity = (cartItem: CartItemType) => {
    // factor product sku
    const updatedCartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
    updateCartItem(updatedCartItem);
  };

  const decreaseCartItemQuantity = (cartItem: CartItemType) => {
    if (cartItem.quantity > 1) {
      const updatedCartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
      updateCartItem(updatedCartItem);
    }

    if (cartItem.quantity === 1) {
      removeFromCart(cartItem);
    }
  };

  // const changeCartItemVariant = (cartItem: CartItemType, size?: string, color?: string) => {
  //   const updatedCartItem = { ...cartItem, size: size,  };
  //   updateCartItem(updatedCartItem);
  // };

  const clearCart = () => {
    cartDispatch({
      type: "clear_cart",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const createCartItem = (
  product: ProductType,
  quantity: number,
  size?: string,
  color?: string
) => {
  const cartItem: CartItemType = {
    id: product.id,
    image1: product.image1,
    shop: product.shop,
    name: product.name,
    price: product.price,
    quantity: quantity,
    size: size,
    color: color,
  };
  return cartItem;
};

// todo - context should trigger render when cart changes
// store cart in localstorage
// fix local storage
