import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const CartItems = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Jeans",
      size: "M",
      Price: 500,
      color: "white",
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      Price: 500,
      color: "black",
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      Price: 500,
      color: "black",
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      Price: 500,
      color: "black",
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      Price: 500,
      color: "black",
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
  ];
  return (
    <div>
      {cartProducts.map((item, index) => (
        <div
          key={index}
          className="p-3 items-start flex justify-start border-b border-gray-400"
        >
          <div className="flex">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-25 object-cover"
            />
          </div>
          <div className="px-4 ">
            <h2 className="font-semibold ">{item.name}</h2>
            <span className="text-gray-500 text-sm">
              Size-{item.size} | color-{item.color}
            </span>
            <div className="mt-1 flex items-center">
              <button className="w-full  border border-black font-bold rounded-sm  ">
                -
              </button>
              <span className=" mx-4">{item.quantity}</span>
              <button className=" border w-full border-black  font-bold rounded-sm">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-5 justify-end ml-5">
            <p className="font-semibold">${item.Price.toLocaleString()}</p>
            <MdDeleteOutline className="w-6 h-6 text-red-600 " />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
