import React, { useContext } from "react";
import { FoodContext } from "../Context/FoodContextProvider";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useContext(FoodContext);
  console.log("cart", cart);

  return (
    <div className="cart-container">
      <div>SDFGh</div>
      {cart ? (
        cart.map((item) => <CartItem item={item} />)
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  );
}
