import React from "react";
import { Button } from "./Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newletter to receive our best vaction deals
        </p>
        <p className="footer-subscription-text">
          {" "}
          You can unsuscribe at any time{" "}
        </p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your mail"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Suscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
