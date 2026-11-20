import { useState } from "react";

export default function LiveDataButton() {
  const [selected, setSelected] = useState(true);

  return (
    <button
      type="button"
      aria-label="Live data"
      aria-pressed={selected}
      onClick={() => setSelected(true)}
      className="inline-flex items-center justify-center gap-2 px-6 py-4 relative bg-[#d73f09] rounded-lg overflow-hidden"
    >
      <span className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
        <img
          className="absolute w-[93.75%] h-[89.58%] top-[10.42%] left-[6.25%]"
          alt="Button to display live data"
          src="/images/live-data-icon.svg"
        />
      </span>
      <span className="relative w-fit mt-[-3.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
        Live data
      </span>
    </button>
  );
};