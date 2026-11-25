type ModuleInfoProps = {
  ModuleTitle: string;
  ModuleDescription: string;
};

export default function ModuleInfo({ ModuleTitle, ModuleDescription }: ModuleInfoProps) {
  return (
    <main aria-labelledby="module-info-title" className="content-card flex w-full flex-col items-start gap-3">
      <h1 id="module-info-title" className="text-3xl font-bold text-black">
        {ModuleTitle}
      </h1>
      <p className="wrap-break-word text-base leading-6 text-body">{ModuleDescription}</p>
    </main>
  );
}
