import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div id="footer">
        <div>
          <h3 className="f-h3">Useful Links :</h3>
          <p className="f-para">Refud Policy</p>
          <p className="f-para">Terms & Conditions</p>
          <p className="f-para">Privacy Policy</p>
          <p className="f-para">Promo Code</p>
        </div>
        <div>
          <h3 className="f-h3">Payment Methods :</h3>
          <a>
            <img
              className="anchor"
              alt="pizza"
              src="https://lapinozpizza.in/assets/wla_new/img/visa.png"
            />
          </a>
          <a>
            <img
              className="anchor"
              alt="pizza"
              src="https://lapinozpizza.in/assets/wla_new/img/google-pay.png"
            />
          </a>
          <a>
            <img
              className="anchor"
              alt="pizza"
              src="https://lapinozpizza.in/assets/wla_new/img/master-card.png"
            />
          </a>
          <a>
            <img
              className="anchor"
              alt="pizza"
              src="https://lapinozpizza.in/assets/wla_new/img/paytm.png"
            />
          </a>
        </div>
        <div>
          <h3 className="f-h3">Connect with Us..</h3>
          <p className="f-para">
            <span className="f-span">Email : </span>
            havearoundofficial@gmail.com.
          </p>
          <p className="f-para">
            <span className="f-span">Call : </span>+91 9892 654 321
          </p>
        </div>
      </div>
      <div id="c-right">All Rights Reserved | 2025.</div>
    </>
  );
}

export default Footer;
