// src/services/orderService.js

// Function to fetch all orders for a user
export const getOrders = async () => {
    try {
      const response = await fetch('/api/orders', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Include auth token
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
  
      const orders = await response.json();
      return orders;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  };
  
  // Function to place a new order
  export const createOrder = async (orderData) => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Include auth token
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create order');
      }
  
      const newOrder = await response.json();
      return newOrder;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };
  