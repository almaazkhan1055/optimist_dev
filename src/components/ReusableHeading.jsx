import React from "react";

const ReusableHeading = ({
  title,
  subtitle,
  titleSize = "text-[50px]",
  subtitleSize = "text-[34px]",
  titleColor = "--heading",
  subtitleColor = "--goat-milk",
}) => {
  return (
    <>
      <h2
        className={`font-semibold text-center`}
        style={{
          fontSize: `${titleSize}`,
          color: `var(${titleColor})`,
        }}
      >
        {title}
      </h2>
      <div
        className={`text-center`}
        style={{
          color: `var(${subtitleColor})`,
          fontSize: `${subtitleSize}`,
        }}
      >
        {Array.isArray(subtitle)
          ? subtitle.map((sub, index) => (
              <p key={index + 1} className="mb-5">
                {sub}
              </p>
            ))
          : subtitle}
      </div>
    </>
  );
};

export default ReusableHeading;
