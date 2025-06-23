import React from "react";
import "../components/Card.css";
import "./Offers.css";

export default function Offers() {
  return (
    <>
      <div className="offer-container">
        <div id="offer-card">
          <h1>Offers for Today.</h1>
          <br />
          <h5 className="offer-list">
            Buy 1 Pizza & Get another one absolutely Free.{" "}
          </h5>
          <h5 className="offer-list">50% discount on soups.</h5>
          <h5 className="offer-list">Offers valid only for toaday.</h5>
          <h4>Terms & conditions applied.</h4>
        </div>
      </div>
    </>
  );
}
