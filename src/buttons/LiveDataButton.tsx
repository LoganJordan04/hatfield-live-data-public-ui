import { useNavigate, useLocation } from "react-router-dom";
import { ChartNoAxesCombined } from "lucide-react";

type LiveDataButtonProps = {
  dataPagePath: string;
};

export default function LiveDataButton({ dataPagePath }: LiveDataButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname === dataPagePath;

  return (
    <button
      type="button"
      aria-label="Live data"
      aria-pressed={selected}
      onClick={() => {
        navigate(dataPagePath);
      }}
      className={`ui-button-xl ui-button-primary ${
        selected ? "bg-orange border-orange hover:bg-orange-hover" : "bg-white border-border hover:bg-gray-200"
      }`}
    >
      <ChartNoAxesCombined aria-hidden="true" className={selected ? "text-white" : "text-body"} size={20} />
      <span
        className={`relative w-fit text-xl whitespace-nowrap ${selected ? "text-white font-semibold" : "text-body"}`}
      >
        Live data
      </span>
    </button>
  );
}
