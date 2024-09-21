import React, { createContext } from 'react';

// Define the CartContext using createContext
const CartContext = createContext({
  cartItems: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {}
});

// Export the CartContext to be used in other components
export default CartContext;
6