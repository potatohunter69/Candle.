import React from "react";
import featureImg from "../assets/feat.png";

function FeatureSection() {
  return (
    <div className="feat-section">
      <img
        className="fea-image"
        style={{
          marginTop: "10vh",
          width: "400px",
          height: "auto",
          boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.5)",
          display: "block",
          margin: "0 auto",
          borderRadius: "50px",
        }}
        src={featureImg}
        alt="Feature"
      />
      <div className="feat-content">
        <div className="feat-title">
          <h4>Skin Care</h4>
          <h2>Potent Solutions for Demanding Skin</h2>
        </div>
        <p>
          Discover products tailored for mature skin and urban lifestyles,
          offering daily hydration and the added advantage of powerful vitamins
          and antioxidants.
        </p>
        <div className="read-mor">
          <span>Read More</span>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
