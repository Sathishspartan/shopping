import React from 'react';

const CartItem = ({ item, updateCartQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <div className="quantity-controls">
        <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

export default Cart;
