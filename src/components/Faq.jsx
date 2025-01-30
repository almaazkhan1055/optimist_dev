import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper";
import { FaAngleUp, FaQuestionCircle, FaAngleDown } from "react-icons/fa";

const Faq = ({ faqData }) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleQuestionAccordian = (index) => {
    setQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const isMobile = window.innerWidth < 768;
  const pxValue = isMobile ? "8%" : "20%";

  return (
    <ContentWrapper px={pxValue}>
      <div className="flex items-center text-[30px] gap-2">
        <FaQuestionCircle />
        {faqData.title}
      </div>
      <div className="my-5 flex flex-col gap-5 px-5 sm:px-10">
        {faqData?.questions?.map((obj, index) => (
          <div key={index} className="border-b pb-3">
            <div className="flex items-center justify-between">
              <h4 className="text-[22px] font-semibold">{obj?.question}</h4>
              <button
                className="text-lg"
                onClick={() => handleQuestionAccordian(index)}
              >
                {questionIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                questionIndex === index ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <p className="text-lg mt-2">{obj?.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Faq;
