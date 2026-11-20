
export default function LearnButton() {
  return (
    <button
      type="button"
      aria-label="Learn"
      className="inline-flex items-center justify-center gap-2 px-6 py-4 relative rounded-lg overflow-hidden border border-solid border-[#e9e5e4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#423e3c]"
    >
      <span className="relative w-6 h-6 aspect-[1]" aria-hidden="true">
        <img
          className="absolute w-[93.75%] h-[89.58%] top-[10.42%] left-[6.25%]"
          alt="Button to display learning resources"
          src="public\images\learn-icon.svg"
        />
      </span>
      <span className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
        Learn
      </span>
    </button>
  );
};
