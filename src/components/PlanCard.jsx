import React from "react";
import { useLocation } from "react-router-dom";

const PlanCard = ({ planCards, singleCourse }) => {
  const location = useLocation();
  const notHome = location.pathname !== "/";

  return (
    <div className="flex items-center justify-between gap-10 mt-10 max-xl:flex-col">
      {planCards.map((obj, index) => (
        <div
          key={index}
          className={`relative bg-[--plancard-bg] rounded-xl text-[--goat-milk] p-8 ${
            singleCourse && "sm:max-w-[500px] sm:max-h-[500px]"
          } min-w-[400px] min-h-[420px] overflow-hidden`}
        >
          {obj.popular && notHome && (
            <div className="bg-white text-[--squid-ink] text-center py-[2rem] px-[5rem] absolute top-[1rem] -right-[5rem] rotate-45">
              Most Popular
            </div>
          )}

          <div className="border-b-2 text-center px-10 flex flex-col gap-2">
            <h4
              className={`font-bold ${
                !notHome ? "text-[44px]" : "text-[35px]"
              } text-center leading-[50px]`}
            >
              {obj?.title}
            </h4>
            <h5 className="text-[16px] pb-2">{obj?.subtitle}</h5>
          </div>
          <div className="text-center mt-8">
            <h6 className="text-[--heading] text-5xl font-semibold">
              ${obj?.price}
            </h6>

            <p className="text-[16px] mb-2">
              {obj?.accessibility ? obj.accessibility : "Cancel Anytime!"}
            </p>

            <p className="text-[12px] mb-2">
              {obj?.info
                ? obj.info
                : "This is a recurring payment, charged automatically on a yearly basis. You can cancel anytime from inside your user profile to avoid being charged again once your billing cycle ends. For more nformation, please contact Academind."}
            </p>
            <button className="bg-[--checkbox-color] rounded-xl py-2 px-8">
              Join Pro
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
