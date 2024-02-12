import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function ProductShowcase() {
  const [products, setProducts] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    console.log("Fetching data from backend");
    fetch("http://localhost:8080/products") // Update this URL to match your backend URL
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div style={{ margin: "10vh" }}>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="slide-padding">
            <div className="product-item">
              <div
                className="product-image"
                style={{ backgroundColor: "lightgrey" }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-details">
                <span>{product.volume}</span>
                <span>{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Link to="/shop" className="link-no-style">
            <span className="navbar-item">All Products →</span>
          </Link>
    </div>
  );
}

export default ProductShowcase;
