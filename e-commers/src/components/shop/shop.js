import React, { useState, useEffect } from "react";
import "./shop.css"; // Adjust the path as necessary

function ProductComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  // Added "All" category to the list
  const [categories] = useState([
    "All", // Add this line
    "spf",
    "Hand cream",
    "Toner",
    "Vitamin C",
    "Serum",
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        setProducts(data);
        setDisplayProducts(data); // Initialize with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    updateDisplayProducts(value, true); // Added a parameter to indicate a search operation
  };

  // Adjusted to handle "All" categories selection
  const updateDisplayProducts = (searchTerm, isSearch = false) => {
    if (searchTerm === "all" && !isSearch) {
      setDisplayProducts(products);
      return;
    }

    let filtered = products;

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (product) =>
          (product.category &&
            product.category.toLowerCase().includes(searchTerm)) ||
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    setDisplayProducts(filtered);
  };

  return (
    <div className="containers">
      <div className="searchSection">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="searchInput"
        />
        <div className="categorySection">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() =>
                updateDisplayProducts(category.toLowerCase() === "all" ? "all" : category.toLowerCase(), false) // Adjusted to handle "All"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="productDisplaySection">
        {displayProducts.map((product, index) => (
          <div key={index} className="productItem">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-details">
              <span>{product.volume}</span>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductComponent;
