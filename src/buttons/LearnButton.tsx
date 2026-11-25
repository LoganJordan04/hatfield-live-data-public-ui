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
      className={`ui-button-xl ui-button-primary ${
        selected ? "bg-orange border-orange hover:bg-orange-hover" : "bg-white border-border hover:bg-gray-200"
      }`}
    >
      <BookOpen aria-hidden="true" className={selected ? "text-white" : "text-body"} size={20} />
      <span
        className={`relative w-fit text-xl whitespace-nowrap ${selected ? "text-white font-semibold" : "text-body"}`}
      >
        Learn
      </span>
    </button>
  );
}
