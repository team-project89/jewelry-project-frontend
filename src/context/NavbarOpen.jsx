import React, { createContext, useContext, useEffect, useState } from "react";

const OpenNavbarContext = createContext();

function NavbarOpen({ children }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <OpenNavbarContext.Provider value={{ open, handleClick }}>
      {children}
    </OpenNavbarContext.Provider>
  );
}

export default NavbarOpen;

export function useOpen() {
  return useContext(OpenNavbarContext);
}
