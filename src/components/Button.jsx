import React, { useState } from "react";
import Modal from "./Modal";
import { FaChevronRight } from "react-icons/fa";

const Button = ({
  text,
  textSize,
  courseBtn,
  color = "--goat-milk",
  bgColor = "--checkbox-color",
  py = "1rem",
  px = "2rem",
  width,
  rounded = "50px",
  planRef,
  icons = [],
  heroData,
  isProMember,
  border,
  lectures,
  textWeight,
  lecturesHeader,
}) => {
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (ref) => {
    ref !== "" && ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
    if (text === "Watch Promo") {
      setShowModal(true);
    } else if (text === "Start" && !isProMember) {
      return;
    } else {
      scrollToSection(planRef);
    }
  };

  const textSizeVal = textSize ? textSize : "18px";

  const isDisabled = text === "Start" && !isProMember;

  return (
    <>
      <button
        className={`w-${width} ${
          !courseBtn ? "mt-8" : "mt-0"
        } font-bold transition duration-300 ${
          lectures && "flex items-center gap-2 justify-between"
        }
        ${lecturesHeader && "md:hidden"}
         ease-in-out ${
           text === "Watch Promo" ? "border border-white bg-transparent" : ""
         } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
        style={{
          backgroundColor: isDisabled ? "#9769cf" : `var(${bgColor}, #6b1acd)`,
          color: isDisabled ? "white" : `var(${color})`,
          padding: `${py} ${px}`,
          borderRadius: `${rounded}`,
          fontSize: `${textSizeVal}`,
          border: border,
          fontWeight: textWeight,
        }}
        onMouseEnter={(e) => {
          if (!isDisabled) {
            e.target.style.backgroundColor = "#6b1acd";
          }
        }}
        onMouseLeave={(e) => {
          if (!isDisabled) {
            e.target.style.backgroundColor = `var(${bgColor}, #6b1acd)`;
          }
        }}
        onClick={handleClick}
        disabled={isDisabled}
      >
        <div
          className={`flex items-center ${
            !courseBtn && "gap-2"
          } cursor-pointer justify-center max-sm:text-[12px]`}
        >
          {text === "Watch Promo" ? (
            <div>{icons[1]}</div>
          ) : (
            <div>{icons[0]}</div>
          )}
          {text}
        </div>
        {lectures && <FaChevronRight />}
      </button>
      {showModal && (
        <Modal videoData={heroData} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Button;
