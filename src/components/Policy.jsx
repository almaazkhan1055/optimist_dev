import React from "react";
import ContentWrapper from "./ContentWrapper";
import ReusableHeading from "./ReusableHeading";

const Policy = ({
  policyData = {
    image: "https://www.filepicker.io/api/file/q3KvpMMTkubdjMWhTvLT",
    title: "30 DAYS MONEY BACK GUARANTEE",
    subtitle: [
      "Our courses helped thousands of students learn something new and improve their lives.",
      "We're so convinced by our course quality that we guarantee your success and provide a full refund within the first 30 days if you're not happy with the course.",
    ],
  },
  singleCourse,
}) => {
  const isMobile = window.innerWidth < 768;
  const pxValue = isMobile ? "8%" : "20%";
  return (
    <ContentWrapper px={pxValue}>
      <div
        className={`flex items-center justify-center ${
          singleCourse ? "flex-col-reverse" : "flex-col"
        } gap-4`}
      >
        <img src={policyData?.image} alt={policyData?.title} />
        <ReusableHeading
          titleColor="--squid-ink"
          title={policyData?.title}
          titleSize="20px"
          subtitle={policyData?.subtitle}
          subtitleSize="18px"
          subtitleColor="--obsidian"
        />
      </div>
    </ContentWrapper>
  );
};

export default Policy;
