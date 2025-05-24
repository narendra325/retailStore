import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const handlePriceRange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilters);
    updateUrlParams(newFilters);
  };

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const HandleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateUrlParams(newFilters);
  };

  const updateUrlParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top wear", "Bottom wear"];
  const gender = ["Men", "Women"];
  const colors = [
    "White",
    "Yellow",
    "Black",
    "Blue",
    "Grey",
    "Red",
    "Pink",
    "Green",
    "Baige",
    "Navy",
  ];

  const sizes = ["XS", "S", "M", "L", "2XL", "3XL"];

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  return (
    <div className="p-4">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold">Filter</h2>
      </div>
      <div className="mb-3">
        <label className="text-lg">Catergory</label>

        {categories.map((category) => (
          <div key={category} className="flex mt-1">
            <input
              name="category"
              value={category}
              type="radio"
              onChange={HandleFilterChange}
              checked={filters.category === category}
              className="w-4 text-blue-400 focus:ring-blue-600 border-gray-700"
            />
            <span className="mx-2 text-lg">{category}</span>
          </div>
        ))}
      </div>
      {/* GENDER */}

      <div className="mb-3">
        <label className="text-lg">Gender</label>

        {gender.map((item) => (
          <div key={item} className="flex mt-1">
            <input
              name="gender"
              value={item}
              checked={filters.gender === item}
              onChange={HandleFilterChange}
              type="radio"
              className="w-4 text-blue-400 focus:ring-blue-600 border-gray-700"
            />
            <span className="mx-2 text-lg">{item}</span>
          </div>
        ))}
      </div>

      {/* Color */}

      <div className="mb-3">
        <label className="text-lg">Colors</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={HandleFilterChange}
              className={`w-8 h-8 rounded-2xl border border-gray-400 cursor-pointer  transition hover:scale-105 ${
                filters.color === color ? "ring-2 ring-blue-600" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-3">
        <label className="text-lg">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex ">
            <input
              type="checkbox"
              className="w-3"
              name="size"
              value={size}
              onChange={HandleFilterChange}
              checked={filters.size.includes(size)}
            />
            <span className="ms-2 text-md">{size}</span>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <label className="text-lg">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex ">
            <input
              type="checkbox"
              className="w-3"
              name="material"
              onChange={HandleFilterChange}
              value={material}
              checked={filters.material.includes(material)}
            />
            <span className="ms-2 text-md">{material}</span>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <label className="text-lg">Brands</label>
        {brands.map((brand) => (
          <div key={brand} className="flex ">
            <input
              type="checkbox"
              className="w-3"
              name="brand"
              onChange={HandleFilterChange}
              value={brand}
              checked={filters.brand.includes(brand)}
            />
            <span className="ms-2 text-md">{brand}</span>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <label className="text-lg">Price range</label>
        <input
          type="range"
          name="Price range"
          value={priceRange[1]}
          onChange={handlePriceRange}
          className="w-full appearance-none h-2 rounded-lg cursor-pointer bg-gray-200 "
          min={0}
          max={100}
        />

        <div className="flex justify-between">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
