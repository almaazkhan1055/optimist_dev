import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Hero = ({ heroData, planRef, slug = "", icons = [] }) => {
  const location = useLocation();
  let singleCoursePage = `/course/${slug}`;

  return (
    <div
      className="hero relative text-center xl:px-[250px] xl:py-[120px] max-xl:px-[2%] max-xl:py-16 py-10 z-10 bg-cover bg-no-repeat bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-80 before:-z-1"
      style={{
        backgroundImage: `url(${heroData?.image})`,
      }}
    >
      <h2 className="text-[50px] leading-none text-[--heading]">
        {heroData?.title}
      </h2>
      <p className="text-[--goat-milk] text-[30px] leading-20 md:text-[34px] max-sm:mt-5">
        {heroData?.subtitle}
      </p>
      {location.pathname === singleCoursePage ? (
        <div className="flex justify-center gap-5">
          {heroData?.btnText?.map((text, index) => (
            <Button
              text={text}
              planRef={planRef}
              key={index + 1}
              icons={icons}
              heroData={heroData}
            />
          ))}
        </div>
      ) : (
        <Button text={heroData?.btnText} planRef={planRef} />
      )}
    </div>
  );
};

export default Hero;
