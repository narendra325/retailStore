import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";

export const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const handletoggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Search : ${searchItem}`);
    setSearchItem("");
    setSearchOpen(false);
  };

  return (
    <div
      className={`flex justify-between items-center transform transition-transform duration-300 ${
        searchOpen
          ? "absolute w-full top-0  left-0 h-24 bg-white z-50"
          : "w-auto"
      }`}
    >
      {searchOpen ? (
        <form
          onSubmit={handleSubmit}
          className="relative container flex justify-center mx-auto w-full gap-4"
        >
          <div className="w-1/2 relative ">
            <input
              type="text"
              placeholder="search items"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className="w-full px-4 py-2 pl-2 pr-12 bg-gray-100 focus:outline-none rounded-lg placeholder:text-gray-700"
            />
            <button className="absolute right-1 bottom-2">
              <FiSearch className="w-6 h-6" />
            </button>
          </div>
          <button onClick={handletoggle} aria-label="Close search">
            <IoMdCloseCircle className="w-6 h-6 text-gray-700" />
          </button>
        </form>
      ) : (
        <FiSearch className="w-6 h-6" onClick={handletoggle} />
      )}
    </div>
  );
};
