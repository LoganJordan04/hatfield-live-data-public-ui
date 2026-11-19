import ModuleTitle from "./ModuleTitle";
import LiveDataButton from "../buttons/LiveDataButton";
import LearnButton from "../buttons/LearnButton";

type ModuleHeadingProps = {
  title: string;
  description: string;
};

export default function ModuleHeading({ title, description }: ModuleHeadingProps) {
  return (
    <main
      aria-labelledby="location-title"
      className="flex flex-col items-start gap-4 p-6 relative bg-white rounded-2xl overflow-hidden"
    >
      <ModuleTitle title={title} description={description} />
      <div className="flex flex-row items-center gap-4 relative">
        <LiveDataButton />
        <LearnButton />
      </div>
    </main>
  );
    }