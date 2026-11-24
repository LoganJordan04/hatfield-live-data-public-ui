import OpenLearningModuleButton from "../buttons/OpenLearningModuleButton";
import { BookOpen } from "lucide-react";

type WhatDoesThisMeanContainerProps = {
  description?: string;
  learningPagePath: string;
};

export default function WhatDoesThisMeanContainer({ description, learningPagePath }: WhatDoesThisMeanContainerProps) {
  return (
    <main
      aria-labelledby="what-does-this-mean-container"
      className="flex flex-col w-[420px] items-start gap-6 p-6 relative bg-[#ddebed] rounded-2xl overflow-hidden border border-solid border-[#e9e5e4]"
    >
      <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <BookOpen aria-hidden="true" className="text-body" size={20} />
          <h2
            id="what-does-this-mean-title"
            className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-[#0d5257] text-2xl tracking-[0] leading-[34.8px] whitespace-nowrap"
          >
            What does this mean?
          </h2>
        </div>
        <p className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-normal">
          {description}
        </p>
        <p className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-normal">
          Learn more
        </p>
      </header>
      <OpenLearningModuleButton learningPagePath={learningPagePath} />
    </main>
  );
}
