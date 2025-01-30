import React from "react";
import ContentWrapper from "./ContentWrapper";

const AboutSingleCourse = ({
  aboutSingleCourseData,
  textAlign = "start",
  coursePrerequisites = false,
}) => {
  const isMobile = window.innerWidth < 768;
  const pxValue = isMobile ? "8%" : "20%";

  return (
    <div className={`text-${textAlign}`}>
      <ContentWrapper px={pxValue}>
        <ul>
          {coursePrerequisites && (
            <h2 className="font-bold text-2xl mb-5 text-[--squid-ink]">
              Coure Prerequisites
            </h2>
          )}
          {aboutSingleCourseData?.map((about, index) => (
            <li
              key={index + 1}
              className={`${
                !coursePrerequisites && index === 0 && "font-bold"
              } text-lg mb-5`}
            >
              {about}
            </li>
          ))}
        </ul>
        {coursePrerequisites && (
          <div className="border-t-[--text-color] border-t py-5 mt-10">
            All pre-requisites are covered by courses in our{" "}
            <span className="text-[--checkbox-color] cursor-pointer hover:text-[--squid-ink]">
              "Academind Pro" Membership.
            </span>
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default AboutSingleCourse;
