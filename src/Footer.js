import React from "react";
import "./Footer.css";
import logo from "./ASU_Devil.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <img src={logo} className="footer__logo" alt="logo" />
      </Link>
      {/* <div className="footer__nav"> */}
      <Link to="/privacy" style={{ textDecoration: "none" }}>
        <div className="footer__option">
          <span className="footer__optionLine">Privacy Policy</span>
        </div>
      </Link>
      <Link to="/terms" style={{ textDecoration: "none" }}>
        <div className="footer__option">
          <span className="footer__optionLine">Terms of Service</span>
        </div>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <div className="footer__option">
          <span className="footer__optionLine">Contact Us</span>
        </div>
      </Link>
      {/* </div> */}
    </div>
  );
}

export default Footer;
