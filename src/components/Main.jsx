import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div id="main-container">
      <div id="first-menu-option">
        <Link to="/menu/pizza" className="foodNames pizza">
          <div className="mdiv">
            <img
              alt="pizza"
              src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/pizza-icon.svg"
              className="img-main"
            />
            <h4>Pizza's</h4>
          </div>
        </Link>
        <Link to="/menu/pasta" className="foodNames pasta">
          <div className="mdiv">
            <img
              alt="pasta"
              src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/pasta-icon.svg"
              className="img-main"
            />
            <h4>Pasta</h4>
          </div>
        </Link>
        <Link to="/menu/chinese" className="foodNames chinese">
          <div className="mdiv">
            <img
              alt="chinese food"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitH4ciQXmeqNyog9j1ekF9BJUXlqXVOjFLg&usqp=CAU"
              className="img-main"
            />
            <h4>Chinese</h4>
          </div>
        </Link>
      </div>
      <div id="second-menu-option">
        <Link to="/menu/biryani" className="foodNames biryani">
          <div className="mdiv">
            <img
              alt="biryani"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzNb3tsuTD_pJiRkTAI46MDCi6la4DRM2NA&usqp=CAU"
              className="img-main"
            />
            <h4>Biryani</h4>
          </div>
        </Link>
        <Link to="/menu/chaap" className="foodNames chaap">
          <div className="mdiv">
            <img
              alt="chaap"
              src="data:image/jpeg;base64,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"
              className="img-main"
            />
            <h4>Chaap</h4>
          </div>
        </Link>
        <Link to="/menu/soup" className="foodNames soup">
          <div className="mdiv">
            <img
              alt="soups"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzRePysV1v3Q38YPdF7qr6sjbS0_9pIQwXw&usqp=CAU"
              className="img-main"
            />
            <h4>Soups</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Main;
