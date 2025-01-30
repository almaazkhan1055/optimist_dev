import React from "react";

const FilterTab = ({
  filterTabName,
  handleFilters,
  index,
  filterOptions,
  categoryIndex,
}) => {
  return (
    <button
      className="rounded-full bg-white px-4 py-2 flex items-center whitespace-nowrap"
      onClick={() => handleFilters(index)}
    >
      {filterTabName}:{" "}
      <span className="text-[--checkbox-color] cursor-pointer">
        {filterOptions[categoryIndex]}
      </span>
    </button>
  );
};

export default FilterTab;
