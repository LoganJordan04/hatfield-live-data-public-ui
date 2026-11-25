type ModuleTitleProps = {
  title: string;
  description: string;
};

export default function ModuleTitle({ title, description }: ModuleTitleProps) {
  return (
    <main aria-labelledby="location-title" className="relative flex w-full min-w-0 flex-col items-start gap-2">
      <h1 id="location-title" className="relative self-stretch font-bold text-black text-3xl leading-10">
        {title}
      </h1>
      <p className="relative w-full wrap-break-word text-xl font-normal text-body whitespace-normal">{description}</p>
      <p className="relative w-full wrap-break-word text-xl font-normal text-body whitespace-normal">
        Choose what you want to explore
      </p>
    </main>
  );
}
