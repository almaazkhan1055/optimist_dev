import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { setHeaderFooter } from "../redux/headerFooterActiveSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Button from "./Button";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { LuTvMinimalPlay } from "react-icons/lu";
import { setChapterClicked } from "../redux/chapterClickedSlice";
import { CgMenuRight, CgMenuRightAlt } from "react-icons/cg";

const Lectures = ({ singleCourseData }) => {
  const [mobileCourseListToggle, setMobileCourseListToggle] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { slug } = params;

  const chapterClicked = useSelector(
    (state) => state.chapterClicked.chapterClicked
  );

  const [currentProgress, setCurrentProgress] = useState(0);

  const course = singleCourseData.find((obj) => obj.slug === slug);

  useEffect(() => {
    dispatch(setHeaderFooter(false));

    return () => {
      dispatch(setHeaderFooter(true));
    };
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleLectureChange = (chapter) => {
    setMobileCourseListToggle(false);
    if (!chapter) return;
    dispatch(setChapterClicked(chapter));
    navigate(
      `${location.pathname.split("/").slice(0, -1).join("/")}/${chapter.id}`
    );
  };

  const handlemobileCourseListToggle = () => {
    setMobileCourseListToggle((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center fixed to-0 w-full">
        <div className="h-[70px] border-r-white border-r min-w-[380px] flex px-5 items-center justify-between bg-[--header-bg] max-md:w-full">
          <Link to={`/course/${params.slug}`}>
            <FaHome color="white" size={24} className="cursor-pointer" />
          </Link>
          <IoMdSettings color="white" size={24} className="cursor-pointer" />
          {!mobileCourseListToggle ? (
            <CgMenuRight
              color="white"
              size={24}
              className="cursor-pointer md:hidden"
              onClick={handlemobileCourseListToggle}
            />
          ) : (
            <CgMenuRightAlt
              color="white"
              size={24}
              className="cursor-pointer md:hidden"
              onClick={handlemobileCourseListToggle}
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
      {mobileCourseListToggle && (
        <div className="bg-white md:hidden p-5 pt-[80px]">
          <div className="w-[380px] max-md:w-full h-full overflow-y-auto">
            <div className="p-8 border-b border-[#e3e3e3]">
              <h2 className="text-md font-semibold text-[#333]">
                {course?.title || "Course Title"}
              </h2>
              <div className="bg-[#e3e3e3] w-full h-[8px] rounded-full my-3">
                <div
                  className="bg-[--checkbox-color] h-full rounded-full"
                  style={{
                    width: `${
                      currentProgress >= 0 && currentProgress <= 100
                        ? currentProgress
                        : 0
                    }%`,
                  }}
                ></div>
              </div>
              <p className="text-center text-[#333] text-xl font-semibold">
                {currentProgress >= 0 && currentProgress <= 100
                  ? currentProgress
                  : 0}
                %<span className="text-[15px] font-[500]"> Complete</span>
              </p>
            </div>

            <div className="py-8 bg-white">
              {course?.courseCurriculumData?.map((curriculum, index) => (
                <div key={index}>
                  <h3 className="text-[16px] font-[600] text-black my-5 px-5">
                    {curriculum?.title || "Untitled Section"}
                  </h3>
                  {curriculum?.chapters?.map((chapter, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 border-y py-3 border-[#e3e3e3] tracking-wide cursor-pointer hover:bg-[#c494ff] px-5 ${
                        chapterClicked?.id === chapter.id && "bg-[#c494ff]"
                      }`}
                      onClick={() => handleLectureChange(chapter)}
                    >
                      <span>
                        <FaCircleHalfStroke size={18} color="#6b1acd" />
                      </span>
                      <div>
                        <span className="text-sm">
                          {chapter?.title || "Welcome to the Course"}
                        </span>{" "}
                        <span>
                          ({chapter?.timeLength?.minutes || "00"}:
                          {chapter?.timeLength?.seconds || "00"})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-[calc(100vh_+_200px)] flex pt-[70px]">
        <div className="w-[380px] h-full overflow-y-auto max-md:hidden">
          <div className="p-8 border-b border-[#e3e3e3]">
            <h2 className="text-md font-semibold text-[#333]">
              {course?.title || "Course Title"}
            </h2>
            <div className="bg-[#e3e3e3] w-full h-[8px] rounded-full my-3">
              <div
                className="bg-[--checkbox-color] h-full rounded-full"
                style={{
                  width: `${
                    currentProgress >= 0 && currentProgress <= 100
                      ? currentProgress
                      : 0
                  }%`,
                }}
              ></div>
            </div>
            <p className="text-center text-[#333] text-xl font-semibold">
              {currentProgress >= 0 && currentProgress <= 100
                ? currentProgress
                : 0}
              %<span className="text-[15px] font-[500]"> Complete</span>
            </p>
          </div>

          <div className="py-8 bg-white">
            {course?.courseCurriculumData?.map((curriculum, index) => (
              <div key={index}>
                <h3 className="text-[16px] font-[600] text-black my-5 px-5">
                  {curriculum?.title || "Untitled Section"}
                </h3>
                {curriculum?.chapters?.map((chapter, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 border-y py-3 border-[#e3e3e3] tracking-wide cursor-pointer hover:bg-[#c494ff] px-5 ${
                      chapterClicked?.id === chapter.id && "bg-[#c494ff]"
                    }`}
                    onClick={() => handleLectureChange(chapter)}
                  >
                    <span>
                      <FaCircleHalfStroke size={18} color="#6b1acd" />
                    </span>
                    <div>
                      <span className="text-sm">
                        {chapter?.title || "Welcome to the Course"}
                      </span>{" "}
                      <span>
                        ({chapter?.timeLength?.minutes || "00"}:
                        {chapter?.timeLength?.seconds || "00"})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 py-10 flex flex-col items-center gap-4">
          {chapterClicked && (
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-5">
                <LuTvMinimalPlay size={32} />{" "}
                {chapterClicked.title || "Lecture Title"}
              </h3>
              {chapterClicked?.chapter_src ? (
                <video
                  width="100%"
                  height="100%"
                  autoPlay
                  muted
                  playsInline
                  controls
                  src={chapterClicked.chapter_src}
                />
              ) : (
                <p className="text-center text-lg text-gray-600">
                  No video available for this chapter.
                </p>
              )}
            </div>
          )}
          <Button
            textSize="16px"
            courseBtn
            text="Complete and Continue"
            py="10px"
            px="10px"
            rounded="10px"
            border="1px solid white"
            lectures
            textWeight="600"
          />
        </div>
      </div>
    </>
  );
};

export default Lectures;
