import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <Link to={`/product/${item._id}`} key={item._id} className="block">
            <div className="bg-white p-3 rounded-lg">
              <div className="w-full h-96 mb-4">
                <img
                  src={item.images[0].url}
                  alt={item.images[0].altText}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h2 className="text-md font-semibold ">{item.name}</h2>
              <p className="text-md ">$ {item.Price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
