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
      className={`inline-flex items-center justify-center gap-2 px-6 py-4 relative rounded-lg overflow-hidden border border-solid border-[#e9e5e4] ${
        selected ? "bg-[#d73f09]" : "bg-white"
      }`}
    >
      <ChartNoAxesCombined aria-hidden="true" className="text-white" size={20} />
      <span
        className={`relative w-fit mt-[-3.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-xl tracking-[0] leading-[29.0px] whitespace-nowrap ${
          selected ? "text-white" : "text-[#423e3c]"
        }`}
      >
        Live data
      </span>
    </button>
  );
}
