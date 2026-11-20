
type ModuleInfoProps = {
  ModuleTitle: string;
  ModuleDescription: string;
};

export default function ModuleInfo({ ModuleTitle, ModuleDescription }: ModuleInfoProps) {
  return (
    <main
      aria-labelledby="module-info-title"
      className="flex flex-col w-[960px] max-w-full items-start p-6 relative bg-white rounded-2x1 border border-solid border-[#e9e5e4]"
    >
      <h1
        id="module-info-title"
        className="relative self-stretch mt-[-1.00px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]"
      >
        {ModuleTitle}
      </h1>
      <p className="relative w-fit [font-family:'Open_Sans-Regular',Helvetica] font-normal text-[#423e3c] text-xl tracking-[0] leading-[29.0px] whitespace-nowrap">
        {ModuleDescription}
      </p>
    </main>
  );
}
