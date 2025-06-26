import React, { useContext } from "react";
import "./CartItem.css";
import { FoodContext } from "../Context/FoodContextProvider";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";

function CartItem(props) {
  const { id, name, price, url, qty } = props.item;
  console.log("Pro", props);
  const { handleCart, handleDelete } = useContext(FoodContext);

  const itemData = {
    id,
    name,
    price,
    url,
    qty,
  };

  const addItemQty = () => {
    handleCart(itemData, true);
  };

  const decreaseItemQty = () => {
    qty > 1 && handleCart(itemData, false);
  };

  const handleItemDelete = () => {
    handleDelete(id);
  };

  return (
    <div id="cart-item">
      <div id="cart-main1">
        <div>
          <img alt="menu-img" id="item-img" src={url} />
        </div>
        <div id="description">
          <h4>{name}</h4>
          <span>₹ {price}/-</span>
          <div className="qty-container">
            <RemoveCircleRoundedIcon
              fontSize="medium"
              onClick={decreaseItemQty}
              color={qty < 2 ? "disabled" : "inherit"}
            />
            <span className="qty">{qty}</span>
            <AddCircleRoundedIcon fontSize="medium" onClick={addItemQty} />
          </div>
        </div>
      </div>
      <div id="cart-main2">
        <DeleteOutlineTwoToneIcon
          fontSize="medium"
          onClick={handleItemDelete}
        />
        <div>Subtotal: {price * qty}</div>
      </div>
    </div>
  );
}

export default CartItem;
