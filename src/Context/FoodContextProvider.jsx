import React from "react";
import { createContext, useEffect, useState } from "react";
import { deleteCartItemsReq, getCartItemsReq, postCartItem } from "../API/Api";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getCartItems = () => {
    getCartItemsReq().then((res) => {
      setCart(res.data);
    });
  };

  const handleCart = async (item, addItemQty) => {
    console.log("handleCart 1", item, addItemQty);
    let cartIds = [];
    let updatedCart;

    addItemQty
      ? (updatedCart = cart.map((i) => {
          cartIds.push(i.id);
          if (i.id === item.id) {
            return { ...i, qty: i.qty ? i.qty + 1 : 1 };
          }
          return i;
        }))
      : (updatedCart = cart.map((i) => {
          cartIds.push(i.id);
          if (i.id === item.id) {
            return { ...i, qty: i.qty - 1 };
          }
          return i;
        }));

    !cartIds.includes(item.id)
      ? setCart([...updatedCart, { ...item, qty: 1 }])
      : setCart([...updatedCart]);

    // await postCartItem(item).then((res) => {
    //   const payload = [...cart, res.data];
    //   setCart(payload);
    // });
  };

  const handleDelete = (id) => {
    const payload = cart.filter((item) => item.id !== id);
    setCart(payload);

    // deleteCartItemsReq(id).then((res) => {
    //   setCart(payload);
    // });
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
