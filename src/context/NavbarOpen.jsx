import React, { createContext, useContext, useState } from "react";
const OpenNavbarContext = createContext();
function NavbarOpen({ children }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <OpenNavbarContext.Provider value={{ open,handleClick }}>
      {children}
    </OpenNavbarContext.Provider>
  );
}

export default NavbarOpen;
export function useOpen() {
  return useContext(OpenNavbarContext);
}
