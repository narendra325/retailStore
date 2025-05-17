import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { SearchBar } from "./SearchBar";
import { CartDrawer } from "../Layout/CartDrawer";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setCartOpen(!cartOpen);
  };

  const handleNavMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className=" container mx-auto flex justify-between px-5 py-3">
        <Link to="#" className="font-bold">
          Yeswanth
        </Link>
        <div className=" space-x-3 font-medium text-sm hidden md:flex">
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Top Wear</Link>
          <Link to="#">Bottom Wear</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="#">
            <FaRegUser />
          </Link>
          <button onClick={handleToggle} className="relative ">
            <HiOutlineShoppingBag className="w-6 h-6" />
            <span className="bg-red-600 rounded-full text-white absolute text-xs top-0 px-1 py-">
              4
            </span>
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button>
            <HiOutlineMenuAlt3
              onClick={handleNavMenu}
              className="w-6 h-6 md:hidden"
            />
          </button>
        </div>
      </nav>
      <CartDrawer cartOpen={cartOpen} handleToggle={handleToggle} />

      {/* mobile nav bar */}
      <div
        className={`fixed top-0 left-0 w-3/4 md:w-1/4 sm:w-1/2 h-full flex flex-col z-50 shadow-lg bg-white ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="top-0 flex justify-between p-4 border-b border-gray-300">
          <h1 className="text-lg font-medium">Menu</h1>
          <button>
            <IoMdCloseCircle onClick={handleNavMenu} className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 font-semibold text-gray-600 text-sm md:hidden flex flex-col p-4">
          <Link to="#" onClick={handleNavMenu}>
            Men
          </Link>
          <Link to="#" onClick={handleNavMenu}>
            Women
          </Link>
          <Link to="#" onClick={handleNavMenu}>
            Top Wear
          </Link>
          <Link to="#" onClick={handleNavMenu}>
            Bottom Wear
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
