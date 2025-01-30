import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const CourseCard = ({
  courseCards = [],
  currentTutor = "All",
  currentCategory = "All",
  searchFilterText = "",
}) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const filteredCourses = courseCards?.filter((courseCard) => {
    const isCategoryMatch =
      currentCategory === "All" || courseCard.category === currentCategory;

    const isTutorMatch =
      currentTutor === "All" || courseCard.tutor === currentTutor;

    const isSearchMatch =
      courseCard.title
        .toLowerCase()
        .includes(searchFilterText.toLowerCase().trim()) ||
      courseCard.subtitle
        .toLowerCase()
        .includes(searchFilterText.toLowerCase().trim()) ||
      courseCard.tutor
        .toLowerCase()
        .includes(searchFilterText.toLowerCase().trim());

    return isCategoryMatch && isTutorMatch && isSearchMatch;
  });

  const goToSingleCourse = (slug) => {
    navigate(`/course/${slug}`);
  };

  return (
    <>
      {filteredCourses.map((courseCard) => (
        <div
          key={courseCard.id}
          className="w-[358px] h-[400px] border border-[--text-color] rounded-xl hover:border-[--checkbox-color] cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-200 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur"
          onClick={() => goToSingleCourse(courseCard?.slug)}
        >
          <img
            src={courseCard.image}
            alt={courseCard.title}
            className="rounded-tr-xl rounded-tl-xl w-full h-[200px] object-cover"
          />
          <div className="p-4 flex flex-col justify-between h-1/2">
            <div>
              <h3 className="text-lg text-[--checkbox-color] font-semibold">
                {courseCard.title}
              </h3>
              <p className="text-[#333] line-clamp-2">{courseCard.subtitle}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={courseCard.tutorImage || "https://placehold.co/30x30"}
                  alt={courseCard.tutor}
                  className="rounded-full w-8 h-8 object-cover"
                />
                <span className="text-[#333]">{courseCard.tutor}</span>
              </div>
              <span className="text-[--checkbox-color] font-semibold">
                ${courseCard.price}
              </span>
            </div>
          </div>
        </div>
      ))}
      {filteredCourses.length === 0 && (
        <p className="text-red-500 text-center font-bold text-2xl">
          Umm! Sorry, No courses found.
        </p>
      )}
    </>
  );
};

export default CourseCard;
