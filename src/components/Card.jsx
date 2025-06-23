import React, { useContext } from "react";
import { FoodContext } from "../Context/FoodContextProvider";
import "./Card.css";

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
    handleCart(data);
  };

  return (
    <>
      <div id="card">
        <div className="card-container">
          <img alt="menu-img" id="card-img" src={source} />
          <h4 id="card-h">{dish}</h4>
          <p id="money">₹ {props.price}/-</p>
          <p id="card-p">World class delicious dishes on your plate.</p>
          <button id="card-btn" onClick={handleAddToCart}>
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
