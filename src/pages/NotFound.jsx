import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return <div className="text-5xl text-black font-bolder">Page Not Found</div>;
};

export default NotFound;
