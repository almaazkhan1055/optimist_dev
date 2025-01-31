import { ChapterItem } from "./ChapterItem";

export const CurriculumList = ({
  curriculum,
  chapterClicked,
  handleLectureChange,
}) =>
  curriculum?.map((section, index) => (
    <div key={index}>
      <h3 className="text-[16px] font-[600] text-black my-5 px-5">
        {section?.title || "Untitled Section"}
      </h3>
      {section?.chapters?.map((chapter, idx) => (
        <ChapterItem
          key={idx}
          chapter={chapter}
          isActive={chapterClicked?.id === chapter.id}
          onClick={() => handleLectureChange(chapter)}
        />
      ))}
    </div>
  ));
