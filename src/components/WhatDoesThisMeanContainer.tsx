import OpenLearningModuleButton from "../buttons/OpenLearningModuleButton";

export default function WhatDoesThisMeanContainer() {
  return (
    <main
      aria-labelledby="what-does-this-mean-container"
      className="flex flex-col w-[420px] items-start gap-6 p-6 relative bg-[#ddebed] rounded-2xl overflow-hidden border border-solid border-[#e9e5e4]"
    >
      <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[26px] h-[26px] aspect-[1]">
            <img
              className="absolute w-[93.59%] h-[89.42%] top-[10.58%] left-[6.41%]"
              alt="learn icon"
              aria-hidden="true"
              src="/images/learn-icon.svg"
            />
          </div>
          <h2
            id="what-does-this-mean-title"
            className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-[#0d5257] text-2xl tracking-[0] leading-[34.8px] whitespace-nowrap"
          >
            What does this mean?
          </h2>
        </div>
        <p className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
          Plain language explanation here
        </p>
        <p className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
          Learn more
        </p>
      </header>
      
      <OpenLearningModuleButton />
      
    </main>
  );
}