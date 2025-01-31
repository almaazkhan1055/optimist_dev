export const CourseProgress = ({ title, progress }) => (
  <div className="p-8 border-b border-[#e3e3e3]">
    <h2 className="text-md font-semibold text-[#333]">{title}</h2>
    <div className="bg-[#e3e3e3] w-full h-[8px] rounded-full my-3">
      <div
        className="bg-[--checkbox-color] h-full rounded-full"
        style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
      />
    </div>
    <p className="text-center text-[#333] text-xl font-semibold">
      {Math.min(Math.max(progress, 0), 100)}%
      <span className="text-[15px] font-[500]"> Complete</span>
    </p>
  </div>
);
