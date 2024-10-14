import OwnerProfile from "@/feature/showproduct/OwnerProfile";
import brand from "../../public/logo.jpg";
import Menu from "../style/Menu";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Menu />
      <OwnerProfile />
    </div>
  );
}

export default Home;
