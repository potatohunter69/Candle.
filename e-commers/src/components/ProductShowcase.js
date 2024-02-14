import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from 'react-query';

function ProductShowcase() {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  

  const settings = {
    dots: true,
    infinite: true,
    with: 300,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,

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

  useEffect(() => {
    fetchProducts();
    fetchLikedProducts();
  }, []);

  const cacheDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

  const fetchProducts = () => {
    const productsCache = localStorage.getItem("productsCache");
    const isCacheValid =
      productsCache &&
      new Date().getTime() - JSON.parse(productsCache).timestamp <
        cacheDuration;

    if (productsCache && isCacheValid) {
      setProducts(JSON.parse(productsCache).data);
    } else {
      fetch("http://localhost:8080/products")
        .then((response) => response.json())
        .then((data) => {
          const cache = {
            timestamp: new Date().getTime(),
            data: data,
          };
          localStorage.setItem("productsCache", JSON.stringify(cache));
          setProducts(data);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  };
  const fetchLikedProducts = () => {
    fetch("http://localhost:8080/liked-products")
      .then((response) => response.json())
      .then((data) => {
        const likedProductIds = data.map((product) => product._id);
        setLikedProducts(likedProductIds);
      })
      .catch((error) => console.error("Error fetching liked products:", error));
  };

  const toggleLike = (productId) => {
    // Optimistically update the UI
    const isLiked = likedProducts.includes(productId);
    const updatedLikedProducts = isLiked
      ? likedProducts.filter((id) => id !== productId)
      : [...likedProducts, productId];
    setLikedProducts(updatedLikedProducts);

    fetch(`http://localhost:8080/products/${productId}/toggle-like`, {
      method: "POST",
    })
      .then(() => {
        // Optionally, re-fetch liked products here if you want to ensure sync with the backend
        // fetchLikedProducts();
      })
      .catch((error) => {
        console.error("Error toggling like state:", error);
        // Revert the optimistic update in case of error
        setLikedProducts(
          isLiked
            ? [...likedProducts, productId]
            : likedProducts.filter((id) => id !== productId)
        );
      });
  };

  return (
    <div>
      <div style={{ margin: "10vh", padding: "20px" }}>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product._id}>
              <div
                className="productItem"
                style={{ width: "45vh", marginBottom: "8vh", height: "500px" }}
              >
                <div
                  className="product-image"
                  style={{ backgroundColor: "lightgrey", height: "100%" }}
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-details">
                  <span>{product.volume}</span>
                  <span>{product.price}</span>
                </div>
                {/* Like button */}
                <button
                  className={`like-btn ${
                    likedProducts.includes(product._id) ? "liked" : ""
                  }`}
                  onClick={() => toggleLike(product._id)}
                >
                  {likedProducts.includes(product._id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <Link to="/shop" className="link-no-style">
          <span className="navbar-item">All Products →</span>
        </Link>
      </div>
    </div>
  );
}

export default ProductShowcase;
