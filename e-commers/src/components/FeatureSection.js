import React from 'react';
import featureImg from "../assets/candle.avif"

function FeatureSection() {
  return (
    <div className="feature-section">
      <img className="feature-image" src={featureImg} alt="Feature" />
      <div className="feature-content">
        <div className="feature-title">
          <h4>Skin Care</h4>
          <h2>Potent Solutions for Demanding Skin</h2>
        </div>
        <p>Discover products tailored for mature skin and urban lifestyles, offering daily hydration and the added advantage of powerful vitamins and antioxidants.</p>
        <div className="read-more">
          <span>Read More</span>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
