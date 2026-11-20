import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function OpenLearningModuleButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label="Open Learning Module"
      onClick={() => navigate("/LearningPage")}
      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-[#d73f09] rounded-lg overflow-hidden cursor-pointer hover:bg-[#b53507]"
    >
      <ArrowRight aria-hidden="true" className="text-white" size={20} />
      <span className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
        Open Learning Module
      </span>
    </button>
  );
}
