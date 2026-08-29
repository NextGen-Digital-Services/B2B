import React, { createContext, useState, useEffect, useContext } from 'react';

const RFQCartContext = createContext();

export const RFQCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem('zycoon_rfq_cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse RFQ cart from localStorage:', e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('zycoon_rfq_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToRFQ = (product, quantity, color) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product_id === product.id && item.selected_color === color
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prevItems,
        {
          product_id: product.id,
          product_name: product.name,
          product_slug: product.slug,
          unit_price: product.price_tiers[0]?.unit_price || 0,
          moq: product.moq,
          selected_color: color || product.customization_options.colors[0],
          quantity: quantity,
          price_tiers: product.price_tiers
        }
      ];
    });
  };

  const removeFromRFQ = (productId, color) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.product_id === productId && item.selected_color === color)
      )
    );
  };

  const updateQuantity = (productId, color, qty) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product_id === productId && item.selected_color === color) {
          // Clamp to MOQ
          const finalQty = Math.max(item.moq, qty);
          return { ...item, quantity: finalQty };
        }
        return item;
      })
    );
  };

  const clearRFQ = () => {
    setCartItems([]);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const distinctItemsCount = cartItems.length;

  return (
    <RFQCartContext.Provider
      value={{
        cartItems,
        addToRFQ,
        removeFromRFQ,
        updateQuantity,
        clearRFQ,
        totalItemsCount,
        distinctItemsCount
      }}
    >
      {children}
    </RFQCartContext.Provider>
  );
};

export const useRFQCart = () => {
  const context = useContext(RFQCartContext);
  if (!context) {
    throw new Error('useRFQCart must be used within an RFQCartProvider');
  }
  return context;
};
