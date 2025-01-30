import React from "react";

const ReviewCard = ({ reviewCards }) => {
  return (
    <div className="flex items-center justify-between max-sm:w-full max-xl:flex-col max-xl:gap-10">
      {reviewCards?.map((reviewcard, index) => (
        <div
          key={index}
          className="bg-white shadow-[0px_0px_5px_5px_rgba(0,_0,_0,_0.1)] max-sm:w-full w-[280px] h-[350px] sm:h-[417px] p-4 rounded-lg"
        >
          <h4 className="text-[2rem] mb-2">{reviewcard?.name}</h4>
          <div className="border-l-[5px] border-[--checkbox-color] pl-4 text-[18px] text-[--iron-ore] pt-1">
            <i>{reviewcard?.review}</i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
