import { Link } from "react-router-dom";

export default function ReturnToDataButton() {
  return (
    <Link
      to="/ModulePage"
      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 relative bg-white rounded-lg overflow-hidden border border-solid border-[#e9e5e4] focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
    >
      <span className="relative w-[25px] h-[25px] aspect-[1]" aria-hidden="true">
        <img
          className="absolute w-[82.00%] top-[calc(50.00%_-_7px)] left-[18.00%] h-4 aspect-[1]"
          alt="Button to go back to the data page"
          src="/images/back-arrow.svg"
        />
      </span>
      <span className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
        Return to data
      </span>
    </Link>
  );
}