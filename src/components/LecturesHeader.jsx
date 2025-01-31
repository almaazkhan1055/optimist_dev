import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import { CgMenuRight, CgMenuRightAlt } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const LecturesHeader = ({ mobileToggle, handleMobileToggle }) => {
  const params = useParams();

  return (
    <div className="flex items-center fixed top-0 w-full">
      <div className="h-[70px] border-r-white border-r min-w-[380px] flex px-5 items-center justify-between bg-[--header-bg] max-md:w-full">
        <Link to={`/course/${params.slug}`}>
          <FaHome color="white" size={24} className="cursor-pointer" />
        </Link>
        <IoMdSettings color="white" size={24} className="cursor-pointer" />
        {!mobileToggle ? (
          <CgMenuRight
            color="white"
            size={24}
            className="cursor-pointer md:hidden"
            onClick={handleMobileToggle}
          />
        ) : (
          <CgMenuRightAlt
            color="white"
            size={24}
            className="cursor-pointer md:hidden"
            onClick={handleMobileToggle}
          />
        )}
        <Button
          textSize="16px"
          courseBtn
          text="Complete and Continue"
          py="10px"
          px="10px"
          rounded="10px"
          border="1px solid white"
          lecturesHeader
          textWeight="600"
          className="md:hidden"
        />
      </div>
      <div className="h-[70px] pr-10 bg-[--header-bg] w-full flex items-center justify-end max-md:hidden">
        <Button
          textSize="16px"
          courseBtn
          text="Complete and Continue"
          py="10px"
          px="10px"
          rounded="10px"
          border="1px solid white"
          lectures
          className="max-md:hidden"
          textWeight="600"
        />
      </div>
    </div>
  );
};
