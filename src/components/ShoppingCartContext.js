// ShoppingCartContext.js

import React, { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
    const [cart, setCart] = useState([]);
  
    // Function to add an item to the cart
    const addItemToCart = (item) => {
      setCart((prevCart) => [...prevCart, item]);
    };
  
    // Function to remove an item from the cart
    const removeItemFromCart = (itemId) => {
        console.log('Removing item with ID:', itemId); // Log the item ID for debugging
        setCart((prevCart) => {
          const updatedCart = prevCart.filter((item) => item.id !== itemId);
          console.log('Updated cart:', updatedCart); // Log the updated cart for debugging
          return updatedCart;
        });
      };
  
    return (
      <ShoppingCartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
        {children}
      </ShoppingCartContext.Provider>
    );
  }

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
