import SiteHeader from "./SiteHeader";
import ModuleHeading from "./ModuleHeading";
import ReturnToMapButton from "../buttons/ReturnToMapButton";
import LessonProgress from "./LessonProgress";
import ReturnToDataButton from "../buttons/ReturnToDataButton"; 
import ModuleInfo from "./ModuleInfo";
import LearningInfo from "./LearningInfo";

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
          <aside className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <ReturnToMapButton />
              <ReturnToDataButton />
            </div>
            <ModuleHeading title={title} description={description} dataPagePath="/ModulePage" learningPagePath="/LearningPage" />
            <LessonProgress />
          </aside>
          <div className="flex flex-col gap-6 min-w-0">
            <ModuleInfo ModuleTitle={title} ModuleDescription={description} />
            <LearningInfo />
          </div>
        </div>
      </div>
    </>
  );
}
