import React, { useState } from 'react';
import './shop.css'; // Adjust the path as necessary

function ProductComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchResults(value ? [`Result for "${value}"`] : []);
  };

  return (
    <div className="container">
      <div className="searchSection">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="searchInput"
        />
        <div>
          {searchResults.map((result, index) => (
            <div key={index} className="searchResult">
              {result}
            </div>
          ))}
        </div>
      </div>
      <div className="productDisplaySection">
        {/* Product Display Section */}
      </div>
    </div>
  );
}

export default ProductComponent;
