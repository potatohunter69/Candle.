import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from "./ItemCard"; // Adjust the import path if needed
import './liked.css'; // Ensure the CSS file path is correct

function LikedProductsPage() {
  const [likedProducts, setLikedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [categories] = useState(["All", "spf", "Hand cream", "Toner", "Vitamin C", "Serum"]);

  useEffect(() => {
    fetchLikedProducts();
  }, []);

  const fetchLikedProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/liked-products');
      if (response.ok) {
        const data = await response.json();
        setLikedProducts(data);
      } else {
        throw new Error('Failed to fetch liked products');
      }
    } catch (err) {
      setError('Failed to fetch liked products');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnlike = (productId) => {
    setLikedProducts(likedProducts.filter(product => product._id !== productId));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = likedProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="Likedcontainer">
      <input
        type="text"
        placeholder="Search liked products..."
        className="searchInput"
        onChange={handleSearchChange}
        style={{ maxWidth: "70%" }}
      />
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>}
      <div className="Likedgrid">
        {filteredProducts.map(product => (
          <ItemCard
            key={product._id}
            product={product}
            initiallyLiked={true}
            onUnlike={() => handleUnlike(product._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default LikedProductsPage;
