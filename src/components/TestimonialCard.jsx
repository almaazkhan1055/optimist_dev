import React from "react";

const TestimonialCard = ({ testimonialCardData, subtitleColor }) => {
  return (
    <div className="grid lg:grid-cols-3 my-10 place-items-center md:grid-cols-2 grid-cols-1">
      {testimonialCardData?.map((obj, index) => (
        <div
          key={index + 1}
          className="flex flex-col items-center justify-center my-5"
        >
          <img src={obj?.image} alt={obj.name} width={130} />
          <h3
            className="text-lg font-semibold"
            style={{
              color: `var(${subtitleColor})`,
            }}
          >
            {obj?.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
