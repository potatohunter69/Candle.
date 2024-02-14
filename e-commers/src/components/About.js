import React from "react";
import featureImg from "../assets/feat.png";

function About() {
  return (
    <div>
      <div className="feat-section" style={{marginTop: "30vh"}}>
        <img className="fea-image" src={featureImg} style={{
          marginTop: "10vh",
          width: "400px",
          height: "auto",
          boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.5)",
          display: "block",
          margin: "0 auto",
          borderRadius: "50px",
        }} alt="Feature" />
        <div className="feat-content">
          <div className="feat-title">
            <h4>Our story</h4>
            <h2>Potent Solutions for Demanding Skin</h2>
          </div>
          <p>
            Discover products tailored for mature skin and urban lifestyles,
            offering daily hydration and the added advantage of powerful
            vitamins and antioxidants.
            Discover products tailored for mature skin and urban lifestyles,
            offering daily hydration and the added advantage of powerful
            vitamins and antioxidants.
            Discover products tailored for mature skin and urban lifestyles,
            offering daily hydration and the added advantage of powerful
            vitamins and antioxidants.
          </p>
        </div>
      </div>
      <div className="feat-section">
        <div className="feat-content">
          <div className="feat-title">
            <h4>Skin Care</h4>
            <h2>Potent Solutions for Demanding Skin</h2>
          </div>
          <p>
            Discover products tailored for mature skin and urban lifestyles,
            offering daily hydration and the added advantage of powerful
            vitamins and antioxidants.
            Discover products tailored for mature skin and urban lifestyles,
          offering daily hydration and the added advantage of powerful vitamins
          and antioxidants.
          Discover products tailored for mature skin and urban lifestyles,
          offering daily hydration and the added advantage of powerful vitamins
          and antioxidants.
          Discover products tailored for mature skin and urban lifestyles,
          offering daily hydration and the added advantage of powerful vitamins
          and antioxidants.
          Discover products tailored for mature skin and urban lifestyles,
          offering daily hydration and the added advantage of powerful vitamins
          and antioxidants.
          </p>
        </div>
        <img className="fea-image" src={featureImg} style={{
        
          width: "400px",
          height: "auto",
          boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.5)",
          display: "block",
          margin: "0 auto",
          borderRadius: "50px",
        }} alt="Feature" />
      </div>
     <footer className="footer-quote">
      <p className="quote-text">"{"fhdaoushfudsfads Discover products tailored for mature skin and urban lifestyles, Discover products tailored for mature skin and urban lifestyles,"}"</p>
      <p className="quote-author">- {"Dog"}</p>
    </footer>
    
    </div>
  );
}

export default About;
