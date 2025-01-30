import React from "react";
import PlanCard from "./PlanCard";
import ContentWrapper from "./ContentWrapper";
import ReusableHeading from "./ReusableHeading";

const Plans = ({ plansCardData, planRef, singleCourse }) => {
  return (
    <div className="bg-[--testimonial-bg]" ref={planRef}>
      <ContentWrapper px="10%">
        <ReusableHeading
          title={plansCardData?.title}
          titleColor="--heading"
          titleSize="30px"
        />
        <PlanCard planCards={plansCardData?.planCards} singleCourse />
      </ContentWrapper>
    </div>
  );
};

export default Plans;
