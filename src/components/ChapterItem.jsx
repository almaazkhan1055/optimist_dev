import { FaCircleHalfStroke } from "react-icons/fa6";

export const ChapterItem = ({ chapter, isActive, onClick }) => (
  <div
    className={`flex items-center gap-2 border-y py-3 border-[#e3e3e3] tracking-wide cursor-pointer hover:bg-[#c494ff] px-5 ${
      isActive && "bg-[#c494ff]"
    }`}
    onClick={onClick}
  >
    <FaCircleHalfStroke size={18} color="#6b1acd" />
    <div>
      <span className="text-sm">{chapter?.title}</span>{" "}
      <span>
        ({chapter?.timeLength?.minutes || "00"}:
        {chapter?.timeLength?.seconds || "00"})
      </span>
    </div>
  </div>
);
