import { LuTvMinimalPlay } from "react-icons/lu";
import Button from "./Button";

export const VideoContent = ({ chapter, onNextLecture }) => (
  <div className="flex-1 py-10 flex flex-col items-center gap-4">
    {chapter && (
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-5">
          <LuTvMinimalPlay size={32} /> {chapter.title}
        </h3>
        {chapter?.chapter_src ? (
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            playsInline
            controls
            src={chapter.chapter_src}
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
      handleClick={onNextLecture}
    />
  </div>
);
