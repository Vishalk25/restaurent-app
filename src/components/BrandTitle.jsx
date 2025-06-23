import React from "react";
import "./BrandTitle.css";

function BrandTitle() {
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
        <svg
          width="230px"
          height="120px"
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="100" cy="70" rx="90" ry="20" fill="#A9A9A9" />
          <ellipse cx="100" cy="72" rx="70" ry="15" fill="#D3D3D3" />
          <ellipse
            cx="100"
            cy="74"
            rx="40"
            ry="8"
            fill="rgb(51, 50, 50)"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
}

export default BrandTitle;
