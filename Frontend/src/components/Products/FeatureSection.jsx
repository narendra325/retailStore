import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { BsCreditCard } from "react-icons/bs";

export const FeatureSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6 ">
        <div className="flex flex-col items-center text-center bg-white">
          <FaShoppingBag />
          <h2 className="text-lg mt-3 font-medium tracking-tighter">FREE INTERNATIONAL SHIPPING</h2>
          <p className="text-md text-slate-500 tracking-tighter">on all orders over $100</p>
        </div>
        <div className="flex flex-col items-center text-center bg-white">
          <TbRefresh />
          <h2 className="text-lg mt-3 font-medium tracking-tighter">45 DAYS RETURN</h2>
          <p className="text-md text-slate-500 tracking-tighter">Money refund gurentee</p>
        </div>
        <div className="flex flex-col items-center text-center  bg-white">
          <BsCreditCard />
          <h2 className="text-lg mt-3 font-medium tracking-tighter">SECURITY CHECKOUT</h2>
          <p className="text-md text-slate-500 tracking-tighter">100% secured checkout process</p>
        </div>
      </div>
    </div>
  );
};
