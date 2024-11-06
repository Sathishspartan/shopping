import React from 'react';

const ProductCard = ({ product, addToCart, inCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.substring(0, 100)}...</p>
      <h4>${product.price}</h4>
      <button onClick={() => addToCart(product)}>
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;
