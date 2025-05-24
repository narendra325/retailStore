import React, { useEffect, useState } from "react";
import Filter from "../components/Common/Filter";
import { useRef } from "react";
import ProductGrid from "../components/Products/ProductGrid";
import SortOptions from "../components/Products/SortOptions";

const Collections = () => {
  const [isfilteropen, setIsFilterOpen] = useState(false);
  const sideBarRef = useRef(null);
  const [products, setProducts] = useState([]);

  const togglesidebar = () => {
    setIsFilterOpen(!isfilteropen);
  };
  const handleOutsideClick = (e) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setIsFilterOpen(false);
    }
  };


  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
  });

  useEffect(() => {
    setTimeout(() => {
      const collectionProducts = [
        {
          _id: 1,
          name: "Shirt",
          Price: 400,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Stylish Jacket 1",
            },
          ],
        },
        {
          _id: 2,
          name: "Shirt",
          Price: 400,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
              altText: "Stylish Jacket 1",
            },
          ],
        },
        {
          _id: 3,
          name: "Shirt",
          Price: 400,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
              altText: "Stylish Jacket 1",
            },
          ],
        },
        {
          _id: 4,
          name: "Shirt",
          Price: 400,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              altText: "Stylish Jacket 1",
            },
          ],
        },
        {
          _id: 5,
          name: "Shirt",
          Price: 400,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              altText: "Stylish Jacket 1",
            },
          ],
        },
        {
          _id: 6,
          name: "Shirt",
          Price: 400,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Stylish Jacket 1",
            },
          ],
        },
        {
          _id: 7,
          name: "Shirt",
          Price: 400,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Stylish Jacket 1",
            },
          ],
        },
        {
          _id: 8,
          name: "Shirt",
          Price: 400,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Stylish Jacket 1",
            },
          ],
        },
      ];

      setProducts(collectionProducts);
    }, 100);
  }, []);

  return (
    <section className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className=" flex justify-center md:hidden px-5 py-2 ">
          <button
            onClick={togglesidebar}
            className="border p-2  w-full rounded-lg shadow-md"
          >
            Filter
          </button>
        </div>
        <div
          ref={sideBarRef}
          className={`transform ${
            isfilteropen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0  left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 
          lg:static lg:translate-x-0`}
        >
          <Filter />
        </div>
        <div className="flex-grow p-2">
          <h2 className="text-2xl px-8 font-semibold">All collections</h2>

          <SortOptions />

          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
};

export default Collections;
