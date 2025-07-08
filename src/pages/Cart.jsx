import React, { useContext, useState, useEffect } from "react";
import { FoodContext } from "../Context/FoodContextProvider";
import { Box } from "@mui/material";
import CartItem from "../components/CartItem";
import "./Cart.css";

export default function Cart() {
  const { cart } = useContext(FoodContext);
  const [totalBill, setTotalBill] = useState(0);
  console.log("cart223", cart);
  let totalAmount = 0;

  useEffect(() => {
    setTotalBill(totalAmount);
  }, [cart]);

  return (
    <div>
      {cart.length ? (
        <div className="cart-root">
          <div id="cart-container">
            {cart.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div id="billing-container">
            <h3>Total Bill</h3>
            <div id="billint-list1">
              {cart.map((i) => {
                const subtotal = i.price * i.qty;
                totalAmount = totalAmount + subtotal;

                return (
                  <div id="billint-list">
                    <div key={i.id} className="billing-items">
                      {i.name} x {i.qty}
                    </div>
                    <div style={{ minWidth: "10px" }}></div>
                    <div>₹{subtotal}</div>
                  </div>
                );
              })}
            </div>
            <Box
              sx={{
                height: "2px",
                backgroundColor: "lightgray",
                width: "80%",
                marginY: 2,
              }}
            />
            <div id="total-bill">Total: {totalBill}</div>
          </div>
        </div>
      ) : (
        <div id="empty-cart">
          <img src="https://fizza925.com/uploads/empty.gif" width={"520vw"} />
        </div>
      )}
    </div>
  );
}
