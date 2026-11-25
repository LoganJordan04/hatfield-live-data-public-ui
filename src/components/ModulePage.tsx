import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import ModuleHeading from "./ModuleHeading";
import ReturnToMapButton from "../buttons/ReturnToMapButton";
import ModuleContentContainer from "./ModuleContentContainer";
import WhatDoesThisMeanContainer from "./WhatDoesThisMeanContainer";

type ModulePageProps = {
  title: string;
  moduleDescription: string;
  learningDescription?: string;
  content?: ReactNode;
  dataPagePath: string;
  learningPagePath: string;
};

export default function ModulePage({
  title,
  moduleDescription,
  learningDescription,
  content,
  dataPagePath,
  learningPagePath,
}: ModulePageProps) {
  return (
    <>
      <SiteHeader />
      <div className="min-h-[calc(100vh-5rem)] w-full bg-bg p-4">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,26.25rem)_minmax(0,1fr)]">
          <aside className="flex w-full min-w-0 flex-col items-start gap-4">
            <ReturnToMapButton />
            <ModuleHeading
              title={title}
              description={moduleDescription}
              dataPagePath={dataPagePath}
              learningPagePath={learningPagePath}
            />
            <WhatDoesThisMeanContainer description={learningDescription} learningPagePath={learningPagePath} />
          </aside>
          <ModuleContentContainer DataTitle={title} content={content} />
        </div>
      </div>
    </>
  );
}
