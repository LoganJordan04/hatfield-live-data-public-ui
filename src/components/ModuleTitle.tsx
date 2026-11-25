type ModuleTitleProps = {
  title: string;
  description: string;
};

export default function ModuleTitle({ title, description }: ModuleTitleProps) {
  return (
    <main aria-labelledby="location-title" className="relative flex w-full min-w-0 flex-col items-start gap-2">
      <h1
        id="location-title"
        className="relative self-stretch [font-family:'Open_Sans-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-10"
      >
        {title}
      </h1>
      <p className="relative w-full break-words [font-family:'Open_Sans-Regular',Helvetica] text-xl leading-[29.0px] font-normal tracking-[0] text-[#423e3c] whitespace-normal">
        {description}
      </p>
      <p className="relative w-full break-words [font-family:'Open_Sans-Regular',Helvetica] text-xl leading-[29.0px] font-normal tracking-[0] text-[#423e3c] whitespace-normal">
        Choose what you want to explore
      </p>
    </main>
  );
}
