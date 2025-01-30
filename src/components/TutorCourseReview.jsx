import React from "react";
import ContentWrapper from "./ContentWrapper";

const TutorCourseReview = ({ tutorCourseReview }) => {
  const { tutorCourseReviewData } = tutorCourseReview;

  const isMobile = window.innerWidth < 768;
  const pxValue = isMobile ? "8%" : "20%";

  return (
    <div className="bg-[#f7f7f7]">
      <ContentWrapper px={pxValue}>
        <ul>
          {tutorCourseReviewData?.map((about, index) => (
            <li key={index + 1} className={`text-[16px] mb-5`}>
              {about}
            </li>
          ))}
        </ul>
      </ContentWrapper>
    </div>
  );
};

export default TutorCourseReview;
