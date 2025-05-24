import React from "react";
import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [serachParams, setSearchParams] = useSearchParams();

  const handleSort = (e) => {
    const sortBy = e.target.value;
    serachParams.set("sortBy", sortBy);
    setSearchParams(serachParams);
  };

  return (
    <div className="mb-3 pe-10  flex justify-end items-center">
      <select
        value={serachParams.get("sortBy")||""}
        onChange={handleSort}
        className="border p-2 rounded-md border-green-300 "
        name="sort"
        id="sort"
      >
        <option value="">Default</option>
        <option value="priceAcs">price low to high</option>
        <option value="priceDes">price high to low</option>
        <option value="popularity">popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
