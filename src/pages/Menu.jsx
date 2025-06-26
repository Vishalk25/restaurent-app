import React, { useState } from "react";
import Card from "../components/Card";
import Food from "../components/data";
import { useEffect } from "react";
import "../components/Card.css";
// import { getAllItemsReq } from "../API/Api";

function Menu({ dishName }) {
  let dish = dishName.replace("menu/", "");

  const [items, setItems] = useState([]);

  const getAllItems = async () => {
    try {
      const data = Food;
      setItems(data);
    } catch (err) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
      <div className="card-flex">
        {items.map((e) => {
          if (e.name === dish) {
            return (
              <>
                {e.menu.map((val) => (
                  <Card
                    key={val.id}
                    source={val.url}
                    dish={val.name}
                    {...val}
                  />
                ))}
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Menu;
