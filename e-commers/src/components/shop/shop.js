import React, { useState, useEffect } from "react";
import "./shop.css"; // Ensure this path is correct based on your project structure
import ItemCard from "/Users/sami/e-com/e-commers/src/components/ItemCard.js"; // Adjust the import path to be relative

function ProductComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]); // New state for liked products
  const [categories] = useState(["All", "spf", "Hand cream", "Toner", "Vitamin C", "Serum"]);

  useEffect(() => {
    fetchProducts();
    fetchLikedProducts(); // New function call to fetch liked products
  }, []);

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

  const fetchLikedProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/liked-products");
      const data = await response.json();
      setLikedProducts(data.map(product => product._id)); // Assuming your API returns the list of liked product IDs
    } catch (error) {
      console.error("Error fetching liked products:", error);
    }
  };
  

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    updateDisplayProducts(value, true);
  };

  const updateDisplayProducts = (searchTerm, isSearch = false) => {
    let filtered = products;
    if (searchTerm === "all" && !isSearch) {
      setDisplayProducts(products);
    } else if (searchTerm.trim()) {
      filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
      setDisplayProducts(filtered);
    }
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
              onClick={() => updateDisplayProducts(category.toLowerCase() === "all" ? "all" : category.toLowerCase())}
      
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="productDisplaySection">
        {displayProducts.map((product) => (
          <ItemCard
            key={product._id}
            product={product}
            initiallyLiked={likedProducts.includes(product._id)} // Pass the initially liked status
          />
        ))}
      </div>
    </div>
  );
}

export default ProductComponent;
