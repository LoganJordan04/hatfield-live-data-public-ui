import { useNavigate, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function LearnButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname === "/LearningPage";

  return (
    <button
      type="button"
      aria-label="Learn"
      aria-pressed={selected}
      onClick={() => navigate("/LearningPage")}
      className={`inline-flex items-center justify-center gap-2 px-6 py-4 relative rounded-lg overflow-hidden border border-solid border-[#e9e5e4] ${
        selected ? "bg-[#d73f09]" : "bg-white"
      }`}
    >
      <BookOpen aria-hidden="true" className="text-body" size={20} />
      <span
        className={`relative w-fit mt-[-3.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-xl tracking-[0] leading-[29.0px] whitespace-nowrap ${
          selected ? "text-white" : "text-[#423e3c]"
        }`}
      >
        Learn
      </span>
    </button>
  );
}
