import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ReturnToDataButton() {
  return (
    <Link
      to="/ModulePage"
      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 relative bg-white rounded-lg overflow-hidden border border-solid border-[#e9e5e4] cursor-pointer hover:bg-gray-100"
    >
      <ArrowLeft aria-hidden="true" className="text-body" size={20} />
      <span className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
        Return to data
      </span>
    </Link>
  );
}
