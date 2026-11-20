import SiteHeader from "./SiteHeader";
import ModuleHeading from "./ModuleHeading";
import ReturnToMapButton from "../buttons/ReturnToMapButton";
import ModuleContentContainer from "./ModuleContentContainer";
import WhatDoesThisMeanContainer from "./WhatDoesThisMeanContainer";

type ModulePageProps = {
  title: string;
  description: string;
};

export default function ModulePage({ title, description }: ModulePageProps) {
  return (
    <>
      <SiteHeader />
      <div className="min-h-[calc(100vh-100px)] w-full bg-[#F5F5F5] p-4 sm:p-6">
        <div className="mx-auto grid min-h-[calc(100vh-148px)] w-full max-w-[1440px] grid-cols-1 gap-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
          <aside className="flex flex-col items-start gap-4 w-[30%]">
            <ReturnToMapButton />
            <ModuleHeading title={title} description={description} />
            <WhatDoesThisMeanContainer />
          </aside>
          <ModuleContentContainer DataTitle={title} />
        </div>
      </div>
    </>
  );
}
