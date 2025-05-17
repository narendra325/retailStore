import React from "react";
import { Link } from "react-router-dom";
import { PiMetaLogoBold, PiInstagramLogoLight } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" container mx-auto border-t bg-gray-100 ">
      <div className="md:grid-cols-4 container mx-auto grid grid-cols-1 p-5 w-full  gap-8">
        <div className="space-y-4">
          <h2 className="font-semibold text-md">Newsletter</h2>
          <p className="mt-2 text-xs text-gray-500 ">
            Be the first person to hear about new products exclusive discounts
            and exaiting offers
          </p>
          <p className="mt-2 text-xs text-gray-500 ">
            Get the 10% flat discount offers by subscribing
          </p>
          <form className="mt-5 flex">
            <input
              type="email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white text-sm p-2 border-r rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="space-y-2 flex flex-col">
          <h2 className="font-semibold text-md mb-1">Shop</h2>
          <Link to="#" className="text-sm text-gray-500">
            Mens Top Wear
          </Link>
          <Link to="#" className="text-sm text-gray-500">
            Womens Top Wear
          </Link>
          <Link to="#" className="text-sm text-gray-500">
            Mens Bottom Wear
          </Link>
          <Link to="#" className="text-sm text-gray-500">
            Womens Top Wear
          </Link>
        </div>
        <div className="space-y-2 flex flex-col">
          <h2 className="font-semibold text-md mb-1">Support</h2>
          <Link to="#" className="text-sm text-gray-500">
            Contack Us
          </Link>
          <Link to="#" className="text-sm text-gray-500">
            About Us
          </Link>
          <Link to="#" className="text-sm text-gray-500">
            FAQs
          </Link>
          <Link to="#" className="text-sm text-gray-500">
            Features
          </Link>
        </div>
        <div>
          <h2 className="font-semibold text-md mb-2">Follow Us</h2>
          <div className="flex items-center space-x-4 ">
            <a href="#">
              <PiMetaLogoBold className="w-5 h-5 " />
            </a>
            <a href="#">
              <PiInstagramLogoLight className="w-5 h-5" />
            </a>
            <a href="#">
              <RiTwitterXLine className="w-4 h-5" />
            </a>
          </div>
          <a href="tel:+1234567890" className="text-sm font-semibold ">
            tel: +1 234-567-890
          </a>
        </div>
       
      </div>
      <div className="flex justify-center mt-5 border-t border-gray-300 p-5">
          <h2 className="text-gray-400">© 2023 all rights reserved</h2>
        </div>
    </footer>
  );
};

export default Footer;
