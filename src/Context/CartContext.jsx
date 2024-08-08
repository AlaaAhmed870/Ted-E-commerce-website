// CartContext.jsx
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes



const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartTotal }}>
      {children}{/* Render children */}
      
    </CartContext.Provider>
  );
};

// Validate PropTypes for CartProvider
CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is required and of type node
  };

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};
