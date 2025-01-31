import { CourseProgress } from "./CourseProgress";
import { CurriculumList } from "./CurriculumList";

export const CurriculumSidebar = ({
  course,
  currentProgress,
  chapterClicked,
  handleLectureChange,
}) => (
  <div className="py-8 bg-white">
    <CourseProgress title={course?.title} progress={currentProgress} />
    <CurriculumList
      curriculum={course?.courseCurriculumData}
      chapterClicked={chapterClicked}
      handleLectureChange={handleLectureChange}
    />
  </div>
);
