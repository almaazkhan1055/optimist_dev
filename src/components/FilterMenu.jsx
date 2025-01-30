import React from "react";

const FilterMenu = ({ filterOptions, handleCategoryIndex, activeFilter }) => {
  return (
    <div
      className={`flex flex-col border border-[--text-color] text-lg text-black py-2 shadow-2xl absolute bg-white top-11 z-50 ${
        activeFilter === 0 ? "left-24" : "left-56"
      } max-md:right-0 rounded-sm`}
    >
      {filterOptions?.map((category, index) => (
        <span
          key={index}
          className="hover:bg-gray-100 cursor-pointer px-2 py-1"
          onClick={() => handleCategoryIndex(index)}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default FilterMenu;
