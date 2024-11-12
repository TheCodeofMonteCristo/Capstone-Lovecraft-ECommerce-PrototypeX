// src/pages/Cart.js

import React from 'react';
import { Link } from 'react-router-dom'; // For navigating to Checkout page

// Cart Component - Displays items in the shopping cart
const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <Link to="/checkout" className="btn">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
