import React, { useContext } from "react";
import { FoodContext } from "../Context/FoodContextProvider";
import "./Card.css";
import Button from "@mui/material/Button";

function Card(props) {
  const { handleCart } = useContext(FoodContext);

  const { source, dish } = props;
  // const source = url;
  // const dish = name;

  const data = {
    id: props.id,
    name: props.name,
    price: props.price,
    url: props.url,
  };

  const handleAddToCart = () => {
    console.log("cart data", data);
    handleCart(data, true);
  };

  return (
    <>
      <div id="card">
        <div className="card-container">
          <img alt="menu-img" id="card-img" src={source} />
          <h4 id="card-h">{dish}</h4>
          <p id="money">₹ {props.price}/-</p>
          <p id="card-p">World class delicious dishes on your plate.</p>
          <Button variant="contained" id="card-btn" onClick={handleAddToCart}>
            ADD
          </Button>
        </div>
      </div>
    </>
  );
}

export default Card;
