import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard"; // Make sure the path to ItemCard is correct
import "./productShowcase.css"; // Make sure the CSS file path is correct

function ProductShowcase() {
  const [products, setProducts] = useState([]);
  const [likedProductsIds, setLikedProductsIds] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchProducts();
    fetchLikedProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchLikedProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/liked-products");
      const data = await response.json();
      const likedIds = data.map(product => product._id);
      setLikedProductsIds(likedIds);
    } catch (error) {
      console.error("Error fetching liked products:", error);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true, // Focus on the slide clicked
    afterChange: setCurrentSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="productShowcaseSlider">
      <Slider {...settings} className="slider">
        {products.map((product) => (
          <ItemCard
            key={product._id}
            product={product}
            initiallyLiked={likedProductsIds.includes(product._id)}
          />
        ))}
      </Slider>
     
      <Link to="/shop" className="link-no-style">
        <span className="navbar-item">All Products →</span>
      </Link>

      <hr />
    
    </div>
  );
}

export default ProductShowcase;
