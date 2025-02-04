import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setChapterClicked } from "../redux/chapterClickedSlice";

const CourseCurriculum = ({ courseCurriculumData }) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const [isProMember, setisProMember] = useState(true);

  const isMobile = window.innerWidth < 768;
  const pxValue = isMobile ? "8%" : "20%";

  const handleCourseCurriculumClick = (chapter) => {
    dispatch(setChapterClicked(chapter));
    navigate(`/course/${params.slug}/lectures/${chapter.id}`);
  };

  return (
    <div className="bg-[#f7f7f7]">
      <ContentWrapper px={pxValue}>
        <h2 className="text-3xl text-[--squid-ink] mb-8">Course Curriculum</h2>
        {courseCurriculumData?.map((singleCourseCurriculum, index) => {
          return (
            <div key={index + 1}>
              <h3 className="bg-[#e8e8e8] py-[10px] px-4 text-[14px] text-[--squid-ink] font-semibold">
                {singleCourseCurriculum?.title}
              </h3>
              <ul className="py-[2px] flex flex-col gap-[2px]">
                {singleCourseCurriculum?.chapters?.map((chapter, index) => {
                  return (
                    <div
                      key={index + 1}
                      className="flex items-center justify-between bg-[#f0f0f0] px-4 py-2 text-[#333] text-sm hover:bg-[#e0d2f0] hover:text-[--checkbox-color] cursor-pointer"
                      onClick={() => handleCourseCurriculumClick(chapter)}
                    >
                      <li className="flex items-center gap-2">
                        <span>
                          <FaPlay />
                        </span>
                        {chapter?.title}
                        <span>
                          ({chapter?.timeLength?.minutes}:
                          {chapter?.timeLength?.seconds})
                        </span>
                      </li>
                      <Button
                        text={chapter?.btnText}
                        textSize="13px"
                        py="4px"
                        px="8px"
                        rounded="5px"
                        courseBtn
                        isProMember={isProMember}
                      />
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </ContentWrapper>
    </div>
  );
};

export default CourseCurriculum;
