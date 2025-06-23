import React from "react";
import { createContext, useEffect, useState } from "react";
import { deleteCartItemsReq, getCartItemsReq, postCartItem } from "../API/Api";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: "33",
      name: "Premium Veg FarmVilla Pizza.",
      price: "450",
      url: undefined,
    },
  ]);

  const getCartItems = () => {
    getCartItemsReq().then((res) => {
      setCart(res.data);
    });
  };

  const handleCart = async (item) => {
    console.log("item", item);

    await postCartItem(item).then((res) => {
      const payload = [...cart, res.data];
      setCart(payload);
    });
  };

  const handleDelete = (id) => {
    const payload = cart.filter((item) => item.id !== id);
    deleteCartItemsReq(id).then((res) => {
      setCart(payload);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const value = {
    cart,
    handleCart,
    handleDelete,
  };

  return (
    <div>
      <FoodContext.Provider value={value}>{children}</FoodContext.Provider>
    </div>
  );
};
