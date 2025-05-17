import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { BsCreditCard } from "react-icons/bs";

export const FeatureSection = () => {
  return (
    <div className="p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6 ">
        <div className="flex flex-col items-center text-center bg-white">
          <FaShoppingBag />
          <h2>FREE INTERNATIONAL SHIPPING</h2>
          <p>on all orders over $100</p>
        </div>
        <div className="flex flex-col items-center text-center bg-white">
          <TbRefresh />
          <h2>45 DAYS RETURN</h2>
          <p>Moneyback gurentee</p>
        </div>
        <div className="flex flex-col items-center text-center bg-white">
          <BsCreditCard />
          <h2>SECURITY CHECKOUT</h2>
          <p>100% secured checkout process</p>
        </div>
      </div>
    </div>
  );
};
