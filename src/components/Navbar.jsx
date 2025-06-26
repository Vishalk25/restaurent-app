import "./Nav.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../Context/FoodContextProvider";
import Login from "../pages/Login";
import BrandLogo from "../Assets/brandlogo2.png";
import CustomizedMenus from "./NavMenu";

export default function Navbar({ path }) {
  const { cart } = useContext(FoodContext);

  const [openModal, setOpenModal] = useState(false);
  console.log("open", openModal);

  return (
    <div className={`nav${path === "" ? "-home" : ""}`}>
      <div id="brand-logo">
        <Link to="/">
          <img src={BrandLogo} height={"100px"}></img>
        </Link>
      </div>
      <div id="searchBar">
        <input
          placeholder="Search your taste"
          style={{
            width: "100%",
            backgroundColor: "silver",
            opacity: "0.4",
          }}
        ></input>
      </div>
      <div id="nav-menu">
        <Link to="/" className="menu">
          <span>Home</span>
        </Link>
        <Link to="/menu/chaap" className="menu">
          <span>Special</span>
        </Link>
        <Link to="/offers" className="menu">
          <span>Offers</span>
        </Link>
        <div className="menu">
          <Login />
        </div>
        <Link to="/cart" className="menu">
          <div className={"cartContainer"}>
            <p id="cartTotalItems">{cart.length}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
        </Link>
      </div>
      {/* <CustomizedMenus /> */}
    </div>
  );
}
