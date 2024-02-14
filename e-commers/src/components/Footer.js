import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faCcVisa,
  faApplePay,
  faCcPaypal,
  faGooglePay,
  faCcMastercard,
} from "@fortawesome/free-brands-svg-icons";

function FooterWithSections() {
  return (
    <footer className="footer-sections">
      <div className="social-link">Candle.</div>
      <div className="footer-logo-social">
        <div className="social-media">
          <a href="https://instagram.com" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" className="social-link">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        {/* Payment Icons Section */}
        <div className="payment-methods">
          <a href="#" className="payment-link">
            <FontAwesomeIcon icon={faCcVisa} />
          </a>
          <a href="#" className="payment-link">
            <FontAwesomeIcon icon={faCcPaypal} />
          </a>
         
          <a href="#" className="payment-link">
            <FontAwesomeIcon icon={faGooglePay} />
          </a>
          <a href="#" className="payment-link">
            <FontAwesomeIcon icon={faApplePay} />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 Candle. All rights reserved.
      </div>
    </footer>
  );
}

export default FooterWithSections;
