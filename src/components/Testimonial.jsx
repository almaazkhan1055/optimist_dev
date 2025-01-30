import React from "react";
import TestimonialCard from "./TestimonialCard";
import ReusableHeading from "./ReusableHeading";

const Testimonial = ({ testimonialData }) => {
  const { testimonialCardData } = testimonialData;

  return (
    <div className="bg-[--testimonial-bg]">
      <div className="py-16">
        <ReusableHeading
          title={testimonialData?.title}
          subtitle={testimonialData?.subtitle}
          titleSize="30px"
          subtitleSize="22px"
          titleColor="--heading"
          subtitleColor="--subtitle-color"
        />
        <TestimonialCard
          testimonialCardData={testimonialCardData}
          subtitleColor="--subtitle-color"
        />
      </div>
    </div>
  );
};

export default Testimonial;
