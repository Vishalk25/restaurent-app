import React from "react";
import "./BrandTitle.css";

function BrandTitle() {
  const getMenu = () => {
    window.scrollTo({
      top: 1400,
      behavior: "smooth",
    });
  };
  
  return (
    <div id="brandTitle">
      <img
        className="bg-img"
        src="https://img.freepik.com/free-photo/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables_181624-1669.jpg?ga=GA1.1.1897152243.1744627971&semt=ais_hybrid&w=740"
        alt="have-around img"
      />
      <div className="brandContainer">
        <p className="brandName">Have Around</p>
        <p className="tagLine">Bringing People Together, One Bite at a Time.</p>
        <div id="our-menu" onClick={getMenu} style={{ cursor: "pointer" }}>
          <div id="our-menu-label">Our Menu</div>
        </div>
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZXV6b3c5cXZiZzh3cDY0bXJ2eTJjaXUzMHhjd2U5MnlyM21sbm9vOSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/XG2A5I3Gyun8oF68Ts/giphy.webp"
          width={"170vw"}
          style={{ opacity: 0.8 }}
        />
      </div>
    </div>
  );
}

export default BrandTitle;
