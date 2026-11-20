import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ReturnToMapButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 relative bg-white rounded-lg overflow-hidden border border-solid border-border cursor-pointer focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
    >
      <ArrowLeft aria-hidden="true" className="text-body" size={20} />
      <span className="relative w-fit -mt-px font-normal text-body text-xl tracking-normal leading-7.25 whitespace-nowrap">
        Return to map
      </span>
    </Link>
  );
}
