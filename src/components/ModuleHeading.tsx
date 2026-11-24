import ModuleTitle from "./ModuleTitle";
import LiveDataButton from "../buttons/LiveDataButton";
import LearnButton from "../buttons/LearnButton";

type ModuleHeadingProps = {
  title: string;
  description: string;
  dataPagePath: string;
  learningPagePath: string;
};

export default function ModuleHeading({ title, description, dataPagePath, learningPagePath }: ModuleHeadingProps) {
  return (
    <main
      aria-labelledby="location-title"
      className="relative flex w-full min-w-0 flex-col items-start gap-4 overflow-hidden rounded-2xl bg-white p-6"
    >
      <ModuleTitle title={title} description={description} />
      <div className="flex flex-row items-center gap-4 relative">
        <LiveDataButton dataPagePath={dataPagePath} />
        <LearnButton learningPagePath={learningPagePath} />
      </div>
    </main>
  );
}
