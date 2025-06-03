import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CartItems from "../Cart/CartItems";
import { useNavigate } from "react-router-dom";

export const CartDrawer = ({ cartOpen, handleToggle }) => {
  const navigate = useNavigate()

  const handleCheckOut=()=>{
    navigate("/checkout")
    handleToggle(false)
  }
  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-100 w-3/4 md:w-1/4 sm:w-1/2 flex flex-col shadow-lg  {transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 ">
          <button onClick={handleToggle}>
            <IoMdCloseCircle
              className="h-6 w-6 top-0 text-black-100"
              onClick={handleToggle}
            />
          </button>
        </div>

        <div className=" flex-grow px-3 overflow-y-auto ">
          <h1 className="text-xl  font-semibold mb-2">Your Cart</h1>
          <CartItems />
        </div>

        

      

        <div className="p-4 sticky bottom-0 bg-white">
          <button onClick={handleCheckOut} className="w-full rounded-lg py-4 bg-black font-semibold text-white">
            Checkout
          </button>
          <p className=" text-sm tracking-tighter text-center text-gray-600 mt-2 ">
            Discount, Gst and tax all are included at the checkout itself
          </p>
        </div>
      </div>
    </div>
  );
};
