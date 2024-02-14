import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./itemCard.css"; // Make sure the CSS file path is correct
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { colors } from "@mui/material";


function ItemCard({ product, initiallyLiked, onUnlike }) {
  const [isLiked, setIsLiked] = useState(initiallyLiked);

  useEffect(() => {
    // This effect ensures the like status updates if the prop changes externally
    setIsLiked(initiallyLiked);
  }, [initiallyLiked]);

  const toggleLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/products/${product._id}/toggle-like`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        setIsLiked(!isLiked); // Optimistically update the like status
        if (isLiked) {
          // If the product was liked before, it's now unliked. Call onUnlike.
          onUnlike && onUnlike(product._id);
        }
      } else {
        console.error("Failed to toggle like status.");
      }
    } catch (error) {
      console.error("Error toggling like state:", error);
    }
  };

  return (
    <div className="productItem">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="productContent">
        <h3 className="productName">{product.name}</h3>
        <p className="productDescription">{product.description}</p>
        <div className="productDetails">
          <span className="productVolume">{product.volume}</span>
          <span className="productPrice">${product.price}</span>
        </div>
        <IconButton onClick={toggleLike} aria-label="like">
          {isLiked ? (
            <FavoriteIcon sx={{ color:"black", scale:"revert-layer"}} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </div>
    </div>
  );
}

export default ItemCard;
