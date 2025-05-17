import React from "react";
import { PiMetaLogoBold, PiInstagramLogoLight } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="container mx-auto bg-red-600 text-white">
      <div className="flex justify-between px-5 py-2 ">
        <div className=" hidden md:flex items-center space-x-4 ">
          <a href="#">
            <PiMetaLogoBold className="w-5 h-5" />
          </a>
          <a href="#">
            <PiInstagramLogoLight className="w-5 h-5 " />
          </a>
          <a href="#">
            <RiTwitterXLine className="w-4 h-5" />
          </a>
        </div>
        <p className="text-sm text-center flex-grow">Style of bussiness that you wont regret</p>
        <a href="tel:+1234567890" className="text-sm hidden md:block ">Call Us: +1 234-567-890</a>
      </div>
    </div>
  );
};

export default Topbar;
