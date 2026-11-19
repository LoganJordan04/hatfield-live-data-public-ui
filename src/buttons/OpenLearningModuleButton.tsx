
export default function OpenLearningModuleButton() {
  return (
    <button
      type="button"
      aria-label="Open Learning Module"
      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-[#d73f09] rounded-lg overflow-hidden cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d5257]"
    >
      <span className="relative w-[25px] h-[25px] rotate-180 aspect-[1]" aria-hidden="true">
        <img
          className="absolute w-[82.00%] top-[calc(50.00%_-_8px)] left-[18.00%] h-4 -rotate-180 aspect-[1]" 
          alt="Button to display the learning module page"
          src="public\images\forward-arrow.svg"
        />
      </span>
      <span className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
        Open Learning Module
      </span>
    </button>
  );
};
