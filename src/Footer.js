import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <img
            src="https://www.graphicsprings.com/filestorage/stencils/c318bb8d37f4bd4cb27670189daa992b.png?width=500&height=500"
            alt="Arroy__logo"
          />
        </div>
        <div className="mid">
          <h5 className="bold">About Poduct</h5>
          <p>
            <h3>Why Apple is the best place to buy iPhone.</h3>
            You can choose a payment option that works for you, pay less with a <br/>
            trade‑in, connect your new iPhone to your carrier and get set <br/>
            quickly. You can also chat with a Specialist anytime.
          </p>
        </div>
        <div className="copy">
          <div class="py-3">
            © 2021 Copyright:--
            <a href="https://AppleIndia.com/"> AppleIndia.com</a>
          </div>
        </div>
      </div>
      
      <h1>Thank you Stay Safe from Corona</h1>
    </>
  );
};

export default Footer;
