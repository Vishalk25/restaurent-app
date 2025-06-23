import React from "react";
import "../components/Nav.css";
import BrandTitle from "../components/BrandTitle";
import Main from "../components/Main";
import "../components/data";
import Self from "../components/Self";

export default function Homepage() {
  return (
    <div>
      <BrandTitle />
      <Self />
      <Main />
    </div>
  );
}
