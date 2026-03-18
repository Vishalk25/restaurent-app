import React, { useContext, useEffect } from "react";
import { FoodContext } from "../Context/FoodContextProvider";
import "./Card.css";
import Button from "@mui/material/Button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { useState } from "react";

function Card(props) {
  const { handleCart, cart, handleDelete } = useContext(FoodContext);
  const [qty, setQty] = useState(0);

  const addItemQty = () => {
    setQty(qty + 1);
    const data = {
      id: props.id,
      name: props.name,
      price: props.price,
      url: props.url,
    };
    handleCart(data, true);
  };

  const decreaseItemQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      const data = {
        id: props.id,
        name: props.name,
        price: props.price,
        url: props.url,
      }
      handleCart(data, false);
    } else if (qty === 1) {
      handleDelete(props?.id);
      setQty(0);
    }
  };


  const { source, dish, ...val } = props;

  useEffect(() => {
    const itemInCart = cart.find((item) => item.id === props.id);
    if (itemInCart) {
      setQty(itemInCart.qty)
    } else {
      setQty(0);
    }
  }, []);

  return (
    <>
      <div id="card">
        <div className="card-container">
          <img alt="menu-img" id="card-img" src={source} />
          <h4 id="card-h">{dish}</h4>
          <p id="money">₹ {props.price}/-</p>
          <p id="card-p">World class delicious dishes on your plate.</p>
          {qty === 0 ? <Button variant="contained" id="card-btn" onClick={addItemQty}>
            ADD
          </Button>
            :
            <Button variant="contained" id="btn-qty" >
              <div className="qty-layout">
                <RemoveCircleRoundedIcon
                  fontSize="medium"
                  onClick={decreaseItemQty}
                  color="inherit"
                />
                <span className="qty">{qty}</span>
                <AddCircleRoundedIcon fontSize="medium" onClick={addItemQty} />
              </div>
            </Button>}
        </div>
      </div>
    </>
  );
}

export default Card;
