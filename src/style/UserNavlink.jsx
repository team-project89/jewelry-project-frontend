import React from "react";
import { NavLink } from "react-router-dom";

function UserNavlink({ children, path, className }) {
  return (
    <NavLink
      to={path}
      className={`text-size flex justify-center items-center gap-3 ${className}`}
    >
      {children}
    </NavLink>
  );
}

export default UserNavlink;
