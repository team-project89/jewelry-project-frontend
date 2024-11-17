import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [enableFetching, setEnableFetching] = useState(() => {
    return JSON.parse(localStorage.getItem("enableFetching")) || false;
  });

  React.useEffect(() => {
    localStorage.setItem("enableFetching", JSON.stringify(enableFetching));
  }, [enableFetching]);

  return (
    <CartContext.Provider value={{ enableFetching, setEnableFetching }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
