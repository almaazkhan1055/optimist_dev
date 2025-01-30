import React from "react";
import ContentWrapper from "./ContentWrapper";
import ReusableHeading from "./ReusableHeading";
import { useLocation } from "react-router-dom";

const Video = ({ videoData }) => {
  const location = useLocation();
  return (
    <ContentWrapper>
      <div className="flex flex-col items-center justify-center gap-5">
        {location.pathname === "/" && (
          <ReusableHeading
            title={videoData?.title}
            subtitle={videoData?.subtitle}
            titleSize="26px"
            subtitleSize="18px"
            titleColor="#000"
            subtitleColor="#000"
          />
        )}
        <video
          src={videoData?.trailer}
          width="100%"
          height="100%"
          autoPlay
          muted
          playsInline
          controls
        >
        Your browser does not support the video tag.
        </video>
      </div>
    </ContentWrapper>
  );
};

export default Video;
