import React from "react";
import ContentWrapper from "./ContentWrapper";

const CourseContent = ({ courseContentData }) => {
  const { courseContent } = courseContentData;
  const isMobile = window.innerWidth < 768;
  const pxValue = isMobile ? "8%" : "20%";

  return (
    <ContentWrapper px={pxValue}>
      <h3 className="font-bold text-lg mb-8">What’s in this course?</h3>
      <ul className="list-disc pl-10">
        {courseContent?.map((about, index) => (
          <li key={index + 1} className={`text-[16px] mb-5`}>
            <span className="font-bold">{about.topic}</span>{" "}
            <span>{about?.about}</span>
          </li>
        ))}
      </ul>
    </ContentWrapper>
  );
};

export default CourseContent;
