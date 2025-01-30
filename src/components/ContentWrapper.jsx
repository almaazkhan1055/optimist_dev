import React from "react";

const ContentWrapper = ({ children, py = "64px", px = "16%" }) => {
  return (
    <div
      className={`px-[20px] sm:px-[16%] py-[${py}] w-full overflow-hidden`}
      style={{
        padding: `${py} ${px}`,
      }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
