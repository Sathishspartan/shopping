import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductsPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import './styles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<ProductsPage addToCart={addToCart} cartItems={cartItems} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
