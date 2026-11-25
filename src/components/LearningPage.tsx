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
      <div className="min-h-[calc(100vh-5rem)] w-full bg-bg p-4">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,26.25rem)_minmax(0,1fr)]">
          <aside className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <ReturnToMapButton />
              <ReturnToDataButton />
            </div>
            <ModuleHeading
              title={title}
              description={description}
              dataPagePath="/ModulePage"
              learningPagePath="/LearningPage"
            />
            <LessonProgress />
          </aside>
          <div className="flex flex-col gap-4 min-w-0">
            <ModuleInfo ModuleTitle={title} ModuleDescription={description} />
            <LearningInfo />
          </div>
        </div>
      </div>
    </>
  );
}
