import React from "react";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      {children}
      <Outlet />
    </div>
  );
}

export default Layout;
