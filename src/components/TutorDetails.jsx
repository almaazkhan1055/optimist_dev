import React from "react";
import ContentWrapper from "./ContentWrapper";
import kalim from "../assets/kalim.jpg";
import talib from "../assets/talib.jpg";
import aftab from "../assets/aftab.jpg";
import hasib from "../assets/hasib.jpg";

const TutorDetails = ({ tutorDetailsData }) => {
  const imgObj = {
    "kalim khan": kalim,
    "talib chowdhary": talib,
    "aftab js": aftab,
    "haseeb siddiqui": hasib,
  };
  const { tutor, tutorComment } = tutorDetailsData;

  const currImg = imgObj[tutor.toLowerCase()];

  const isMobile = window.innerWidth < 768;
  const pxValue = isMobile ? "8%" : "20%";

  return (
    <div className="bg-[#f7f7f7]">
      <ContentWrapper px={pxValue}>
        <h2 className="text-3xl text-[--squid-ink] max-sm:text-center">
          Your Instructor
        </h2>
        <div className="flex items-start justify-between gap-5 my-10 text-xl text-[--squid-ink] max-sm:flex-col max-sm:items-center">
          <div className="flex items-center justify-center gap-5 flex-col px-5">
            <img
              src={currImg}
              alt="tutor-img"
              className="rounded-full max-w-none"
              width={165}
            />
            <p className="whitespace-nowrap">{tutor}</p>
          </div>
          <p>{tutorComment}</p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default TutorDetails;
