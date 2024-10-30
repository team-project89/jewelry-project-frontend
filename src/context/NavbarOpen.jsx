import React, { createContext, useContext, useEffect, useState } from "react";

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavbarContext.Provider value={{ isOpen, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useOpen = () => useContext(NavbarContext);
