import React from "react";
import "./Self.css";

function Self() {
  return (
    <div id="self-container">
      <div className="intro">
        <h1 id="intro-head">
          <span id="self">OUR</span> STORY
        </h1>
        <p id="intro-p">
          The story of your favorite pizza place started back in 2011 when
          Sanjay Kapoor opened his very first pizzeria in his hometown
          Chandigarh. The last thing the world needed was another pizzeria, but
          maybe this one could be different. Maybe with this one, everyone could
          get exactly what they wanted, made fresh on demand. It all started
          sounding pretty great, and soon Sanjay was opening the first Have
          Around in City.
        </p>
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZGtxdnA1djZlZ3ByeTdzdXA1ZW92emcyanpiYnNxZWwza2VhYmw4ayZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/7JyXb5iPkejvHjA80c/100.webp"
          width={"150vw"}
          style={{ opacity: 0.8 }}
        />
        {/* <button id="self-btn">Like</button> */}
      </div>
      <div className="intro-img">
        <img
          id="self-img"
          src="https://assets.architecturaldigest.in/photos/600836eb08ae763b9ae84faa/master/w_1600,c_limit/happy-thai-mumbai-restaurant-thai-food-restaurants-in-mumbai_3-1.jpg"
          alt="Check Internet"
        />
      </div>
    </div>
  );
}

export default Self;
