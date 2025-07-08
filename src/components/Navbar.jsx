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
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="size-5 text-primary"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          placeholder="Search your taste"
          style={{
            width: "calc(100% - 3.5rem)",
            boxShadow: "rgba(28, 28, 28, 0.08) 0px 2px 8px",

            // backgroundColor: "beige",
            opacity: "0.5",
            padding: "0.75rem 1rem 0.75rem 2.5rem",
          }}
        ></input>
      </div>
      <div id="nav-menu">
        <Link to="/" className="menu">
          <span>Home</span>
        </Link>
        <Link to="/menu/pasta" className="menu">
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
