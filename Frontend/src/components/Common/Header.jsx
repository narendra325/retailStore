import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className=" sticky top-0 z-50 bg-white  transition-all duration-300 ">
      <Topbar />
      <Navbar />

      {/* <CartDrawer/> */}
    </header>
  );
};

export default Header;
