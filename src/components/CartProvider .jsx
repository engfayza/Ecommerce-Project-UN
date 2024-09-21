import React, { useState, useEffect } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize state from localStorage if available
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addProduct = (product) => {
    // Find if product with same attributes exists in the cart
    const existingProductIndex = cartItems.findIndex(
      (item) =>
        item.id === product.id &&
        item.size === product.size &&
        item.color.length === product.color.length &&
        item.color.every((v, i) => v === product.color[i])
    );

    let updatedCart;

    if (existingProductIndex > -1) {
      // Product with same attributes exists, update quantity
      const existingProduct = cartItems[existingProductIndex];
      updatedCart = [...cartItems];
      updatedCart[existingProductIndex] = {
        ...existingProduct,
        quantity: existingProduct.quantity + product.quantity,
      };
    } else {
      // Product with same attributes does not exist, add new product
      updatedCart = [...cartItems, product];
    }

    setCartItems(updatedCart);
  };

  const removeProduct = (productId) => {
    // Filter out the product with the given id
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    // Clear the cart and remove it from localStorage
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
