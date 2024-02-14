import React from 'react';


// Example products data
const likedProducts = [
  {
    id: 1,
    name: 'Product 1',
    image: 'url_of_product_1_image',
    description: 'Description of product 1',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'url_of_product_2_image',
    description: 'Description of product 2',
  },
  // Add more products as needed
];

const LikedItemsPage = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {likedProducts.map(product => (
        <div key={product.id} className="product-item">
          <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
          <div className="tag">Liked</div>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikedItemsPage;
