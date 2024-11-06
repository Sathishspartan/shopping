import React from 'react';
import CartItem from '../Components/Cart';

const CartPage = ({ cartItems, updateCartQuantity, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <h3>Discount (10%): -${discount.toFixed(2)}</h3>
            <h2>Final Price: ${finalPrice.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
