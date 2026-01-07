import React from "react";
import "../components/Nav.css";
import BrandTitle from "../components/BrandTitle";
import Main from "../components/Main";
import "../components/data";
import Self from "../components/Self";

export default function Homepage() {
  return (
    <div style={{scrollbarWidth: "none"}}>
      <BrandTitle />
      <Self />
      <Main />
    </div>
  );
}
