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
      className="flex w-full min-w-0 flex-col items-start gap-6 overflow-hidden rounded-2xl border border-border bg-rogue-wave-light p-6"
    >
      <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <BookOpen aria-hidden="true" className="text-body" size={20} />
          <h2 id="what-does-this-mean-title" className="text-2xl font-bold text-rogue-wave">
            What does this mean?
          </h2>
        </div>
        <p className="wrap-break-word text-base text-body">{description}</p>
        <p className="wrap-break-word text-base text-body">Learn more</p>
      </header>
      <OpenLearningModuleButton learningPagePath={learningPagePath} />
    </main>
  );
}
