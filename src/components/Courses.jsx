import React, { useEffect } from "react";
import ContentWrapper from "./ContentWrapper";
import CourseCard from "./CourseCard";
import { useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import FilterMenu from "./FilterMenu";
import FilterTab from "./FilterTab";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveFilter,
  setCategoryIndex,
  setSearchFilterText,
  setTutorIndex,
  toggleShowActiveFilter,
} from "../redux/filterSlice";

const Courses = ({ courseData }) => {
  const dispatch = useDispatch();

  const showActiveFilter = useSelector(
    (state) => state.filters.showActiveFilter
  );

  const activeFilter = useSelector((state) => state.filters.activeFilter);

  const categoryIndex = useSelector((state) => state.filters.categoryIndex);

  const tutorIndex = useSelector((state) => state.filters.tutorIndex);

  const searchFilterText = useSelector(
    (state) => state.filters.searchFilterText
  );

  let currentCategory = courseData?.filterCategoryOptions[categoryIndex];
  let currentTutor = courseData?.filtertutorsOptions[tutorIndex];

  const location = useLocation();

  const handleFilters = (index) => {
    dispatch(toggleShowActiveFilter());
    dispatch(setActiveFilter(index));
  };

  const handleCategoryIndex = (index) => {
    if (activeFilter === 0) {
      dispatch(setCategoryIndex(index));
    } else if (activeFilter === 1) {
      dispatch(setTutorIndex(index));
    }
    dispatch(toggleShowActiveFilter());
  };

  const handleSearchFilter = (e) => {
    dispatch(setSearchFilterText(e.target.value));
  };

  let totalPrice = 0;

  courseData?.courseCards?.forEach((obj) => {
    totalPrice += Number(obj.price);
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <ContentWrapper px={`${location.pathname === "/courses" ? "7%" : "20%"}`}>
      {location.pathname === "/courses" ? (
        <div className="flex items-center justify-between mb-10 max-md:flex-col max-md:gap-5 relative">
          <div className="flex items-center justify-around gap-5 text-xl text-gray-500 max-sm:flex-col">
            {courseData?.filterTabNames?.map((filterTabName, index) => (
              <FilterTab
                key={index}
                filterTabName={filterTabName}
                activeFilter={activeFilter}
                index={index}
                handleFilters={handleFilters}
                filterOptions={
                  index === 0
                    ? courseData?.filterCategoryOptions
                    : courseData?.filtertutorsOptions
                }
                categoryIndex={index === 0 ? categoryIndex : tutorIndex}
              />
            ))}

            {showActiveFilter && activeFilter !== null && (
              <FilterMenu
                filterOptions={
                  activeFilter === 0
                    ? courseData?.filterCategoryOptions
                    : courseData?.filtertutorsOptions
                }
                handleCategoryIndex={handleCategoryIndex}
                activeFilter={activeFilter}
              />
            )}
          </div>
          <div className="flex items-center bg-white p-2 border border-gray-500 focus-within:border-[--cornflower-blue] focus-within:shadow-md rounded">
            <input
              type="text"
              placeholder="Find a Product"
              className="w-full pr-20 pl-4 focus:outline-none text-[--checkbox-color]"
              onChange={handleSearchFilter}
              value={searchFilterText}
            />
            <IoSearch size={24} />
          </div>
        </div>
      ) : (
        ""
      )}
      <h2 className="text-[--squid-ink] text-3xl mb-8 max-xl:text-center">
        {location.pathname === "/courses" ? "Courses" : courseData?.title}
      </h2>
      <div
        className={`grid ${
          location.pathname === "/courses"
            ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2 2xl:grid-cols-3"
        } gap-y-10  place-items-center`}
      >
        <CourseCard
          courseCards={courseData?.courseCards}
          currentTutor={currentTutor}
          currentCategory={currentCategory}
          searchFilterText={searchFilterText}
        />
      </div>
      {location.pathname === "/courses" ? (
        ""
      ) : (
        <p className="text-center mt-20 text-2xl">
          Original Price: ${totalPrice}
        </p>
      )}
    </ContentWrapper>
  );
};

export default Courses;
