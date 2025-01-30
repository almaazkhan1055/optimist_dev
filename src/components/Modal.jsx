import React from "react";
import Video from "./Video";

const Modal = ({ onClose, videoData }) => {
  return (
    <>
      <button
        className="fixed text-2xl top-20 right-2 text-white z-[999] cursor-pointer"
        onClick={onClose}
      >
        ✖
      </button>
      <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center z-50">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent rounded-lg p-8 w-[500px] sm:w-[900px]">
          <Video videoData={videoData} />
        </div>
      </div>
    </>
  );
};

export default Modal;
