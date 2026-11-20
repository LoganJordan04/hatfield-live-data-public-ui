import { useNavigate, useLocation } from "react-router-dom";
import { ChartNoAxesCombined } from "lucide-react";

export default function LiveDataButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname === "/ModulePage";

  return (
    <button
      type="button"
      aria-label="Live data"
      aria-pressed={selected}
      onClick={() => {
        navigate("/ModulePage");
      }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-4 relative rounded-lg overflow-hidden border border-solid border-border cursor-pointer transition-colors ${
        selected ? "bg-orange hover:bg-[#b53507]" : "bg-white hover:bg-gray-200"
      }`}
    >
      <ChartNoAxesCombined aria-hidden="true" className={selected ? "text-white" : "text-body"} size={20} />
      <span
        className={`relative w-fit mt-[-3.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-xl tracking-[0] leading-[29.0px] whitespace-nowrap ${
          selected ? "text-white" : "text-body"
        }`}
      >
        Live data
      </span>
    </button>
  );
}
