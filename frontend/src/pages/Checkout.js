// src/pages/Checkout.js

import React, { useState } from 'react';

// Checkout Component - Handles the final step of the purchase process
const Checkout = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment (mocked for now)
    alert('Payment processed successfully!');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>Card Number</label>
        <input
          type="text"
          value={paymentDetails.cardNumber}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
          }
        />
        <label>Expiration Date</label>
        <input
          type="text"
          value={paymentDetails.expirationDate}
          onChange={(e) =>
            setPaymentDetails({
              ...paymentDetails,
              expirationDate: e.target.value,
            })
          }
        />
        <label>CVV</label>
        <input
          type="text"
          value={paymentDetails.cvv}
          onChange={(e) =>
            setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
          }
        />
        <button type="submit" className="btn">
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;
