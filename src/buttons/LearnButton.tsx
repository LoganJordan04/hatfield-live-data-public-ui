import { useNavigate, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

type LearnButtonProps = {
  learningPagePath: string;
};

export default function LearnButton({ learningPagePath }: LearnButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname === learningPagePath;

  return (
    <button
      type="button"
      aria-label="Learn"
      aria-pressed={selected}
      onClick={() => navigate(learningPagePath)}
      className={`inline-flex items-center justify-center gap-2 px-6 py-4 relative rounded-lg overflow-hidden border border-solid border-border cursor-pointer transition-colors ${
        selected ? "bg-orange hover:bg-[#b53507]" : "bg-white hover:bg-gray-200"
      }`}
    >
      <BookOpen aria-hidden="true" className={selected ? "text-white" : "text-body"} size={20} />
      <span
        className={`relative w-fit mt-[-3.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-xl tracking-[0] leading-[29.0px] whitespace-nowrap ${
          selected ? "text-white" : "text-body"
        }`}
      >
        Learn
      </span>
    </button>
  );
}
