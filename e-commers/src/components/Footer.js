import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function FooterWithSections() {
  return (
    <footer className="footer-sections">
      <div className="footer-container">
        <div className="footer-logo-social">
          <div className="logo">Candle.</div>
          <span>Follow us on:</span>
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
        </div>
        <div className="footer-products">
          <h4>Products</h4>
          <ul>
            <li>Product Category 1</li>
            <li>Product Category 2</li>
            <li>Product Category 3</li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Address St, City</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 Candle. All rights reserved.
      </div>
    </footer>
  );
}

export default FooterWithSections;
