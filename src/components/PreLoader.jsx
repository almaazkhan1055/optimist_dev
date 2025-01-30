import React from "react";
import preLoader from "../assets/lms-preloader.png";

const PreLoader = () => {
  return (
    <div className="relative w-[100px] h-[100px]">
      <div className="w-[100px] h-[100px] border-[5px] border-t-[#2e2a39] border-r-[#2e2a39] border-b-[#f9a229] border-l-[#f9a229] rounded-full animate-spin"></div>
      <div className="absolute top-[30px] right-[30px]">
        <img loading="lazy" src={preLoader} alt="Preload" />
      </div>
    </div>
  );
};

export default PreLoader;
