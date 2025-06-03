import { Link } from "react-router-dom";
import mensCollection from "../../assets/mens-collection.webp";
import womenCollections from "../../assets/womens-collection.webp";

import React from "react";

const GenterCollections = () => {
  return (
    <section className="py-12 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 ">
       
        <Link to="collections/all" className="relative flex-1">
          <img
            src={womenCollections}
            alt="women Collections"
            className="w-full h-[700px]  object-cover"
          ></img>
          <div className="absolute bottom-8 left-[40px] bg-orange-200 w-[250px] p-5 flex flex-col items-center">
            <h2 className="text-black text-lg font-medium  ">
              Womens collections
            </h2>
            <button className=" bg-white rounded-md font-semibold p-2 mt-2 ">
              Explore Now
            </button>
          </div>
        </Link>
        <Link to="collections/all" className="relative flex-1">
          <img
            src={mensCollection}
            alt="women Collections"
            className="w-full h-[700px]  object-cover"
          ></img>
          <div className="absolute bottom-8 left-[40px]  bg-orange-200 w-[250px] p-5 flex flex-col items-center">
            <h2 className="text-black text-lg font-medium  ">
              Men's collections
            </h2>
            <button className="bg-white rounded-md font-semibold p-2 mt-2 ">
              Explore Now
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default GenterCollections;
