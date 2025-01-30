import React from "react";
import ReviewCard from "./ReviewCard";
import ReusableHeading from "./ReusableHeading";

const Review = ({ reviewData }) => {
  return (
    <div className="bg-white">
      <div className="py-16 px-[8%] sm:px-[12%] flex flex-col gap-5">
        <ReusableHeading
          title={reviewData?.title}
          titleSize="30px"
          titleColor="--squid-ink"
        />
        <ReviewCard reviewCards={reviewData?.reviewCard} />
      </div>
    </div>
  );
};

export default Review;
