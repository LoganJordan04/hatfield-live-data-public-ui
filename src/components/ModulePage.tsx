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

export default function ModulePage({ title, moduleDescription, learningDescription, content, dataPagePath, learningPagePath }: ModulePageProps) {
  return (
    <>
      <SiteHeader />
      <div className="min-h-[calc(100vh-100px)] w-full bg-[#F5F5F5] p-4 sm:p-6">
        <div className="mx-auto grid min-h-[calc(100vh-148px)] w-full max-w-[1440px] grid-cols-1 gap-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
          <aside className="flex w-full min-w-0 flex-col items-start gap-4">
            <ReturnToMapButton />
            <ModuleHeading title={title} description={moduleDescription} dataPagePath={dataPagePath} learningPagePath={learningPagePath} />
            <WhatDoesThisMeanContainer description={learningDescription} learningPagePath={learningPagePath} />
          </aside>
          <ModuleContentContainer DataTitle={title} content={content} />
        </div>
      </div>
    </>
  );
}
