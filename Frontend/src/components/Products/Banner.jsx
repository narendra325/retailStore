import React from "react";
import { Link } from "react-router-dom";

import featuredimg from "../../assets/featured.webp";

const Banner = () => {
  return (
    <div className="py-16 px-4 lg:px-4">
      <div className=" container mx-auto flex flex-col-reverse md:flex-row items-center bg-green-50 rounded-3xl ">
        <div className=" md:w-1/2 text-center lg:w-1/2 lg:text-start p-8">
          <h2 className="text-2xl font-semibold">Comfort and Style</h2>
          <h2 className="text-4xl font-bold mt-2 ">
            Apparel Made for your daily life
          </h2>
          <p className="text-xl mt-4 font-medium mb-5">
            Elevate your wardrobe with our Product, designed for those who value
            style, comfort, and durability
          </p>
          <Link to="#" className="bg-black text-white px-4 py-2 rounded-md">
            Shop Now
          </Link>
        </div>
        <div className="md:w-1/2 lg:w-1/2">
          <img
            src={featuredimg}
            alt="featuredcard"
            className="w-full h-auto l md:rounded-tr-3xl md:rounded-br-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
