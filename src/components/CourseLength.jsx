import React from "react";

const CourseLength = ({ courseLength }) => {
  const { courseLengthData } = courseLength;

  return (
    <div className="flex items-center justify-center gap-10 py-24">
      <h2 className="text-[5rem] font-bold text-[--squid-ink]">
        {courseLengthData?.time}
        <p className="text-2xl text-[#521751]">hours</p>
      </h2>
      <h2 className="text-[5rem] font-bold text-[--squid-ink]">
        {courseLengthData?.lessons}+
        <p className="text-2xl text-[#521751]">lessons</p>
      </h2>
    </div>
  );
};

export default CourseLength;
