import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setHeaderFooter } from "../redux/headerFooterActiveSlice";
import { setChapterClicked } from "../redux/chapterClickedSlice";
import { LecturesHeader } from "./LecturesHeader";
import { CurriculumSidebar } from "./CurriculumSidebar";
import { VideoContent } from "./VideoContent";

const Lectures = ({ singleCourseData }) => {
  const [mobileCourseListToggle, setMobileCourseListToggle] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const chapterClicked = useSelector(
    (state) => state.chapterClicked.chapterClicked
  );
  const [currentProgress] = useState(0);

  const course = singleCourseData.find((obj) => obj.slug === slug);

  useEffect(() => {
    dispatch(setHeaderFooter(false));
    return () => dispatch(setHeaderFooter(true));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLectureChange = (chapter) => {
    setMobileCourseListToggle(false);
    if (!chapter) return;
    dispatch(setChapterClicked(chapter));
    navigate(
      `${location.pathname.split("/").slice(0, -1).join("/")}/${chapter.id}`
    );
  };

  const nextLecture = () => {
    const pathSegments = location.pathname.split("/");
    const newLecture = (parseInt(pathSegments.pop().match(/\d+/), 10) || 0) + 1;
    navigate([...pathSegments, newLecture].join("/"));
  };

  return (
    <>
      <LecturesHeader
        mobileToggle={mobileCourseListToggle}
        handleMobileToggle={() => setMobileCourseListToggle((prev) => !prev)}
      />

      {mobileCourseListToggle && (
        <div className="bg-white md:hidden p-5 pt-[80px]">
          <div className="w-[380px] max-md:w-full h-full overflow-y-auto">
            <CurriculumSidebar
              course={course}
              currentProgress={currentProgress}
              chapterClicked={chapterClicked}
              handleLectureChange={handleLectureChange}
            />
          </div>
        </div>
      )}

      <div className="w-full h-[calc(100vh_+_200px)] flex pt-[70px]">
        <div className="w-[380px] h-full overflow-y-auto max-md:hidden">
          <CurriculumSidebar
            course={course}
            currentProgress={currentProgress}
            chapterClicked={chapterClicked}
            handleLectureChange={handleLectureChange}
          />
        </div>

        <VideoContent chapter={chapterClicked} onNextLecture={nextLecture} />
      </div>
    </>
  );
};

export default Lectures;
