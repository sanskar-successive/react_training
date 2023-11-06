// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.

import { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };
  const clearCart = () => {
    setCart([]);
  };
  
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
