import React from "react";

function CartItem(props) {
  const { name, price } = props.item;
  console.log("Pro", props);
  return (
    <div>
      <h4>{name}</h4>
      <span>{price}</span>
      <span></span>
    </div>
  );
}

export default CartItem;
