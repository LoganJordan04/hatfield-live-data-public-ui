import { useNavigate, useLocation } from "react-router-dom";

export default function LiveDataButton() {

  const navigate = useNavigate();
  const location = useLocation();
  const selected = location.pathname === "/ModulePage";

  return (
    <button
      type="button"
      aria-label="Live data"
      aria-pressed={selected}
      onClick={() => {navigate("/ModulePage")}}
      className={`inline-flex items-center justify-center gap-2 px-6 py-4 relative rounded-lg overflow-hidden border border-solid border-[#e9e5e4] ${
        selected ? "bg-[#d73f09]" : "bg-white"
      }`}
    >
      <span className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
        <img
          className={`absolute w-[93.75%] h-[89.58%] top-[10.42%] left-[6.25%] ${
            selected ? "brightness-0 invert" : "brightness-0 opacity-70"
          }`}
          alt="Button to display live data"
          src="/images/live-data-icon.svg"
        />
      </span>
      <span className={`relative w-fit mt-[-3.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-xl tracking-[0] leading-[29.0px] whitespace-nowrap ${
          selected ? "text-white" : "text-[#423e3c]"
        }`}
      >
       Live data
      </span>
    </button>
  );
}
