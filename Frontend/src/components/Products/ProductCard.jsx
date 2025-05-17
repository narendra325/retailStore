import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "Elevate your wardrobe with this stylish leather jacket",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 1",
    },
  ],
};

const products=[
    {
        _id: 4,
        name: "shirt",
        Price: 700,
        images: [
          {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylish Jacket 1",
          },
        ],
      },
      {
        _id: 1,
        name: "shirt",
        Price: 800,
        images: [
          {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylish Jacket 1",
          },
        ],
      },
      {
        _id: 2,
        name: "shirt",
        Price: 900,
        images: [
          {
            url: "https://picsum.photos/500/500?random=3",
            altText: "Stylish Jacket 1",
          },
        ],
      },
      {
        _id: 3,
        name: "shirt",
        Price: 400,
        images: [
          {
            url: "https://picsum.photos/500/500?random=4",
            altText: "Stylish Jacket 1",
          },
        ],
      },
    ]

const ProductCard = () => {
  const [activeimg, setActiveimg] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [selectedSize, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setisButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setActiveimg(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQunatity = (action) => {
    if ((action === "minus") & (quantity > 1)) setQuantity((prev) => prev - 1);
    if (action === "add") setQuantity((prev) => prev + 1);
  };

  const HandleCart = () => {
    if (!activeColor && !selectedSize) {
      toast.error("Please select color and size of the product");
      return
    }

     setisButtonDisabled(true);

    setTimeout(() => {
        toast.success("Product added to Cart");
        setisButtonDisabled(false);
    }, 1000);
    
  };

  return (
    <div className="p-6">
      <h2 className="text-center font-semibold text-2xl p-3">Best Sellers</h2>
      <div className="max-w-6xl mx-auto bg-white p-8">
        <div className="flex flex-col md:flex-row gap-3 p-5">
          <div className="hidden md:flex flex-col  space-y-3">
            {selectedProduct.images.map((item, index) => (
              <img
                key={index}
                src={item.url}
                alt={item.altText}
                className={`w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${
                  activeimg === item.url ? "border-black" : "border-transparent"
                }`}
                onClick={() => setActiveimg(item.url)}
              />
            ))}
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col">
              <img
                src={activeimg}
                alt={selectedProduct.images[0]?.altText}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
          <div className="md:hidden flex space-x-3">
            {selectedProduct.images.map((item) => (
              <img
                src={item.url}
                alt={item.altText}
                className={`w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${
                  activeimg === item.url ? "border-black" : "border-transparent"
                }`}
                onClick={() => setActiveimg(item.url)}
              />
            ))}
          </div>
          <div className="md:w-1/2 px-4">
            <div className="flex flex-col space-y-2">
              <h2 className="text-xl font-semibold ">{selectedProduct.name}</h2>
              <p className="text-gray-600 line-through">
                {selectedProduct.originalPrice}
              </p>
              <p className="text-md ">${selectedProduct.price}</p>
              <p>{selectedProduct.description}</p>
              <div>
                <p className="font-medium">Colors :</p>
                <div className="space-x-1 mt-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      className={`rounded-full w-5 h-5 ${
                        activeColor == color
                          ? "border-black border-2"
                          : "border-grey border-2"
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                      onClick={() => setActiveColor(color)}
                    ></button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium">Sizes :</p>
                <div className="space-x-2 mt-2 flex">
                  {selectedProduct.sizes.map((size, index) => (
                    <button
                      onClick={() => setSelectedColor(size)}
                      key={index}
                      className={`w-10 h-10 border border-gray-700 text-sm font-medium flex items-center justify-center ${
                        selectedSize == size ? "bg-black text-white" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-2">
                <p className="font-medium text-md ">Quntity :</p>
                <div className="flex py-2">
                  <button
                    className="bg-gray-400 border px-2 py-1 rounded text-md "
                    onClick={() => handleQunatity("minus")}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-md font-medium">
                    {quantity}
                  </span>
                  <button
                    className="bg-gray-400 border px-2 py-1 rounded text-md "
                    onClick={() => handleQunatity("add")}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={HandleCart}
                disabled={isButtonDisabled}
                className={`bg-black text-white w-full text-md py-2 px-6 rounded-lg font-bold ${isButtonDisabled ?"disabled opacity-25 cursor-not-allowed ":""}`}
              >
                {isButtonDisabled ? "Adding..." : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
        <div >
            <h2 className="text-center text-2xl font-bold mt-4">You may also like</h2>
            <div>
                <ProductGrid products ={products}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
